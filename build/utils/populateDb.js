'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var cov_25akiw6xvc = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/populateDb.js',
      hash = '2a0a311feb135cd1acb3e20a5061d64f6ba56bef',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/populateDb.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 36
        },
        end: {
          line: 12,
          column: 47
        }
      },
      '1': {
        start: {
          line: 15,
          column: 14
        },
        end: {
          line: 21,
          column: 1
        }
      },
      '2': {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 42,
          column: 1
        }
      },
      '3': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      '4': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 20
        }
      },
      '5': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 41,
          column: 5
        }
      },
      '6': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 34,
          column: 15
        }
      },
      '7': {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 40
        }
      },
      '8': {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 54
        }
      },
      '9': {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 47,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 23,
            column: 17
          },
          end: {
            line: 23,
            column: 18
          }
        },
        loc: {
          start: {
            line: 23,
            column: 24
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 23
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        },
        loc: {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 34,
            column: 15
          }
        },
        line: 30
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 36,
            column: 9
          }
        },
        loc: {
          start: {
            line: 36,
            column: 16
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 36
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 39,
            column: 9
          },
          end: {
            line: 39,
            column: 10
          }
        },
        loc: {
          start: {
            line: 39,
            column: 18
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 39
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }, {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }],
        line: 25
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
      '9': 0
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

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (cov_25akiw6xvc.s[0]++, (0, _config.getConfig)()),
    adminPassword = _ref.adminPassword,
    adminEmail = _ref.adminEmail;

// admin object


var admin = (cov_25akiw6xvc.s[1]++, {
  type: 'user',
  name: 'admin',
  password: adminPassword,
  admin: true,
  email: adminEmail
});

cov_25akiw6xvc.s[2]++;
var addAdmin = function addAdmin(doc) {
  cov_25akiw6xvc.f[0]++;

  var _rev = void 0;
  cov_25akiw6xvc.s[3]++;
  if (doc) {
    cov_25akiw6xvc.b[0][0]++;
    cov_25akiw6xvc.s[4]++;

    _rev = doc._rev;
  } else {
    cov_25akiw6xvc.b[0][1]++;
  }
  cov_25akiw6xvc.s[5]++;
  (0, _crypto.hash)(admin.password).then(function (password) {
    cov_25akiw6xvc.f[1]++;
    cov_25akiw6xvc.s[6]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, admin, {
      _rev: _rev,
      password: password
    }), 'admin');
  }).then(function (info) {
    cov_25akiw6xvc.f[2]++;
    cov_25akiw6xvc.s[7]++;

    console.info('created admin', info);
  }).catch(function (error) {
    cov_25akiw6xvc.f[3]++;
    cov_25akiw6xvc.s[8]++;

    console.info('error while creating admin', error);
  });
};

// create or update admin
cov_25akiw6xvc.s[9]++;
_plugDb2.default.getAsync('admin').then(addAdmin).catch(addAdmin);