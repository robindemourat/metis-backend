'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var cov_izqdnzm4g = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/data-provider/index.js',
      hash = 'a411a8ed33d0a92788d00b36bdfee76bfd5ae287',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/data-provider/index.js',
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
      * This module provides an entrypoint to the data-provider service of the application
      * @module metis-backend/services/data-provider
      */

var _dataProvider = require('./data-provider.api');

var _dataProvider2 = _interopRequireDefault(_dataProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.router = _dataProvider2.default;