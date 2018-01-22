'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_2dnul4qubi = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/errorHandler.js',
      hash = '1eb45ac625929235ad49e5e470ea263c810a90e9',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/errorHandler.js',
    statementMap: {
      '0': {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 15,
          column: 3
        }
      },
      '1': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 15
        }
      },
      '2': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 28,
          column: 3
        }
      },
      '3': {
        start: {
          line: 27,
          column: 3
        },
        end: {
          line: 27,
          column: 15
        }
      },
      '4': {
        start: {
          line: 39,
          column: 36
        },
        end: {
          line: 39,
          column: 47
        }
      },
      '5': {
        start: {
          line: 39,
          column: 42
        },
        end: {
          line: 39,
          column: 47
        }
      },
      '6': {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 49,
          column: 6
        }
      },
      '7': {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 48,
          column: 11
        }
      },
      '8': {
        start: {
          line: 44,
          column: 10
        },
        end: {
          line: 44,
          column: 30
        }
      },
      '9': {
        start: {
          line: 47,
          column: 10
        },
        end: {
          line: 47,
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
            line: 15,
            column: 1
          }
        },
        line: 9
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 20,
            column: 32
          },
          end: {
            line: 20,
            column: 33
          }
        },
        loc: {
          start: {
            line: 20,
            column: 48
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 20
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 39,
            column: 36
          },
          end: {
            line: 39,
            column: 37
          }
        },
        loc: {
          start: {
            line: 39,
            column: 42
          },
          end: {
            line: 39,
            column: 47
          }
        },
        line: 39
      },
      '3': {
        name: 'errorHandler',
        decl: {
          start: {
            line: 41,
            column: 24
          },
          end: {
            line: 41,
            column: 36
          }
        },
        loc: {
          start: {
            line: 41,
            column: 44
          },
          end: {
            line: 50,
            column: 3
          }
        },
        line: 41
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 42,
            column: 23
          },
          end: {
            line: 42,
            column: 24
          }
        },
        loc: {
          start: {
            line: 42,
            column: 40
          },
          end: {
            line: 49,
            column: 5
          }
        },
        line: 42
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 43,
            column: 27
          },
          end: {
            line: 43,
            column: 28
          }
        },
        loc: {
          start: {
            line: 43,
            column: 38
          },
          end: {
            line: 48,
            column: 9
          }
        },
        line: 43
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
      '8': 0,
      '9': 0
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

cov_2dnul4qubi.s[0]++;
/**
 * Some utils for managing errors in the right way
 * Taken from the repertory of good practices https://github.com/i0natan/nodebestpractices/
 */

/**
 * Catch unhandled promise rejections
 */
process.on('unhandledRejection', function (reason) {
  cov_2dnul4qubi.f[0]++;
  cov_2dnul4qubi.s[1]++;

  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  // console.log(reason, reason.trace);
  throw reason;
});

/**
 * Catch unhandled exceptions to shut the process gracefully
 */
cov_2dnul4qubi.s[2]++;
process.on('uncaughtException', function (error) {
  cov_2dnul4qubi.f[1]++;
  cov_2dnul4qubi.s[3]++;

  /*
   * @todo setup error types system
   */
  // errorManagement.handler.handleError(error);
  // if(!errorManagement.handler.isTrustedError(error))
  // console.log(error, error.trace);
  throw error;
});

/**
 * Custom error handling object
 * to be used in a middleware in order to catch all errors
 * and process them here (save them, send a mail to admin, ...)
 */
// const sendMailToAdminIfCritical = (logger, err) => logger.debug('send email to admin if critical');

// const saveInOpsQueueIfCritical = (logger, err) => logger.debug('saveInOpsQueueIfCritical');

cov_2dnul4qubi.s[4]++;
var determineIfOperationalError = function determineIfOperationalError() {
  cov_2dnul4qubi.f[2]++;
  cov_2dnul4qubi.s[5]++;
  return false;
};

function errorHandler(logger) {
  cov_2dnul4qubi.f[3]++;
  cov_2dnul4qubi.s[6]++;

  this.handleError = function (error) {
    cov_2dnul4qubi.f[4]++;
    cov_2dnul4qubi.s[7]++;

    return new _promise2.default(function (resolve) {
      cov_2dnul4qubi.f[5]++;
      cov_2dnul4qubi.s[8]++;

      logger.error(error);
      // sendMailToAdminIfCritical(logger, error)
      // saveInOpsQueueIfCritical(logger, error)
      cov_2dnul4qubi.s[9]++;
      resolve(determineIfOperationalError(error));
    });
  };
}