'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_2h66hwxyav = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/users.dal.js',
      hash = '85822708e65a1d685a7401a16bc8f01c37e421fc',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/users.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 46,
          column: 3
        }
      },
      '1': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 23,
          column: 5
        }
      },
      '2': {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 22
        }
      },
      '3': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 45,
          column: 7
        }
      },
      '4': {
        start: {
          line: 29,
          column: 22
        },
        end: {
          line: 31,
          column: 23
        }
      },
      '5': {
        start: {
          line: 30,
          column: 24
        },
        end: {
          line: 30,
          column: 62
        }
      },
      '6': {
        start: {
          line: 36,
          column: 22
        },
        end: {
          line: 38,
          column: 23
        }
      },
      '7': {
        start: {
          line: 37,
          column: 24
        },
        end: {
          line: 37,
          column: 45
        }
      },
      '8': {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 52
        }
      },
      '9': {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 44,
          column: 36
        }
      },
      '10': {
        start: {
          line: 47,
          column: 0
        },
        end: {
          line: 49,
          column: 20
        }
      },
      '11': {
        start: {
          line: 54,
          column: 13
        },
        end: {
          line: 62,
          column: 2
        }
      },
      '12': {
        start: {
          line: 65,
          column: 24
        },
        end: {
          line: 89,
          column: 4
        }
      },
      '13': {
        start: {
          line: 67,
          column: 2
        },
        end: {
          line: 89,
          column: 4
        }
      },
      '14': {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 88,
          column: 6
        }
      },
      '15': {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 82,
          column: 28
        }
      },
      '16': {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 87,
          column: 7
        }
      },
      '17': {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 84,
          column: 20
        }
      },
      '18': {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 86,
          column: 21
        }
      },
      '19': {
        start: {
          line: 91,
          column: 23
        },
        end: {
          line: 93,
          column: 1
        }
      },
      '20': {
        start: {
          line: 92,
          column: 2
        },
        end: {
          line: 92,
          column: 30
        }
      },
      '21': {
        start: {
          line: 95,
          column: 26
        },
        end: {
          line: 98,
          column: 1
        }
      },
      '22': {
        start: {
          line: 96,
          column: 12
        },
        end: {
          line: 96,
          column: 29
        }
      },
      '23': {
        start: {
          line: 97,
          column: 2
        },
        end: {
          line: 97,
          column: 18
        }
      },
      '24': {
        start: {
          line: 100,
          column: 26
        },
        end: {
          line: 107,
          column: 6
        }
      },
      '25': {
        start: {
          line: 101,
          column: 2
        },
        end: {
          line: 107,
          column: 6
        }
      },
      '26': {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 105,
          column: 7
        }
      },
      '27': {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 104,
          column: 32
        }
      },
      '28': {
        start: {
          line: 106,
          column: 6
        },
        end: {
          line: 106,
          column: 27
        }
      },
      '29': {
        start: {
          line: 110,
          column: 26
        },
        end: {
          line: 114,
          column: 6
        }
      },
      '30': {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 114,
          column: 6
        }
      },
      '31': {
        start: {
          line: 113,
          column: 6
        },
        end: {
          line: 113,
          column: 27
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 19,
            column: 18
          },
          end: {
            line: 19,
            column: 19
          }
        },
        loc: {
          start: {
            line: 19,
            column: 25
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 28,
            column: 19
          },
          end: {
            line: 28,
            column: 20
          }
        },
        loc: {
          start: {
            line: 28,
            column: 33
          },
          end: {
            line: 32,
            column: 21
          }
        },
        line: 28
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 35,
            column: 19
          },
          end: {
            line: 35,
            column: 20
          }
        },
        loc: {
          start: {
            line: 35,
            column: 33
          },
          end: {
            line: 39,
            column: 21
          }
        },
        line: 35
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 42,
            column: 24
          },
          end: {
            line: 42,
            column: 25
          }
        },
        loc: {
          start: {
            line: 42,
            column: 51
          },
          end: {
            line: 45,
            column: 5
          }
        },
        line: 42
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 65,
            column: 24
          },
          end: {
            line: 65,
            column: 25
          }
        },
        loc: {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 89,
            column: 4
          }
        },
        line: 67
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 67,
            column: 14
          },
          end: {
            line: 67,
            column: 15
          }
        },
        loc: {
          start: {
            line: 67,
            column: 35
          },
          end: {
            line: 89,
            column: 3
          }
        },
        line: 67
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 81,
            column: 7
          },
          end: {
            line: 81,
            column: 8
          }
        },
        loc: {
          start: {
            line: 81,
            column: 21
          },
          end: {
            line: 88,
            column: 5
          }
        },
        line: 81
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 91,
            column: 23
          },
          end: {
            line: 91,
            column: 24
          }
        },
        loc: {
          start: {
            line: 91,
            column: 29
          },
          end: {
            line: 93,
            column: 1
          }
        },
        line: 91
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 95,
            column: 26
          },
          end: {
            line: 95,
            column: 27
          }
        },
        loc: {
          start: {
            line: 95,
            column: 34
          },
          end: {
            line: 98,
            column: 1
          }
        },
        line: 95
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 100,
            column: 26
          },
          end: {
            line: 100,
            column: 27
          }
        },
        loc: {
          start: {
            line: 101,
            column: 2
          },
          end: {
            line: 107,
            column: 6
          }
        },
        line: 101
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 102,
            column: 10
          },
          end: {
            line: 102,
            column: 11
          }
        },
        loc: {
          start: {
            line: 102,
            column: 20
          },
          end: {
            line: 107,
            column: 5
          }
        },
        line: 102
      },
      '11': {
        name: '(anonymous_11)',
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
            line: 114,
            column: 6
          }
        },
        line: 111
      },
      '12': {
        name: '(anonymous_12)',
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
            column: 18
          },
          end: {
            line: 114,
            column: 5
          }
        },
        line: 112
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        }, {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        }],
        line: 21
      },
      '1': {
        loc: {
          start: {
            line: 29,
            column: 22
          },
          end: {
            line: 31,
            column: 23
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 29,
            column: 22
          },
          end: {
            line: 31,
            column: 23
          }
        }, {
          start: {
            line: 29,
            column: 22
          },
          end: {
            line: 31,
            column: 23
          }
        }],
        line: 29
      },
      '2': {
        loc: {
          start: {
            line: 36,
            column: 22
          },
          end: {
            line: 38,
            column: 23
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 36,
            column: 22
          },
          end: {
            line: 38,
            column: 23
          }
        }, {
          start: {
            line: 36,
            column: 22
          },
          end: {
            line: 38,
            column: 23
          }
        }],
        line: 36
      },
      '3': {
        loc: {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        }, {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        }],
        line: 83
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
      '31': 0
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
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0]
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
//  * User data access layer
//  */
// import 'promise-mongo';
// import User from './user.schema';

var _couchdbModel = require('couchdb-model');

var _couchdbModel2 = _interopRequireDefault(_couchdbModel);

var _plugDb = require('../../utils/plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import User from './user.schema.js';


/**
 * Registering couchdb views into the User collection
 */
cov_2h66hwxyav.s[0]++;
var addDesign = function addDesign(doc) {
  cov_2h66hwxyav.f[0]++;

  var _rev = void 0;
  cov_2h66hwxyav.s[1]++;
  if (doc) {
    cov_2h66hwxyav.b[0][0]++;
    cov_2h66hwxyav.s[2]++;

    _rev = doc._rev;
  } else {
    cov_2h66hwxyav.b[0][1]++;
  }
  cov_2h66hwxyav.s[3]++;
  _plugDb2.default.insert({
    _rev: _rev,
    "views": {
      "by_email_and_password": {
        "map": function (doc) {
          cov_2h66hwxyav.f[1]++;
          cov_2h66hwxyav.s[4]++;

          if (doc.type === 'user') {
            cov_2h66hwxyav.b[1][0]++;
            cov_2h66hwxyav.s[5]++;

            emit([doc.email, doc.password], null);
          } else {
            cov_2h66hwxyav.b[1][1]++;
          }
        }.toString()
      },
      "by_email": {
        "map": function (doc) {
          cov_2h66hwxyav.f[2]++;
          cov_2h66hwxyav.s[6]++;

          if (doc.type === 'user') {
            cov_2h66hwxyav.b[2][0]++;
            cov_2h66hwxyav.s[7]++;

            emit(doc.email, doc);
          } else {
            cov_2h66hwxyav.b[2][1]++;
          }
        }.toString()
      }
    }
  }, '_design/users', function (error, response) {
    cov_2h66hwxyav.f[3]++;
    cov_2h66hwxyav.s[8]++;

    console.log("registered _design/users views");
    cov_2h66hwxyav.s[9]++;
    console.log('error: ', error);
  });
};
cov_2h66hwxyav.s[10]++;
_plugDb2.default.getAsync('_design/users').then(addDesign).catch(addDesign);

/**
 * Creating the model
 */
var User = (cov_2h66hwxyav.s[11]++, (0, _couchdbModel2.default)(_plugDb2.default, {
  views: ['_design/users/all', {
    path: '_design/users',
    name: 'by_email_and_password'
  }]
}));

cov_2h66hwxyav.s[12]++;
var getUsers = exports.getUsers = function getUsers() {
  cov_2h66hwxyav.f[4]++;
  cov_2h66hwxyav.s[13]++;
  return (
    // User.findAll()
    new _promise2.default(function (resolve, reject) {
      cov_2h66hwxyav.f[5]++;
      cov_2h66hwxyav.s[14]++;

      //   // User.findManyByEmailAndPassword(null, {
      //   //   // keys: ['admin', 'admin'],
      //   //   include_docs: true
      //   // }, (err, res) => {
      //   //   console.log(err, res);
      //   //   if (err) {
      //   //     reject(err);
      //   //   } else {
      //   //     resolve(res);
      //   //   }
      //   // })
      _plugDb2.default.view('users', 'by_email', {
        include_docs: true
      }, function (err, res) {
        cov_2h66hwxyav.f[6]++;
        cov_2h66hwxyav.s[15]++;

        console.log(err, res);
        cov_2h66hwxyav.s[16]++;
        if (err) {
          cov_2h66hwxyav.b[3][0]++;
          cov_2h66hwxyav.s[17]++;

          reject(err);
        } else {
          cov_2h66hwxyav.b[3][1]++;
          cov_2h66hwxyav.s[18]++;

          resolve(res);
        }
      });
    })
  );
};

cov_2h66hwxyav.s[19]++;
var getUser = exports.getUser = function getUser(id) {
  cov_2h66hwxyav.f[7]++;
  cov_2h66hwxyav.s[20]++;

  return User.findOneByID(id);
};

cov_2h66hwxyav.s[21]++;
var createUser = exports.createUser = function createUser(user) {
  cov_2h66hwxyav.f[8]++;

  var u = (cov_2h66hwxyav.s[22]++, User.create(user));
  cov_2h66hwxyav.s[23]++;
  return u.save();
};

cov_2h66hwxyav.s[24]++;
var updateUser = exports.updateUser = function updateUser(id, user) {
  cov_2h66hwxyav.f[9]++;
  cov_2h66hwxyav.s[25]++;
  return User.findOneByID(user).then(function (userDB) {
    cov_2h66hwxyav.f[10]++;
    cov_2h66hwxyav.s[26]++;

    for (key in user) {
      cov_2h66hwxyav.s[27]++;

      userDB[key] = user[key];
    }
    cov_2h66hwxyav.s[28]++;
    return userDB.save();
  });
};

cov_2h66hwxyav.s[29]++;
var deleteUser = exports.deleteUser = function deleteUser(id) {
  cov_2h66hwxyav.f[11]++;
  cov_2h66hwxyav.s[30]++;
  return User.findOneByID(user).then(function (user) {
    cov_2h66hwxyav.f[12]++;
    cov_2h66hwxyav.s[31]++;

    return user.delete();
  });
};

exports.default = User;