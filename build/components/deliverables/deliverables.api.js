'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_27gbb8n6e2 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/deliverables/deliverables.api.js',
      hash = 'fcf983184145d7010f779f4c31cc800c8104b6bf',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/deliverables/deliverables.api.js',
    statementMap: {
      '0': {
        start: {
          line: 22,
          column: 15
        },
        end: {
          line: 22,
          column: 35
        }
      },
      '1': {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 55
        }
      },
      '2': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 35
        }
      },
      '3': {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 33
        }
      },
      '4': {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 27,
          column: 35
        }
      },
      '5': {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 29,
          column: 39
        }
      },
      '6': {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 38
        }
      },
      '7': {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 31,
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
      '6': 0,
      '7': 0
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
      * This module provides route indexes between uri patterns and controllers
      * for the deliverables objects.
      * @module metis-backend/components/deliverables
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middlewares = require('../../utils/middlewares');

var _deliverables = require('./deliverables.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_27gbb8n6e2.s[0]++, new _express2.default.Router());

cov_27gbb8n6e2.s[1]++;
router.get('/:id/:filename', _deliverables.getDeliverableAttachment);
cov_27gbb8n6e2.s[2]++;
router.use(_middlewares.authenticateWithTokens);
cov_27gbb8n6e2.s[3]++;
router.get('/', _deliverables.getDeliverables);
cov_27gbb8n6e2.s[4]++;
router.get('/:id', _deliverables.getDeliverable);

cov_27gbb8n6e2.s[5]++;
router.post('/:id', _deliverables.createDeliverable);
cov_27gbb8n6e2.s[6]++;
router.put('/:id', _deliverables.updateDeliverable);
cov_27gbb8n6e2.s[7]++;
router.delete('/:id', _deliverables.deleteDeliverable);

exports.default = router;