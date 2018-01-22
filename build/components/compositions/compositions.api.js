'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1u17j2ghhe = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/compositions/compositions.api.js',
      hash = 'f55266fa7461f5e077edc2c591465b1ca8653419',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/compositions/compositions.api.js',
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
          column: 33
        }
      },
      '2': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 35
        }
      },
      '3': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 36
        }
      },
      '4': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 38
        }
      },
      '5': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
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
      * This module provides route indexes between uri patterns and controllers
      * for the compositions objects.
      * @module metis-backend/components/compositions
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compositions = require('./compositions.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_1u17j2ghhe.s[0]++, new _express2.default.Router());

cov_1u17j2ghhe.s[1]++;
router.get('/', _compositions.getCompositions);
cov_1u17j2ghhe.s[2]++;
router.get('/:id', _compositions.getComposition);
cov_1u17j2ghhe.s[3]++;
router.post('/', _compositions.createComposition);
cov_1u17j2ghhe.s[4]++;
router.put('/:id', _compositions.updateComposition);
cov_1u17j2ghhe.s[5]++;
router.delete('/:id', _compositions.deleteComposition);

exports.default = router;