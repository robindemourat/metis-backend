'use strict';

var cov_fd9w2gpym = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/server.js',
      hash = 'ddc28d1a6e40b3f94e6b4f6daad7fd7a70721993',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/server.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 15
        },
        end: {
          line: 17,
          column: 26
        }
      },
      '1': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 10
        }
      },
      '2': {
        start: {
          line: 52,
          column: 0
        },
        end: {
          line: 54,
          column: 3
        }
      },
      '3': {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 53,
          column: 95
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 52,
            column: 23
          },
          end: {
            line: 52,
            column: 24
          }
        },
        loc: {
          start: {
            line: 52,
            column: 35
          },
          end: {
            line: 54,
            column: 1
          }
        },
        line: 52
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
      * Metis-backend
      * =======
      * This is the application entrypoint.
      * It starts an express app listening at specified port.
      */

// import fs from 'fs';
// import https from 'https';
/* eslint no-console : 0 */


/**
 * Connect config
 */


var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _config = require('./utils/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (cov_fd9w2gpym.s[0]++, (0, _config.getConfig)());

var _ref = (cov_fd9w2gpym.s[1]++, config),
    port = _ref.port;

/**
 * ===============
 * HTTPS Connection
 * ===============
 */

// /**
//  * Prepare https certificate
//  */
// const options = {
//   key,
//   ca: csr,
//   cert
// };

// /**
//  * Launch server
//  */
// https.createServer(options, app).listen(port, null, function () {
//   console.log('Server listening on port %d in %s mode', this.address().port, app.settings.env);
// });


/**
 * ===============
 * HTTP Connection
 * ===============
 */

cov_fd9w2gpym.s[2]++;
_app2.default.listen(port, null, function () {
  cov_fd9w2gpym.f[0]++;
  cov_fd9w2gpym.s[3]++;

  console.log('Server listening on port %d in %s mode', this.address().port, _app2.default.settings.env);
});