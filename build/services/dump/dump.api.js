'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1hotq6qzgt = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/dump/dump.api.js',
      hash = 'e8de93f38d4af111d52613bb2b5a4e31f3c3b732',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/dump/dump.api.js',
    statementMap: {
      '0': {
        start: {
          line: 16,
          column: 15
        },
        end: {
          line: 16,
          column: 35
        }
      },
      '1': {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 33
        }
      },
      '2': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 29
        }
      },
      '3': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
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
      '3': 0
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
      * for the dump service.
      * @module metis-backend/services/dump
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dump = require('./dump.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_1hotq6qzgt.s[0]++, new _express2.default.Router());

cov_1hotq6qzgt.s[1]++;
router.get('/', _dump.downloadAllData);
cov_1hotq6qzgt.s[2]++;
router.post('/', _dump.uploadData);
cov_1hotq6qzgt.s[3]++;
router.delete('/', _dump.deleteAllData);

exports.default = router;