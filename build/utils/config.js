'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var cov_9vo2xbovf = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/config.js',
      hash = '4a5da63620a702b526cfb131c07f3be96d6aae93',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/config.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 8,
          column: 71
        }
      },
      '1': {
        start: {
          line: 8,
          column: 27
        },
        end: {
          line: 8,
          column: 71
        }
      },
      '2': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      '3': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 46
        }
      },
      '4': {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 22,
          column: 12
        }
      },
      '5': {
        start: {
          line: 19,
          column: 46
        },
        end: {
          line: 22,
          column: 5
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 8,
            column: 20
          },
          end: {
            line: 8,
            column: 21
          }
        },
        loc: {
          start: {
            line: 8,
            column: 27
          },
          end: {
            line: 8,
            column: 71
          }
        },
        line: 8
      },
      '1': {
        name: 'getConfig',
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 25
          }
        },
        loc: {
          start: {
            line: 15,
            column: 29
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 15
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 29
          }
        },
        loc: {
          start: {
            line: 19,
            column: 46
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 19
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }, {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }],
        line: 16
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
      '1': 0,
      '2': 0
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
      * Plurishing-backend
      * =======
      * Config utils
      */


exports.getConfig = getConfig;

var _config = require('../../config/config.map');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_9vo2xbovf.s[0]++;


var constantify = function constantify(str) {
  cov_9vo2xbovf.f[0]++;
  cov_9vo2xbovf.s[1]++;
  return str.replace(/([A-Z])/g, '_$1').toUpperCase();
};

/**
 * Resolves config retrieval method according to mode ('development' or 'production')
 * Uses json file if in dev, env variables if in prod
 * @return {object} config
 */
function getConfig() {
  cov_9vo2xbovf.f[1]++;
  cov_9vo2xbovf.s[2]++;

  if (process.env.NODE_ENV !== 'production') {
    cov_9vo2xbovf.b[0][0]++;
    cov_9vo2xbovf.s[3]++;

    return require('../../config/config.dev'); /* eslint node/no-unpublished-require : 0 */
  } else {
    cov_9vo2xbovf.b[0][1]++;
    cov_9vo2xbovf.s[4]++;

    return _config2.default.reduce(function (result, key) {
      cov_9vo2xbovf.f[2]++;
      cov_9vo2xbovf.s[5]++;
      return (0, _extends4.default)({}, result, (0, _defineProperty3.default)({}, key, process.env[constantify(key)]));
    }, {});
  }
}