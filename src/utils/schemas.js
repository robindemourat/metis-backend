/**
 * This module exports a function handling json-schema object
 * validation as a promise
 * @module metis-backend/utils/schemas
 */

import Ajv from 'ajv';
const ajv = new Ajv();

export const dataIsValid = (data, schema) =>
  new Promise((resolve, reject) => {
    const valid = ajv.validate(schema, data);
    if (valid) {
      resolve(data);
    } else {
      reject(ajv.errors);
    }
  });
