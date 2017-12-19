'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_83yb6dv1w = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/emails.js',
      hash = 'ed6e27c95406115d23808721d16e0de7fba8827c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/emails.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 28
        },
        end: {
          line: 14,
          column: 2
        }
      },
      '1': {
        start: {
          line: 4,
          column: 47
        },
        end: {
          line: 14,
          column: 1
        }
      },
      '2': {
        start: {
          line: 16,
          column: 29
        },
        end: {
          line: 25,
          column: 2
        }
      },
      '3': {
        start: {
          line: 16,
          column: 48
        },
        end: {
          line: 25,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 4,
            column: 28
          },
          end: {
            line: 4,
            column: 29
          }
        },
        loc: {
          start: {
            line: 4,
            column: 47
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 4
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 16,
            column: 29
          },
          end: {
            line: 16,
            column: 30
          }
        },
        loc: {
          start: {
            line: 16,
            column: 48
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {},
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

cov_83yb6dv1w.s[0]++;
var welcomeEmail = exports.welcomeEmail = function welcomeEmail(appUrl, user) {
  cov_83yb6dv1w.f[0]++;
  cov_83yb6dv1w.s[1]++;
  return {
    subject: 'Bienvenue sur le backoffice',
    html: '\n<p>\n  <a\n    href="' + appUrl + '/signup/' + user._id + '/' + user.resetPasswordToken + '"\n  >\n    Entrez votre mot de passe\n  </a> d\'ici 24 heures.\n</p>'
  };
};

cov_83yb6dv1w.s[2]++;
var resetPwdEmail = exports.resetPwdEmail = function resetPwdEmail(appUrl, user) {
  cov_83yb6dv1w.f[1]++;
  cov_83yb6dv1w.s[3]++;
  return {
    subject: 'Réinitialisation du mot de passe',
    html: '\n<p>\n  <a\n    href="' + appUrl + '/signup/' + user._id + '/' + user.resetPasswordToken + '">\n    Entrez votre mot de passe\n  </a> d\'ici 24 heures.\n</p>'
  };
};