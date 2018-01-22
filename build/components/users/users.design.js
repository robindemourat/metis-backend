"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_19pzf4gpza = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/users/users.design.js",
      hash = "f2c20a2b2cb0c6fa37d006318b6a1cb44b300902",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/users/users.design.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

exports.default = {
  "views": {
    "by_email_and_password": {
      "map": "function(doc) {\n                    if (doc.type === 'user') {\n                      emit([doc.email, doc.password], null);\n                    }\n                  }"
    },
    "by_email": {
      "map": "function(doc) {\n                    if (doc.type === 'user') {\n                      emit(doc.email, null);\n                    }\n                  }"
    },
    "by_id": {
      "map": "function(doc) {\n                    if (doc.type === 'user') {\n                      emit(doc._id, null);\n                    }\n                  }"
    }
  }
};