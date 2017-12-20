'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.dal = exports.controller = exports.design = undefined;

var cov_22ucle89ae = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/index.js',
      hash = '6d4c51e6028dc80d688f49e92c3420d9b8d46229',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/index.js',
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


var _users = require('./users.design');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('./users.controller');

var _controller = _interopRequireWildcard(_users3);

var _users4 = require('./users.dal');

var _dal = _interopRequireWildcard(_users4);

var _users5 = require('./users.api');

var _users6 = _interopRequireDefault(_users5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.design = _users2.default;
// view controller

exports.controller = _controller;
// database abstraction layer operations

exports.dal = _dal;
// api / routes bindings

exports.api = _users6.default;