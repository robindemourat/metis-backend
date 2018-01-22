"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1p1hamecqy = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/assets/assets.design.js",
      hash = "eb6600bc86254b1f6ba1787128858d54d97073d4",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/assets/assets.design.js",
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
 * for the assets component.
 * @module metis-backend/components/assets
 */

exports.default = {
  "views": {
    "by_filename": {
      "map": "function(doc) {\n                    if (doc.type === 'asset') {\n                      emit(doc.filename, null);\n                    }\n                  }"
    }
  }
};