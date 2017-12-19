'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.controller = undefined;

var cov_fhupnqzwj = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/auth/index.js',
      hash = '83048b5d8ae51938812ad225de9d1c7f5df9e588',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/auth/index.js',
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
}();

var _auth = require('./auth.controller');

var _auth2 = _interopRequireDefault(_auth);

var _auth3 = require('./auth.api');

var _auth4 = _interopRequireDefault(_auth3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.controller = _auth2.default;
exports.api = _auth4.default;