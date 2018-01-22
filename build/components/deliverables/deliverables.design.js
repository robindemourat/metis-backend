"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_27ust8wb5w = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/deliverables/deliverables.design.js",
      hash = "4ca94e46f6058394f1cbca401de714aa0882b612",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/deliverables/deliverables.design.js",
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
      "map": "function(doc) {\n                    if (doc.type === 'deliverable') {\n                      emit(doc.filename, null);\n                    }\n                  }"
    }
  }
};