"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_xnxbkn6pw = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/diffusions/diffusions.design.js",
      hash = "65da6213c9e3538a4fa6219980eb63d1a45a3c81",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/diffusions/diffusions.design.js",
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

/**
 * This module provides couchdb designs
 * for the diffusions component.
 * @module metis-backend/components/diffusions
 */

exports.default = {
  "views": {
    "by_id": {
      "map": "function(doc) {\n                    if (doc.type === 'diffusion') {\n                      emit(doc._id, null);\n                    }\n                  }"
    }
  }
};