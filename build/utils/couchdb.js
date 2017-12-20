"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDesign = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var cov_1q75b6wb9c = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/couchdb.js",
      hash = "230dd9fd565e26ffcba08c64f300a7df2fade3eb",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/couchdb.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 29
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 20
        }
      },
      "3": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 19,
          column: 30
        }
      },
      "4": {
        start: {
          line: 27,
          column: 25
        },
        end: {
          line: 32,
          column: 73
        }
      },
      "5": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 32,
          column: 73
        }
      },
      "6": {
        start: {
          line: 30,
          column: 17
        },
        end: {
          line: 30,
          column: 66
        }
      },
      "7": {
        start: {
          line: 32,
          column: 17
        },
        end: {
          line: 32,
          column: 72
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 29
          },
          end: {
            line: 11,
            column: 30
          }
        },
        loc: {
          start: {
            line: 11,
            column: 62
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 25
          },
          end: {
            line: 27,
            column: 26
          }
        },
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 32,
            column: 73
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 30,
            column: 10
          },
          end: {
            line: 30,
            column: 11
          }
        },
        loc: {
          start: {
            line: 30,
            column: 17
          },
          end: {
            line: 30,
            column: 66
          }
        },
        line: 30
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 32,
            column: 11
          },
          end: {
            line: 32,
            column: 12
          }
        },
        loc: {
          start: {
            line: 32,
            column: 17
          },
          end: {
            line: 32,
            column: 72
          }
        },
        line: 32
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }, {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_1q75b6wb9c.s[0]++;


/**
 * Inserts a design document in a couchdb database
 * @param {object} doc
 * @param {object} db
 * @param {string} designName
 * @param {object} design
 * @return {Promise}
 */
var insertDesignDocument = function insertDesignDocument(doc, db, designName, design) {
  cov_1q75b6wb9c.f[0]++;

  var _rev = void 0;
  cov_1q75b6wb9c.s[1]++;
  if (doc) {
    cov_1q75b6wb9c.b[0][0]++;
    cov_1q75b6wb9c.s[2]++;

    _rev = doc._rev;
  } else {
    cov_1q75b6wb9c.b[0][1]++;
  }
  cov_1q75b6wb9c.s[3]++;
  return db.insertAsync((0, _extends3.default)({
    _rev: _rev
  }, design), "_design/" + designName);
};

/**
 * Adds a new design to a database
 * @param db {object} the nano-handled database
 * @param designName {string}
 */
cov_1q75b6wb9c.s[4]++;
var addDesign = exports.addDesign = function addDesign(db, designName, design) {
  cov_1q75b6wb9c.f[1]++;
  cov_1q75b6wb9c.s[5]++;
  return db.getAsync("_design/" + designName)
  // design document exists
  .then(function (doc) {
    cov_1q75b6wb9c.f[2]++;
    cov_1q75b6wb9c.s[6]++;
    return insertDesignDocument(doc, db, designName, design);
  })
  // design document does not exist (we don't care about the error)
  .catch(function () {
    cov_1q75b6wb9c.f[3]++;
    cov_1q75b6wb9c.s[7]++;
    return insertDesignDocument(undefined, db, designName, design);
  });
};