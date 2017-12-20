'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_241xpbkvcn = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/resources/resources.api.js',
      hash = '23a36e07e172add3fdaed510d2b436ed372948a9',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/resources/resources.api.js',
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
          column: 30
        }
      },
      '2': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 32
        }
      },
      '3': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 33
        }
      },
      '4': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 35
        }
      },
      '5': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 38
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
      * Resource api
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _resources = require('./resources.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_241xpbkvcn.s[0]++, new _express2.default.Router());

cov_241xpbkvcn.s[1]++;
router.get('/', _resources.getResources);
cov_241xpbkvcn.s[2]++;
router.get('/:id', _resources.getResource);
cov_241xpbkvcn.s[3]++;
router.post('/', _resources.createResource);
cov_241xpbkvcn.s[4]++;
router.put('/:id', _resources.updateResource);
cov_241xpbkvcn.s[5]++;
router.delete('/:id', _resources.deleteResource);

exports.default = router;