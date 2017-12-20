'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.dal = exports.controller = exports.design = undefined;

var cov_2le1sddcan = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/index.js',
      hash = '8476a6b47fbd77586adb1c6471426b912a4d88f8',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/index.js',
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


var _assets = require('./assets.design');

var _assets2 = _interopRequireDefault(_assets);

var _assets3 = require('./assets.controller');

var _controller = _interopRequireWildcard(_assets3);

var _assets4 = require('./assets.dal');

var _dal = _interopRequireWildcard(_assets4);

var _assets5 = require('./assets.api');

var _assets6 = _interopRequireDefault(_assets5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.design = _assets2.default;
// view controller

exports.controller = _controller;
// database abstraction layer operations

exports.dal = _dal;
// api / routes bindings

exports.api = _assets6.default;