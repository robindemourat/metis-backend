'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMontageData = exports.getAssetAttachmentUrl = undefined;

var cov_1np82nrldr = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/services/data-provider/data-provider.controller.js',
      hash = 'cee0077c82314c28d5137457688d2c0c778bc006',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/services/data-provider/data-provider.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 37
        },
        end: {
          line: 9,
          column: 1
        }
      },
      '1': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 22
        }
      },
      '2': {
        start: {
          line: 12,
          column: 30
        },
        end: {
          line: 24,
          column: 1
        }
      },
      '3': {
        start: {
          line: 13,
          column: 13
        },
        end: {
          line: 13,
          column: 26
        }
      },
      '4': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 23,
          column: 43
        }
      },
      '5': {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 49
        }
      },
      '6': {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 30
        }
      },
      '7': {
        start: {
          line: 23,
          column: 18
        },
        end: {
          line: 23,
          column: 41
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 37
          },
          end: {
            line: 7,
            column: 38
          }
        },
        loc: {
          start: {
            line: 7,
            column: 51
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 12,
            column: 31
          }
        },
        loc: {
          start: {
            line: 12,
            column: 44
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 12
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 15,
            column: 12
          },
          end: {
            line: 15,
            column: 13
          }
        },
        loc: {
          start: {
            line: 15,
            column: 23
          },
          end: {
            line: 18,
            column: 7
          }
        },
        line: 15
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 13
          }
        },
        loc: {
          start: {
            line: 20,
            column: 20
          },
          end: {
            line: 22,
            column: 7
          }
        },
        line: 20
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 23,
            column: 13
          },
          end: {
            line: 23,
            column: 14
          }
        },
        loc: {
          start: {
            line: 23,
            column: 18
          },
          end: {
            line: 23,
            column: 41
          }
        },
        line: 23
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
      '7': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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

var _montages = require('../../components/montages');

var _data = require('../../utils/data');

cov_1np82nrldr.s[0]++;
var getAssetAttachmentUrl = exports.getAssetAttachmentUrl = function getAssetAttachmentUrl(req, res) {
  cov_1np82nrldr.f[0]++;
  cov_1np82nrldr.s[1]++;

  return res.send('');
};

cov_1np82nrldr.s[2]++;
var getMontageData = exports.getMontageData = function getMontageData(req, res) {
  cov_1np82nrldr.f[1]++;

  var id = (cov_1np82nrldr.s[3]++, req.params.id);
  cov_1np82nrldr.s[4]++;
  _montages.dal.getMontage({ id: id }).then(function (montage) {
    cov_1np82nrldr.f[2]++;
    cov_1np82nrldr.s[5]++;

    // fetch montage dependencies
    return (0, _data.fetchMontageDependencies)(montage);
  })
  // register all release operations to perform
  .then(function (data) {
    cov_1np82nrldr.f[3]++;
    cov_1np82nrldr.s[6]++;

    return res.json(data);
  }).catch(function (e) {
    cov_1np82nrldr.f[4]++;
    cov_1np82nrldr.s[7]++;
    return res.status(500).send(e);
  });
};