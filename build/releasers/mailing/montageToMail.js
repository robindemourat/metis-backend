'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_211w85fik5 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/mailing/montageToMail.js',
      hash = '90fefd10efdbcc040255ec0d10984d682cd5f6a2',
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
          column: 16
        },
        end: {
          line: 9,
          column: 99
        }
      },
      '3': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 19,
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
            column: 81
          },
          end: {
            line: 20,
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
            column: 16
          },
          end: {
            line: 9,
            column: 99
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 9,
            column: 48
          },
          end: {
            line: 9,
            column: 70
          }
        }, {
          start: {
            line: 9,
            column: 73
          },
          end: {
            line: 9,
            column: 99
          }
        }],
        line: 9
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0]
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
  var smtp_email = _ref.smtp_email;
  cov_211w85fik5.f[0]++;
  cov_211w85fik5.s[0]++;

  var Template = function Template() {
    cov_211w85fik5.f[1]++;
    cov_211w85fik5.s[1]++;
    return _react2.default.createElement(_MicropublicationMail2.default, { montage: montage, composition: composition });
  };
  var title = (cov_211w85fik5.s[2]++, montage.metadata.title.length ? (cov_211w85fik5.b[0][0]++, montage.metadata.title) : (cov_211w85fik5.b[0][1]++, composition.metadata.title));
  cov_211w85fik5.s[3]++;
  return {
    from: '"Plurishing \uD83D\uDC7B" <' + smtp_email + '>',
    to: ['robin.demourat@gmail.com'],
    subject: title,
    html: _oyVey2.default.renderTemplate(_react2.default.createElement(Template, null), {
      title: title,
      // headCSS: '@media ...',
      previewText: composition.metadata.abstract_original
    })
  };
}