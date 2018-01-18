/* eslint  promise/param-names : 0 */

import Ajv from 'ajv';
import T from 'twit';

import tweetContentsSchema from './tweet.contents.schema';
import paramsSchema from './twitter.parameters.schema';

const ajv = new Ajv();

/**
 * @param {object} contents - the contents to send
 * @param {object} params - connection params (credentials, ...)
 * @return {Promise} promise
 */
export default function tweet(contents, params) {
    return new Promise((resolve, reject) => {
        // validate contents object
        const contentsValidation = ajv.validate(tweetContentsSchema, contents);
        if (!contentsValidation) {
          return reject(ajv.errors);
        }

        // validate params object
        const paramsValidation = ajv.validate(paramsSchema, params);
        if (!paramsValidation) {
          return reject(ajv.errors);
        }

        // connect to api
        const client = new T(params);

        // tweet with media attachment
        if (contents.media) {
          const mediaIds = [];
          const toResolve = contents.media.map(media =>
            new Promise((reso, rej) => {
              // -> we use the base64 uri provided if any
              if (media.type === 'image') {
                const {
                  uri,
                  description
                } = media;

                // ensure the uri is base64 data
                /**
                 * @todo: fix base64 uri validator to validate base64 images
                 */
                // const uriValid = isBase64(uri);
                // if (!uriValid) {
                //   return reject(new Error());
                // }

                // post the media to Twitter
                client.post('media/upload', { media_data: uri }, function (err, data /* , response */) {
                  if (err) {
                    return rej(err);
                  } else {
                    // assign alt text to the media, for use by screen readers and
                    // other text-based presentations and interpreters
                    const mediaIdStr = data.media_id_string;
                    const meta_params = {
                      media_id: mediaIdStr,
                      alt_text: {
                        text: description
                      }
                    };

                    // create metadata for media
                    client.post('media/metadata/create', meta_params, (err/* , data, response */) => {
                      if (err) {
                        return rej(err);
                      } else {
                        mediaIds.push(mediaIdStr);
                        return reso();
                      }
                    });
                  }
                });
              }
            })
          );
          Promise.all(toResolve)
            .then(() => {
              // update contents with proper media
              const enrichedContents = {
                ...contents,
                media: undefined,
                media_ids: mediaIds
              };
              // eventually tweet
              client.post('statuses/update', enrichedContents, (err/* , data, response */) => {
                if (err) {
                  return reject(err);
                } else {
                  return resolve();
                }
              });
            })
            .catch(reject)
        // case simple tweet
        } else {
          client.post('statuses/update', contents, (err/* , data, response */) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        }
    });
}
