'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_513kyso2p = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/montages/montages.api.js',
      hash = '7a8cc6e77c2087e03de226ed30807ff2e0d49244',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/montages/montages.api.js',
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
          column: 29
        }
      },
      '2': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 31
        }
      },
      '3': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 32
        }
      },
      '4': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 34
        }
      },
      '5': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 37
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
      * for the montages objects.
      * @module metis-backend/components/montages
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _montages = require('./montages.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_513kyso2p.s[0]++, new _express2.default.Router());

cov_513kyso2p.s[1]++;
router.get('/', _montages.getMontages);
cov_513kyso2p.s[2]++;
router.get('/:id', _montages.getMontage);
cov_513kyso2p.s[3]++;
router.post('/', _montages.createMontage);
cov_513kyso2p.s[4]++;
router.put('/:id', _montages.updateMontage);
cov_513kyso2p.s[5]++;
router.delete('/:id', _montages.deleteMontage);

exports.default = router;