/**
 * This module provides couchdb designs
 * for the deliverables component.
 * @module metis-backend/components/deliverables
 */

export default {
  "views": {
    "by_filename": {
      "map": `function(doc) {
                    if (doc.type === 'deliverable') {
                      emit(doc.filename, null);
                    }
                  }`
    }
  }
};
