'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_26femfauz7 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/web/index.js',
      hash = '3afd59ebbb077fb807429190f74f6778489efea8',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/releasers/web/index.js',
    statementMap: {
      '0': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 15
        }
      },
      '1': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 23,
          column: 13
        }
      },
      '2': {
        start: {
          line: 20,
          column: 29
        },
        end: {
          line: 20,
          column: 58
        }
      },
      '3': {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 22,
          column: 58
        }
      }
    },
    fnMap: {
      '0': {
        name: 'publish',
        decl: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 17,
            column: 31
          }
        },
        loc: {
          start: {
            line: 17,
            column: 49
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 17
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 17
          }
        },
        loc: {
          start: {
            line: 19,
            column: 23
          },
          end: {
            line: 23,
            column: 11
          }
        },
        line: 19
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
}(); /**
      * This module provides an entrypoint to the web publication releaser
      * @module metis-backend/releasers/web
      */

exports.default = publish;

var _axios = require('axios');

var _config = require('../../utils/config');

var _crypto = require('../../utils/crypto');

var _ref = (cov_26femfauz7.s[0]++, (0, _config.getConfig)()),
    websiteBuilderUri = _ref.websiteBuilderUri,
    secret = _ref.secret;

function publish(data, diffusion) {
  cov_26femfauz7.f[0]++;
  cov_26femfauz7.s[1]++;

  return (0, _crypto.hash)(secret).then(function (pwd) {
    cov_26femfauz7.f[1]++;

    var endpoint = (cov_26femfauz7.s[2]++, websiteBuilderUri + '/update');
    // send new data
    cov_26femfauz7.s[3]++;
    return (0, _axios.post)(endpoint, { data: data, diffusion: diffusion, pwd: pwd });
  });
}