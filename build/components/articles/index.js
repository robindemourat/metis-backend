'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.dal = exports.controller = exports.schema = undefined;

var cov_z7emgwd1d = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/index.js',
      hash = '09b0a53daebf6935fb1ad25174cf97a75ae051e7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/index.js',
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

var _article = require('./article.schema');

var _article2 = _interopRequireDefault(_article);

var _articles = require('./articles.controller');

var _controller = _interopRequireWildcard(_articles);

var _articles2 = require('./articles.dal');

var _dal = _interopRequireWildcard(_articles2);

var _articles3 = require('./articles.api');

var _articles4 = _interopRequireDefault(_articles3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.schema = _article2.default;
exports.controller = _controller;
exports.dal = _dal;
exports.api = _articles4.default;