/**
 * Plurishing-backend
 * =======
 * Deliverable data access layer
 */
import {lookup} from 'mime-types';

import db from '../../utils/plugDb';

import {Deliverable as schema} from 'plurishing-schemas';

import design from './deliverables.design';
import {addDesign} from '../../utils/couchdb';
import {dataIsValid} from '../../utils/schemas';

/**
 * Registering couchdb views related to deliverables objects
 */
addDesign(db, 'deliverables', design);


/**
 * Gets a list of deliverables with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
export const getDeliverables = ({
  query = {},
  include_docs = true
}) => {
  if (query.filename) {
    return db.viewAsync('deliverables', 'by_filename', {
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
    return db.viewAsync('deliverables', 'by_filename', {
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
 * Gets a deliverable with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
export const getDeliverable = ({
  id
}) =>
  db.getAsync(id)
    .then(deliverable =>
      // verify that data is compliant before returning it
      dataIsValid(deliverable, schema)
    );

/**
 * Gets a deliverable with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
export const getDeliverableAttachment = ({
  id,
  filename
}) =>
  new Promise((resolve, reject) => {
    db.attachment.get(id, filename, (err, body) => {
      if (err) {
        reject(err);
      } else {
        resolve({data: body, mimetype: lookup(filename)});
      }
    });
  });


/**
 * Creates a new deliverable
 * @param {object} deliverable
 * @param {object} data
 * @return {Promise}
 */
export const createDeliverable = (deliverable, data) => {
  const {filename} = deliverable;
  const mimeType = lookup(filename);
  // validate data
  return dataIsValid(deliverable, schema)
  // create document
  .then(() =>
    db.insertAsync({
      ...deliverable,
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
  })
  .catch(e => Promise.reject(e));
};

/**
 * Updates a deliverable
 * @param {string} id - id of the deliverable
 * @param {object} deliverable - deliverable data to update
 * @param {object} data - attachment data to update
 * @return {Promise}
 */
export const updateDeliverable = (deliverableId, {filename, mimetype}, attachmentData) => {
  // get existing document
  return db.getAsync(deliverableId)
          // then update document
          .then(deliverable =>
            db.insertAsync({
              ...deliverable,
              filename,
              mimetype,
              rev: deliverable._rev
            })
          )
          // destroy previous attachments
          .then(() =>
            db.getAsync(deliverableId)
          )
          .then(deliverable => {
            const previousAttachment =  deliverable._attachments && Object.keys(deliverable._attachments)[0];
            return new Promise((resolve, reject) => {
              if (previousAttachment) {
                db.attachment.destroy(deliverable._id, encodeURIComponent(previousAttachment), {rev: deliverable._rev},
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
 * Deletes a deliverable
 * @param {object} deliverable - deliverable to delete
 * @return {Promise}
 */
export const deleteDeliverable = ({_id}) =>
  db.getAsync(_id)
    .then(deliverable => db.destroyAsync(_id, deliverable._rev));
