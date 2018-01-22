'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_21bj8dgq32 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/mailing/mail.js',
      hash = '3e27b85e4876edf2110cdd40e89c48ce421916dc',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/mailing/mail.js',
    statementMap: {
      '0': {
        start: {
          line: 16,
          column: 12
        },
        end: {
          line: 16,
          column: 21
        }
      },
      '1': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 61,
          column: 7
        }
      },
      '2': {
        start: {
          line: 26,
          column: 35
        },
        end: {
          line: 26,
          column: 77
        }
      },
      '3': {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 29,
          column: 9
        }
      },
      '4': {
        start: {
          line: 28,
          column: 10
        },
        end: {
          line: 28,
          column: 36
        }
      },
      '5': {
        start: {
          line: 32,
          column: 33
        },
        end: {
          line: 32,
          column: 67
        }
      },
      '6': {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 35,
          column: 9
        }
      },
      '7': {
        start: {
          line: 34,
          column: 10
        },
        end: {
          line: 34,
          column: 36
        }
      },
      '8': {
        start: {
          line: 41,
          column: 12
        },
        end: {
          line: 41,
          column: 20
        }
      },
      '9': {
        start: {
          line: 47,
          column: 12
        },
        end: {
          line: 47,
          column: 18
        }
      },
      '10': {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 60,
          column: 23
        }
      }
    },
    fnMap: {
      '0': {
        name: 'mail',
        decl: {
          start: {
            line: 23,
            column: 24
          },
          end: {
            line: 23,
            column: 28
          }
        },
        loc: {
          start: {
            line: 23,
            column: 47
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 23
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 24,
            column: 23
          },
          end: {
            line: 24,
            column: 24
          }
        },
        loc: {
          start: {
            line: 24,
            column: 44
          },
          end: {
            line: 61,
            column: 5
          }
        },
        line: 24
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        }, {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        }],
        line: 27
      },
      '1': {
        loc: {
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        }, {
          start: {
            line: 33,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        }],
        line: 33
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
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
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
      * This module provides a function that sends a mail formatted from a micropublication montage.
      * @module metis-backend/releasers/mailing
      */

/**
 * @todo reformat mailing releaser to simplify it and directly use the sendEmail util in controller
 */


exports.default = mail;

var _mailer = require('../../utils/mailer');

var _mailer2 = _interopRequireDefault(_mailer);

var _ajv = require('ajv');

var _ajv2 = _interopRequireDefault(_ajv);

var _mailingContents = require('./mailing.contents.schema');

var _mailingContents2 = _interopRequireDefault(_mailingContents);

var _mailingParameters = require('./mailing.parameters.schema');

var _mailingParameters2 = _interopRequireDefault(_mailingParameters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ajv = (cov_21bj8dgq32.s[0]++, new _ajv2.default());

/**
 * @param {object} contents - the contents to send
 * @param {object} params - connection params (credentials, ...)
 * @return {Promise} promise
 */
function mail(contents, params) {
  cov_21bj8dgq32.f[0]++;
  cov_21bj8dgq32.s[1]++;

  return new _promise2.default(function (resolve, reject) {
    cov_21bj8dgq32.f[1]++;

    // validate contents object
    var contentsValidation = (cov_21bj8dgq32.s[2]++, ajv.validate(_mailingContents2.default, contents));
    cov_21bj8dgq32.s[3]++;
    if (!contentsValidation) {
      cov_21bj8dgq32.b[0][0]++;
      cov_21bj8dgq32.s[4]++;

      return reject(ajv.errors);
    } else {
      cov_21bj8dgq32.b[0][1]++;
    }

    // validate params object
    var paramsValidation = (cov_21bj8dgq32.s[5]++, ajv.validate(_mailingParameters2.default, params));
    cov_21bj8dgq32.s[6]++;
    if (!paramsValidation) {
      cov_21bj8dgq32.b[1][0]++;
      cov_21bj8dgq32.s[7]++;

      return reject(ajv.errors);
    } else {
      cov_21bj8dgq32.b[1][1]++;
    }

    var _ref = (cov_21bj8dgq32.s[8]++, contents),
        from = _ref.from,
        to = _ref.to,
        subject = _ref.subject,
        html = _ref.html;

    var _ref2 = (cov_21bj8dgq32.s[9]++, params),
        smtp_email = _ref2.smtp_email,
        smtp_service = _ref2.smtp_service,
        smtp_password = _ref2.smtp_password;

    cov_21bj8dgq32.s[10]++;


    (0, _mailer2.default)({
      from: from,
      to: to, // array
      subject: subject,
      html: html
    }, {
      smtpEmail: smtp_email,
      smtpService: smtp_service,
      smtpPassword: smtp_password
    }, console) /* eslint no-console : 0 */
    .then(resolve).catch(reject);
  });
}