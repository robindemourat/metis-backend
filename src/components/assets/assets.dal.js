/**
 * This module provides couchdb database operations managers
 * for the assets component.
 * @module metis-backend/components/assets
 */

import {lookup} from 'mime-types';

import db from '../../utils/plugDb';

import {Asset as schema} from 'metis-schemas';

import design from './assets.design';
import {addDesign} from '../../utils/couchdb';
import {dataIsValid} from '../../utils/schemas';

/**
 * Registering couchdb views related to assets objects
 */
addDesign(db, 'assets', design);


/**
 * Gets a list of assets with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
export const getAssets = ({
  query = {},
  include_docs = true
}) => {
  if (query.filename) {
    return db.viewAsync('assets', 'by_filename', {
      key: query.filename,
      include_docs
    }).then(
      results =>
        new Promise(
          resolve =>
            resolve(
              results.rows.map(doc => doc.doc)
            )
          )
    );
  } else {
    return db.viewAsync('assets', 'by_filename', {
      include_docs
    }).then(
      results =>
        new Promise(
          resolve =>
            resolve(
              results.rows.map(doc => doc.doc)
            )
          )
    );
  }
};

/**
 * Gets a asset with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
export const getAsset = ({
  id
}) =>
  db.getAsync(id)
    .then(asset =>
      // verify that data is compliant before returning it
      dataIsValid(asset, schema)
    );

/**
 * Gets a asset with a specific id or filename
 * @param {object} parameters
 * @return {Promise}
 */
export const getAssetAttachment = ({
  id,
  filename,
  encoding
}) =>
  new Promise((resolve, reject) => {
    db.attachment.get(id, filename, (err, body) => {
      if (err) {
        reject(err);
      } else {
        const content = encoding === 'base64' ?
          Buffer.from(body, 'binary').toString('base64')
          : body;
        resolve({data: content, mimetype: lookup(filename)});
      }
    });
  });


/**
 * Creates a new asset
 * @param {object} asset
 * @param {object} data
 * @return {Promise}
 */
export const createAsset = (asset, data) => {
  const {filename} = asset;
  const mimeType = lookup(filename) || 'application/octet-stream';
  // validate data
  return dataIsValid(asset, schema)
  // create document
  .then(() =>
    db.insertAsync({
      ...asset,
      mimetype: mimeType
    })
  )
  // add attachment
  .then(op => {
    const {id, rev} = op;

    return new Promise((resolve, reject) => {
      db.attachment.insert(
        // doc id
        id,
        // attachment filename
        filename,
        // attachment data
        data,
        // doc mimetype
        mimeType,
        // doc rev
        {rev},
        // callback
        (err, body) => {
          if (err) {
            reject(err);
          } else {
            resolve(body);
          }
        }
      );
    });
  });
};

/**
 * Updates an asset
 * @param {string} id - id of the asset
 * @param {object} asset - asset data to update
 * @param {object} data - attachment data to update
 * @return {Promise}
 */
export const updateAsset = (assetId, {filename, mimetype}, attachmentData) => {
  // get existing document
  return db.getAsync(assetId)
          // then update document
          .then(asset =>
            db.insertAsync({
              ...asset,
              filename,
              mimetype,
              rev: asset._rev
            })
          )
          // destroy previous attachments
          .then(() =>
            db.getAsync(assetId)
          )
          .then(asset => {
            const previousAttachment =  asset._attachments && Object.keys(asset._attachments)[0];
            return new Promise((resolve, reject) => {
              if (previousAttachment) {
                db.attachment.destroy(asset._id, encodeURIComponent(previousAttachment), {rev: asset._rev},
                  (err, body) => {
                    if (err) {
                      reject(err);
                    } else resolve(body);
                  });
              }
            });
          })
          // add new attachment
          .then(op => {
            const {id, rev} = op;

            return new Promise((resolve, reject) => {
              db.attachment.insert(
                // doc id
                id,
                // attachment filename
                filename,
                // attachment data
                attachmentData,
                // doc mimetype
                mimetype,
                // doc rev
                {rev},
                // callback
                (err, body) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(body);
                  }
                }
              );
            });
          });
};

/**
 * Deletes a asset
 * @param {object} asset - asset to delete
 * @return {Promise}
 */
export const deleteAsset = ({_id}) =>
  db.getAsync(_id)
    .then(asset => db.destroyAsync(_id, asset._rev));
