'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.dal = exports.controller = exports.design = undefined;

var cov_1vc3fk8kf6 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/resources/index.js',
      hash = '75987353f52dd3f3d2cf567eff2a5f3cc097e7e7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/resources/index.js',
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
}(); // resource-related db views


var _resources = require('./resources.design');

var _resources2 = _interopRequireDefault(_resources);

var _resources3 = require('./resources.controller');

var _controller = _interopRequireWildcard(_resources3);

var _resources4 = require('./resources.dal');

var _dal = _interopRequireWildcard(_resources4);

var _resources5 = require('./resources.api');

var _resources6 = _interopRequireDefault(_resources5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.design = _resources2.default;
// view controller

exports.controller = _controller;
// database abstraction layer operations

exports.dal = _dal;
// api / routes bindings

exports.api = _resources6.default;