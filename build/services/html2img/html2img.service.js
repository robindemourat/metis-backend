'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2qi3fx3eqm = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/services/html2img/html2img.service.js',
      hash = 'b604cfba3a9a7cbd991e902b06b1dc767f422dd1',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/services/html2img/html2img.service.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 18,
          column: 5
        }
      },
      '1': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 18
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 16
          }
        },
        loc: {
          start: {
            line: 3,
            column: 47
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 3
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 11
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 16
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
}();

exports.default = function (html, path, callback) {
  cov_2qi3fx3eqm.f[0]++;
  cov_2qi3fx3eqm.s[0]++;

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
    cov_2qi3fx3eqm.f[1]++;
    cov_2qi3fx3eqm.s[1]++;

    callback(err);
  });
};

var _webshot = require('webshot');

var _webshot2 = _interopRequireDefault(_webshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }