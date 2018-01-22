'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_sv81ouu9l = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/data-provider/data-provider.api.js',
      hash = '2e9ab3546a4a75f56647dd5af0e05b3943b7c5ce',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/data-provider/data-provider.api.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 15
        },
        end: {
          line: 12,
          column: 35
        }
      },
      '1': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 43
        }
      },
      '2': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 45
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
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
      * for the data provider service.
      * @module metis-backend/services/data-provider
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dataProvider = require('./data-provider.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_sv81ouu9l.s[0]++, new _express2.default.Router());

cov_sv81ouu9l.s[1]++;
router.get('/montage/:id', _dataProvider.getMontageData);
cov_sv81ouu9l.s[2]++;
router.get('/asset/:id', _dataProvider.getAssetAttachment);

exports.default = router;