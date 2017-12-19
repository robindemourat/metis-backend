'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1aykob9pcy = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/crypto.js',
      hash = 'b79d327f30bb8e0760092174db13346cd9d9812b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/crypto.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 32
        }
      },
      '1': {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 21
        }
      },
      '2': {
        start: {
          line: 14,
          column: 20
        },
        end: {
          line: 14,
          column: 57
        }
      },
      '3': {
        start: {
          line: 14,
          column: 29
        },
        end: {
          line: 14,
          column: 57
        }
      },
      '4': {
        start: {
          line: 22,
          column: 26
        },
        end: {
          line: 22,
          column: 66
        }
      },
      '5': {
        start: {
          line: 22,
          column: 41
        },
        end: {
          line: 22,
          column: 66
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 14,
            column: 20
          },
          end: {
            line: 14,
            column: 21
          }
        },
        loc: {
          start: {
            line: 14,
            column: 29
          },
          end: {
            line: 14,
            column: 57
          }
        },
        line: 14
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 22,
            column: 26
          },
          end: {
            line: 22,
            column: 27
          }
        },
        loc: {
          start: {
            line: 22,
            column: 41
          },
          end: {
            line: 22,
            column: 66
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
      '3': 0,
      '4': 0,
      '5': 0
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

/**
 * Plurishing-backend
 * =======
 * Crypto utils
 */
var bcrypt = (cov_1aykob9pcy.s[0]++, require('bcrypt'));
var saltRounds = (cov_1aykob9pcy.s[1]++, 10);

/**
 * Encodes a string into a crypted hash
 * @param {str} pwd - the string to encoded
 * @return {Promise}
 */
cov_1aykob9pcy.s[2]++;
var hash = exports.hash = function hash(pwd) {
  cov_1aykob9pcy.f[0]++;
  cov_1aykob9pcy.s[3]++;
  return bcrypt.hash(pwd, saltRounds);
};

/**
 * Checks whether string matches hash
 * @param {string} pwd
 * @param {string} hash
 * @return {Promise} - resolves with a boolean as parameter
 */
cov_1aykob9pcy.s[4]++;
var comparePwd = exports.comparePwd = function comparePwd(pwd, hash) {
  cov_1aykob9pcy.f[1]++;
  cov_1aykob9pcy.s[5]++;
  return bcrypt.compare(pwd, hash);
};