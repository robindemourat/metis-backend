'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_d6ri34dec = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/errorHandler.js',
      hash = '1804d41c146d998ca25c21038fc2e8e0fbbe70a2',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/errorHandler.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 14,
          column: 3
        }
      },
      '1': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 25,
          column: 3
        }
      },
      '2': {
        start: {
          line: 24,
          column: 3
        },
        end: {
          line: 24,
          column: 15
        }
      },
      '3': {
        start: {
          line: 36,
          column: 36
        },
        end: {
          line: 36,
          column: 47
        }
      },
      '4': {
        start: {
          line: 36,
          column: 42
        },
        end: {
          line: 36,
          column: 47
        }
      },
      '5': {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 46,
          column: 6
        }
      },
      '6': {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 45,
          column: 11
        }
      },
      '7': {
        start: {
          line: 41,
          column: 10
        },
        end: {
          line: 41,
          column: 30
        }
      },
      '8': {
        start: {
          line: 44,
          column: 10
        },
        end: {
          line: 44,
          column: 54
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 9,
            column: 34
          }
        },
        loc: {
          start: {
            line: 9,
            column: 51
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 9
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 19,
            column: 32
          },
          end: {
            line: 19,
            column: 33
          }
        },
        loc: {
          start: {
            line: 19,
            column: 48
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 19
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 36,
            column: 36
          },
          end: {
            line: 36,
            column: 37
          }
        },
        loc: {
          start: {
            line: 36,
            column: 42
          },
          end: {
            line: 36,
            column: 47
          }
        },
        line: 36
      },
      '3': {
        name: 'errorHandler',
        decl: {
          start: {
            line: 38,
            column: 24
          },
          end: {
            line: 38,
            column: 36
          }
        },
        loc: {
          start: {
            line: 38,
            column: 44
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 38
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 39,
            column: 23
          },
          end: {
            line: 39,
            column: 24
          }
        },
        loc: {
          start: {
            line: 39,
            column: 40
          },
          end: {
            line: 46,
            column: 5
          }
        },
        line: 39
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 40,
            column: 27
          },
          end: {
            line: 40,
            column: 28
          }
        },
        loc: {
          start: {
            line: 40,
            column: 38
          },
          end: {
            line: 45,
            column: 9
          }
        },
        line: 40
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
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

exports.default = errorHandler;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_d6ri34dec.s[0]++;
/**
 * Some utils for managing errors in the right way
 * Taken from the repertory of good practices https://github.com/i0natan/nodebestpractices/
 */

/**
 * Catch unhandled promise rejections
 */
process.on('unhandledRejection', function (reason) {
  //I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  // throw reason;

  cov_d6ri34dec.f[0]++;
});

/**
 * Catch unhandled exceptions to shut the process gracefully
 */
cov_d6ri34dec.s[1]++;
process.on('uncaughtException', function (error) {
  cov_d6ri34dec.f[1]++;
  cov_d6ri34dec.s[2]++;

  // process.on('uncaughtException', function(error) {
  // @todo setup error types system
  // errorManagement.handler.handleError(error);
  // if(!errorManagement.handler.isTrustedError(error))
  throw error;
});

/**
 * Custom error handling object
 * to be used in a middleware in order to catch all errors
 * and process them here (save them, send a mail to admin, ...)
 */
// const sendMailToAdminIfCritical = (logger, err) => logger.debug('send email to admin if critical');

// const saveInOpsQueueIfCritical = (logger, err) => logger.debug('saveInOpsQueueIfCritical');

cov_d6ri34dec.s[3]++;
var determineIfOperationalError = function determineIfOperationalError() {
  cov_d6ri34dec.f[2]++;
  cov_d6ri34dec.s[4]++;
  return false;
};

function errorHandler(logger) {
  cov_d6ri34dec.f[3]++;
  cov_d6ri34dec.s[5]++;

  this.handleError = function (error) {
    cov_d6ri34dec.f[4]++;
    cov_d6ri34dec.s[6]++;

    return new _promise2.default(function (resolve) {
      cov_d6ri34dec.f[5]++;
      cov_d6ri34dec.s[7]++;

      logger.error(error);
      // sendMailToAdminIfCritical(logger, error)
      // saveInOpsQueueIfCritical(logger, error)
      cov_d6ri34dec.s[8]++;
      resolve(determineIfOperationalError(error));
    });
  };
}