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
