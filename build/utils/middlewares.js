'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateWithTokens = exports.errorHandler = undefined;

var cov_wq47vg9ek = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/middlewares.js',
      hash = '831de9ed1ee7a6fa63fb747ca959e44f2e78e060',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/middlewares.js',
    statementMap: {
      '0': {
        start: {
          line: 10,
          column: 17
        },
        end: {
          line: 10,
          column: 28
        }
      },
      '1': {
        start: {
          line: 13,
          column: 28
        },
        end: {
          line: 22,
          column: 1
        }
      },
      '2': {
        start: {
          line: 14,
          column: 18
        },
        end: {
          line: 14,
          column: 46
        }
      },
      '3': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 21,
          column: 5
        }
      },
      '4': {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 20,
          column: 7
        }
      },
      '5': {
        start: {
          line: 17,
          column: 10
        },
        end: {
          line: 17,
          column: 20
        }
      },
      '6': {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 29
        }
      },
      '7': {
        start: {
          line: 24,
          column: 22
        },
        end: {
          line: 27,
          column: 48
        }
      },
      '8': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 48
        }
      },
      '9': {
        start: {
          line: 29,
          column: 38
        },
        end: {
          line: 43,
          column: 1
        }
      },
      '10': {
        start: {
          line: 30,
          column: 16
        },
        end: {
          line: 30,
          column: 34
        }
      },
      '11': {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 42,
          column: 3
        }
      },
      '12': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 39,
          column: 7
        }
      },
      '13': {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 38,
          column: 7
        }
      },
      '14': {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 35,
          column: 48
        }
      },
      '15': {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 15
        }
      },
      '16': {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 44
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 13,
            column: 28
          },
          end: {
            line: 13,
            column: 29
          }
        },
        loc: {
          start: {
            line: 13,
            column: 53
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 13
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 15,
            column: 32
          },
          end: {
            line: 15,
            column: 33
          }
        },
        loc: {
          start: {
            line: 15,
            column: 56
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 15
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 24,
            column: 22
          },
          end: {
            line: 24,
            column: 23
          }
        },
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 48
          }
        },
        line: 25
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 29,
            column: 38
          },
          end: {
            line: 29,
            column: 39
          }
        },
        loc: {
          start: {
            line: 29,
            column: 58
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 29
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 33,
            column: 30
          },
          end: {
            line: 33,
            column: 31
          }
        },
        loc: {
          start: {
            line: 33,
            column: 45
          },
          end: {
            line: 39,
            column: 5
          }
        },
        line: 33
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 16,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 16,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }, {
          start: {
            line: 16,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }],
        line: 16
      },
      '1': {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 48
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 25,
            column: 3
          },
          end: {
            line: 25,
            column: 11
          }
        }, {
          start: {
            line: 25,
            column: 15
          },
          end: {
            line: 25,
            column: 29
          }
        }, {
          start: {
            line: 26,
            column: 3
          },
          end: {
            line: 26,
            column: 13
          }
        }, {
          start: {
            line: 26,
            column: 17
          },
          end: {
            line: 26,
            column: 33
          }
        }, {
          start: {
            line: 27,
            column: 3
          },
          end: {
            line: 27,
            column: 14
          }
        }, {
          start: {
            line: 27,
            column: 18
          },
          end: {
            line: 27,
            column: 47
          }
        }],
        line: 25
      },
      '2': {
        loc: {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 38,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 38,
            column: 7
          }
        }, {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 38,
            column: 7
          }
        }],
        line: 34
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
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0, 0, 0, 0, 0],
      '2': [0, 0]
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
      * This module provides useful express middlewares.
      * @module metis-backend/utils/middlewares
      */
// used to create, sign, and verify tokens

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('./config');

var _errorHandler = require('./errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (cov_wq47vg9ek.s[0]++, (0, _config.getConfig)()),
    secret = _ref.secret;

cov_wq47vg9ek.s[1]++;
var errorHandler = exports.errorHandler = function errorHandler(err, req, res, next) {
  cov_wq47vg9ek.f[0]++;

  var handler = (cov_wq47vg9ek.s[2]++, new _errorHandler2.default(req.log));
  cov_wq47vg9ek.s[3]++;
  handler.handleError(err).then(function (isOperationalError) {
    cov_wq47vg9ek.f[1]++;
    cov_wq47vg9ek.s[4]++;

    if (!isOperationalError) {
      cov_wq47vg9ek.b[0][0]++;
      cov_wq47vg9ek.s[5]++;

      next(err);
    } else {
      cov_wq47vg9ek.b[0][1]++;
      cov_wq47vg9ek.s[6]++;

      throw new Error(err);
    }
  });
};

cov_wq47vg9ek.s[7]++;
var retrieveToken = function retrieveToken(req) {
  cov_wq47vg9ek.f[2]++;
  cov_wq47vg9ek.s[8]++;
  return (cov_wq47vg9ek.b[1][0]++, req.body) && (cov_wq47vg9ek.b[1][1]++, req.body.token) || (cov_wq47vg9ek.b[1][2]++, req.params) && (cov_wq47vg9ek.b[1][3]++, req.params.token) || (cov_wq47vg9ek.b[1][4]++, req.headers) && (cov_wq47vg9ek.b[1][5]++, req.headers['x-access-token']);
};

cov_wq47vg9ek.s[9]++;
var authenticateWithTokens = exports.authenticateWithTokens = function authenticateWithTokens(req, res, next) {
  cov_wq47vg9ek.f[3]++;

  var token = (cov_wq47vg9ek.s[10]++, retrieveToken(req));
  cov_wq47vg9ek.s[11]++;
  try {
    cov_wq47vg9ek.s[12]++;

    // verify that the token data corresponds to the user willing to change the password
    _jsonwebtoken2.default.verify(token, secret, function (err) {
      cov_wq47vg9ek.f[4]++;
      cov_wq47vg9ek.s[13]++;

      if (err) {
        cov_wq47vg9ek.b[2][0]++;
        cov_wq47vg9ek.s[14]++;

        res.status(401).send('Protected route');
      } else {
        cov_wq47vg9ek.b[2][1]++;
        cov_wq47vg9ek.s[15]++;

        next();
      }
    });
  } catch (err) {
    cov_wq47vg9ek.s[16]++;

    res.status(401).send('Protected route');
  }
};