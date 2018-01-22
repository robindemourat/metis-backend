"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2n7z3ivi3a = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/compositions/compositions.design.js",
      hash = "b8b2314dc1fdadf8aea53076b6e45760a72af012",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/compositions/compositions.design.js",
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
    "by_id": {
      "map": "function(doc) {\n                    if (doc.type === 'composition') {\n                      emit(doc._id, null);\n                    }\n                  }"
    }
  }
};