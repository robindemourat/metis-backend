"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.release = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var cov_27caz4pvrq = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/micropublication/micropublication.controller.js",
      hash = "850bd715cda2f3c38a4e3b2e0bd453643f04a1b7",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/micropublication/micropublication.controller.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 23
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 10,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 23
          },
          end: {
            line: 5,
            column: 24
          }
        },
        loc: {
          start: {
            line: 5,
            column: 42
          },
          end: {
            line: 11,
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
            column: 22
          },
          end: {
            line: 6,
            column: 23
          }
        },
        loc: {
          start: {
            line: 6,
            column: 47
          },
          end: {
            line: 10,
            column: 3
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_27caz4pvrq.s[0]++;
var release = exports.release = function release() /*montageId*/{
  cov_27caz4pvrq.f[0]++;
  cov_27caz4pvrq.s[1]++;

  return new _promise2.default(function () /*resolve, reject*/{
    // fetch montage
    // fetch dependencies
    // register release operations to perform

    cov_27caz4pvrq.f[1]++;
  });
};