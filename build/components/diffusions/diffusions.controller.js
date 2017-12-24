'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDiffusion = exports.updateDiffusion = exports.createDiffusion = exports.getDiffusion = exports.getDiffusions = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var cov_1pp8drd87p = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/diffusions.controller.js',
      hash = '33dd68074eee48a0229cef5108e30120c5034eae',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/diffusions.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 26,
          column: 29
        },
        end: {
          line: 27,
          column: 32
        }
      },
      '1': {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 32
        }
      },
      '2': {
        start: {
          line: 34,
          column: 28
        },
        end: {
          line: 39,
          column: 3
        }
      },
      '3': {
        start: {
          line: 35,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      '4': {
        start: {
          line: 46,
          column: 31
        },
        end: {
          line: 82,
          column: 1
        }
      },
      '5': {
        start: {
          line: 48,
          column: 15
        },
        end: {
          line: 51,
          column: 3
        }
      },
      '6': {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 81,
          column: 4
        }
      },
      '7': {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 16
        }
      },
      '8': {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 58,
          column: 33
        }
      },
      '9': {
        start: {
          line: 60,
          column: 21
        },
        end: {
          line: 60,
          column: 40
        }
      },
      '10': {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 72,
          column: 5
        }
      },
      '11': {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 56
        }
      },
      '12': {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 57
        }
      },
      '13': {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 58
        }
      },
      '14': {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 71,
          column: 33
        }
      },
      '15': {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 60
        }
      },
      '16': {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 58
        }
      },
      '17': {
        start: {
          line: 89,
          column: 31
        },
        end: {
          line: 99,
          column: 3
        }
      },
      '18': {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 99,
          column: 3
        }
      },
      '19': {
        start: {
          line: 97,
          column: 20
        },
        end: {
          line: 97,
          column: 41
        }
      },
      '20': {
        start: {
          line: 98,
          column: 23
        },
        end: {
          line: 98,
          column: 42
        }
      },
      '21': {
        start: {
          line: 106,
          column: 31
        },
        end: {
          line: 107,
          column: 52
        }
      },
      '22': {
        start: {
          line: 107,
          column: 2
        },
        end: {
          line: 107,
          column: 52
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 26,
            column: 29
          },
          end: {
            line: 26,
            column: 30
          }
        },
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 32
          }
        },
        line: 27
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 34,
            column: 28
          },
          end: {
            line: 34,
            column: 29
          }
        },
        loc: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 35
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 46,
            column: 31
          },
          end: {
            line: 46,
            column: 32
          }
        },
        loc: {
          start: {
            line: 46,
            column: 45
          },
          end: {
            line: 82,
            column: 1
          }
        },
        line: 46
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 56,
            column: 8
          },
          end: {
            line: 56,
            column: 9
          }
        },
        loc: {
          start: {
            line: 56,
            column: 18
          },
          end: {
            line: 59,
            column: 3
          }
        },
        line: 56
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 60,
            column: 8
          },
          end: {
            line: 60,
            column: 9
          }
        },
        loc: {
          start: {
            line: 60,
            column: 21
          },
          end: {
            line: 60,
            column: 40
          }
        },
        line: 60
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 62,
            column: 8
          },
          end: {
            line: 62,
            column: 9
          }
        },
        loc: {
          start: {
            line: 62,
            column: 14
          },
          end: {
            line: 73,
            column: 3
          }
        },
        line: 62
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 75,
            column: 9
          }
        },
        loc: {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 60
          }
        },
        line: 76
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 79,
            column: 9
          },
          end: {
            line: 79,
            column: 10
          }
        },
        loc: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 58
          }
        },
        line: 80
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 89,
            column: 31
          },
          end: {
            line: 89,
            column: 32
          }
        },
        loc: {
          start: {
            line: 90,
            column: 2
          },
          end: {
            line: 99,
            column: 3
          }
        },
        line: 90
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 97,
            column: 10
          },
          end: {
            line: 97,
            column: 11
          }
        },
        loc: {
          start: {
            line: 97,
            column: 20
          },
          end: {
            line: 97,
            column: 41
          }
        },
        line: 97
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 98,
            column: 10
          },
          end: {
            line: 98,
            column: 11
          }
        },
        loc: {
          start: {
            line: 98,
            column: 23
          },
          end: {
            line: 98,
            column: 42
          }
        },
        line: 98
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 106,
            column: 31
          },
          end: {
            line: 106,
            column: 32
          }
        },
        loc: {
          start: {
            line: 107,
            column: 2
          },
          end: {
            line: 107,
            column: 52
          }
        },
        line: 107
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 72,
            column: 5
          }
        },
        type: 'switch',
        locations: [{
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 65,
            column: 56
          }
        }, {
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 67,
            column: 57
          }
        }, {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 69,
            column: 58
          }
        }, {
          start: {
            line: 70,
            column: 6
          },
          end: {
            line: 71,
            column: 33
          }
        }],
        line: 63
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
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0
    },
    f: {
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
}(); // /**
//  * Plurishing-backend
//  * =======
//  * Diffusions component controller
//  */

var _diffusions = require('./diffusions.dal');

var _micropublication = require('../../releasers/micropublication');

var _staticpublication = require('../../releasers/staticpublication');

var _dynamicpublication = require('../../releasers/dynamicpublication');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a list of diffusions
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
cov_1pp8drd87p.s[0]++;
var getDiffusions = exports.getDiffusions = function getDiffusions(req, res) {
  cov_1pp8drd87p.f[0]++;
  cov_1pp8drd87p.s[1]++;
  return res.json((0, _diffusions.getDiffusions)({}));
};

/**
 * Get a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1pp8drd87p.s[2]++;
var getDiffusion = exports.getDiffusion = function getDiffusion(req, res) {
  cov_1pp8drd87p.f[1]++;
  cov_1pp8drd87p.s[3]++;
  return res.json((0, _diffusions.getDiffusion)({
    id: req.params.id
  }));
};

/**
 * Create a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1pp8drd87p.s[4]++;
var createDiffusion = exports.createDiffusion = function createDiffusion(req, res) {
  cov_1pp8drd87p.f[2]++;

  // normally diffusion should have a 'waiting' status when provided
  var diff = (cov_1pp8drd87p.s[5]++, (0, _extends3.default)({}, req.body, {
    status: 'processing'
  }));
  var diffId = void 0;
  // create the diffusion
  cov_1pp8drd87p.s[6]++;
  (0, _diffusions.createDiffusion)(diff)
  // return the diffusion with 'processing' status
  .then(function (_ref) {
    var id = _ref.id;
    cov_1pp8drd87p.f[3]++;
    cov_1pp8drd87p.s[7]++;

    diffId = id;
    cov_1pp8drd87p.s[8]++;
    return (0, _diffusions.getDiffusion)({ id: id });
  }).then(function (diffusion) {
    cov_1pp8drd87p.f[4]++;
    cov_1pp8drd87p.s[9]++;
    return res.json(diffusion);
  })
  // launch diffusion operations
  .then(function () {
    cov_1pp8drd87p.f[5]++;
    cov_1pp8drd87p.s[10]++;

    switch (diff.montage_type) {
      case 'micropublication':
        cov_1pp8drd87p.b[0][0]++;
        cov_1pp8drd87p.s[11]++;

        return _micropublication.controller.release(diff);
      case 'static':
        cov_1pp8drd87p.b[0][1]++;
        cov_1pp8drd87p.s[12]++;

        return _staticpublication.controller.release(diff);
      case 'dynamic':
        cov_1pp8drd87p.b[0][2]++;
        cov_1pp8drd87p.s[13]++;

        return _dynamicpublication.controller.release(diff);
      default:
        cov_1pp8drd87p.b[0][3]++;
        cov_1pp8drd87p.s[14]++;

        return _promise2.default.resolve();
    }
  })
  // success
  .then(function () {
    cov_1pp8drd87p.f[6]++;
    cov_1pp8drd87p.s[15]++;
    return (0, _diffusions.updateDiffusion)(diffId, (0, _extends3.default)({}, diff, { status: 'success' }));
  })
  // error
  .catch(function () {
    cov_1pp8drd87p.f[7]++;
    cov_1pp8drd87p.s[16]++;
    return (0, _diffusions.updateDiffusion)(diffId, (0, _extends3.default)({}, diff, { status: 'error' }));
  });
};

/**
 * Update a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1pp8drd87p.s[17]++;
var updateDiffusion = exports.updateDiffusion = function updateDiffusion(req, res) {
  cov_1pp8drd87p.f[8]++;
  cov_1pp8drd87p.s[18]++;
  return res.json(
  // update the diffusion
  (0, _diffusions.updateDiffusion)(req.params.id, req.body).
  // return the diffusion
  then(function (_ref2) {
    var id = _ref2.id;
    cov_1pp8drd87p.f[9]++;
    cov_1pp8drd87p.s[19]++;
    return (0, _diffusions.getDiffusion)({ id: id });
  }).then(function (diffusion) {
    cov_1pp8drd87p.f[10]++;
    cov_1pp8drd87p.s[20]++;
    return res.json(diffusion);
  }));
};

/**
 * Delete a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1pp8drd87p.s[21]++;
var deleteDiffusion = exports.deleteDiffusion = function deleteDiffusion(req, res) {
  cov_1pp8drd87p.f[11]++;
  cov_1pp8drd87p.s[22]++;
  return res.json((0, _diffusions.deleteDiffusion)({ _id: req.params.id }));
};