'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var cov_25akiw6xvc = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/populateDb.js',
      hash = '2dfa0d1abea078984f4b1a2fb7ad2a0e505f00e6',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/populateDb.js',
    statementMap: {
      '0': {
        start: {
          line: 11,
          column: 14
        },
        end: {
          line: 17,
          column: 1
        }
      },
      '1': {
        start: {
          line: 19,
          column: 17
        },
        end: {
          line: 38,
          column: 1
        }
      },
      '2': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      '3': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 20
        }
      },
      '4': {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 37,
          column: 5
        }
      },
      '5': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 30,
          column: 15
        }
      },
      '6': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 39
        }
      },
      '7': {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 53
        }
      },
      '8': {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 42,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 19,
            column: 18
          }
        },
        loc: {
          start: {
            line: 19,
            column: 24
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 19
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 9
          }
        },
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 30,
            column: 15
          }
        },
        line: 26
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 32,
            column: 9
          }
        },
        loc: {
          start: {
            line: 32,
            column: 16
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 32
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 35,
            column: 9
          },
          end: {
            line: 35,
            column: 10
          }
        },
        loc: {
          start: {
            line: 35,
            column: 18
          },
          end: {
            line: 37,
            column: 3
          }
        },
        line: 35
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }, {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        }],
        line: 21
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
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0]
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
      * Plurishing-backend
      * =======
      * Server population script
      */
/* eslint no-console : 0 */


var _crypto = require('./crypto');

var _plugDb = require('./plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var admin = (cov_25akiw6xvc.s[0]++, {
  type: 'user',
  name: 'admin',
  password: 'admin',
  admin: true,
  email: 'robin.demourat@protonmail.com'
});

cov_25akiw6xvc.s[1]++;
var addAdmin = function addAdmin(doc) {
  cov_25akiw6xvc.f[0]++;

  var _rev = void 0;
  cov_25akiw6xvc.s[2]++;
  if (doc) {
    cov_25akiw6xvc.b[0][0]++;
    cov_25akiw6xvc.s[3]++;

    _rev = doc._rev;
  } else {
    cov_25akiw6xvc.b[0][1]++;
  }
  cov_25akiw6xvc.s[4]++;
  (0, _crypto.hash)(admin.password).then(function (password) {
    cov_25akiw6xvc.f[1]++;
    cov_25akiw6xvc.s[5]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, admin, {
      _rev: _rev,
      password: password
    }), 'admin');
  }).then(function (info) {
    cov_25akiw6xvc.f[2]++;
    cov_25akiw6xvc.s[6]++;

    console.log('created admin', info);
  }).catch(function (error) {
    cov_25akiw6xvc.f[3]++;
    cov_25akiw6xvc.s[7]++;

    console.log('error while creating admin', error);
  });
};

cov_25akiw6xvc.s[8]++;
_plugDb2.default.getAsync('admin').then(addAdmin).catch(addAdmin);