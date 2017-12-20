/**
 * Plurishing-backend
 * =======
 * User data access layer
 */

import db from '../../utils/plugDb';

import {User as schema} from 'plurishing-schemas';
import design from './users.design';
import {addDesign} from '../../utils/couchdb';
import {dataIsValid} from '../../utils/schemas';

/**
 * Registering couchdb views related to users objects
 */
addDesign(db, 'users', design);


/**
 * Gets a list of users with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
export const getUsers = ({
  query = {},
  include_docs = true
}) => {
  if (query.email && query.password) {
    return db.viewAsync('users', 'by_email_and_password', {
      key: [query.email, query.password],
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
  } else if (query.email) {
    return db.viewAsync('users', 'by_email', {
      key: query.email,
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
    return db.viewAsync('users', 'by_email', {
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
 * Gets a user with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
export const getUser = ({
  id,
  email
}) => {
  if (id) {
    return db.getAsync(id)
      .then(user =>
        // verify that data is compliant before returning it
        dataIsValid(user, schema)
      );
  } else {
    return db.viewAsync('users', 'by_email', {
              key: email,
              include_docs: true
            })
            .then(result =>
              new Promise((resolve, reject) => {
                if (result.rows && result.rows.length) {
                  resolve(result.rows[0].doc);
                } else {
                  /**
                   * @todo normalize this error
                   */
                  reject(new Error('no match'));
                }
              })
            );
  }
};

/**
 * Creates a new user
 * @param {object} user
 * @return {Promise}
 */
export const createUser = user =>
  dataIsValid(user, schema)
    .then(() => db.insertAsync(user));

/**
 * Updates a user
 * @param {string} id - id of user to update
 * @param {object} user - data to update
 * @return {Promise}
 */
export const updateUser = (id, user) =>
  // validate
  dataIsValid(user, schema)
    // get existing document
    .then(() => db.getAsync(id))
    // update with new rev
    .then(userDb =>
        db.insertAsync({
          ...user,
          _rev: userDb._rev
        }, userDb._id)
    );

/**
 * Deletes a user
 * @param {object} user - user to delete
 * @return {Promise}
 */
export const deleteUser = ({_id}) =>
  db.getAsync(_id)
          .then(user => db.destroyAsync(_id, user._rev));
