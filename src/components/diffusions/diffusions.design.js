/**
 * This module provides couchdb designs
 * for the diffusions component.
 * @module metis-backend/components/diffusions
 */

export default {
  "views": {
    "by_id": {
      "map": `function(doc) {
                    if (doc.type === 'diffusion') {
                      emit(doc._id, null);
                    }
                  }`
    }
  }
};
