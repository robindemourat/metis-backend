/**
 * Multimodal Publishing utils
 * ===========================
 * facebook releaser
 * ===========================
 * This module publishes content to facebook.
 * @module mpu/releasers/facebook
 */
import Ajv from 'ajv';
import FB from 'fb';

import facebookStatusSchema from './facebook.status.schema';
import facebookParams from './facebook.parameters.schema';

const ajv = new Ajv();

/**
 * Sends a personal feed's status message
 * @param {object} contents - the contents to send
 * @param {object} params - connection params (credentials, ...)
 * @return {Promise} promise
 */
export function status(contents, params) {
    return new Promise((resolve, reject) => {

        // validate contents object
        const contentsValidation = ajv.validate(facebookStatusSchema, contents);
        if (!contentsValidation) {
          return reject(ajv.errors);
        }

        // validate params object
        const paramsValidation = ajv.validate(facebookParams, params);
        if (!paramsValidation) {
          return reject(ajv.errors);
        }

        const {access_token} = params;
        FB.setAccessToken(access_token);
        FB.api('me/feed', 'post', contents, function (res) {
          if(!res || res.error) {
            reject(res.error);
            return;
          }
          // console.log('Post Id: ' + res.id);
          resolve();
        });

        /**
         * Version with access token retrieval
         */
        // console.log('getting access token');
        // FB.api('oauth/access_token', {
        //   ...params,
        //   grant_type: 'client_credentials'
        // }, function (res) {
        //     if(!res || res.error) {
        //         console.log(!res ? 'error occurred' : res.error);
        //         return;
        //     }
        //     const accessToken = res.access_token;
        //     console.log('got access token', accessToken);
        //     FB.setAccessToken(accessToken)
        //     FB.api('me/feed', 'post', contents, function (res) {
        //       if(!res || res.error) {
        //         reject(res.error)
        //         return;
        //       }
        //       // console.log('Post Id: ' + res.id);
        //       resolve();
        //     });
        // });

    });
}
