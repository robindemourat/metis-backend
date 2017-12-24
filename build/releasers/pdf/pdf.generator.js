'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_kdrnqpj18 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/pdf/pdf.generator.js',
      hash = 'bead712c43dfa4fe80f57ae0b1055c60aa60a308',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/pdf/pdf.generator.js',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 43,
          column: 5
        }
      },
      '1': {
        start: {
          line: 17,
          column: 16
        },
        end: {
          line: 23,
          column: 5
        }
      },
      '2': {
        start: {
          line: 26,
          column: 15
        },
        end: {
          line: 26,
          column: 27
        }
      },
      '3': {
        start: {
          line: 27,
          column: 21
        },
        end: {
          line: 27,
          column: 48
        }
      },
      '4': {
        start: {
          line: 28,
          column: 20
        },
        end: {
          line: 28,
          column: 46
        }
      },
      '5': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 42,
          column: 21
        }
      },
      '6': {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 34,
          column: 21
        }
      },
      '7': {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 40
        }
      },
      '8': {
        start: {
          line: 39,
          column: 18
        },
        end: {
          line: 39,
          column: 34
        }
      },
      '9': {
        start: {
          line: 40,
          column: 18
        },
        end: {
          line: 40,
          column: 33
        }
      }
    },
    fnMap: {
      '0': {
        name: 'generatePdf',
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 35
          }
        },
        loc: {
          start: {
            line: 14,
            column: 20
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 14
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 15,
            column: 22
          }
        },
        loc: {
          start: {
            line: 15,
            column: 42
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 15
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 30,
            column: 12
          },
          end: {
            line: 30,
            column: 13
          }
        },
        loc: {
          start: {
            line: 30,
            column: 18
          },
          end: {
            line: 35,
            column: 7
          }
        },
        line: 30
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 36,
            column: 12
          },
          end: {
            line: 36,
            column: 13
          }
        },
        loc: {
          start: {
            line: 36,
            column: 18
          },
          end: {
            line: 38,
            column: 7
          }
        },
        line: 36
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 39,
            column: 13
          }
        },
        loc: {
          start: {
            line: 39,
            column: 18
          },
          end: {
            line: 39,
            column: 34
          }
        },
        line: 39
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 40,
            column: 12
          },
          end: {
            line: 40,
            column: 13
          }
        },
        loc: {
          start: {
            line: 40,
            column: 18
          },
          end: {
            line: 40,
            column: 33
          }
        },
        line: 40
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
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
}(); /* eslint no-unused-vars : 0 */


exports.default = generatePdf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _uuid = require('uuid');

var _fsExtra = require('fs-extra');

var _prince = require('prince');

var _prince2 = _interopRequireDefault(_prince);

var _reactComponents = require('../../utils/react-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-unused-vars : 0 */

function generatePdf(_ref, onFileGenerated) {
  var Component = _ref.Component,
      props = _ref.props,
      outputDirPath = _ref.outputDirPath,
      tempDirPath = _ref.tempDirPath;
  cov_kdrnqpj18.f[0]++;
  cov_kdrnqpj18.s[0]++;

  return new _promise2.default(function (resolve, reject) {
    cov_kdrnqpj18.f[1]++;


    var str = (cov_kdrnqpj18.s[1]++, _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _reactComponents.TranslationsProvider,
      null,
      _react2.default.createElement(Component, props)
    )));

    var id = (cov_kdrnqpj18.s[2]++, (0, _uuid.v4)());
    var tempHtml = (cov_kdrnqpj18.s[3]++, tempDirPath + '/' + id + '.html');
    var tempPdf = (cov_kdrnqpj18.s[4]++, tempDirPath + '/' + id + '.pdf');
    cov_kdrnqpj18.s[5]++;
    (0, _fsExtra.writeFile)(tempHtml, str).then(function () {
      cov_kdrnqpj18.f[2]++;
      cov_kdrnqpj18.s[6]++;

      return (0, _prince2.default)().inputs(tempHtml).output(tempPdf).execute();
    }).then(function () {
      cov_kdrnqpj18.f[3]++;
      cov_kdrnqpj18.s[7]++;

      return onFileGenerated(tempPdf);
    }).then(function () {
      cov_kdrnqpj18.f[4]++;
      cov_kdrnqpj18.s[8]++;
      return (0, _fsExtra.remove)(tempHtml);
    }).then(function () {
      cov_kdrnqpj18.f[5]++;
      cov_kdrnqpj18.s[9]++;
      return (0, _fsExtra.remove)(tempPdf);
    }).then(resolve).catch(reject);
  });
}