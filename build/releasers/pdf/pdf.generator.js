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

var cov_l44h4nr0x = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/pdf/pdf.generator.js',
      hash = '1e357f34b9f2540b896b496ddf897d403b0e86df',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/pdf/pdf.generator.js',
    statementMap: {
      '0': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 73,
          column: 5
        }
      },
      '1': {
        start: {
          line: 29,
          column: 23
        },
        end: {
          line: 43,
          column: 5
        }
      },
      '2': {
        start: {
          line: 44,
          column: 16
        },
        end: {
          line: 55,
          column: 1
        }
      },
      '3': {
        start: {
          line: 56,
          column: 15
        },
        end: {
          line: 56,
          column: 27
        }
      },
      '4': {
        start: {
          line: 57,
          column: 21
        },
        end: {
          line: 57,
          column: 48
        }
      },
      '5': {
        start: {
          line: 58,
          column: 20
        },
        end: {
          line: 58,
          column: 48
        }
      },
      '6': {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 72,
          column: 21
        }
      },
      '7': {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 64,
          column: 21
        }
      },
      '8': {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 40
        }
      },
      '9': {
        start: {
          line: 69,
          column: 18
        },
        end: {
          line: 69,
          column: 34
        }
      },
      '10': {
        start: {
          line: 70,
          column: 18
        },
        end: {
          line: 70,
          column: 33
        }
      }
    },
    fnMap: {
      '0': {
        name: 'generatePdf',
        decl: {
          start: {
            line: 18,
            column: 24
          },
          end: {
            line: 18,
            column: 35
          }
        },
        loc: {
          start: {
            line: 27,
            column: 20
          },
          end: {
            line: 74,
            column: 1
          }
        },
        line: 27
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 28,
            column: 21
          },
          end: {
            line: 28,
            column: 22
          }
        },
        loc: {
          start: {
            line: 28,
            column: 42
          },
          end: {
            line: 73,
            column: 3
          }
        },
        line: 28
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 60,
            column: 12
          },
          end: {
            line: 60,
            column: 13
          }
        },
        loc: {
          start: {
            line: 60,
            column: 18
          },
          end: {
            line: 65,
            column: 7
          }
        },
        line: 60
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 66,
            column: 12
          },
          end: {
            line: 66,
            column: 13
          }
        },
        loc: {
          start: {
            line: 66,
            column: 18
          },
          end: {
            line: 68,
            column: 7
          }
        },
        line: 66
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 69,
            column: 12
          },
          end: {
            line: 69,
            column: 13
          }
        },
        loc: {
          start: {
            line: 69,
            column: 18
          },
          end: {
            line: 69,
            column: 34
          }
        },
        line: 69
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 70,
            column: 12
          },
          end: {
            line: 70,
            column: 13
          }
        },
        loc: {
          start: {
            line: 70,
            column: 18
          },
          end: {
            line: 70,
            column: 33
          }
        },
        line: 70
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 13
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 26,
            column: 11
          },
          end: {
            line: 26,
            column: 13
          }
        }],
        line: 26
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
      '9': 0,
      '10': 0
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
}(); /**
      * This module a function that produces a pdf static file thanks to PrinceXML technology.
      * @module metis-backend/releasers/pdf
      */

/* eslint no-unused-vars : 0 */


exports.default = generatePdf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _uuid = require('uuid');

var _fsExtra = require('fs-extra');

var _prince = require('prince');

var _prince2 = _interopRequireDefault(_prince);

var _PdfNoteContentPointer = require('metis-shared/dist/components/views/static/PdfNoteContentPointer');

var _PdfNoteContentPointer2 = _interopRequireDefault(_PdfNoteContentPointer);

var _PdfNotePointerPointer = require('metis-shared/dist/components/views/static/PdfNotePointerPointer');

var _PdfNotePointerPointer2 = _interopRequireDefault(_PdfNotePointerPointer);

var _PdfLink = require('metis-shared/dist/components/views/static/PdfLink');

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
      styles = _ref$styles === undefined ? (cov_l44h4nr0x.b[0][0]++, '') : _ref$styles;
  cov_l44h4nr0x.f[0]++;
  cov_l44h4nr0x.s[0]++;

  return new _promise2.default(function (resolve, reject) {
    cov_l44h4nr0x.f[1]++;

    var contentStr = (cov_l44h4nr0x.s[1]++, _server2.default.renderToStaticMarkup(_react2.default.createElement(
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
    )));
    var str = (cov_l44h4nr0x.s[2]++, '\n<html>\n  <head>\n  </head>\n  <body>\n    ' + contentStr + '\n    <style>\n      ' + styles + '\n    </style>\n  </body>\n</html>\n');
    var id = (cov_l44h4nr0x.s[3]++, (0, _uuid.v4)());
    var tempHtml = (cov_l44h4nr0x.s[4]++, tempDirPath + '/' + id + '.html');
    var tempPdf = (cov_l44h4nr0x.s[5]++, outputDirPath + '/' + id + '.pdf');
    cov_l44h4nr0x.s[6]++;
    (0, _fsExtra.writeFile)(tempHtml, str, 'utf8').then(function () {
      cov_l44h4nr0x.f[2]++;
      cov_l44h4nr0x.s[7]++;

      return (0, _prince2.default)().inputs(tempHtml).output(tempPdf).execute();
    }).then(function () {
      cov_l44h4nr0x.f[3]++;
      cov_l44h4nr0x.s[8]++;

      return onFileGenerated(tempPdf);
    }).then(function () {
      cov_l44h4nr0x.f[4]++;
      cov_l44h4nr0x.s[9]++;
      return (0, _fsExtra.remove)(tempHtml);
    }).then(function () {
      cov_l44h4nr0x.f[5]++;
      cov_l44h4nr0x.s[10]++;
      return (0, _fsExtra.remove)(tempPdf);
    }).then(resolve).catch(reject);
  });
}