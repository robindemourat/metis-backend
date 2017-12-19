export default {
  "views": {
    "by_email_and_password": {
      "map": `function(doc) {
                    if (doc.type === 'user') {
                      emit([doc.email, doc.password], null);
                    }
                  }`
    },
    "by_email": {
      "map": `function(doc) {
                    if (doc.type === 'user') {
                      emit(doc.email, null);
                    }
                  }`
    },
    "by_id": {
      "map": `function(doc) {
                    if (doc.type === 'user') {
                      emit(doc._id, null);
                    }
                  }`
    }
  }
};
