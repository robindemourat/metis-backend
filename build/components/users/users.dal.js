'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_2ek24ycndq = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/users/users.dal.js',
      hash = '57c7fbf4792afb28e00bbc7a63b83ecaf401bbdc',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/users/users.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 31
        }
      },
      '1': {
        start: {
          line: 25,
          column: 24
        },
        end: {
          line: 68,
          column: 1
        }
      },
      '2': {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 67,
          column: 3
        }
      },
      '3': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 41,
          column: 6
        }
      },
      '4': {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 40,
          column: 11
        }
      },
      '5': {
        start: {
          line: 37,
          column: 12
        },
        end: {
          line: 39,
          column: 13
        }
      },
      '6': {
        start: {
          line: 38,
          column: 38
        },
        end: {
          line: 38,
          column: 45
        }
      },
      '7': {
        start: {
          line: 42,
          column: 9
        },
        end: {
          line: 67,
          column: 3
        }
      },
      '8': {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 54,
          column: 6
        }
      },
      '9': {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 53,
          column: 11
        }
      },
      '10': {
        start: {
          line: 50,
          column: 12
        },
        end: {
          line: 52,
          column: 13
        }
      },
      '11': {
        start: {
          line: 51,
          column: 38
        },
        end: {
          line: 51,
          column: 45
        }
      },
      '12': {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 66,
          column: 6
        }
      },
      '13': {
        start: {
          line: 60,
          column: 8
        },
        end: {
          line: 65,
          column: 11
        }
      },
      '14': {
        start: {
          line: 62,
          column: 12
        },
        end: {
          line: 64,
          column: 13
        }
      },
      '15': {
        start: {
          line: 63,
          column: 38
        },
        end: {
          line: 63,
          column: 45
        }
      },
      '16': {
        start: {
          line: 75,
          column: 23
        },
        end: {
          line: 103,
          column: 1
        }
      },
      '17': {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 102,
          column: 3
        }
      },
      '18': {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 84,
          column: 8
        }
      },
      '19': {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 33
        }
      },
      '20': {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 101,
          column: 14
        }
      },
      '21': {
        start: {
          line: 91,
          column: 14
        },
        end: {
          line: 100,
          column: 16
        }
      },
      '22': {
        start: {
          line: 92,
          column: 16
        },
        end: {
          line: 99,
          column: 17
        }
      },
      '23': {
        start: {
          line: 93,
          column: 18
        },
        end: {
          line: 93,
          column: 46
        }
      },
      '24': {
        start: {
          line: 98,
          column: 18
        },
        end: {
          line: 98,
          column: 48
        }
      },
      '25': {
        start: {
          line: 110,
          column: 26
        },
        end: {
          line: 112,
          column: 37
        }
      },
      '26': {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 112,
          column: 37
        }
      },
      '27': {
        start: {
          line: 112,
          column: 16
        },
        end: {
          line: 112,
          column: 36
        }
      },
      '28': {
        start: {
          line: 120,
          column: 26
        },
        end: {
          line: 131,
          column: 5
        }
      },
      '29': {
        start: {
          line: 122,
          column: 2
        },
        end: {
          line: 131,
          column: 5
        }
      },
      '30': {
        start: {
          line: 124,
          column: 16
        },
        end: {
          line: 124,
          column: 31
        }
      },
      '31': {
        start: {
          line: 127,
          column: 8
        },
        end: {
          line: 130,
          column: 22
        }
      },
      '32': {
        start: {
          line: 138,
          column: 26
        },
        end: {
          line: 140,
          column: 56
        }
      },
      '33': {
        start: {
          line: 139,
          column: 2
        },
        end: {
          line: 140,
          column: 56
        }
      },
      '34': {
        start: {
          line: 140,
          column: 24
        },
        end: {
          line: 140,
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
            column: 24
          },
          end: {
            line: 25,
            column: 25
          }
        },
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 68,
            column: 1
          }
        },
        line: 28
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 7
          }
        },
        loc: {
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 40,
            column: 11
          }
        },
        line: 35
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 36,
            column: 10
          },
          end: {
            line: 36,
            column: 11
          }
        },
        loc: {
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 39,
            column: 13
          }
        },
        line: 37
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 38,
            column: 31
          },
          end: {
            line: 38,
            column: 32
          }
        },
        loc: {
          start: {
            line: 38,
            column: 38
          },
          end: {
            line: 38,
            column: 45
          }
        },
        line: 38
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 47,
            column: 7
          }
        },
        loc: {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 53,
            column: 11
          }
        },
        line: 48
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 49,
            column: 10
          },
          end: {
            line: 49,
            column: 11
          }
        },
        loc: {
          start: {
            line: 50,
            column: 12
          },
          end: {
            line: 52,
            column: 13
          }
        },
        line: 50
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 51,
            column: 31
          },
          end: {
            line: 51,
            column: 32
          }
        },
        loc: {
          start: {
            line: 51,
            column: 38
          },
          end: {
            line: 51,
            column: 45
          }
        },
        line: 51
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 59,
            column: 6
          },
          end: {
            line: 59,
            column: 7
          }
        },
        loc: {
          start: {
            line: 60,
            column: 8
          },
          end: {
            line: 65,
            column: 11
          }
        },
        line: 60
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 61,
            column: 10
          },
          end: {
            line: 61,
            column: 11
          }
        },
        loc: {
          start: {
            line: 62,
            column: 12
          },
          end: {
            line: 64,
            column: 13
          }
        },
        line: 62
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 63,
            column: 31
          },
          end: {
            line: 63,
            column: 32
          }
        },
        loc: {
          start: {
            line: 63,
            column: 38
          },
          end: {
            line: 63,
            column: 45
          }
        },
        line: 63
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 75,
            column: 23
          },
          end: {
            line: 75,
            column: 24
          }
        },
        loc: {
          start: {
            line: 78,
            column: 6
          },
          end: {
            line: 103,
            column: 1
          }
        },
        line: 78
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 81,
            column: 12
          },
          end: {
            line: 81,
            column: 13
          }
        },
        loc: {
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 83,
            column: 33
          }
        },
        line: 83
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 90,
            column: 18
          },
          end: {
            line: 90,
            column: 19
          }
        },
        loc: {
          start: {
            line: 91,
            column: 14
          },
          end: {
            line: 100,
            column: 16
          }
        },
        line: 91
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 91,
            column: 26
          },
          end: {
            line: 91,
            column: 27
          }
        },
        loc: {
          start: {
            line: 91,
            column: 47
          },
          end: {
            line: 100,
            column: 15
          }
        },
        line: 91
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 110,
            column: 26
          },
          end: {
            line: 110,
            column: 27
          }
        },
        loc: {
          start: {
            line: 111,
            column: 2
          },
          end: {
            line: 112,
            column: 37
          }
        },
        line: 111
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 112,
            column: 10
          },
          end: {
            line: 112,
            column: 11
          }
        },
        loc: {
          start: {
            line: 112,
            column: 16
          },
          end: {
            line: 112,
            column: 36
          }
        },
        line: 112
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 120,
            column: 26
          },
          end: {
            line: 120,
            column: 27
          }
        },
        loc: {
          start: {
            line: 122,
            column: 2
          },
          end: {
            line: 131,
            column: 5
          }
        },
        line: 122
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 124,
            column: 10
          },
          end: {
            line: 124,
            column: 11
          }
        },
        loc: {
          start: {
            line: 124,
            column: 16
          },
          end: {
            line: 124,
            column: 31
          }
        },
        line: 124
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 126,
            column: 10
          },
          end: {
            line: 126,
            column: 11
          }
        },
        loc: {
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 130,
            column: 22
          }
        },
        line: 127
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 138,
            column: 26
          },
          end: {
            line: 138,
            column: 27
          }
        },
        loc: {
          start: {
            line: 139,
            column: 2
          },
          end: {
            line: 140,
            column: 56
          }
        },
        line: 139
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 140,
            column: 16
          },
          end: {
            line: 140,
            column: 17
          }
        },
        loc: {
          start: {
            line: 140,
            column: 24
          },
          end: {
            line: 140,
            column: 55
          }
        },
        line: 140
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 12
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 26,
            column: 10
          },
          end: {
            line: 26,
            column: 12
          }
        }],
        line: 26
      },
      '1': {
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
      },
      '2': {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        }, {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 67,
            column: 3
          }
        }],
        line: 29
      },
      '3': {
        loc: {
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 29,
            column: 35
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 29,
            column: 17
          }
        }, {
          start: {
            line: 29,
            column: 21
          },
          end: {
            line: 29,
            column: 35
          }
        }],
        line: 29
      },
      '4': {
        loc: {
          start: {
            line: 42,
            column: 9
          },
          end: {
            line: 67,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 42,
            column: 9
          },
          end: {
            line: 67,
            column: 3
          }
        }, {
          start: {
            line: 42,
            column: 9
          },
          end: {
            line: 67,
            column: 3
          }
        }],
        line: 42
      },
      '5': {
        loc: {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 102,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 102,
            column: 3
          }
        }, {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 102,
            column: 3
          }
        }],
        line: 79
      },
      '6': {
        loc: {
          start: {
            line: 92,
            column: 16
          },
          end: {
            line: 99,
            column: 17
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 92,
            column: 16
          },
          end: {
            line: 99,
            column: 17
          }
        }, {
          start: {
            line: 92,
            column: 16
          },
          end: {
            line: 99,
            column: 17
          }
        }],
        line: 92
      },
      '7': {
        loc: {
          start: {
            line: 92,
            column: 20
          },
          end: {
            line: 92,
            column: 53
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 92,
            column: 20
          },
          end: {
            line: 92,
            column: 31
          }
        }, {
          start: {
            line: 92,
            column: 35
          },
          end: {
            line: 92,
            column: 53
          }
        }],
        line: 92
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
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0
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
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0
    },
    b: {
      '0': [0],
      '1': [0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0]
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
      * User data access layer
      */

var _plugDb = require('../../utils/plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

var _metisSchemas = require('metis-schemas');

var _users = require('./users.design');

var _users2 = _interopRequireDefault(_users);

var _couchdb = require('../../utils/couchdb');

var _schemas = require('../../utils/schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Registering couchdb views related to users objects
 */
cov_2ek24ycndq.s[0]++;
(0, _couchdb.addDesign)(_plugDb2.default, 'users', _users2.default);

/**
 * Gets a list of users with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
cov_2ek24ycndq.s[1]++;
var getUsers = exports.getUsers = function getUsers(_ref) {
  var _ref$query = _ref.query,
      query = _ref$query === undefined ? (cov_2ek24ycndq.b[0][0]++, {}) : _ref$query,
      _ref$include_docs = _ref.include_docs,
      include_docs = _ref$include_docs === undefined ? (cov_2ek24ycndq.b[1][0]++, true) : _ref$include_docs;
  cov_2ek24ycndq.f[0]++;
  cov_2ek24ycndq.s[2]++;

  if ((cov_2ek24ycndq.b[3][0]++, query.email) && (cov_2ek24ycndq.b[3][1]++, query.password)) {
    cov_2ek24ycndq.b[2][0]++;
    cov_2ek24ycndq.s[3]++;

    return _plugDb2.default.viewAsync('users', 'by_email_and_password', {
      key: [query.email, query.password],
      include_docs: include_docs
    }).then(function (results) {
      cov_2ek24ycndq.f[1]++;
      cov_2ek24ycndq.s[4]++;
      return new _promise2.default(function (resolve) {
        cov_2ek24ycndq.f[2]++;
        cov_2ek24ycndq.s[5]++;
        return resolve(results.rows.map(function (doc) {
          cov_2ek24ycndq.f[3]++;
          cov_2ek24ycndq.s[6]++;
          return doc.doc;
        }));
      });
    });
  } else {
      cov_2ek24ycndq.b[2][1]++;
      cov_2ek24ycndq.s[7]++;
      if (query.email) {
        cov_2ek24ycndq.b[4][0]++;
        cov_2ek24ycndq.s[8]++;

        return _plugDb2.default.viewAsync('users', 'by_email', {
          key: query.email,
          include_docs: include_docs
        }).then(function (results) {
          cov_2ek24ycndq.f[4]++;
          cov_2ek24ycndq.s[9]++;
          return new _promise2.default(function (resolve) {
            cov_2ek24ycndq.f[5]++;
            cov_2ek24ycndq.s[10]++;
            return resolve(results.rows.map(function (doc) {
              cov_2ek24ycndq.f[6]++;
              cov_2ek24ycndq.s[11]++;
              return doc.doc;
            }));
          });
        });
      } else {
        cov_2ek24ycndq.b[4][1]++;
        cov_2ek24ycndq.s[12]++;

        return _plugDb2.default.viewAsync('users', 'by_email', {
          include_docs: include_docs
        }).then(function (results) {
          cov_2ek24ycndq.f[7]++;
          cov_2ek24ycndq.s[13]++;
          return new _promise2.default(function (resolve) {
            cov_2ek24ycndq.f[8]++;
            cov_2ek24ycndq.s[14]++;
            return resolve(results.rows.map(function (doc) {
              cov_2ek24ycndq.f[9]++;
              cov_2ek24ycndq.s[15]++;
              return doc.doc;
            }));
          });
        });
      }
    }
};

/**
 * Gets a user with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
cov_2ek24ycndq.s[16]++;
var getUser = exports.getUser = function getUser(_ref2) {
  var id = _ref2.id,
      email = _ref2.email;
  cov_2ek24ycndq.f[10]++;
  cov_2ek24ycndq.s[17]++;

  if (id) {
    cov_2ek24ycndq.b[5][0]++;
    cov_2ek24ycndq.s[18]++;

    return _plugDb2.default.getAsync(id).then(function (user) {
      cov_2ek24ycndq.f[11]++;
      cov_2ek24ycndq.s[19]++;
      return (
        // verify that data is compliant before returning it
        (0, _schemas.dataIsValid)(user, _metisSchemas.User)
      );
    });
  } else {
    cov_2ek24ycndq.b[5][1]++;
    cov_2ek24ycndq.s[20]++;

    return _plugDb2.default.viewAsync('users', 'by_email', {
      key: email,
      include_docs: true
    }).then(function (result) {
      cov_2ek24ycndq.f[12]++;
      cov_2ek24ycndq.s[21]++;
      return new _promise2.default(function (resolve, reject) {
        cov_2ek24ycndq.f[13]++;
        cov_2ek24ycndq.s[22]++;

        if ((cov_2ek24ycndq.b[7][0]++, result.rows) && (cov_2ek24ycndq.b[7][1]++, result.rows.length)) {
          cov_2ek24ycndq.b[6][0]++;
          cov_2ek24ycndq.s[23]++;

          resolve(result.rows[0].doc);
        } else {
          cov_2ek24ycndq.b[6][1]++;
          cov_2ek24ycndq.s[24]++;

          /**
           * @todo normalize this error
           */
          reject(new Error('no match'));
        }
      });
    });
  }
};

/**
 * Creates a new user
 * @param {object} user
 * @return {Promise}
 */
cov_2ek24ycndq.s[25]++;
var createUser = exports.createUser = function createUser(user) {
  cov_2ek24ycndq.f[14]++;
  cov_2ek24ycndq.s[26]++;
  return (0, _schemas.dataIsValid)(user, _metisSchemas.User).then(function () {
    cov_2ek24ycndq.f[15]++;
    cov_2ek24ycndq.s[27]++;
    return _plugDb2.default.insertAsync(user);
  });
};

/**
 * Updates a user
 * @param {string} id - id of user to update
 * @param {object} user - data to update
 * @return {Promise}
 */
cov_2ek24ycndq.s[28]++;
var updateUser = exports.updateUser = function updateUser(id, user) {
  cov_2ek24ycndq.f[16]++;
  cov_2ek24ycndq.s[29]++;
  return (
    // validate
    (0, _schemas.dataIsValid)(user, _metisSchemas.User)
    // get existing document
    .then(function () {
      cov_2ek24ycndq.f[17]++;
      cov_2ek24ycndq.s[30]++;
      return _plugDb2.default.getAsync(id);
    })
    // update with new rev
    .then(function (userDb) {
      cov_2ek24ycndq.f[18]++;
      cov_2ek24ycndq.s[31]++;
      return _plugDb2.default.insertAsync((0, _extends3.default)({}, user, {
        _rev: userDb._rev
      }), userDb._id);
    })
  );
};

/**
 * Deletes a user
 * @param {object} user - user to delete
 * @return {Promise}
 */
cov_2ek24ycndq.s[32]++;
var deleteUser = exports.deleteUser = function deleteUser(_ref3) {
  var _id = _ref3._id;
  cov_2ek24ycndq.f[19]++;
  cov_2ek24ycndq.s[33]++;
  return _plugDb2.default.getAsync(_id).then(function (user) {
    cov_2ek24ycndq.f[20]++;
    cov_2ek24ycndq.s[34]++;
    return _plugDb2.default.destroyAsync(_id, user._rev);
  });
};