'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.dal = exports.controller = exports.design = undefined;

var cov_1lwyt2kwgf = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/index.js',
      hash = '63309f58383e1f2eef87b174d25828bd83fa44b6',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/diffusions/index.js',
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
}(); // diffusion-related db views


var _diffusions = require('./diffusions.design');

var _diffusions2 = _interopRequireDefault(_diffusions);

var _diffusions3 = require('./diffusions.controller');

var _controller = _interopRequireWildcard(_diffusions3);

var _diffusions4 = require('./diffusions.dal');

var _dal = _interopRequireWildcard(_diffusions4);

var _diffusions5 = require('./diffusions.api');

var _diffusions6 = _interopRequireDefault(_diffusions5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.design = _diffusions2.default;
// view controller

exports.controller = _controller;
// database abstraction layer operations

exports.dal = _dal;
// api / routes bindings

exports.api = _diffusions6.default;