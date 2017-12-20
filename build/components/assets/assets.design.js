"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1zd0m14o1k = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.design.js",
      hash = "346ff5463e02c95f7383c7bc3fe686f2a414e335",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.design.js",
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
    "by_filename": {
      "map": "function(doc) {\n                    if (doc.type === 'asset') {\n                      emit(doc.filename, null);\n                    }\n                  }"
    }
  }
};