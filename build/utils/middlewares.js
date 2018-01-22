'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = undefined;

var cov_wq47vg9ek = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/middlewares.js',
      hash = '16cbbc6368ee82c0ab0be75d249160184e11378e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/middlewares.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 28
        },
        end: {
          line: 17,
          column: 1
        }
      },
      '1': {
        start: {
          line: 9,
          column: 18
        },
        end: {
          line: 9,
          column: 46
        }
      },
      '2': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 16,
          column: 5
        }
      },
      '3': {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 15,
          column: 7
        }
      },
      '4': {
        start: {
          line: 12,
          column: 10
        },
        end: {
          line: 12,
          column: 20
        }
      },
      '5': {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 29
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 8,
            column: 28
          },
          end: {
            line: 8,
            column: 29
          }
        },
        loc: {
          start: {
            line: 8,
            column: 53
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 10,
            column: 32
          },
          end: {
            line: 10,
            column: 33
          }
        },
        loc: {
          start: {
            line: 10,
            column: 56
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 10
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 15,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 15,
            column: 7
          }
        }, {
          start: {
            line: 11,
            column: 6
          },
          end: {
            line: 15,
            column: 7
          }
        }],
        line: 11
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}(); /**
      * Metis-backend
      * =======
      * Custom middlewares for express
      */


var _errorHandler = require('./errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_wq47vg9ek.s[0]++;
var errorHandler = exports.errorHandler = function errorHandler(err, req, res, next) {
  cov_wq47vg9ek.f[0]++;

  var handler = (cov_wq47vg9ek.s[1]++, new _errorHandler2.default(req.log));
  cov_wq47vg9ek.s[2]++;
  handler.handleError(err).then(function (isOperationalError) {
    cov_wq47vg9ek.f[1]++;
    cov_wq47vg9ek.s[3]++;

    if (!isOperationalError) {
      cov_wq47vg9ek.b[0][0]++;
      cov_wq47vg9ek.s[4]++;

      next(err);
    } else {
      cov_wq47vg9ek.b[0][1]++;
      cov_wq47vg9ek.s[5]++;

      throw new Error(err);
    }
  });
};