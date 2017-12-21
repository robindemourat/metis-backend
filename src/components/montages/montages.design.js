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
