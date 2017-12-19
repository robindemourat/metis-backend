'use strict';

var cov_25akiw6xvc = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/populateDb.js',
      hash = '887a07149680312bed9d8a9496f7dfdf9d0d483b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/populateDb.js',
    statementMap: {
      '0': {
        start: {
          line: 37,
          column: 14
        },
        end: {
          line: 43,
          column: 1
        }
      },
      '1': {
        start: {
          line: 57,
          column: 17
        },
        end: {
          line: 63,
          column: 4
        }
      },
      '2': {
        start: {
          line: 57,
          column: 23
        },
        end: {
          line: 63,
          column: 4
        }
      },
      '3': {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 39
        }
      },
      '4': {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 53
        }
      },
      '5': {
        start: {
          line: 65,
          column: 0
        },
        end: {
          line: 67,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 57,
            column: 17
          },
          end: {
            line: 57,
            column: 18
          }
        },
        loc: {
          start: {
            line: 57,
            column: 23
          },
          end: {
            line: 63,
            column: 4
          }
        },
        line: 57
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 58,
            column: 8
          },
          end: {
            line: 58,
            column: 9
          }
        },
        loc: {
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 58
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 61,
            column: 9
          },
          end: {
            line: 61,
            column: 10
          }
        },
        loc: {
          start: {
            line: 61,
            column: 18
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 61
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
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
      * Plurishing-backend
      * =======
      * Server population script
      */
/* eslint no-console : 0 */
// import {createArticle} from '../components/articles/articles.dal';
// import {createUser} from '../components/users/users.dal';
// import {hash} from './crypto';

var _plugDb = require('./plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

var _users = require('../components/users/users.dal');

var _users2 = _interopRequireDefault(_users);

var _uuid = require('uuid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const config = require('./config').getConfig();

// const {couchdbName, couchdbUri} = config;


// const log = console.log;

// /**
//  * Define init objects
//  */
// const mockArticle1 = {
//   title: 'foo',
//   content: 'bar'
// };

// const mockArticle2 = {
//   title: 'bar2',
//   content: 'foo2'
// };

var admin = (cov_25akiw6xvc.s[0]++, {
  type: 'user',
  name: 'admin',
  password: 'admin',
  admin: true,
  email: 'robin.demourat@protonmail.com'
});

// const adminDB = User.create({
//   _id: 'admin',
//   data: admin,
//   createdAt: Date.now()
// });

// adminDB.save();

// User.findAll()
//   .then(res => console.log('res', res));


cov_25akiw6xvc.s[1]++;
var addAdmin = function addAdmin() {
  cov_25akiw6xvc.f[0]++;
  cov_25akiw6xvc.s[2]++;
  return _plugDb2.default.insertAsync(admin, 'admin').then(function (info) {
    cov_25akiw6xvc.f[1]++;
    cov_25akiw6xvc.s[3]++;

    console.log('created admin', info);
  }).catch(function (error) {
    cov_25akiw6xvc.f[2]++;
    cov_25akiw6xvc.s[4]++;

    console.log('error while creating admin', error);
  });
};

cov_25akiw6xvc.s[5]++;
_plugDb2.default.getAsync('admin').then(addAdmin).catch(addAdmin);