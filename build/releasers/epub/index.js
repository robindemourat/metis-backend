"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var cov_1ea3uoml1a = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/epub/index.js",
      hash = "3f5cc0ae18dca9610d65b969691f3d5a6db3b00e",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/epub/index.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 45
        }
      },
      "1": {
        start: {
          line: 4,
          column: 34
        },
        end: {
          line: 4,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "publish",
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 31
          }
        },
        loc: {
          start: {
            line: 3,
            column: 76
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 4,
            column: 21
          },
          end: {
            line: 4,
            column: 22
          }
        },
        loc: {
          start: {
            line: 4,
            column: 34
          },
          end: {
            line: 4,
            column: 43
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

exports.default = publish;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function publish() /* data, diffusion, mode = 'reflowable' */{
  cov_1ea3uoml1a.f[0]++;
  cov_1ea3uoml1a.s[0]++;

  return new _promise2.default(function (resolve) {
    cov_1ea3uoml1a.f[1]++;
    cov_1ea3uoml1a.s[1]++;
    return resolve();
  });
}