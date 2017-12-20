"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_3414x8cio = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/compositions/compositions.design.js",
      hash = "99ad95ecf2ba5b73c77008c0712705d88de1ced2",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/compositions/compositions.design.js",
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