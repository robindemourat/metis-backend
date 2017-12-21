'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_dkgubufbr = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/diffusions.api.js',
      hash = '88d09c23490b58f88bd3342092a36f95a760fc04',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/diffusions.api.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 15
        },
        end: {
          line: 17,
          column: 35
        }
      },
      '1': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 31
        }
      },
      '2': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 33
        }
      },
      '3': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 34
        }
      },
      '4': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 36
        }
      },
      '5': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 39
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
      '5': 0
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
      * Plurishing-backend
      * =======
      * Diffusion api
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _diffusions = require('./diffusions.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_dkgubufbr.s[0]++, new _express2.default.Router());

cov_dkgubufbr.s[1]++;
router.get('/', _diffusions.getDiffusions);
cov_dkgubufbr.s[2]++;
router.get('/:id', _diffusions.getDiffusion);
cov_dkgubufbr.s[3]++;
router.post('/', _diffusions.createDiffusion);
cov_dkgubufbr.s[4]++;
router.put('/:id', _diffusions.updateDiffusion);
cov_dkgubufbr.s[5]++;
router.delete('/:id', _diffusions.deleteDiffusion);

exports.default = router;