'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.release = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_wxhobszfa = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/staticpublication/staticpublication.controller.js',
      hash = '1a9dce749360132cd3604915ec6d274f5b2bf833',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/staticpublication/staticpublication.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 13,
          column: 23
        },
        end: {
          line: 49,
          column: 1
        }
      },
      '1': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 48,
          column: 5
        }
      },
      '2': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 47,
          column: 21
        }
      },
      '3': {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 49
        }
      },
      '4': {
        start: {
          line: 23,
          column: 24
        },
        end: {
          line: 23,
          column: 52
        }
      },
      '5': {
        start: {
          line: 25,
          column: 27
        },
        end: {
          line: 39,
          column: 10
        }
      },
      '6': {
        start: {
          line: 26,
          column: 10
        },
        end: {
          line: 38,
          column: 11
        }
      },
      '7': {
        start: {
          line: 29,
          column: 14
        },
        end: {
          line: 29,
          column: 42
        }
      },
      '8': {
        start: {
          line: 31,
          column: 14
        },
        end: {
          line: 31,
          column: 53
        }
      },
      '9': {
        start: {
          line: 33,
          column: 14
        },
        end: {
          line: 33,
          column: 53
        }
      },
      '10': {
        start: {
          line: 37,
          column: 14
        },
        end: {
          line: 37,
          column: 39
        }
      },
      '11': {
        start: {
          line: 44,
          column: 8
        },
        end: {
          line: 44,
          column: 39
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 13,
            column: 23
          },
          end: {
            line: 13,
            column: 24
          }
        },
        loc: {
          start: {
            line: 13,
            column: 38
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 13
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 14,
            column: 22
          },
          end: {
            line: 14,
            column: 23
          }
        },
        loc: {
          start: {
            line: 14,
            column: 43
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 14
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 17,
            column: 12
          },
          end: {
            line: 17,
            column: 13
          }
        },
        loc: {
          start: {
            line: 17,
            column: 23
          },
          end: {
            line: 20,
            column: 7
          }
        },
        line: 17
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 22,
            column: 13
          }
        },
        loc: {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 45,
            column: 7
          }
        },
        line: 22
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 25,
            column: 39
          },
          end: {
            line: 25,
            column: 40
          }
        },
        loc: {
          start: {
            line: 25,
            column: 51
          },
          end: {
            line: 39,
            column: 9
          }
        },
        line: 25
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 26,
            column: 10
          },
          end: {
            line: 38,
            column: 11
          }
        },
        type: 'switch',
        locations: [{
          start: {
            line: 28,
            column: 12
          },
          end: {
            line: 29,
            column: 42
          }
        }, {
          start: {
            line: 30,
            column: 12
          },
          end: {
            line: 31,
            column: 53
          }
        }, {
          start: {
            line: 32,
            column: 12
          },
          end: {
            line: 33,
            column: 53
          }
        }, {
          start: {
            line: 36,
            column: 12
          },
          end: {
            line: 37,
            column: 39
          }
        }],
        line: 26
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
      '9': 0,
      '10': 0,
      '11': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    b: {
      '0': [0, 0, 0, 0]
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
      * This module a function for releasing a static publication through
      * one or several formats/channels
      * @module metis-backend/releasers/staticpublication
      */

var _montages = require('../../components/montages');

var _data = require('../../utils/data');

var _pdf = require('../pdf');

var _pdf2 = _interopRequireDefault(_pdf);

var _epub = require('../epub');

var _epub2 = _interopRequireDefault(_epub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_wxhobszfa.s[0]++;
var release = exports.release = function release(diffusion) {
  cov_wxhobszfa.f[0]++;
  cov_wxhobszfa.s[1]++;

  return new _promise2.default(function (resolve, reject) {
    cov_wxhobszfa.f[1]++;
    cov_wxhobszfa.s[2]++;

    // get related montage
    _montages.dal.getMontage({ id: diffusion.montage_id }).then(function (montage) {
      cov_wxhobszfa.f[2]++;
      cov_wxhobszfa.s[3]++;

      // fetch montage dependencies
      return (0, _data.fetchMontageDependencies)(montage);
    })
    // register all release operations to perform
    .then(function (data) {
      cov_wxhobszfa.f[3]++;

      var targets = (cov_wxhobszfa.s[4]++, diffusion.parameters.targets);

      var operations = (cov_wxhobszfa.s[5]++, targets.map(function (targetId) {
        cov_wxhobszfa.f[4]++;
        cov_wxhobszfa.s[6]++;

        switch (targetId) {

          case 'pdf':
            cov_wxhobszfa.b[0][0]++;
            cov_wxhobszfa.s[7]++;

            return (0, _pdf2.default)(data, diffusion);
          case 'epub-reflowable':
            cov_wxhobszfa.b[0][1]++;
            cov_wxhobszfa.s[8]++;

            return (0, _epub2.default)(data, diffusion, targetId);
          case 'epub-fixed':
            cov_wxhobszfa.b[0][2]++;
            cov_wxhobszfa.s[9]++;

            return (0, _epub2.default)(data, diffusion, targetId);

          default:
            cov_wxhobszfa.b[0][3]++;
            cov_wxhobszfa.s[10]++;

            return _promise2.default.resolve();
        }
      }));
      // execute all release operations in parallel
      /**
       * @todo decide whether to resolve release operations simultaneously or sequentially
       */
      cov_wxhobszfa.s[11]++;
      return _promise2.default.all(operations);
    }).then(resolve).catch(reject);
  });
};