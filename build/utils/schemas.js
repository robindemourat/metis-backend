'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataIsValid = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_24ul7h925z = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/schemas.js',
      hash = '66cf84d0da9420e60dc90aa64a094261c2bd961d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/schemas.js',
    statementMap: {
      '0': {
        start: {
          line: 2,
          column: 12
        },
        end: {
          line: 2,
          column: 21
        }
      },
      '1': {
        start: {
          line: 4,
          column: 27
        },
        end: {
          line: 12,
          column: 4
        }
      },
      '2': {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 12,
          column: 4
        }
      },
      '3': {
        start: {
          line: 6,
          column: 18
        },
        end: {
          line: 6,
          column: 44
        }
      },
      '4': {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 11,
          column: 5
        }
      },
      '5': {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 20
        }
      },
      '6': {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 25
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 4,
            column: 27
          },
          end: {
            line: 4,
            column: 28
          }
        },
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 12,
            column: 4
          }
        },
        line: 5
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 5,
            column: 14
          },
          end: {
            line: 5,
            column: 15
          }
        },
        loc: {
          start: {
            line: 5,
            column: 35
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 5
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        }, {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        }],
        line: 7
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
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
}();

var _ajv = require('ajv');

var _ajv2 = _interopRequireDefault(_ajv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ajv = (cov_24ul7h925z.s[0]++, new _ajv2.default());

cov_24ul7h925z.s[1]++;
var dataIsValid = exports.dataIsValid = function dataIsValid(data, schema) {
  cov_24ul7h925z.f[0]++;
  cov_24ul7h925z.s[2]++;
  return new _promise2.default(function (resolve, reject) {
    cov_24ul7h925z.f[1]++;

    var valid = (cov_24ul7h925z.s[3]++, ajv.validate(schema, data));
    cov_24ul7h925z.s[4]++;
    if (valid) {
      cov_24ul7h925z.b[0][0]++;
      cov_24ul7h925z.s[5]++;

      resolve(data);
    } else {
      cov_24ul7h925z.b[0][1]++;
      cov_24ul7h925z.s[6]++;

      reject(ajv.errors);
    }
  });
};