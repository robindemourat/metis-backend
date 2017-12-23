import {expect} from 'chai';
import {describe, it} from 'mocha';

// tested functions
import {
  status
} from './index';

describe('facebook releaser', () => {
  /**
   * @todo find a way to test the part of the module related to fb api
   * @body it could be handled by negative statements at least
   */
  describe('facebook function', () => {
    const validParams = {
      access_token: 'mlkjmljlmjmlkj-dmkml-mlkjmlkj',
    };

    const validContents = {
      status: 'hello'
    };

    it('should return a promise', done => {
      const fn = status(validContents, validParams).catch();
      expect(fn).to.be.an.instanceof(Promise);
      done();
    });

    it('should reject invalid params shape', done => {
      const invalidParams = {
        ...validParams,
        access_token: undefined
      };
      status(validContents, invalidParams)
        .catch(e => {
          expect(e).to.be.an('array');
          done();
        });
    });

    it('should reject invalid contents shape', done => {
      const invalidContents = {
        ...validContents,
        message: undefined
      };
      status(invalidContents, validParams)
        .catch(e => {
          expect(e).to.be.an('array');
          done();
        });
    });
  });
});
