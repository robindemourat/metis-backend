'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComposition = exports.updateComposition = exports.createComposition = exports.getComposition = exports.getCompositions = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_vgwyx12ia = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/compositions/compositions.dal.js',
      hash = '30b5d4f942aff08d2a02c0b9ba36a5dacc851d65',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/compositions/compositions.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 38
        }
      },
      '1': {
        start: {
          line: 25,
          column: 31
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
          column: 30
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
          column: 40
        }
      },
      '9': {
        start: {
          line: 61,
          column: 33
        },
        end: {
          line: 63,
          column: 44
        }
      },
      '10': {
        start: {
          line: 62,
          column: 2
        },
        end: {
          line: 63,
          column: 44
        }
      },
      '11': {
        start: {
          line: 63,
          column: 16
        },
        end: {
          line: 63,
          column: 43
        }
      },
      '12': {
        start: {
          line: 71,
          column: 33
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
          column: 29
        }
      },
      '16': {
        start: {
          line: 89,
          column: 33
        },
        end: {
          line: 91,
          column: 64
        }
      },
      '17': {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 91,
          column: 64
        }
      },
      '18': {
        start: {
          line: 91,
          column: 25
        },
        end: {
          line: 91,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 25,
            column: 31
          },
          end: {
            line: 25,
            column: 32
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
            column: 30
          },
          end: {
            line: 47,
            column: 31
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
            column: 40
          }
        },
        line: 53
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 61,
            column: 33
          },
          end: {
            line: 61,
            column: 34
          }
        },
        loc: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 63,
            column: 44
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
            column: 43
          }
        },
        line: 63
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 71,
            column: 33
          },
          end: {
            line: 71,
            column: 34
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
            column: 29
          }
        },
        line: 78
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 89,
            column: 33
          },
          end: {
            line: 89,
            column: 34
          }
        },
        loc: {
          start: {
            line: 90,
            column: 2
          },
          end: {
            line: 91,
            column: 64
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
            column: 25
          },
          end: {
            line: 91,
            column: 63
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
      * Composition data access layer
      */

var _plugDb = require('../../utils/plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

var _metisSchemas = require('metis-schemas');

var _compositions = require('./compositions.design');

var _compositions2 = _interopRequireDefault(_compositions);

var _couchdb = require('../../utils/couchdb');

var _schemas = require('../../utils/schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Registering couchdb views related to compositions objects
 */
cov_vgwyx12ia.s[0]++;
(0, _couchdb.addDesign)(_plugDb2.default, 'compositions', _compositions2.default);

/**
 * Gets a list of compositions with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
cov_vgwyx12ia.s[1]++;
var getCompositions = exports.getCompositions = function getCompositions(_ref) {
  var _ref$include_docs = _ref.include_docs,
      include_docs = _ref$include_docs === undefined ? (cov_vgwyx12ia.b[0][0]++, true) : _ref$include_docs;
  cov_vgwyx12ia.f[0]++;
  cov_vgwyx12ia.s[2]++;

  return _plugDb2.default.viewAsync('compositions', 'by_id', {
    include_docs: include_docs
  }).then(function (results) {
    cov_vgwyx12ia.f[1]++;
    cov_vgwyx12ia.s[3]++;
    return new _promise2.default(function (resolve) {
      cov_vgwyx12ia.f[2]++;
      cov_vgwyx12ia.s[4]++;
      return resolve(results.rows.map(function (doc) {
        cov_vgwyx12ia.f[3]++;
        cov_vgwyx12ia.s[5]++;
        return doc.doc;
      }));
    });
  });
};

/**
 * Gets a composition with a specific id
 * @param {object} parameters
 * @return {Promise}
 */
cov_vgwyx12ia.s[6]++;
var getComposition = exports.getComposition = function getComposition(_ref2) {
  var id = _ref2.id;
  cov_vgwyx12ia.f[4]++;
  cov_vgwyx12ia.s[7]++;
  return _plugDb2.default.getAsync(id).then(function (composition) {
    cov_vgwyx12ia.f[5]++;
    cov_vgwyx12ia.s[8]++;
    return (
      // verify that returned data is compliant before returning it
      (0, _schemas.dataIsValid)(composition, _metisSchemas.Composition)
    );
  });
};

/**
 * Creates a new composition
 * @param {object} composition
 * @return {Promise}
 */
cov_vgwyx12ia.s[9]++;
var createComposition = exports.createComposition = function createComposition(composition) {
  cov_vgwyx12ia.f[6]++;
  cov_vgwyx12ia.s[10]++;
  return (0, _schemas.dataIsValid)(composition, _metisSchemas.Composition).then(function () {
    cov_vgwyx12ia.f[7]++;
    cov_vgwyx12ia.s[11]++;
    return _plugDb2.default.insertAsync(composition);
  });
};

/**
 * Updates a composition
 * @param {string} id - id of composition to update
 * @param {object} composition - data to update
 * @return {Promise}
 */
cov_vgwyx12ia.s[12]++;
var updateComposition = exports.updateComposition = function updateComposition(id, composition) {
  cov_vgwyx12ia.f[8]++;
  cov_vgwyx12ia.s[13]++;
  return (
    // validate
    (0, _schemas.dataIsValid)(composition, _metisSchemas.Composition)
    // get existing document
    .then(function () {
      cov_vgwyx12ia.f[9]++;
      cov_vgwyx12ia.s[14]++;
      return _plugDb2.default.getAsync(id);
    })
    // update with new rev
    .then(function (compositionDb) {
      cov_vgwyx12ia.f[10]++;
      cov_vgwyx12ia.s[15]++;
      return _plugDb2.default.insertAsync((0, _extends3.default)({}, composition, {
        _rev: compositionDb._rev
      }), compositionDb._id);
    })
  );
};

/**
 * Deletes a composition
 * @param {object} composition - composition to delete
 * @return {Promise}
 */
cov_vgwyx12ia.s[16]++;
var deleteComposition = exports.deleteComposition = function deleteComposition(_ref3) {
  var _id = _ref3._id;
  cov_vgwyx12ia.f[11]++;
  cov_vgwyx12ia.s[17]++;
  return _plugDb2.default.getAsync(_id).then(function (composition) {
    cov_vgwyx12ia.f[12]++;
    cov_vgwyx12ia.s[18]++;
    return _plugDb2.default.destroyAsync(_id, composition._rev);
  });
};