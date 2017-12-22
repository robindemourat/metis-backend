'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_22zt848e3k = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/deliverables/deliverables.api.js',
      hash = 'df9ac1492c3b19470fe04806ad9c4c2e1256d1d8',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/deliverables/deliverables.api.js',
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
          column: 33
        }
      },
      '2': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 35
        }
      },
      '3': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 55
        }
      },
      '4': {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 39
        }
      },
      '5': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 38
        }
      },
      '6': {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 41
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
      * Plurishing-backend
      * =======
      * Deliverable api
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _deliverables = require('./deliverables.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_22zt848e3k.s[0]++, new _express2.default.Router());

cov_22zt848e3k.s[1]++;
router.get('/', _deliverables.getDeliverables);
cov_22zt848e3k.s[2]++;
router.get('/:id', _deliverables.getDeliverable);
cov_22zt848e3k.s[3]++;
router.get('/:id/:filename', _deliverables.getDeliverableAttachment);

cov_22zt848e3k.s[4]++;
router.post('/:id', _deliverables.createDeliverable);
cov_22zt848e3k.s[5]++;
router.put('/:id', _deliverables.updateDeliverable);
cov_22zt848e3k.s[6]++;
router.delete('/:id', _deliverables.deleteDeliverable);

exports.default = router;