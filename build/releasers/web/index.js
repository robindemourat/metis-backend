"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var cov_2jw51gk9sd = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/web/index.js",
      hash = "873e3417ba20e1464a47a9a34a66a67292caeb71",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/web/index.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 45
        }
      },
      "1": {
        start: {
          line: 6,
          column: 34
        },
        end: {
          line: 6,
          column: 43
        }
      }
    },
    fnMap: {
      "0": {
        name: "publish",
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 31
          }
        },
        loc: {
          start: {
            line: 5,
            column: 55
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 21
          },
          end: {
            line: 6,
            column: 22
          }
        },
        loc: {
          start: {
            line: 6,
            column: 34
          },
          end: {
            line: 6,
            column: 43
          }
        },
        line: 6
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

function publish() /* data, diffusion */{
  cov_2jw51gk9sd.f[0]++;
  cov_2jw51gk9sd.s[0]++;

  return new _promise2.default(function (resolve) {
    cov_2jw51gk9sd.f[1]++;
    cov_2jw51gk9sd.s[1]++;
    return resolve();
  });
}