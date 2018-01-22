'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMontage = exports.updateMontage = exports.createMontage = exports.getMontage = exports.getMontages = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var cov_rq5wbngxv = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/montages/montages.controller.js',
      hash = 'a862879ffb84f31cdd4132a30559e474749f0ba0',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/montages/montages.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 27
        },
        end: {
          line: 22,
          column: 30
        }
      },
      '1': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 30
        }
      },
      '2': {
        start: {
          line: 29,
          column: 26
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
          column: 29
        },
        end: {
          line: 49,
          column: 37
        }
      },
      '5': {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 49,
          column: 37
        }
      },
      '6': {
        start: {
          line: 48,
          column: 18
        },
        end: {
          line: 48,
          column: 37
        }
      },
      '7': {
        start: {
          line: 49,
          column: 19
        },
        end: {
          line: 49,
          column: 36
        }
      },
      '8': {
        start: {
          line: 56,
          column: 29
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
          column: 39
        }
      },
      '11': {
        start: {
          line: 65,
          column: 21
        },
        end: {
          line: 65,
          column: 38
        }
      },
      '12': {
        start: {
          line: 73,
          column: 29
        },
        end: {
          line: 74,
          column: 50
        }
      },
      '13': {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 50
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 28
          }
        },
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 30
          }
        },
        line: 22
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 29,
            column: 26
          },
          end: {
            line: 29,
            column: 27
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
            column: 29
          },
          end: {
            line: 41,
            column: 30
          }
        },
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 49,
            column: 37
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
            column: 37
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
            column: 19
          },
          end: {
            line: 49,
            column: 36
          }
        },
        line: 49
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 56,
            column: 29
          },
          end: {
            line: 56,
            column: 30
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
            column: 39
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
            column: 21
          },
          end: {
            line: 65,
            column: 38
          }
        },
        line: 65
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 73,
            column: 29
          },
          end: {
            line: 73,
            column: 30
          }
        },
        loc: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 50
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
}(); /**
      * This module provides express request handlers
      * for the montages component.
      * @module metis-backend/components/montages
      */

var _montages = require('./montages.dal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a list of montages
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
cov_rq5wbngxv.s[0]++;
var getMontages = exports.getMontages = function getMontages(req, res) {
  cov_rq5wbngxv.f[0]++;
  cov_rq5wbngxv.s[1]++;
  return res.json((0, _montages.getMontages)({}));
};

/**
 * Get a single montage
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_rq5wbngxv.s[2]++;
var getMontage = exports.getMontage = function getMontage(req, res) {
  cov_rq5wbngxv.f[1]++;
  cov_rq5wbngxv.s[3]++;
  return res.json((0, _montages.getMontage)({
    id: req.params.id
  }));
};

/**
 * Create a single montage
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_rq5wbngxv.s[4]++;
var createMontage = exports.createMontage = function createMontage(req, res) {
  cov_rq5wbngxv.f[2]++;
  cov_rq5wbngxv.s[5]++;
  return (
    // create the montage
    (0, _montages.createMontage)((0, _extends3.default)({}, req.body, {
      type: 'montage'
    }))
    // return the montage
    .then(function (_ref) {
      var id = _ref.id;
      cov_rq5wbngxv.f[3]++;
      cov_rq5wbngxv.s[6]++;
      return (0, _montages.getMontage)({ id: id });
    }).then(function (montage) {
      cov_rq5wbngxv.f[4]++;
      cov_rq5wbngxv.s[7]++;
      return res.json(montage);
    })
  );
};

/**
 * Update a single montage
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_rq5wbngxv.s[8]++;
var updateMontage = exports.updateMontage = function updateMontage(req, res) {
  cov_rq5wbngxv.f[5]++;
  cov_rq5wbngxv.s[9]++;
  return res.json(
  // update the montage
  (0, _montages.updateMontage)(req.params.id, req.body).
  // return the montage
  then(function (_ref2) {
    var id = _ref2.id;
    cov_rq5wbngxv.f[6]++;
    cov_rq5wbngxv.s[10]++;
    return (0, _montages.getMontage)({ id: id });
  }).then(function (montage) {
    cov_rq5wbngxv.f[7]++;
    cov_rq5wbngxv.s[11]++;
    return res.json(montage);
  }));
};

/**
 * Delete a single montage
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_rq5wbngxv.s[12]++;
var deleteMontage = exports.deleteMontage = function deleteMontage(req, res) {
  cov_rq5wbngxv.f[8]++;
  cov_rq5wbngxv.s[13]++;
  return res.json((0, _montages.deleteMontage)({ _id: req.params.id }));
};