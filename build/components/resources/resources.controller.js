'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteResource = exports.updateResource = exports.createResource = exports.getResource = exports.getResources = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var cov_200y1aktnw = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/resources/resources.controller.js',
      hash = 'c8ecc93f06c5482e566c5cf8b8b89bddcaaad828',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/resources/resources.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 28
        },
        end: {
          line: 22,
          column: 31
        }
      },
      '1': {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 31
        }
      },
      '2': {
        start: {
          line: 29,
          column: 27
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
          column: 30
        },
        end: {
          line: 49,
          column: 39
        }
      },
      '5': {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 49,
          column: 39
        }
      },
      '6': {
        start: {
          line: 48,
          column: 18
        },
        end: {
          line: 48,
          column: 38
        }
      },
      '7': {
        start: {
          line: 49,
          column: 20
        },
        end: {
          line: 49,
          column: 38
        }
      },
      '8': {
        start: {
          line: 56,
          column: 30
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
          column: 40
        }
      },
      '11': {
        start: {
          line: 65,
          column: 22
        },
        end: {
          line: 65,
          column: 40
        }
      },
      '12': {
        start: {
          line: 73,
          column: 30
        },
        end: {
          line: 74,
          column: 51
        }
      },
      '13': {
        start: {
          line: 74,
          column: 2
        },
        end: {
          line: 74,
          column: 51
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 28
          },
          end: {
            line: 21,
            column: 29
          }
        },
        loc: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 31
          }
        },
        line: 22
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 29,
            column: 28
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
            column: 30
          },
          end: {
            line: 41,
            column: 31
          }
        },
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 49,
            column: 39
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
            column: 38
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
            column: 20
          },
          end: {
            line: 49,
            column: 38
          }
        },
        line: 49
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 56,
            column: 30
          },
          end: {
            line: 56,
            column: 31
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
            column: 40
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
            column: 22
          },
          end: {
            line: 65,
            column: 40
          }
        },
        line: 65
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 73,
            column: 30
          },
          end: {
            line: 73,
            column: 31
          }
        },
        loc: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 51
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
//  * Metis-backend
//  * =======
//  * Resources component controller
//  */

var _resources = require('./resources.dal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a list of resources
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
cov_200y1aktnw.s[0]++;
var getResources = exports.getResources = function getResources(req, res) {
  cov_200y1aktnw.f[0]++;
  cov_200y1aktnw.s[1]++;
  return res.json((0, _resources.getResources)({}));
};

/**
 * Get a single resource
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_200y1aktnw.s[2]++;
var getResource = exports.getResource = function getResource(req, res) {
  cov_200y1aktnw.f[1]++;
  cov_200y1aktnw.s[3]++;
  return res.json((0, _resources.getResource)({
    id: req.params.id
  }));
};

/**
 * Create a single resource
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_200y1aktnw.s[4]++;
var createResource = exports.createResource = function createResource(req, res) {
  cov_200y1aktnw.f[2]++;
  cov_200y1aktnw.s[5]++;
  return (
    // create the resource
    (0, _resources.createResource)((0, _extends3.default)({}, req.body, {
      type: 'resource'
    }))
    // return the resource
    .then(function (_ref) {
      var id = _ref.id;
      cov_200y1aktnw.f[3]++;
      cov_200y1aktnw.s[6]++;
      return (0, _resources.getResource)({ id: id });
    }).then(function (resource) {
      cov_200y1aktnw.f[4]++;
      cov_200y1aktnw.s[7]++;
      return res.json(resource);
    })
  );
};

/**
 * Update a single resource
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_200y1aktnw.s[8]++;
var updateResource = exports.updateResource = function updateResource(req, res) {
  cov_200y1aktnw.f[5]++;
  cov_200y1aktnw.s[9]++;
  return res.json(
  // update the resource
  (0, _resources.updateResource)(req.params.id, req.body).
  // return the resource
  then(function (_ref2) {
    var id = _ref2.id;
    cov_200y1aktnw.f[6]++;
    cov_200y1aktnw.s[10]++;
    return (0, _resources.getResource)({ id: id });
  }).then(function (resource) {
    cov_200y1aktnw.f[7]++;
    cov_200y1aktnw.s[11]++;
    return res.json(resource);
  }));
};

/**
 * Delete a single resource
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_200y1aktnw.s[12]++;
var deleteResource = exports.deleteResource = function deleteResource(req, res) {
  cov_200y1aktnw.f[8]++;
  cov_200y1aktnw.s[13]++;
  return res.json((0, _resources.deleteResource)({ _id: req.params.id }));
};