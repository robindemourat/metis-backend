"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1oj0sz1gqm = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/montages/montages.design.js",
      hash = "7dc493295f40a05d712aac79c4aa4713e868d50e",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/montages/montages.design.js",
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
      "map": "function(doc) {\n                    if (doc.type === 'montage') {\n                      emit(doc._id, null);\n                    }\n                  }"
    }
  }
};