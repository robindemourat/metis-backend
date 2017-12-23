import {expect} from 'chai';
import {describe, it} from 'mocha';

// tested function
import transformJSON from './transformJSON';

describe('transformJSON util', () => {

  // mock data
  const inputData = {
    foo: 'hello'
  };
  const expectedOutput = {
    bar: 'hello'
  };

  // input json schema
  const inputSchema = {
    properties: {
      foo: {
        type: 'string'
      }
    },
    required: ['foo']
  };

  // output json schema
  const outputSchema = {
    properties: {
      bar: {
        type: 'string'
      }
    },
    required: ['bar']
  };

  // transform function
  const transform = input => {
    const output = {...input};
    const bar = input.foo;
    delete output.foo;
    output.bar = bar;
    return output;
  };
  // transform function as a promise
  const transformAsPromise = input =>
    new Promise((resolve) => {
      const output = transform(input);
      resolve(output);
    });

  // transform function with callback
  const transformWithCallback = (input, callback) => {
    const output = transform(input);
    callback(null, output);
  };

  it('should return a promise', done => {
    const fn = transformJSON(inputData, inputSchema, outputSchema, transform);
    expect(fn).to.be.an.instanceof(Promise);
    done();
  });
  it('should apply the transform function to input data and resolve with correctly transformed data', done => {
    transformJSON(inputData, inputSchema, outputSchema, transform)
      .then(output => {
        expect(output).to.deep.equal(expectedOutput);
        done();
      })
      .catch();
  });
  it('should accept a transform function returning a promise', done => {
    transformJSON(inputData, inputSchema, outputSchema, transformAsPromise)
      .then(output => {
        expect(output).to.deep.equal(expectedOutput);
        done();
      })
      .catch();
  });

  it('should accept a transform function presenting a callback', done => {
    transformJSON(inputData, inputSchema, outputSchema, transformWithCallback)
      .then(output => {
        expect(output).to.deep.equal(expectedOutput);
        done();
      })
      .catch();
  });

  it('should require inputData parameter to be a js object', done => {
    transformJSON(undefined, inputSchema, outputSchema, transform)
      .catch(e => {
        expect(e).to.be.an('error');
        done();
      });
  });

  it('should require inputSchema parameter to be a valid json schema', done => {
    transformJSON(inputData, undefined, outputSchema, transform)
      .catch(e => {
        expect(e).to.be.an('error');
        done();
      });
  });

  it('should require outputSchema parameter to be a valid json schema', done => {
    transformJSON(inputData, inputSchema, undefined, transform)
      .catch(e => {
        expect(e).to.be.an('error');
        done();
      });
  });

  it('should reject an input data not complying to input json schema', done => {
    transformJSON({bar: 'hello'}, inputSchema, outputSchema, transform)
      .catch(e => {
        expect(e).to.be.an('array');
        done();
      });
  });

  it('should reject an output data not complying to output json schema', done => {
    const wrongTransform = input => input;
    transformJSON({bar: 'hello'}, inputSchema, outputSchema, wrongTransform)
      .catch(e => {
        expect(e).to.be.an('array');
        done();
      });
  });

});
