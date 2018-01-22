'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_tnxaix1zt = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/assets/assets.api.js',
      hash = 'b077ca91e3b9079ed8a52c8b133fcdf8bbcda2b3',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/assets/assets.api.js',
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
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 49
        }
      },
      '2': {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 28,
          column: 35
        }
      },
      '3': {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 27
        }
      },
      '4': {
        start: {
          line: 31,
          column: 0
        },
        end: {
          line: 31,
          column: 29
        }
      },
      '5': {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 33,
          column: 33
        }
      },
      '6': {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 32
        }
      },
      '7': {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 35,
          column: 35
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
      * for the assets objects.
      * @module metis-backend/components/assets
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _assets = require('./assets.controller');

var _middlewares = require('../../utils/middlewares');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_tnxaix1zt.s[0]++, new _express2.default.Router());

// only this route is public
cov_tnxaix1zt.s[1]++;
router.get('/:id/:filename', _assets.getAssetAttachment);

// other routes are protected by an access token
cov_tnxaix1zt.s[2]++;
router.use(_middlewares.authenticateWithTokens);

cov_tnxaix1zt.s[3]++;
router.get('/', _assets.getAssets);
cov_tnxaix1zt.s[4]++;
router.get('/:id', _assets.getAsset);

cov_tnxaix1zt.s[5]++;
router.post('/:id', _assets.createAsset);
cov_tnxaix1zt.s[6]++;
router.put('/:id', _assets.updateAsset);
cov_tnxaix1zt.s[7]++;
router.delete('/:id', _assets.deleteAsset);

exports.default = router;