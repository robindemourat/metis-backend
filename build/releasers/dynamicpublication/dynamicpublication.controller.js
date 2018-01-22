'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.release = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_299pylb3r1 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/dynamicpublication/dynamicpublication.controller.js',
      hash = '6c3268821aaee7bf4226da46e0201703a2033577',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/dynamicpublication/dynamicpublication.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 23
        },
        end: {
          line: 39,
          column: 1
        }
      },
      '1': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 38,
          column: 5
        }
      },
      '2': {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 37,
          column: 21
        }
      },
      '3': {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 49
        }
      },
      '4': {
        start: {
          line: 22,
          column: 24
        },
        end: {
          line: 22,
          column: 52
        }
      },
      '5': {
        start: {
          line: 23,
          column: 27
        },
        end: {
          line: 32,
          column: 10
        }
      },
      '6': {
        start: {
          line: 24,
          column: 10
        },
        end: {
          line: 31,
          column: 11
        }
      },
      '7': {
        start: {
          line: 27,
          column: 14
        },
        end: {
          line: 27,
          column: 42
        }
      },
      '8': {
        start: {
          line: 30,
          column: 14
        },
        end: {
          line: 30,
          column: 39
        }
      },
      '9': {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 39
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 12,
            column: 23
          },
          end: {
            line: 12,
            column: 24
          }
        },
        loc: {
          start: {
            line: 12,
            column: 38
          },
          end: {
            line: 39,
            column: 1
          }
        },
        line: 12
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 13,
            column: 23
          }
        },
        loc: {
          start: {
            line: 13,
            column: 43
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 13
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 13
          }
        },
        loc: {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 19,
            column: 7
          }
        },
        line: 16
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 21,
            column: 12
          },
          end: {
            line: 21,
            column: 13
          }
        },
        loc: {
          start: {
            line: 21,
            column: 20
          },
          end: {
            line: 35,
            column: 7
          }
        },
        line: 21
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 23,
            column: 39
          },
          end: {
            line: 23,
            column: 40
          }
        },
        loc: {
          start: {
            line: 23,
            column: 51
          },
          end: {
            line: 32,
            column: 9
          }
        },
        line: 23
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 24,
            column: 10
          },
          end: {
            line: 31,
            column: 11
          }
        },
        type: 'switch',
        locations: [{
          start: {
            line: 26,
            column: 12
          },
          end: {
            line: 27,
            column: 42
          }
        }, {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 30,
            column: 39
          }
        }],
        line: 24
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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
      * This module a function for releasing a dynamic publication through
      * one or several formats/channels
      * @module metis-backend/releasers/dynamicpublication
      */

var _montages = require('../../components/montages');

var _data = require('../../utils/data');

var _web = require('../web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_299pylb3r1.s[0]++;
var release = exports.release = function release(diffusion) {
  cov_299pylb3r1.f[0]++;
  cov_299pylb3r1.s[1]++;

  return new _promise2.default(function (resolve, reject) {
    cov_299pylb3r1.f[1]++;
    cov_299pylb3r1.s[2]++;

    // get related montage
    _montages.dal.getMontage({ id: diffusion.montage_id }).then(function (montage) {
      cov_299pylb3r1.f[2]++;
      cov_299pylb3r1.s[3]++;

      // fetch montage dependencies
      return (0, _data.fetchMontageDependencies)(montage);
    })
    // register all release operations to perform
    .then(function (data) {
      cov_299pylb3r1.f[3]++;

      var targets = (cov_299pylb3r1.s[4]++, diffusion.parameters.targets);
      var operations = (cov_299pylb3r1.s[5]++, targets.map(function (targetId) {
        cov_299pylb3r1.f[4]++;
        cov_299pylb3r1.s[6]++;

        switch (targetId) {

          case 'web':
            cov_299pylb3r1.b[0][0]++;
            cov_299pylb3r1.s[7]++;

            return (0, _web2.default)(data, diffusion);

          default:
            cov_299pylb3r1.b[0][1]++;
            cov_299pylb3r1.s[8]++;

            return _promise2.default.resolve();
        }
      }));
      // execute
      cov_299pylb3r1.s[9]++;
      return _promise2.default.all(operations);
    }).then(resolve).catch(reject);
  });
};