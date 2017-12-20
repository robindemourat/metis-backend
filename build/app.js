'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2145knos0z = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/app.js',
      hash = '36d421167e56ed5801d8c440ee482415e1a3c92b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/app.js',
    statementMap: {
      '0': {
        start: {
          line: 34,
          column: 15
        },
        end: {
          line: 34,
          column: 26
        }
      },
      '1': {
        start: {
          line: 35,
          column: 17
        },
        end: {
          line: 35,
          column: 23
        }
      },
      '2': {
        start: {
          line: 40,
          column: 12
        },
        end: {
          line: 40,
          column: 21
        }
      },
      '3': {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 45,
          column: 67
        }
      },
      '4': {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 46,
          column: 27
        }
      },
      '5': {
        start: {
          line: 47,
          column: 0
        },
        end: {
          line: 47,
          column: 16
        }
      },
      '6': {
        start: {
          line: 48,
          column: 0
        },
        end: {
          line: 48,
          column: 38
        }
      },
      '7': {
        start: {
          line: 49,
          column: 0
        },
        end: {
          line: 60,
          column: 4
        }
      },
      '8': {
        start: {
          line: 65,
          column: 0
        },
        end: {
          line: 65,
          column: 31
        }
      },
      '9': {
        start: {
          line: 70,
          column: 0
        },
        end: {
          line: 72,
          column: 3
        }
      },
      '10': {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 71,
          column: 77
        }
      },
      '11': {
        start: {
          line: 79,
          column: 19
        },
        end: {
          line: 79,
          column: 52
        }
      },
      '12': {
        start: {
          line: 80,
          column: 0
        },
        end: {
          line: 80,
          column: 47
        }
      },
      '13': {
        start: {
          line: 86,
          column: 18
        },
        end: {
          line: 86,
          column: 34
        }
      },
      '14': {
        start: {
          line: 91,
          column: 0
        },
        end: {
          line: 91,
          column: 25
        }
      },
      '15': {
        start: {
          line: 106,
          column: 0
        },
        end: {
          line: 106,
          column: 31
        }
      },
      '16': {
        start: {
          line: 107,
          column: 0
        },
        end: {
          line: 107,
          column: 33
        }
      },
      '17': {
        start: {
          line: 108,
          column: 0
        },
        end: {
          line: 108,
          column: 39
        }
      },
      '18': {
        start: {
          line: 109,
          column: 0
        },
        end: {
          line: 109,
          column: 45
        }
      },
      '19': {
        start: {
          line: 114,
          column: 0
        },
        end: {
          line: 114,
          column: 27
        }
      },
      '20': {
        start: {
          line: 119,
          column: 0
        },
        end: {
          line: 119,
          column: 22
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 70,
            column: 13
          },
          end: {
            line: 70,
            column: 14
          }
        },
        loc: {
          start: {
            line: 70,
            column: 27
          },
          end: {
            line: 72,
            column: 1
          }
        },
        line: 70
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
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0
    },
    f: {
      '0': 0
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
}(); /**
      * Plurishing-backend
      * =======
      * Application entrypoint
      */

/**
 * Dependencies : middlewares
 */

/**
 * Dependencies : Components API
 */


/**
 * Connect config
 */


var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _expressBunyanLogger = require('express-bunyan-logger');

var _expressBunyanLogger2 = _interopRequireDefault(_expressBunyanLogger);

var _bunyanDebugStream = require('bunyan-debug-stream');

var _bunyanDebugStream2 = _interopRequireDefault(_bunyanDebugStream);

var _middlewares = require('./utils/middlewares');

var _assets = require('./components/assets');

var _resources = require('./components/resources');

var _compositions = require('./components/compositions');

var _users = require('./components/users');

var _auth = require('./components/auth');

var _config = require('./utils/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (cov_2145knos0z.s[0]++, (0, _config.getConfig)());

var _ref = (cov_2145knos0z.s[1]++, config),
    secret = _ref.secret;

/**
 * Init express app
 */


var app = (cov_2145knos0z.s[2]++, (0, _express2.default)());

/**
 * Enhance the app with middlewares
 */
cov_2145knos0z.s[3]++;
app.use(_bodyParser2.default.urlencoded({ extended: true, limit: "200Mo" }));
cov_2145knos0z.s[4]++;
app.use(_bodyParser2.default.json()); // use json body parser except when uploading raw files
cov_2145knos0z.s[5]++;
app.use((0, _cors2.default)());
cov_2145knos0z.s[6]++;
app.use(require('express-promise')());
cov_2145knos0z.s[7]++;
app.use((0, _expressBunyanLogger2.default)({
  name: "log",
  streams: [{
    level: 'info',
    type: 'raw',
    stream: (0, _bunyanDebugStream2.default)({
      basepath: __dirname, // this should be the root folder of your project.
      forceColor: true
    })
  }],
  serializers: _bunyanDebugStream2.default.serializers
}));

/**
 * set secret variable for auth processes
 */
cov_2145knos0z.s[8]++;
app.set('superSecret', secret);

/**
 * Set a route
 */
cov_2145knos0z.s[9]++;
app.get('/', function (req, res) {
  cov_2145knos0z.f[0]++;
  cov_2145knos0z.s[10]++;

  res.send('This is an api. Connect to /api/:whatyouwant to get something.');
});

exports.default = app;

/**
 * Static asset files
 */

var assetsPath = (cov_2145knos0z.s[11]++, (0, _path.resolve)(__dirname + '/../assets'));
cov_2145knos0z.s[12]++;
app.use('/assets', _express2.default.static(assetsPath));

/**
 * Create API router
 */
var apiRoutes = (cov_2145knos0z.s[13]++, _express2.default.Router());

/**
 * No-token authentication-related routes
 */
cov_2145knos0z.s[14]++;
apiRoutes.use('/', _auth.api);

/**
 * API documentation route
 */

// /**
//  * Apply authentication middleware for protected routes using jwt
//  * (after that line all routes are protected)
//  */
// // apiRoutes.use(authenticateWithTokens);
// /**
//  * Protected api routes
//  */
// // apiRoutes.use('/articles', articles);
cov_2145knos0z.s[15]++;
apiRoutes.use('/users', _users.api);
cov_2145knos0z.s[16]++;
apiRoutes.use('/assets', _assets.api);
cov_2145knos0z.s[17]++;
apiRoutes.use('/resources', _resources.api);
cov_2145knos0z.s[18]++;
apiRoutes.use('/compositions', _compositions.api);

// /**
//  * Connect the api router to the app
//  */
cov_2145knos0z.s[19]++;
app.use('/api', apiRoutes);

// /**
//  * Connect error handler
//  */
cov_2145knos0z.s[20]++;
app.use(_middlewares.errorHandler);