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
