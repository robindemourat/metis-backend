'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1kvp7cgsoq = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/services/html2img/html2img.api.js',
      hash = '967c06d719e3838c50ab92683494fe272b17316a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/services/html2img/html2img.api.js',
    statementMap: {
      '0': {
        start: {
          line: 13,
          column: 15
        },
        end: {
          line: 13,
          column: 35
        }
      },
      '1': {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 27
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
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
}();

/**
 * Plurishing-backend
 * =======
 * Asset api
 */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _html2img = require('./html2img.controller');

var _html2img2 = _interopRequireDefault(_html2img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_1kvp7cgsoq.s[0]++, new _express2.default.Router());

cov_1kvp7cgsoq.s[1]++;
router.post('/', _html2img2.default);

exports.default = router;