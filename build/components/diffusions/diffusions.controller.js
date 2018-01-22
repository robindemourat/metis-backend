'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDiffusion = exports.updateDiffusion = exports.createDiffusion = exports.getDiffusion = exports.getDiffusions = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var cov_911ccnkco = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/diffusions/diffusions.controller.js',
      hash = '724eaa0f5c91e70e9f8c3664290443b9de199cc5',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/diffusions/diffusions.controller.js',
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
          line: 83,
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
          line: 82,
          column: 73
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
          column: 61
        }
      },
      '10': {
        start: {
          line: 66,
          column: 14
        },
        end: {
          line: 66,
          column: 73
        }
      },
      '11': {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 77,
          column: 5
        }
      },
      '12': {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 74
        }
      },
      '13': {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 75
        }
      },
      '14': {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 76
        }
      },
      '15': {
        start: {
          line: 76,
          column: 8
        },
        end: {
          line: 76,
          column: 33
        }
      },
      '16': {
        start: {
          line: 80,
          column: 14
        },
        end: {
          line: 80,
          column: 70
        }
      },
      '17': {
        start: {
          line: 82,
          column: 15
        },
        end: {
          line: 82,
          column: 71
        }
      },
      '18': {
        start: {
          line: 90,
          column: 31
        },
        end: {
          line: 100,
          column: 3
        }
      },
      '19': {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 100,
          column: 3
        }
      },
      '20': {
        start: {
          line: 98,
          column: 20
        },
        end: {
          line: 98,
          column: 41
        }
      },
      '21': {
        start: {
          line: 99,
          column: 23
        },
        end: {
          line: 99,
          column: 42
        }
      },
      '22': {
        start: {
          line: 107,
          column: 31
        },
        end: {
          line: 108,
          column: 52
        }
      },
      '23': {
        start: {
          line: 108,
          column: 2
        },
        end: {
          line: 108,
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
            line: 83,
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
            column: 61
          }
        },
        line: 60
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 66,
            column: 8
          },
          end: {
            line: 66,
            column: 9
          }
        },
        loc: {
          start: {
            line: 66,
            column: 14
          },
          end: {
            line: 66,
            column: 73
          }
        },
        line: 66
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 67,
            column: 8
          },
          end: {
            line: 67,
            column: 9
          }
        },
        loc: {
          start: {
            line: 67,
            column: 14
          },
          end: {
            line: 78,
            column: 3
          }
        },
        line: 67
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 80,
            column: 8
          },
          end: {
            line: 80,
            column: 9
          }
        },
        loc: {
          start: {
            line: 80,
            column: 14
          },
          end: {
            line: 80,
            column: 70
          }
        },
        line: 80
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 82,
            column: 9
          },
          end: {
            line: 82,
            column: 10
          }
        },
        loc: {
          start: {
            line: 82,
            column: 15
          },
          end: {
            line: 82,
            column: 71
          }
        },
        line: 82
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 90,
            column: 31
          },
          end: {
            line: 90,
            column: 32
          }
        },
        loc: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 100,
            column: 3
          }
        },
        line: 91
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
            column: 20
          },
          end: {
            line: 98,
            column: 41
          }
        },
        line: 98
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 99,
            column: 10
          },
          end: {
            line: 99,
            column: 11
          }
        },
        loc: {
          start: {
            line: 99,
            column: 23
          },
          end: {
            line: 99,
            column: 42
          }
        },
        line: 99
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 107,
            column: 31
          },
          end: {
            line: 107,
            column: 32
          }
        },
        loc: {
          start: {
            line: 108,
            column: 2
          },
          end: {
            line: 108,
            column: 52
          }
        },
        line: 108
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 60,
            column: 21
          },
          end: {
            line: 60,
            column: 61
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 60,
            column: 21
          },
          end: {
            line: 60,
            column: 40
          }
        }, {
          start: {
            line: 60,
            column: 44
          },
          end: {
            line: 60,
            column: 61
          }
        }],
        line: 60
      },
      '1': {
        loc: {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 77,
            column: 5
          }
        },
        type: 'switch',
        locations: [{
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 70,
            column: 74
          }
        }, {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 72,
            column: 75
          }
        }, {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 74,
            column: 76
          }
        }, {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 76,
            column: 33
          }
        }],
        line: 68
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
      '22': 0,
      '23': 0
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
      '11': 0,
      '12': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0, 0, 0]
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
//  * Metis-backend
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
cov_911ccnkco.s[0]++;
var getDiffusions = exports.getDiffusions = function getDiffusions(req, res) {
  cov_911ccnkco.f[0]++;
  cov_911ccnkco.s[1]++;
  return res.json((0, _diffusions.getDiffusions)({}));
};

/**
 * Get a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_911ccnkco.s[2]++;
var getDiffusion = exports.getDiffusion = function getDiffusion(req, res) {
  cov_911ccnkco.f[1]++;
  cov_911ccnkco.s[3]++;
  return res.json((0, _diffusions.getDiffusion)({
    id: req.params.id
  }));
};

/**
 * Create a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_911ccnkco.s[4]++;
var createDiffusion = exports.createDiffusion = function createDiffusion(req, res) {
  cov_911ccnkco.f[2]++;

  // normally diffusion should have a 'waiting' status when provided
  var diff = (cov_911ccnkco.s[5]++, (0, _extends3.default)({}, req.body, {
    status: 'waiting'
  }));
  var diffId = void 0;
  // create the diffusion
  cov_911ccnkco.s[6]++;
  (0, _diffusions.createDiffusion)(diff)
  // return the diffusion with 'processing' status
  .then(function (_ref) {
    var id = _ref.id;
    cov_911ccnkco.f[3]++;
    cov_911ccnkco.s[7]++;

    diffId = id;
    cov_911ccnkco.s[8]++;
    return (0, _diffusions.getDiffusion)({ id: id });
  }).then(function (diffusion) {
    cov_911ccnkco.f[4]++;
    cov_911ccnkco.s[9]++;
    return (cov_911ccnkco.b[0][0]++, res.json(diffusion)) && (cov_911ccnkco.b[0][1]++, _promise2.default.resolve());
  })
  // launch diffusion operations
  /**
   * @todo setup a queue system for diffusions processing
   * @body in real life a queue system should be put in place so that one diffusion at a time is resolved
   */
  .then(function () {
    cov_911ccnkco.f[5]++;
    cov_911ccnkco.s[10]++;
    return (0, _diffusions.updateDiffusion)(diffId, (0, _extends3.default)({}, diff, { status: 'processing' }));
  }).then(function () {
    cov_911ccnkco.f[6]++;
    cov_911ccnkco.s[11]++;

    switch (diff.montage_type) {
      case 'micropublication':
        cov_911ccnkco.b[1][0]++;
        cov_911ccnkco.s[12]++;

        return _micropublication.controller.release((0, _extends3.default)({}, diff, { _id: diffId }));
      case 'static':
        cov_911ccnkco.b[1][1]++;
        cov_911ccnkco.s[13]++;

        return _staticpublication.controller.release((0, _extends3.default)({}, diff, { _id: diffId }));
      case 'dynamic':
        cov_911ccnkco.b[1][2]++;
        cov_911ccnkco.s[14]++;

        return _dynamicpublication.controller.release((0, _extends3.default)({}, diff, { _id: diffId }));
      default:
        cov_911ccnkco.b[1][3]++;
        cov_911ccnkco.s[15]++;

        return _promise2.default.resolve();
    }
  })
  // success
  .then(function () {
    cov_911ccnkco.f[7]++;
    cov_911ccnkco.s[16]++;
    return (0, _diffusions.updateDiffusion)(diffId, (0, _extends3.default)({}, diff, { status: 'success' }));
  })
  // error
  .catch(function () {
    cov_911ccnkco.f[8]++;
    cov_911ccnkco.s[17]++;
    return (0, _diffusions.updateDiffusion)(diffId, (0, _extends3.default)({}, diff, { status: 'failure' }));
  });
};

/**
 * Update a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_911ccnkco.s[18]++;
var updateDiffusion = exports.updateDiffusion = function updateDiffusion(req, res) {
  cov_911ccnkco.f[9]++;
  cov_911ccnkco.s[19]++;
  return res.json(
  // update the diffusion
  (0, _diffusions.updateDiffusion)(req.params.id, req.body).
  // return the diffusion
  then(function (_ref2) {
    var id = _ref2.id;
    cov_911ccnkco.f[10]++;
    cov_911ccnkco.s[20]++;
    return (0, _diffusions.getDiffusion)({ id: id });
  }).then(function (diffusion) {
    cov_911ccnkco.f[11]++;
    cov_911ccnkco.s[21]++;
    return res.json(diffusion);
  }));
};

/**
 * Delete a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_911ccnkco.s[22]++;
var deleteDiffusion = exports.deleteDiffusion = function deleteDiffusion(req, res) {
  cov_911ccnkco.f[12]++;
  cov_911ccnkco.s[23]++;
  return res.json((0, _diffusions.deleteDiffusion)({ _id: req.params.id }));
};