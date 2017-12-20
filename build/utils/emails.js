'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_83yb6dv1w = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/emails.js',
      hash = '64e19ce49c0f5ab71c4ac86a725641812aa4ba23',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/emails.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 28
        },
        end: {
          line: 20,
          column: 2
        }
      },
      '1': {
        start: {
          line: 8,
          column: 47
        },
        end: {
          line: 20,
          column: 1
        }
      },
      '2': {
        start: {
          line: 22,
          column: 29
        },
        end: {
          line: 32,
          column: 2
        }
      },
      '3': {
        start: {
          line: 22,
          column: 48
        },
        end: {
          line: 32,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 8,
            column: 28
          },
          end: {
            line: 8,
            column: 29
          }
        },
        loc: {
          start: {
            line: 8,
            column: 47
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 8
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 22,
            column: 29
          },
          end: {
            line: 22,
            column: 30
          }
        },
        loc: {
          start: {
            line: 22,
            column: 48
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 22
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
/**
 * Plurishing-backend
 * =======
 * Mailing utils
 */

var welcomeEmail = exports.welcomeEmail = function welcomeEmail(appUrl, user) {
  cov_83yb6dv1w.f[0]++;
  cov_83yb6dv1w.s[1]++;
  return {
    subject: 'Plurishing - Bienvenue !',
    html: '\n<h1>Plurishing - bienvenue !</h1>\n<p>\n  Vous avez \xE9t\xE9 ajout\xE9 \xE0 la liste des utilisateurs de l\'application Plurishing. Si vous souhaitez participer,\n  <a\n    href="' + appUrl + '/signup/' + user._id + '/' + user.resetPasswordToken + '"\n  >\n    visitez cette adresse pour y entrer un nouveau mot de passe\n  </a> d\'ici 24 heures.\n</p>'
  };
};

cov_83yb6dv1w.s[2]++;
var resetPwdEmail = exports.resetPwdEmail = function resetPwdEmail(appUrl, user) {
  cov_83yb6dv1w.f[1]++;
  cov_83yb6dv1w.s[3]++;
  return {
    subject: 'Plurishing - réinitialisation de votre mot de passe',
    html: '\n<h1>Plurishing - r\xE9initialisation du mot de passe</h1>\n<p>\n  Vous avez fait une demande de r\xE9initialisation de votre mot de passe pour l\'application Plurishing. <a\n    href="' + appUrl + '/signup/' + user._id + '/' + user.resetPasswordToken + '">\n    Visitez cette adresse pour y entrer un nouveau mot de passe\n  </a> d\'ici 24 heures.\n</p>'
  };
};