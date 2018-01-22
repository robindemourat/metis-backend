'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_165j2qnbw3 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/mailing/montageToMail.js',
      hash = 'd54555d1b7945f6916cb9275887d5a3b86ef8b2c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/mailing/montageToMail.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 8,
          column: 102
        }
      },
      '1': {
        start: {
          line: 8,
          column: 26
        },
        end: {
          line: 8,
          column: 101
        }
      },
      '2': {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 9,
          column: 110
        }
      },
      '3': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 43
        }
      },
      '4': {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 11,
          column: 80
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
            column: 101
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
            column: 101
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
            column: 110
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 9,
            column: 59
          },
          end: {
            line: 9,
            column: 81
          }
        }, {
          start: {
            line: 9,
            column: 84
          },
          end: {
            line: 9,
            column: 110
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
            column: 42
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
            column: 42
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
            column: 80
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
            column: 80
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

var _MicropublicationMail = require('metis-shared/dist/components/views/micro/MicropublicationMail');

var _MicropublicationMail2 = _interopRequireDefault(_MicropublicationMail);

var _oyVey = require('oy-vey');

var _oyVey2 = _interopRequireDefault(_oyVey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function montageToMail(montage, composition, assets, _ref) {
  var smtp_email = _ref.smtp_email,
      mailing_hub_email = _ref.mailing_hub_email;
  cov_165j2qnbw3.f[0]++;
  cov_165j2qnbw3.s[0]++;

  var Template = function Template() {
    cov_165j2qnbw3.f[1]++;
    cov_165j2qnbw3.s[1]++;
    return _react2.default.createElement(_MicropublicationMail2.default, { montage: montage, composition: composition, assets: assets });
  };
  var title = (cov_165j2qnbw3.s[2]++, '[Metis] ' + montage.metadata.title.length ? (cov_165j2qnbw3.b[0][0]++, montage.metadata.title) : (cov_165j2qnbw3.b[0][1]++, composition.metadata.title));
  cov_165j2qnbw3.s[3]++;
  title = title.length ? (cov_165j2qnbw3.b[1][0]++, title) : (cov_165j2qnbw3.b[1][1]++, '[Metis]');
  var previewText = (cov_165j2qnbw3.s[4]++, (cov_165j2qnbw3.b[2][0]++, composition.metadata.abstract_original) || (cov_165j2qnbw3.b[2][1]++, title) || (cov_165j2qnbw3.b[2][2]++, 'Metis'));
  cov_165j2qnbw3.s[5]++;
  return {
    from: '"Metis \uD83D\uDC7B" <' + smtp_email + '>',
    to: [mailing_hub_email],
    subject: title,
    html: _oyVey2.default.renderTemplate(_react2.default.createElement(Template, null), {
      title: title,
      // headCSS: '@media ...',
      previewText: previewText
    })
  };
}