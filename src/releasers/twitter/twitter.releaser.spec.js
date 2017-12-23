import {expect} from 'chai';
import {describe, it} from 'mocha';

// tested function
import {tweet} from './index';

describe('twitter releaser', () => {
  /**
   * @todo find a way to test the part of the module related to twit api
   * @body it could be handled by negative statements at least
   */
  describe('tweet function', () => {
    const validParams = {
      consumer_key: 'coucou',
      consumer_secret: 'haha',
      access_token: 'mlkjmljlmjmlkj-dmkml-mlkjmlkj',
      access_token_secret: 'mlkmljk mlkj mlkj mlkj mlkj mlkjm lkj '
    };

    const validContents = {
      status: 'hello'
    };

    it('should return a promise', done => {
      const fn = tweet(validContents, validParams).catch();
      expect(fn).to.be.an.instanceof(Promise);
      done();
    });

    it('should reject invalid params shape', done => {
      const invalidParams = {
        ...validParams,
        consumer_key: undefined
      };
      tweet(validContents, invalidParams)
        .catch(e => {
          expect(e).to.be.an('array');
          done();
        });
    });

    it('should reject invalid contents shape', done => {
      const invalidContents = {
        ...validContents,
        status: undefined
      };
      tweet(invalidContents, validParams)
        .catch(e => {
          expect(e).to.be.an('array');
          done();
        });
    });
  });
});
