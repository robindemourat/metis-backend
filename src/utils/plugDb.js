/**
 * This module handles the setup of couchdb driver for the app
 * @module metis-backend/utils/plugDb
 */

const Promise = require('bluebird');


const config = require('./config').getConfig();

/**
 * Init nano
 */
const nano = require('nano')(config.couchdbUri);

/**
 * Specify db name
 */
var db = nano.db.use(config.couchdbName);

/**
 * Promisify
 */
Promise.promisifyAll(db);

export default db;
