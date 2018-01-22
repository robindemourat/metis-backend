'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.controller = undefined;

var cov_50cae31er = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/auth/index.js',
      hash = 'f7dc8fcb4eef83c74bf8c17f2a9292ddd7eab3f1',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/auth/index.js',
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
      * This module provides an entrypoint to the auth component of the applications
      * @module metis-backend/components/auth
      */

var _auth = require('./auth.controller');

var _auth2 = _interopRequireDefault(_auth);

var _auth3 = require('./auth.api');

var _auth4 = _interopRequireDefault(_auth3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.controller = _auth2.default;
exports.api = _auth4.default;