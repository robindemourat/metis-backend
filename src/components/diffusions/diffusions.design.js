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
