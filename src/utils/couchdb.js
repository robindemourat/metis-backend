

/**
 * Inserts a design document in a couchdb database
 * @param {object} doc
 * @param {object} db
 * @param {string} designName
 * @param {object} design
 * @return {Promise}
 */
const insertDesignDocument = (doc, db, designName, design) => {
  let _rev;
  if (doc) {
    _rev = doc._rev;
  }
  return db.insertAsync({
    _rev,
    ...design
  }, `_design/${designName}`);
};

/**
 * Adds a new design to a database
 * @param db {object} the nano-handled database
 * @param designName {string}
 */
export const addDesign = (db, designName, design) =>
    db.getAsync(`_design/${designName}`)
    // design document exists
    .then(doc => insertDesignDocument(doc, db, designName, design))
    // design document does not exist (we don't care about the error)
    .catch(() => insertDesignDocument(undefined, db, designName, design));
