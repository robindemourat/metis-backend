'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2hrr04exqb = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/diffusions/diffusions.api.js',
      hash = 'd402ee9773ffff6c761e6daba705e374d1cd329e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/diffusions/diffusions.api.js',
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
      * Metis-backend
      * =======
      * Diffusion api
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _diffusions = require('./diffusions.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_2hrr04exqb.s[0]++, new _express2.default.Router());

cov_2hrr04exqb.s[1]++;
router.get('/', _diffusions.getDiffusions);
cov_2hrr04exqb.s[2]++;
router.get('/:id', _diffusions.getDiffusion);
cov_2hrr04exqb.s[3]++;
router.post('/', _diffusions.createDiffusion);
cov_2hrr04exqb.s[4]++;
router.put('/:id', _diffusions.updateDiffusion);
cov_2hrr04exqb.s[5]++;
router.delete('/:id', _diffusions.deleteDiffusion);

exports.default = router;