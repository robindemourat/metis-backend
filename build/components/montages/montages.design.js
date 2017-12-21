"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_no3p80p4j = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/montages/montages.design.js",
      hash = "33a5541c1a7dfea5ff194a52f0e273aea65e4f9b",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/montages/montages.design.js",
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