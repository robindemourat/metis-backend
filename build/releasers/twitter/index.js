'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.montageToTweet = exports.tweet = undefined;

var cov_1hy90l6eog = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/twitter/index.js',
      hash = '05f6ec33cf5bd6ef83fa24dbbfb7dd7862171a64',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/twitter/index.js',
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
      * twitter releaser
      * ===========================
      * This module publishes content to twitter.
      * @module mpu/releasers/twitter
      */


var _tweet2 = require('./tweet');

var _tweet3 = _interopRequireDefault(_tweet2);

var _montageToTweet2 = require('./montageToTweet');

var _montageToTweet3 = _interopRequireDefault(_montageToTweet2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.tweet = _tweet3.default;
exports.montageToTweet = _montageToTweet3.default;