/**
 * This module provides couchdb designs
 * for the resources component.
 * @module metis-backend/components/resources
 */

export default {
  "views": {
    "by_id": {
      "map": `function(doc) {
                    if (doc.type === 'resource') {
                      emit(doc._id, null);
                    }
                  }`
    }
  }
};
