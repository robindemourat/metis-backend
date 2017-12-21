'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDiffusion = exports.updateDiffusion = exports.createDiffusion = exports.getDiffusion = exports.getDiffusions = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var cov_1pp8drd87p = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/diffusions.controller.js',
      hash = 'bbcf30585c8c5a4ec7e92ac42c89c26627b6559f',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/diffusions.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 29
        },
        end: {
          line: 22,
          column: 32
        }
      },
      '1': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 32
        }
      },
      '2': {
        start: {
          line: 29,
          column: 28
        },
        end: {
          line: 34,
          column: 3
        }
      },
      '3': {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      '4': {
        start: {
          line: 41,
          column: 31
        },
        end: {
          line: 49,
          column: 41
        }
      },
      '5': {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 49,
          column: 41
        }
      },
      '6': {
        start: {
          line: 48,
          column: 18
        },
        end: {
          line: 48,
          column: 39
        }
      },
      '7': {
        start: {
          line: 49,
          column: 21
        },
        end: {
          line: 49,
          column: 40
        }
      },
      '8': {
        start: {
          line: 56,
          column: 31
        },
        end: {
          line: 66,
          column: 3
        }
      },
      '9': {
        start: {
          line: 57,
          column: 2
        },
        end: {
          line: 66,
          column: 3
        }
      },
      '10': {
        start: {
          line: 64,
          column: 20
        },
        end: {
          line: 64,
          column: 41
        }
      },
      '11': {
        start: {
          line: 65,
          column: 23
        },
        end: {
          line: 65,
          column: 42
        }
      },
      '12': {
        start: {
          line: 73,
          column: 31
        },
        end: {
          line: 74,
          column: 52
        }
      },
      '13': {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 52
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 29
          },
          end: {
            line: 21,
            column: 30
          }
        },
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 32
          }
        },
        line: 22
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 29,
            column: 28
          },
          end: {
            line: 29,
            column: 29
          }
        },
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 30
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 41,
            column: 31
          },
          end: {
            line: 41,
            column: 32
          }
        },
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 49,
            column: 41
          }
        },
        line: 43
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 48,
            column: 9
          }
        },
        loc: {
          start: {
            line: 48,
            column: 18
          },
          end: {
            line: 48,
            column: 39
          }
        },
        line: 48
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 49,
            column: 9
          }
        },
        loc: {
          start: {
            line: 49,
            column: 21
          },
          end: {
            line: 49,
            column: 40
          }
        },
        line: 49
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 56,
            column: 31
          },
          end: {
            line: 56,
            column: 32
          }
        },
        loc: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 57
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 64,
            column: 10
          },
          end: {
            line: 64,
            column: 11
          }
        },
        loc: {
          start: {
            line: 64,
            column: 20
          },
          end: {
            line: 64,
            column: 41
          }
        },
        line: 64
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 65,
            column: 11
          }
        },
        loc: {
          start: {
            line: 65,
            column: 23
          },
          end: {
            line: 65,
            column: 42
          }
        },
        line: 65
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 73,
            column: 31
          },
          end: {
            line: 73,
            column: 32
          }
        },
        loc: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 52
          }
        },
        line: 74
      }
    },
    branchMap: {},
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
      '13': 0
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
      '8': 0
    },
    b: {},
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
  cov_1pp8drd87p.s[5]++;
  return (
    // create the diffusion
    (0, _diffusions.createDiffusion)((0, _extends3.default)({}, req.body, {
      type: 'diffusion'
    }))
    // return the diffusion
    .then(function (_ref) {
      var id = _ref.id;
      cov_1pp8drd87p.f[3]++;
      cov_1pp8drd87p.s[6]++;
      return (0, _diffusions.getDiffusion)({ id: id });
    }).then(function (diffusion) {
      cov_1pp8drd87p.f[4]++;
      cov_1pp8drd87p.s[7]++;
      return res.json(diffusion);
    })
  );
};

/**
 * Update a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1pp8drd87p.s[8]++;
var updateDiffusion = exports.updateDiffusion = function updateDiffusion(req, res) {
  cov_1pp8drd87p.f[5]++;
  cov_1pp8drd87p.s[9]++;
  return res.json(
  // update the diffusion
  (0, _diffusions.updateDiffusion)(req.params.id, req.body).
  // return the diffusion
  then(function (_ref2) {
    var id = _ref2.id;
    cov_1pp8drd87p.f[6]++;
    cov_1pp8drd87p.s[10]++;
    return (0, _diffusions.getDiffusion)({ id: id });
  }).then(function (diffusion) {
    cov_1pp8drd87p.f[7]++;
    cov_1pp8drd87p.s[11]++;
    return res.json(diffusion);
  }));
};

/**
 * Delete a single diffusion
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1pp8drd87p.s[12]++;
var deleteDiffusion = exports.deleteDiffusion = function deleteDiffusion(req, res) {
  cov_1pp8drd87p.f[8]++;
  cov_1pp8drd87p.s[13]++;
  return res.json((0, _diffusions.deleteDiffusion)({ _id: req.params.id }));
};