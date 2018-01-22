'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1qv3v7zld6 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/html2img/html2img.controller.js',
      hash = '1f44023222825a880453f6da650758e21b5ba0ed',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/html2img/html2img.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 13
        },
        end: {
          line: 12,
          column: 51
        }
      },
      '1': {
        start: {
          line: 15,
          column: 15
        },
        end: {
          line: 15,
          column: 28
        }
      },
      '2': {
        start: {
          line: 16,
          column: 13
        },
        end: {
          line: 16,
          column: 20
        }
      },
      '3': {
        start: {
          line: 17,
          column: 19
        },
        end: {
          line: 17,
          column: 43
        }
      },
      '4': {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 29,
          column: 5
        }
      },
      '5': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      '6': {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 39
        }
      },
      '7': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 28,
          column: 36
        }
      },
      '8': {
        start: {
          line: 26,
          column: 22
        },
        end: {
          line: 26,
          column: 38
        }
      },
      '9': {
        start: {
          line: 28,
          column: 18
        },
        end: {
          line: 28,
          column: 34
        }
      }
    },
    fnMap: {
      '0': {
        name: 'controller',
        decl: {
          start: {
            line: 14,
            column: 24
          },
          end: {
            line: 14,
            column: 34
          }
        },
        loc: {
          start: {
            line: 14,
            column: 46
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 14
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 19,
            column: 28
          }
        },
        loc: {
          start: {
            line: 19,
            column: 34
          },
          end: {
            line: 29,
            column: 3
          }
        },
        line: 19
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 26,
            column: 12
          },
          end: {
            line: 26,
            column: 13
          }
        },
        loc: {
          start: {
            line: 26,
            column: 22
          },
          end: {
            line: 26,
            column: 38
          }
        },
        line: 26
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 28,
            column: 12
          },
          end: {
            line: 28,
            column: 13
          }
        },
        loc: {
          start: {
            line: 28,
            column: 18
          },
          end: {
            line: 28,
            column: 34
          }
        },
        line: 28
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }],
        line: 20
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
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {
      '0': [0, 0]
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
      * This module provides express request handlers
      * for the html 2 img service.
      * @module metis-backend/services/html 2 img
      */

exports.default = controller;

var _html2imgService = require('./html2img.service.js');

var _html2imgService2 = _interopRequireDefault(_html2imgService);

var _uuid = require('uuid');

var _fsExtra = require('fs-extra');

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var temp = (cov_1qv3v7zld6.s[0]++, (0, _path.resolve)(__dirname + '/../../../temp/'));

function controller(req, res) {
  cov_1qv3v7zld6.f[0]++;

  var html = (cov_1qv3v7zld6.s[1]++, req.body.data);
  var id = (cov_1qv3v7zld6.s[2]++, (0, _uuid.v4)());
  var filename = (cov_1qv3v7zld6.s[3]++, temp + '/' + id + '.jpg');
  // convert to image
  cov_1qv3v7zld6.s[4]++;
  (0, _html2imgService2.default)(html, filename, function (err) {
    cov_1qv3v7zld6.f[1]++;
    cov_1qv3v7zld6.s[5]++;

    if (err) {
      cov_1qv3v7zld6.b[0][0]++;
      cov_1qv3v7zld6.s[6]++;

      return res.status(500).send(err);
    } else {
      cov_1qv3v7zld6.b[0][1]++;
    }
    // read file as base64
    cov_1qv3v7zld6.s[7]++;
    (0, _fsExtra.readFile)(filename, 'base64')
    // send file
    .then(function (base64) {
      cov_1qv3v7zld6.f[2]++;
      cov_1qv3v7zld6.s[8]++;
      return res.send(base64);
    })
    // remove temp file
    .then(function () {
      cov_1qv3v7zld6.f[3]++;
      cov_1qv3v7zld6.s[9]++;
      return (0, _fsExtra.remove)(filename);
    });
  });
}