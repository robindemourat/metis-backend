'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDiffusion = exports.updateDiffusion = exports.createDiffusion = exports.getDiffusion = exports.getDiffusions = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_n9cb1kmrd = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/diffusions/diffusions.dal.js',
      hash = 'ab2ff730c62b80a8980dd7f49207bff74a4b97c1',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/diffusions/diffusions.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 36
        }
      },
      '1': {
        start: {
          line: 25,
          column: 29
        },
        end: {
          line: 40,
          column: 1
        }
      },
      '2': {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 39,
          column: 6
        }
      },
      '3': {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 38,
          column: 11
        }
      },
      '4': {
        start: {
          line: 35,
          column: 12
        },
        end: {
          line: 37,
          column: 13
        }
      },
      '5': {
        start: {
          line: 36,
          column: 38
        },
        end: {
          line: 36,
          column: 45
        }
      },
      '6': {
        start: {
          line: 47,
          column: 28
        },
        end: {
          line: 54,
          column: 7
        }
      },
      '7': {
        start: {
          line: 50,
          column: 2
        },
        end: {
          line: 54,
          column: 7
        }
      },
      '8': {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 38
        }
      },
      '9': {
        start: {
          line: 61,
          column: 31
        },
        end: {
          line: 63,
          column: 42
        }
      },
      '10': {
        start: {
          line: 62,
          column: 2
        },
        end: {
          line: 63,
          column: 42
        }
      },
      '11': {
        start: {
          line: 63,
          column: 16
        },
        end: {
          line: 63,
          column: 41
        }
      },
      '12': {
        start: {
          line: 71,
          column: 31
        },
        end: {
          line: 82,
          column: 5
        }
      },
      '13': {
        start: {
          line: 73,
          column: 2
        },
        end: {
          line: 82,
          column: 5
        }
      },
      '14': {
        start: {
          line: 75,
          column: 16
        },
        end: {
          line: 75,
          column: 31
        }
      },
      '15': {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 81,
          column: 27
        }
      },
      '16': {
        start: {
          line: 89,
          column: 31
        },
        end: {
          line: 91,
          column: 60
        }
      },
      '17': {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 91,
          column: 60
        }
      },
      '18': {
        start: {
          line: 91,
          column: 23
        },
        end: {
          line: 91,
          column: 59
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 25,
            column: 29
          },
          end: {
            line: 25,
            column: 30
          }
        },
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 28
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        },
        loc: {
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 38,
            column: 11
          }
        },
        line: 33
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 34,
            column: 10
          },
          end: {
            line: 34,
            column: 11
          }
        },
        loc: {
          start: {
            line: 35,
            column: 12
          },
          end: {
            line: 37,
            column: 13
          }
        },
        line: 35
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 36,
            column: 31
          },
          end: {
            line: 36,
            column: 32
          }
        },
        loc: {
          start: {
            line: 36,
            column: 38
          },
          end: {
            line: 36,
            column: 45
          }
        },
        line: 36
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 47,
            column: 28
          },
          end: {
            line: 47,
            column: 29
          }
        },
        loc: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 54,
            column: 7
          }
        },
        line: 50
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 51,
            column: 12
          },
          end: {
            line: 51,
            column: 13
          }
        },
        loc: {
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 53,
            column: 38
          }
        },
        line: 53
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 61,
            column: 31
          },
          end: {
            line: 61,
            column: 32
          }
        },
        loc: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 63,
            column: 42
          }
        },
        line: 62
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 63,
            column: 10
          },
          end: {
            line: 63,
            column: 11
          }
        },
        loc: {
          start: {
            line: 63,
            column: 16
          },
          end: {
            line: 63,
            column: 41
          }
        },
        line: 63
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 71,
            column: 31
          },
          end: {
            line: 71,
            column: 32
          }
        },
        loc: {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 82,
            column: 5
          }
        },
        line: 73
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 75,
            column: 10
          },
          end: {
            line: 75,
            column: 11
          }
        },
        loc: {
          start: {
            line: 75,
            column: 16
          },
          end: {
            line: 75,
            column: 31
          }
        },
        line: 75
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 77,
            column: 10
          },
          end: {
            line: 77,
            column: 11
          }
        },
        loc: {
          start: {
            line: 78,
            column: 8
          },
          end: {
            line: 81,
            column: 27
          }
        },
        line: 78
      },
      '11': {
        name: '(anonymous_11)',
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
            line: 91,
            column: 60
          }
        },
        line: 90
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 91,
            column: 10
          },
          end: {
            line: 91,
            column: 11
          }
        },
        loc: {
          start: {
            line: 91,
            column: 23
          },
          end: {
            line: 91,
            column: 59
          }
        },
        line: 91
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 21
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 27,
            column: 17
          },
          end: {
            line: 27,
            column: 21
          }
        }],
        line: 27
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
      '18': 0
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
      '0': [0]
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
      * Metis-backend
      * =======
      * Diffusion data access layer
      */

var _plugDb = require('../../utils/plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

var _metisSchemas = require('metis-schemas');

var _diffusions = require('./diffusions.design');

var _diffusions2 = _interopRequireDefault(_diffusions);

var _couchdb = require('../../utils/couchdb');

var _schemas = require('../../utils/schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Registering couchdb views related to diffusions objects
 */
cov_n9cb1kmrd.s[0]++;
(0, _couchdb.addDesign)(_plugDb2.default, 'diffusions', _diffusions2.default);

/**
 * Gets a list of diffusions with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
cov_n9cb1kmrd.s[1]++;
var getDiffusions = exports.getDiffusions = function getDiffusions(_ref) {
  var _ref$include_docs = _ref.include_docs,
      include_docs = _ref$include_docs === undefined ? (cov_n9cb1kmrd.b[0][0]++, true) : _ref$include_docs;
  cov_n9cb1kmrd.f[0]++;
  cov_n9cb1kmrd.s[2]++;

  return _plugDb2.default.viewAsync('diffusions', 'by_id', {
    include_docs: include_docs
  }).then(function (results) {
    cov_n9cb1kmrd.f[1]++;
    cov_n9cb1kmrd.s[3]++;
    return new _promise2.default(function (resolve) {
      cov_n9cb1kmrd.f[2]++;
      cov_n9cb1kmrd.s[4]++;
      return resolve(results.rows.map(function (doc) {
        cov_n9cb1kmrd.f[3]++;
        cov_n9cb1kmrd.s[5]++;
        return doc.doc;
      }));
    });
  });
};

/**
 * Gets a diffusion with a specific id
 * @param {object} parameters
 * @return {Promise}
 */
cov_n9cb1kmrd.s[6]++;
var getDiffusion = exports.getDiffusion = function getDiffusion(_ref2) {
  var id = _ref2.id;
  cov_n9cb1kmrd.f[4]++;
  cov_n9cb1kmrd.s[7]++;
  return _plugDb2.default.getAsync(id).then(function (diffusion) {
    cov_n9cb1kmrd.f[5]++;
    cov_n9cb1kmrd.s[8]++;
    return (
      // verify that data is compliant before returning it
      (0, _schemas.dataIsValid)(diffusion, _metisSchemas.Diffusion)
    );
  });
};

/**
 * Creates a new diffusion
 * @param {object} diffusion
 * @return {Promise}
 */
cov_n9cb1kmrd.s[9]++;
var createDiffusion = exports.createDiffusion = function createDiffusion(diffusion) {
  cov_n9cb1kmrd.f[6]++;
  cov_n9cb1kmrd.s[10]++;
  return (0, _schemas.dataIsValid)(diffusion, _metisSchemas.Diffusion).then(function () {
    cov_n9cb1kmrd.f[7]++;
    cov_n9cb1kmrd.s[11]++;
    return _plugDb2.default.insertAsync(diffusion);
  });
};

/**
 * Updates a diffusion
 * @param {string} id - id of diffusion to update
 * @param {object} diffusion - data to update
 * @return {Promise}
 */
cov_n9cb1kmrd.s[12]++;
var updateDiffusion = exports.updateDiffusion = function updateDiffusion(id, diffusion) {
  cov_n9cb1kmrd.f[8]++;
  cov_n9cb1kmrd.s[13]++;
  return (
    // validate
    (0, _schemas.dataIsValid)(diffusion, _metisSchemas.Diffusion)
    // get existing document
    .then(function () {
      cov_n9cb1kmrd.f[9]++;
      cov_n9cb1kmrd.s[14]++;
      return _plugDb2.default.getAsync(id);
    })
    // update with new rev
    .then(function (diffusionDb) {
      cov_n9cb1kmrd.f[10]++;
      cov_n9cb1kmrd.s[15]++;
      return _plugDb2.default.insertAsync((0, _extends3.default)({}, diffusion, {
        _rev: diffusionDb._rev
      }), diffusionDb._id);
    })
  );
};

/**
 * Deletes a diffusion
 * @param {object} diffusion - diffusion to delete
 * @return {Promise}
 */
cov_n9cb1kmrd.s[16]++;
var deleteDiffusion = exports.deleteDiffusion = function deleteDiffusion(_ref3) {
  var _id = _ref3._id;
  cov_n9cb1kmrd.f[11]++;
  cov_n9cb1kmrd.s[17]++;
  return _plugDb2.default.getAsync(_id).then(function (diffusion) {
    cov_n9cb1kmrd.f[12]++;
    cov_n9cb1kmrd.s[18]++;
    return _plugDb2.default.destroyAsync(_id, diffusion._rev);
  });
};