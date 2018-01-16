'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_211w85fik5 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/mailing/montageToMail.js',
      hash = '11ba66c83756a47fb479e60aad417fe2e9ed55a1',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/mailing/montageToMail.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 8,
          column: 86
        }
      },
      '1': {
        start: {
          line: 8,
          column: 26
        },
        end: {
          line: 8,
          column: 85
        }
      },
      '2': {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 9,
          column: 115
        }
      },
      '3': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 48
        }
      },
      '4': {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 11,
          column: 85
        }
      },
      '5': {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 21,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: 'montageToMail',
        decl: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 37
          }
        },
        loc: {
          start: {
            line: 7,
            column: 100
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 8,
            column: 19
          },
          end: {
            line: 8,
            column: 20
          }
        },
        loc: {
          start: {
            line: 8,
            column: 26
          },
          end: {
            line: 8,
            column: 85
          }
        },
        line: 8
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 9,
            column: 14
          },
          end: {
            line: 9,
            column: 115
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 9,
            column: 64
          },
          end: {
            line: 9,
            column: 86
          }
        }, {
          start: {
            line: 9,
            column: 89
          },
          end: {
            line: 9,
            column: 115
          }
        }],
        line: 9
      },
      '1': {
        loc: {
          start: {
            line: 10,
            column: 10
          },
          end: {
            line: 10,
            column: 47
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 10,
            column: 25
          },
          end: {
            line: 10,
            column: 30
          }
        }, {
          start: {
            line: 10,
            column: 33
          },
          end: {
            line: 10,
            column: 47
          }
        }],
        line: 10
      },
      '2': {
        loc: {
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 11,
            column: 85
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 11,
            column: 22
          },
          end: {
            line: 11,
            column: 60
          }
        }, {
          start: {
            line: 11,
            column: 64
          },
          end: {
            line: 11,
            column: 69
          }
        }, {
          start: {
            line: 11,
            column: 73
          },
          end: {
            line: 11,
            column: 85
          }
        }],
        line: 11
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0, 0]
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


exports.default = montageToMail;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MicropublicationMail = require('plurishing-shared/dist/components/views/micro/MicropublicationMail');

var _MicropublicationMail2 = _interopRequireDefault(_MicropublicationMail);

var _oyVey = require('oy-vey');

var _oyVey2 = _interopRequireDefault(_oyVey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function montageToMail(montage, composition, asset, _ref) {
  var smtp_email = _ref.smtp_email,
      mailing_hub_email = _ref.mailing_hub_email;
  cov_211w85fik5.f[0]++;
  cov_211w85fik5.s[0]++;

  var Template = function Template() {
    cov_211w85fik5.f[1]++;
    cov_211w85fik5.s[1]++;
    return _react2.default.createElement(_MicropublicationMail2.default, { montage: montage, composition: composition });
  };
  var title = (cov_211w85fik5.s[2]++, '[Plurishing] ' + montage.metadata.title.length ? (cov_211w85fik5.b[0][0]++, montage.metadata.title) : (cov_211w85fik5.b[0][1]++, composition.metadata.title));
  cov_211w85fik5.s[3]++;
  title = title.length ? (cov_211w85fik5.b[1][0]++, title) : (cov_211w85fik5.b[1][1]++, '[Plurishing]');
  var previewText = (cov_211w85fik5.s[4]++, (cov_211w85fik5.b[2][0]++, composition.metadata.abstract_original) || (cov_211w85fik5.b[2][1]++, title) || (cov_211w85fik5.b[2][2]++, 'Plurishing'));
  cov_211w85fik5.s[5]++;
  return {
    from: '"Plurishing \uD83D\uDC7B" <' + smtp_email + '>',
    to: [mailing_hub_email],
    subject: title,
    html: _oyVey2.default.renderTemplate(_react2.default.createElement(Template, null), {
      title: title,
      // headCSS: '@media ...',
      previewText: previewText
    })
  };
}