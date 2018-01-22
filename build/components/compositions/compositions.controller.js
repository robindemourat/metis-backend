'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComposition = exports.updateComposition = exports.createComposition = exports.getComposition = exports.getCompositions = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var cov_117uvz14id = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/compositions/compositions.controller.js',
      hash = 'e64ef56b8a88e00abc6981db28bd153b37b399d6',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/compositions/compositions.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 31
        },
        end: {
          line: 22,
          column: 34
        }
      },
      '1': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 34
        }
      },
      '2': {
        start: {
          line: 29,
          column: 30
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
          column: 33
        },
        end: {
          line: 49,
          column: 45
        }
      },
      '5': {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 49,
          column: 45
        }
      },
      '6': {
        start: {
          line: 48,
          column: 18
        },
        end: {
          line: 48,
          column: 41
        }
      },
      '7': {
        start: {
          line: 49,
          column: 23
        },
        end: {
          line: 49,
          column: 44
        }
      },
      '8': {
        start: {
          line: 56,
          column: 33
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
          column: 43
        }
      },
      '11': {
        start: {
          line: 65,
          column: 25
        },
        end: {
          line: 65,
          column: 46
        }
      },
      '12': {
        start: {
          line: 73,
          column: 33
        },
        end: {
          line: 74,
          column: 54
        }
      },
      '13': {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 54
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 31
          },
          end: {
            line: 21,
            column: 32
          }
        },
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 34
          }
        },
        line: 22
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 29,
            column: 30
          },
          end: {
            line: 29,
            column: 31
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
            column: 33
          },
          end: {
            line: 41,
            column: 34
          }
        },
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 49,
            column: 45
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
            column: 41
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
            column: 23
          },
          end: {
            line: 49,
            column: 44
          }
        },
        line: 49
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 56,
            column: 33
          },
          end: {
            line: 56,
            column: 34
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
            column: 43
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
            column: 25
          },
          end: {
            line: 65,
            column: 46
          }
        },
        line: 65
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 73,
            column: 33
          },
          end: {
            line: 73,
            column: 34
          }
        },
        loc: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 54
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
      * for the compositions component.
      * @module metis-backend/components/compositions
      */

var _compositions = require('./compositions.dal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a list of compositions
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
cov_117uvz14id.s[0]++;
var getCompositions = exports.getCompositions = function getCompositions(req, res) {
  cov_117uvz14id.f[0]++;
  cov_117uvz14id.s[1]++;
  return res.json((0, _compositions.getCompositions)({}));
};

/**
 * Get a single composition
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_117uvz14id.s[2]++;
var getComposition = exports.getComposition = function getComposition(req, res) {
  cov_117uvz14id.f[1]++;
  cov_117uvz14id.s[3]++;
  return res.json((0, _compositions.getComposition)({
    id: req.params.id
  }));
};

/**
 * Create a single composition
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_117uvz14id.s[4]++;
var createComposition = exports.createComposition = function createComposition(req, res) {
  cov_117uvz14id.f[2]++;
  cov_117uvz14id.s[5]++;
  return (
    // create the composition
    (0, _compositions.createComposition)((0, _extends3.default)({}, req.body, {
      type: 'composition'
    }))
    // return the composition
    .then(function (_ref) {
      var id = _ref.id;
      cov_117uvz14id.f[3]++;
      cov_117uvz14id.s[6]++;
      return (0, _compositions.getComposition)({ id: id });
    }).then(function (composition) {
      cov_117uvz14id.f[4]++;
      cov_117uvz14id.s[7]++;
      return res.json(composition);
    })
  );
};

/**
 * Update a single composition
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_117uvz14id.s[8]++;
var updateComposition = exports.updateComposition = function updateComposition(req, res) {
  cov_117uvz14id.f[5]++;
  cov_117uvz14id.s[9]++;
  return res.json(
  // update the composition
  (0, _compositions.updateComposition)(req.params.id, req.body).
  // return the composition
  then(function (_ref2) {
    var id = _ref2.id;
    cov_117uvz14id.f[6]++;
    cov_117uvz14id.s[10]++;
    return (0, _compositions.getComposition)({ id: id });
  }).then(function (composition) {
    cov_117uvz14id.f[7]++;
    cov_117uvz14id.s[11]++;
    return res.json(composition);
  }));
};

/**
 * Delete a single composition
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_117uvz14id.s[12]++;
var deleteComposition = exports.deleteComposition = function deleteComposition(req, res) {
  cov_117uvz14id.f[8]++;
  cov_117uvz14id.s[13]++;
  return res.json((0, _compositions.deleteComposition)({ _id: req.params.id }));
};