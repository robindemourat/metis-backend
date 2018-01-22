/**
 * This module provides couchdb designs
 * for the montages component.
 * @module metis-backend/components/montages
 */

export default {
  "views": {
    "by_id": {
      "map": `function(doc) {
                    if (doc.type === 'montage') {
                      emit(doc._id, null);
                    }
                  }`
    }
  }
};
