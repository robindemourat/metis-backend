'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.release = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_2mna9o3sx8 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/dynamicpublication/dynamicpublication.controller.js',
      hash = 'c5e8fd408080419c690ed8b6c0b89800e5db1b3b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/dynamicpublication/dynamicpublication.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 33,
          column: 1
        }
      },
      '1': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 32,
          column: 5
        }
      },
      '2': {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 31,
          column: 21
        }
      },
      '3': {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 49
        }
      },
      '4': {
        start: {
          line: 16,
          column: 24
        },
        end: {
          line: 16,
          column: 52
        }
      },
      '5': {
        start: {
          line: 17,
          column: 27
        },
        end: {
          line: 26,
          column: 10
        }
      },
      '6': {
        start: {
          line: 18,
          column: 10
        },
        end: {
          line: 25,
          column: 11
        }
      },
      '7': {
        start: {
          line: 21,
          column: 14
        },
        end: {
          line: 21,
          column: 42
        }
      },
      '8': {
        start: {
          line: 24,
          column: 14
        },
        end: {
          line: 24,
          column: 39
        }
      },
      '9': {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 39
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 23
          },
          end: {
            line: 6,
            column: 24
          }
        },
        loc: {
          start: {
            line: 6,
            column: 38
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 6
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 7,
            column: 22
          },
          end: {
            line: 7,
            column: 23
          }
        },
        loc: {
          start: {
            line: 7,
            column: 43
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 7
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 10,
            column: 12
          },
          end: {
            line: 10,
            column: 13
          }
        },
        loc: {
          start: {
            line: 10,
            column: 23
          },
          end: {
            line: 13,
            column: 7
          }
        },
        line: 10
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 15,
            column: 12
          },
          end: {
            line: 15,
            column: 13
          }
        },
        loc: {
          start: {
            line: 15,
            column: 20
          },
          end: {
            line: 29,
            column: 7
          }
        },
        line: 15
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 17,
            column: 39
          },
          end: {
            line: 17,
            column: 40
          }
        },
        loc: {
          start: {
            line: 17,
            column: 51
          },
          end: {
            line: 26,
            column: 9
          }
        },
        line: 17
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 18,
            column: 10
          },
          end: {
            line: 25,
            column: 11
          }
        },
        type: 'switch',
        locations: [{
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 21,
            column: 42
          }
        }, {
          start: {
            line: 23,
            column: 12
          },
          end: {
            line: 24,
            column: 39
          }
        }],
        line: 18
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
}();

var _montages = require('../../components/montages');

var _data = require('../../utils/data');

var _web = require('../web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_2mna9o3sx8.s[0]++;
var release = exports.release = function release(diffusion) {
  cov_2mna9o3sx8.f[0]++;
  cov_2mna9o3sx8.s[1]++;

  return new _promise2.default(function (resolve, reject) {
    cov_2mna9o3sx8.f[1]++;
    cov_2mna9o3sx8.s[2]++;

    // get related montage
    _montages.dal.getMontage({ id: diffusion.montage_id }).then(function (montage) {
      cov_2mna9o3sx8.f[2]++;
      cov_2mna9o3sx8.s[3]++;

      // fetch montage dependencies
      return (0, _data.fetchMontageDependencies)(montage);
    })
    // register all release operations to perform
    .then(function (data) {
      cov_2mna9o3sx8.f[3]++;

      var targets = (cov_2mna9o3sx8.s[4]++, diffusion.parameters.targets);
      var operations = (cov_2mna9o3sx8.s[5]++, targets.map(function (targetId) {
        cov_2mna9o3sx8.f[4]++;
        cov_2mna9o3sx8.s[6]++;

        switch (targetId) {

          case 'web':
            cov_2mna9o3sx8.b[0][0]++;
            cov_2mna9o3sx8.s[7]++;

            return (0, _web2.default)(data, diffusion);

          default:
            cov_2mna9o3sx8.b[0][1]++;
            cov_2mna9o3sx8.s[8]++;

            return _promise2.default.resolve();
        }
      }));
      // execute
      cov_2mna9o3sx8.s[9]++;
      return _promise2.default.all(operations);
    }).then(resolve).catch(reject);
  });
};