'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.montageToMail = exports.mail = undefined;

var cov_1xy25d9b11 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/mailing/index.js',
      hash = 'f054be3a32d33c733c0b59e87e8d3d394d05028d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/mailing/index.js',
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
      * This module provides an entrypoint to the mailing publication releaser
      * @module metis-backend/releasers/mailing
      */


var _mail2 = require('./mail');

var _mail3 = _interopRequireDefault(_mail2);

var _montageToMail2 = require('./montageToMail');

var _montageToMail3 = _interopRequireDefault(_montageToMail2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.mail = _mail3.default;
exports.montageToMail = _montageToMail3.default;