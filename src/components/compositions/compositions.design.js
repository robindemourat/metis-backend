/**
 * This module provides couchdb designs
 * for the compositions component.
 * @module metis-backend/components/compositions
 */

export default {
  "views": {
    "by_id": {
      "map": `function(doc) {
                    if (doc.type === 'composition') {
                      emit(doc._id, null);
                    }
                  }`
    }
  }
};
