'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1rwoz7jvgf = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/html2img/html2img.service.js',
      hash = 'ff049b9de80c076504efe59b249dabc1ce1f34c8',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/html2img/html2img.service.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 24,
          column: 5
        }
      },
      '1': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 18
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 9,
            column: 15
          },
          end: {
            line: 9,
            column: 16
          }
        },
        loc: {
          start: {
            line: 9,
            column: 47
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 9
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 11
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
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
      * This module provides main service function
      * for the html2img service.
      * @module metis-backend/services/html2img
      */

exports.default = function (html, path, callback) {
  cov_1rwoz7jvgf.f[0]++;
  cov_1rwoz7jvgf.s[0]++;

  (0, _webshot2.default)(html, path, {
    siteType: 'html',
    windowSize: {
      width: 900,
      // height: 450
      height: 50 // setting a mini height to have well formed images
    },
    shotSize: {
      width: 'all',
      height: 'all'
    }
  }, function (err) {
    cov_1rwoz7jvgf.f[1]++;
    cov_1rwoz7jvgf.s[1]++;

    callback(err);
  });
};

var _webshot = require('webshot');

var _webshot2 = _interopRequireDefault(_webshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }