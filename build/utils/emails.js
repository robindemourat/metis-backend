'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1bws6n3jsa = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/emails.js',
      hash = 'cf993980cf7e0f757ec18ca0282124acabccfbda',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/emails.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 28
        },
        end: {
          line: 18,
          column: 2
        }
      },
      '1': {
        start: {
          line: 6,
          column: 47
        },
        end: {
          line: 18,
          column: 1
        }
      },
      '2': {
        start: {
          line: 20,
          column: 29
        },
        end: {
          line: 30,
          column: 2
        }
      },
      '3': {
        start: {
          line: 20,
          column: 48
        },
        end: {
          line: 30,
          column: 1
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 6,
            column: 28
          },
          end: {
            line: 6,
            column: 29
          }
        },
        loc: {
          start: {
            line: 6,
            column: 47
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 6
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 20,
            column: 29
          },
          end: {
            line: 20,
            column: 30
          }
        },
        loc: {
          start: {
            line: 20,
            column: 48
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 20
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

cov_1bws6n3jsa.s[0]++;
/**
 * This module provides basic email templates (i.e. for auth-related email messages)
 * @module metis-backend/utils/emails
 */

var welcomeEmail = exports.welcomeEmail = function welcomeEmail(appUrl, user) {
  cov_1bws6n3jsa.f[0]++;
  cov_1bws6n3jsa.s[1]++;
  return {
    subject: 'Metis - Bienvenue !',
    html: '\n<h1>Metis - bienvenue !</h1>\n<p>\n  Vous avez \xE9t\xE9 ajout\xE9 \xE0 la liste des utilisateurs de l\'application Metis. Si vous souhaitez participer,\n  <a\n    href="' + appUrl + '/signup/' + user._id + '/' + user.resetPasswordToken + '"\n  >\n    visitez cette adresse pour y entrer un nouveau mot de passe\n  </a> d\'ici 24 heures.\n</p>'
  };
};

cov_1bws6n3jsa.s[2]++;
var resetPwdEmail = exports.resetPwdEmail = function resetPwdEmail(appUrl, user) {
  cov_1bws6n3jsa.f[1]++;
  cov_1bws6n3jsa.s[3]++;
  return {
    subject: 'Metis - réinitialisation de votre mot de passe',
    html: '\n<h1>Metis - r\xE9initialisation du mot de passe</h1>\n<p>\n  Vous avez fait une demande de r\xE9initialisation de votre mot de passe pour l\'application Metis. <a\n    href="' + appUrl + '/signup/' + user._id + '/' + user.resetPasswordToken + '">\n    Visitez cette adresse pour y entrer un nouveau mot de passe\n  </a> d\'ici 24 heures.\n</p>'
  };
};