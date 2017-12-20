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
