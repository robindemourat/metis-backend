'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = undefined;

var cov_2nxxhoh134 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/micropublication/index.js',
      hash = '026940cf718999dc11b698fc237bab0e91bc3760',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/micropublication/index.js',
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

var _micropublication = require('./micropublication.controller');

var _controller = _interopRequireWildcard(_micropublication);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.controller = _controller;