'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.dal = exports.controller = exports.design = undefined;

var cov_1c12sm1yh3 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/deliverables/index.js',
      hash = '1d0ca8a9b0641235ed6099d4f1f29349d01cfc3e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/deliverables/index.js',
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
}(); // user-related db views


var _deliverables = require('./deliverables.design');

var _deliverables2 = _interopRequireDefault(_deliverables);

var _deliverables3 = require('./deliverables.controller');

var _controller = _interopRequireWildcard(_deliverables3);

var _deliverables4 = require('./deliverables.dal');

var _dal = _interopRequireWildcard(_deliverables4);

var _deliverables5 = require('./deliverables.api');

var _deliverables6 = _interopRequireDefault(_deliverables5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.design = _deliverables2.default;
// view controller

exports.controller = _controller;
// database abstraction layer operations

exports.dal = _dal;
// api / routes bindings

exports.api = _deliverables6.default;