'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.service = exports.router = undefined;

var cov_2pt5amb0v = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/html2img/index.js',
      hash = '9f68c1c065d18d4e7f8768026505ae80ca422247',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/html2img/index.js',
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
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
      * This module provides an entrypoint to the html2img service of the application
      * @module metis-backend/services/html2img
      */

var _html2img = require('./html2img.api');

var _html2img2 = _interopRequireDefault(_html2img);

var _html2img3 = require('./html2img.service');

var _html2img4 = _interopRequireDefault(_html2img3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.router = _html2img2.default;
exports.service = _html2img4.default;