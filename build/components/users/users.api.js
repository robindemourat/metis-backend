'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_ldm6pvqkv = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/users/users.api.js',
      hash = 'bec2f65a1107af41241669b69bd1e09e1d425c10',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/users/users.api.js',
    statementMap: {
      '0': {
        start: {
          line: 18,
          column: 15
        },
        end: {
          line: 18,
          column: 35
        }
      },
      '1': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 26
        }
      },
      '2': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 28
        }
      },
      '3': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 29
        }
      },
      '4': {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 52
        }
      },
      '5': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 31
        }
      },
      '6': {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 34
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {},
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
      * Metis-backend
      * =======
      * User api
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('./users.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_ldm6pvqkv.s[0]++, new _express2.default.Router());

cov_ldm6pvqkv.s[1]++;
router.get('/', _users.getUsers);
cov_ldm6pvqkv.s[2]++;
router.get('/:id', _users.getUser);
cov_ldm6pvqkv.s[3]++;
router.post('/', _users.createUser);
// password change is particularly protected (only own user can access it)
cov_ldm6pvqkv.s[4]++;
router.post('/change-password', _users.changeUserPassword);
cov_ldm6pvqkv.s[5]++;
router.put('/:id', _users.updateUser);
cov_ldm6pvqkv.s[6]++;
router.delete('/:id', _users.deleteUser);

exports.default = router;