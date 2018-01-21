'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_kdrnqpj18 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/pdf/pdf.generator.js',
      hash = 'dfb8304ddfef7b18a53951d607753180daef8b93',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/pdf/pdf.generator.js',
    statementMap: {
      '0': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 68,
          column: 5
        }
      },
      '1': {
        start: {
          line: 24,
          column: 16
        },
        end: {
          line: 48,
          column: 5
        }
      },
      '2': {
        start: {
          line: 51,
          column: 15
        },
        end: {
          line: 51,
          column: 27
        }
      },
      '3': {
        start: {
          line: 52,
          column: 21
        },
        end: {
          line: 52,
          column: 48
        }
      },
      '4': {
        start: {
          line: 53,
          column: 20
        },
        end: {
          line: 53,
          column: 48
        }
      },
      '5': {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 67,
          column: 21
        }
      },
      '6': {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 59,
          column: 21
        }
      },
      '7': {
        start: {
          line: 62,
          column: 8
        },
        end: {
          line: 62,
          column: 40
        }
      },
      '8': {
        start: {
          line: 64,
          column: 18
        },
        end: {
          line: 64,
          column: 34
        }
      },
      '9': {
        start: {
          line: 65,
          column: 18
        },
        end: {
          line: 65,
          column: 33
        }
      }
    },
    fnMap: {
      '0': {
        name: 'generatePdf',
        decl: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 35
          }
        },
        loc: {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 69,
            column: 1
          }
        },
        line: 22
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 21
          },
          end: {
            line: 23,
            column: 22
          }
        },
        loc: {
          start: {
            line: 23,
            column: 42
          },
          end: {
            line: 68,
            column: 3
          }
        },
        line: 23
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 55,
            column: 12
          },
          end: {
            line: 55,
            column: 13
          }
        },
        loc: {
          start: {
            line: 55,
            column: 18
          },
          end: {
            line: 60,
            column: 7
          }
        },
        line: 55
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 61,
            column: 12
          },
          end: {
            line: 61,
            column: 13
          }
        },
        loc: {
          start: {
            line: 61,
            column: 18
          },
          end: {
            line: 63,
            column: 7
          }
        },
        line: 61
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 64,
            column: 12
          },
          end: {
            line: 64,
            column: 13
          }
        },
        loc: {
          start: {
            line: 64,
            column: 18
          },
          end: {
            line: 64,
            column: 34
          }
        },
        line: 64
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 65,
            column: 12
          },
          end: {
            line: 65,
            column: 13
          }
        },
        loc: {
          start: {
            line: 65,
            column: 18
          },
          end: {
            line: 65,
            column: 33
          }
        },
        line: 65
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 13
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 21,
            column: 11
          },
          end: {
            line: 21,
            column: 13
          }
        }],
        line: 21
      }
    },
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
    b: {
      '0': [0]
    },
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

var _PdfNoteContentPointer = require('plurishing-shared/dist/components/views/static/PdfNoteContentPointer');

var _PdfNoteContentPointer2 = _interopRequireDefault(_PdfNoteContentPointer);

var _PdfNotePointerPointer = require('plurishing-shared/dist/components/views/static/PdfNotePointerPointer');

var _PdfNotePointerPointer2 = _interopRequireDefault(_PdfNotePointerPointer);

var _PdfLink = require('plurishing-shared/dist/components/views/static/PdfLink');

var _PdfLink2 = _interopRequireDefault(_PdfLink);

var _reactComponents = require('../../utils/react-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-unused-vars : 0 */

function generatePdf(_ref, onFileGenerated) {
  var Component = _ref.Component,
      props = _ref.props,
      outputDirPath = _ref.outputDirPath,
      tempDirPath = _ref.tempDirPath,
      citationStyle = _ref.citationStyle,
      citationLocale = _ref.citationLocale,
      getAssetUri = _ref.getAssetUri,
      _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? (cov_kdrnqpj18.b[0][0]++, '') : _ref$styles;
  cov_kdrnqpj18.f[0]++;
  cov_kdrnqpj18.s[0]++;

  return new _promise2.default(function (resolve, reject) {
    cov_kdrnqpj18.f[1]++;

    var str = (cov_kdrnqpj18.s[1]++, _server2.default.renderToStaticMarkup(_react2.default.createElement(
      'html',
      null,
      _react2.default.createElement(
        'head',
        null,
        _react2.default.createElement(
          'style',
          null,
          styles
        )
      ),
      _react2.default.createElement(
        'body',
        null,
        _react2.default.createElement(
          _reactComponents.TranslationsProvider,
          null,
          _react2.default.createElement(Component, (0, _extends4.default)({}, props, (0, _defineProperty3.default)({
            renderingMode: 'pdf',
            getAssetUri: getAssetUri,
            citationStyle: citationStyle,
            citationLocale: citationLocale,
            Link: _PdfLink2.default,
            NoteContentPointer: _PdfNoteContentPointer2.default,
            NotePointerPointer: _PdfNotePointerPointer2.default
          }, 'Link', _PdfLink2.default)))
        )
      )
    )));

    var id = (cov_kdrnqpj18.s[2]++, (0, _uuid.v4)());
    var tempHtml = (cov_kdrnqpj18.s[3]++, tempDirPath + '/' + id + '.html');
    var tempPdf = (cov_kdrnqpj18.s[4]++, outputDirPath + '/' + id + '.pdf');
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