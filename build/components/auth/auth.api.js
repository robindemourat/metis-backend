'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1en15y3zz4 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/auth/auth.api.js',
      hash = '7e4375618363f3e0c432b1dadbad28995afb5b43',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/auth/auth.api.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 35
        }
      },
      '1': {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 54
        }
      },
      '2': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 32
        }
      },
      '3': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 29
        }
      },
      '4': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 7
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
      '4': 0
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
}();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./auth.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_1en15y3zz4.s[0]++, new _express2.default.Router());

cov_1en15y3zz4.s[1]++;
router.post('/request-password-reset', _auth.resetPassword);
cov_1en15y3zz4.s[2]++;
router.post('/sign-up', _auth.signup);
cov_1en15y3zz4.s[3]++;
router.post('/login', _auth.login);
cov_1en15y3zz4.s[4]++;
router;

exports.default = router;