"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2aanalvck7 = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/diffusions.design.js",
      hash = "2c405ce805c4366c1df1f6d93f597b546811dcbe",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/diffusions.design.js",
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
      "map": "function(doc) {\n                    if (doc.type === 'diffusion') {\n                      emit(doc._id, null);\n                    }\n                  }"
    }
  }
};