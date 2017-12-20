'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_yzrnj60pb = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.api.js',
      hash = 'b028a95a69fdd9b9ccc08d5eb8ca7cd0f879ac3c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.api.js',
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
          column: 27
        }
      },
      '2': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 29
        }
      },
      '3': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 49
        }
      },
      '4': {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 33
        }
      },
      '5': {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 32
        }
      },
      '6': {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
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
      * Asset api
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _assets = require('./assets.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_yzrnj60pb.s[0]++, new _express2.default.Router());

cov_yzrnj60pb.s[1]++;
router.get('/', _assets.getAssets);
cov_yzrnj60pb.s[2]++;
router.get('/:id', _assets.getAsset);
cov_yzrnj60pb.s[3]++;
router.get('/:id/:filename', _assets.getAssetAttachment);

cov_yzrnj60pb.s[4]++;
router.post('/:id', _assets.createAsset);
cov_yzrnj60pb.s[5]++;
router.put('/:id', _assets.updateAsset);
cov_yzrnj60pb.s[6]++;
router.delete('/:id', _assets.deleteAsset);

exports.default = router;