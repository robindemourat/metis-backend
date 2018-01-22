'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2d4sihlqgn = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/plugDb.js',
      hash = 'c6c7da1192071a261cf88d5ec4d3bd94a594d585',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/plugDb.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 16
        },
        end: {
          line: 6,
          column: 35
        }
      },
      '1': {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 46
        }
      },
      '2': {
        start: {
          line: 14,
          column: 13
        },
        end: {
          line: 14,
          column: 47
        }
      },
      '3': {
        start: {
          line: 19,
          column: 9
        },
        end: {
          line: 19,
          column: 40
        }
      },
      '4': {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 25
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {},
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
 * Metis-backend
 * =======
 * Couchdb connection script
 */
var Promise = (cov_2d4sihlqgn.s[0]++, require('bluebird'));

var config = (cov_2d4sihlqgn.s[1]++, require('./config').getConfig());

/**
 * Init nano
 */
var nano = (cov_2d4sihlqgn.s[2]++, require('nano')(config.couchdbUri));

/**
 * Specify db name
 */
var db = (cov_2d4sihlqgn.s[3]++, nano.db.use(config.couchdbName));

/**
 * Promisify
 */
cov_2d4sihlqgn.s[4]++;
Promise.promisifyAll(db);

exports.default = db;