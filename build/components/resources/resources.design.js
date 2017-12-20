"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1tv5wo4ekc = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/resources/resources.design.js",
      hash = "7c2419f313b13eacab7d1fdb74fe7296e59d7f2e",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/resources/resources.design.js",
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
      "map": "function(doc) {\n                    if (doc.type === 'resource') {\n                      emit(doc._id, null);\n                    }\n                  }"
    }
  }
};