'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.montageToMail = exports.mail = undefined;

var cov_t1tlt5azn = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/mailing/index.js',
      hash = '0668352706a73868242a946edcb043ffcc5dabcc',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/mailing/index.js',
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
      * Multimodal Publishing utils
      * ===========================
      * mailing releaser
      * ===========================
      * This module publishes content to mailing.
      * @module mpu/releasers/mailing
      */


var _mail2 = require('./mail');

var _mail3 = _interopRequireDefault(_mail2);

var _montageToMail2 = require('./montageToMail');

var _montageToMail3 = _interopRequireDefault(_montageToMail2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.mail = _mail3.default;
exports.montageToMail = _montageToMail3.default;