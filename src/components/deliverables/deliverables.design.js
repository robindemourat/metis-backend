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
