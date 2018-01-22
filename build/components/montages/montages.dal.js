'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMontage = exports.updateMontage = exports.createMontage = exports.getMontage = exports.getMontages = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_j8p5ej56a = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/montages/montages.dal.js',
      hash = 'b8bf65a0e9100c53dd7c7a7dc03a17d8113d1dc7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/montages/montages.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 34
        }
      },
      '1': {
        start: {
          line: 25,
          column: 27
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
          column: 26
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
          column: 36
        }
      },
      '9': {
        start: {
          line: 61,
          column: 29
        },
        end: {
          line: 63,
          column: 40
        }
      },
      '10': {
        start: {
          line: 62,
          column: 2
        },
        end: {
          line: 63,
          column: 40
        }
      },
      '11': {
        start: {
          line: 63,
          column: 16
        },
        end: {
          line: 63,
          column: 39
        }
      },
      '12': {
        start: {
          line: 71,
          column: 29
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
          column: 25
        }
      },
      '16': {
        start: {
          line: 89,
          column: 29
        },
        end: {
          line: 91,
          column: 56
        }
      },
      '17': {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 91,
          column: 56
        }
      },
      '18': {
        start: {
          line: 91,
          column: 21
        },
        end: {
          line: 91,
          column: 55
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 25,
            column: 27
          },
          end: {
            line: 25,
            column: 28
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
            column: 26
          },
          end: {
            line: 47,
            column: 27
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
            column: 36
          }
        },
        line: 53
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 61,
            column: 29
          },
          end: {
            line: 61,
            column: 30
          }
        },
        loc: {
          start: {
            line: 62,
            column: 2
          },
          end: {
            line: 63,
            column: 40
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
            column: 39
          }
        },
        line: 63
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 71,
            column: 29
          },
          end: {
            line: 71,
            column: 30
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
            column: 25
          }
        },
        line: 78
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 89,
            column: 29
          },
          end: {
            line: 89,
            column: 30
          }
        },
        loc: {
          start: {
            line: 90,
            column: 2
          },
          end: {
            line: 91,
            column: 56
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
            column: 21
          },
          end: {
            line: 91,
            column: 55
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
      * Montage data access layer
      */

var _plugDb = require('../../utils/plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

var _metisSchemas = require('metis-schemas');

var _montages = require('./montages.design');

var _montages2 = _interopRequireDefault(_montages);

var _couchdb = require('../../utils/couchdb');

var _schemas = require('../../utils/schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Registering couchdb views related to montages objects
 */
cov_j8p5ej56a.s[0]++;
(0, _couchdb.addDesign)(_plugDb2.default, 'montages', _montages2.default);

/**
 * Gets a list of montages with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
cov_j8p5ej56a.s[1]++;
var getMontages = exports.getMontages = function getMontages(_ref) {
  var _ref$include_docs = _ref.include_docs,
      include_docs = _ref$include_docs === undefined ? (cov_j8p5ej56a.b[0][0]++, true) : _ref$include_docs;
  cov_j8p5ej56a.f[0]++;
  cov_j8p5ej56a.s[2]++;

  return _plugDb2.default.viewAsync('montages', 'by_id', {
    include_docs: include_docs
  }).then(function (results) {
    cov_j8p5ej56a.f[1]++;
    cov_j8p5ej56a.s[3]++;
    return new _promise2.default(function (resolve) {
      cov_j8p5ej56a.f[2]++;
      cov_j8p5ej56a.s[4]++;
      return resolve(results.rows.map(function (doc) {
        cov_j8p5ej56a.f[3]++;
        cov_j8p5ej56a.s[5]++;
        return doc.doc;
      }));
    });
  });
};

/**
 * Gets a montage with a specific id
 * @param {object} parameters
 * @return {Promise}
 */
cov_j8p5ej56a.s[6]++;
var getMontage = exports.getMontage = function getMontage(_ref2) {
  var id = _ref2.id;
  cov_j8p5ej56a.f[4]++;
  cov_j8p5ej56a.s[7]++;
  return _plugDb2.default.getAsync(id).then(function (montage) {
    cov_j8p5ej56a.f[5]++;
    cov_j8p5ej56a.s[8]++;
    return (
      // verify that data is compliant before returning it
      (0, _schemas.dataIsValid)(montage, _metisSchemas.Montage)
    );
  });
};

/**
 * Creates a new montage
 * @param {object} montage
 * @return {Promise}
 */
cov_j8p5ej56a.s[9]++;
var createMontage = exports.createMontage = function createMontage(montage) {
  cov_j8p5ej56a.f[6]++;
  cov_j8p5ej56a.s[10]++;
  return (0, _schemas.dataIsValid)(montage, _metisSchemas.Montage).then(function () {
    cov_j8p5ej56a.f[7]++;
    cov_j8p5ej56a.s[11]++;
    return _plugDb2.default.insertAsync(montage);
  });
};

/**
 * Updates a montage
 * @param {string} id - id of montage to update
 * @param {object} montage - data to update
 * @return {Promise}
 */
cov_j8p5ej56a.s[12]++;
var updateMontage = exports.updateMontage = function updateMontage(id, montage) {
  cov_j8p5ej56a.f[8]++;
  cov_j8p5ej56a.s[13]++;
  return (
    // validate
    (0, _schemas.dataIsValid)(montage, _metisSchemas.Montage)
    // get existing document
    .then(function () {
      cov_j8p5ej56a.f[9]++;
      cov_j8p5ej56a.s[14]++;
      return _plugDb2.default.getAsync(id);
    })
    // update with new rev
    .then(function (montageDb) {
      cov_j8p5ej56a.f[10]++;
      cov_j8p5ej56a.s[15]++;
      return _plugDb2.default.insertAsync((0, _extends3.default)({}, montage, {
        _rev: montageDb._rev
      }), montageDb._id);
    })
  );
};

/**
 * Deletes a montage
 * @param {object} montage - montage to delete
 * @return {Promise}
 */
cov_j8p5ej56a.s[16]++;
var deleteMontage = exports.deleteMontage = function deleteMontage(_ref3) {
  var _id = _ref3._id;
  cov_j8p5ej56a.f[11]++;
  cov_j8p5ej56a.s[17]++;
  return _plugDb2.default.getAsync(_id).then(function (montage) {
    cov_j8p5ej56a.f[12]++;
    cov_j8p5ej56a.s[18]++;
    return _plugDb2.default.destroyAsync(_id, montage._rev);
  });
};