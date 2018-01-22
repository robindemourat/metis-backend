/**
 * This module provides couchdb designs
 * for the assets component.
 * @module metis-backend/components/assets
 */


export default {
  "views": {
    "by_filename": {
      "map": `function(doc) {
                    if (doc.type === 'asset') {
                      emit(doc.filename, null);
                    }
                  }`
    }
  }
};
