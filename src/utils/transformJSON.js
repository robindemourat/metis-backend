/**
 * This module resolves a data object by transforming it
 * from an input schema to an output schema using
 * a transformation function.
 * @module metis-backend/utils/transformJSON
 */

import Ajv from 'ajv';
const ajv = new Ajv();

/**
 * Retrieves the arguments name of a function
 * @param {function} func - the function to analyse
 * @return {array} arguments - the arguments names
 */
function $args(func) {
    return (func + '')
      .replace(/[/][/].*$/mg,'') // strip single-line comments
      .replace(/\s+/g, '') // strip white space
      .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments
      .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters
      .replace(/=[^,]+/g, '') // strip any ES6 defaults
      .split(',').filter(Boolean); // split & filter [""]
}

/**
 * @param {object|Array} inputData - the original data to convert
 * @param {object} inputSchema - the schema of original data to convert in json-schema
 * @param {object} outputSchema - the schema of the resulting data to convert in json-schema
 * @param {function} transformFunction - a function taking data as argument and returning new data
 * This transform function can :
 * - return a json object resolving with a json object
 * - return a promise resolving with a json object
 * - provide a node-js style callback as second argument
 * @return {Promise} promise
 */
const transformJSON = (
    inputData,
    inputSchema,
    outputSchema,
    transformFunction,
) =>
    new Promise(
        (resolve, reject) => {
          try{
            // verify input is valid
            const inputIsValid = ajv.validate(inputSchema, inputData);
            if (!inputIsValid) {
              return reject(ajv.errors);
            }
            // check if transform function presents a callback
            if ($args(transformFunction).length > 1) {
              // resolve with callback
              return transformFunction(inputData, (err, output) => {
                if (err) {
                  return reject(err);
                } else {
                  // apply transform function to input
                  const outputIsValid = ajv.validate(outputSchema, output);
                  if (!outputIsValid) {
                    reject(ajv.errors);
                  } else {
                    resolve(output);
                  }
                }
              });
            }
            // apply transform function to input
            const outputTemp = transformFunction(inputData);
            // if the function has returned a promise resolve it
            if (outputTemp instanceof Promise) {
              outputTemp
                .then(output => {
                  // verify that output complies to output schema
                  const outputIsValid = ajv.validate(outputSchema, output);
                  if (outputIsValid) {
                    resolve(output);
                  } else {
                    // @todo normalize error response
                    reject(new Error());
                  }
                })
                .catch(e => {
                  reject(e);
                });
            } else {
              // verify output complies to output schema
              const outputIsValid = ajv.validate(outputSchema, outputTemp);
              if (outputIsValid) {
                resolve(outputTemp);
              } else {
                // @todo normalize error response
                reject(new Error());
              }
            }
          } catch(e) {
            reject(e);
          }
        }
    );

export default transformJSON;
