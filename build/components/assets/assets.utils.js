'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listFiles = exports.deleteFiles = exports.writeFiles = exports.deleteFile = exports.writeFile = exports.fileExists = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_1l0xmye52 = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.utils.js',
      hash = '1a5906ef322755e7f80719b0c6ef2ecb490ba428',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.utils.js',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 26
        },
        end: {
          line: 17,
          column: 60
        }
      },
      '1': {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 60
        }
      },
      '2': {
        start: {
          line: 23,
          column: 25
        },
        end: {
          line: 32,
          column: 3
        }
      },
      '3': {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      '4': {
        start: {
          line: 38,
          column: 26
        },
        end: {
          line: 40,
          column: 56
        }
      },
      '5': {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 40,
          column: 56
        }
      },
      '6': {
        start: {
          line: 46,
          column: 26
        },
        end: {
          line: 49,
          column: 3
        }
      },
      '7': {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 49,
          column: 3
        }
      },
      '8': {
        start: {
          line: 48,
          column: 22
        },
        end: {
          line: 48,
          column: 99
        }
      },
      '9': {
        start: {
          line: 55,
          column: 27
        },
        end: {
          line: 58,
          column: 3
        }
      },
      '10': {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      '11': {
        start: {
          line: 57,
          column: 22
        },
        end: {
          line: 57,
          column: 52
        }
      },
      '12': {
        start: {
          line: 64,
          column: 25
        },
        end: {
          line: 65,
          column: 35
        }
      },
      '13': {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 65,
          column: 35
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 15,
            column: 26
          },
          end: {
            line: 15,
            column: 27
          }
        },
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 60
          }
        },
        line: 17
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 25
          },
          end: {
            line: 23,
            column: 26
          }
        },
        loc: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 24
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 38,
            column: 26
          },
          end: {
            line: 38,
            column: 27
          }
        },
        loc: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 56
          }
        },
        line: 40
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 46,
            column: 26
          },
          end: {
            line: 46,
            column: 27
          }
        },
        loc: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 47
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 48,
            column: 14
          },
          end: {
            line: 48,
            column: 15
          }
        },
        loc: {
          start: {
            line: 48,
            column: 22
          },
          end: {
            line: 48,
            column: 99
          }
        },
        line: 48
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 55,
            column: 27
          },
          end: {
            line: 55,
            column: 28
          }
        },
        loc: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        line: 56
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 57,
            column: 14
          },
          end: {
            line: 57,
            column: 15
          }
        },
        loc: {
          start: {
            line: 57,
            column: 22
          },
          end: {
            line: 57,
            column: 52
          }
        },
        line: 57
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 64,
            column: 25
          },
          end: {
            line: 64,
            column: 26
          }
        },
        loc: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 35
          }
        },
        line: 65
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 23,
            column: 40
          },
          end: {
            line: 23,
            column: 49
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 23,
            column: 47
          },
          end: {
            line: 23,
            column: 49
          }
        }],
        line: 23
      },
      '1': {
        loc: {
          start: {
            line: 23,
            column: 60
          },
          end: {
            line: 23,
            column: 77
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 23,
            column: 72
          },
          end: {
            line: 23,
            column: 77
          }
        }],
        line: 23
      },
      '2': {
        loc: {
          start: {
            line: 30,
            column: 12
          },
          end: {
            line: 30,
            column: 34
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 30,
            column: 24
          },
          end: {
            line: 30,
            column: 27
          }
        }, {
          start: {
            line: 30,
            column: 30
          },
          end: {
            line: 30,
            column: 34
          }
        }],
        line: 30
      },
      '3': {
        loc: {
          start: {
            line: 38,
            column: 41
          },
          end: {
            line: 38,
            column: 50
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 38,
            column: 48
          },
          end: {
            line: 38,
            column: 50
          }
        }],
        line: 38
      },
      '4': {
        loc: {
          start: {
            line: 46,
            column: 41
          },
          end: {
            line: 46,
            column: 51
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 46,
            column: 49
          },
          end: {
            line: 46,
            column: 51
          }
        }],
        line: 46
      },
      '5': {
        loc: {
          start: {
            line: 46,
            column: 53
          },
          end: {
            line: 46,
            column: 70
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 46,
            column: 65
          },
          end: {
            line: 46,
            column: 70
          }
        }],
        line: 46
      },
      '6': {
        loc: {
          start: {
            line: 55,
            column: 42
          },
          end: {
            line: 55,
            column: 52
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 55,
            column: 50
          },
          end: {
            line: 55,
            column: 52
          }
        }],
        line: 55
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
      '13': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    b: {
      '0': [0],
      '1': [0],
      '2': [0, 0],
      '3': [0],
      '4': [0],
      '5': [0],
      '6': [0]
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
      * Plurishing-backend
      * =======
      * Promise-based API for interacting with locally stored assets
      */
/* eslint security/detect-non-literal-fs-filename : 0 */

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether a file exists
 * @return {Promise}
 */
cov_1l0xmye52.s[0]++;
var fileExists = exports.fileExists = function fileExists(sourceParams, file) {
  cov_1l0xmye52.f[0]++;
  cov_1l0xmye52.s[1]++;
  return (
    // ensure to prevent from path traversal with path.join
    _fsExtra2.default.pathExists(_path2.default.join(sourceParams.basePath, '/', file))
  );
};

/**
 * write a file
 * @return {Promise}
 */
cov_1l0xmye52.s[2]++;
var writeFile = exports.writeFile = function writeFile(sourceParams) {
  var file = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1l0xmye52.b[0][0]++, '');
  var content = arguments[2];
  var overwrite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (cov_1l0xmye52.b[1][0]++, false);
  var encoding = arguments[4];
  cov_1l0xmye52.f[1]++;
  cov_1l0xmye52.s[3]++;
  return _fsExtra2.default.writeFile(
  // ensure to prevent from path traversal with path.join
  _path2.default.join(sourceParams.basePath, '/', file), content, {
    encoding: encoding,
    flag: overwrite ? (cov_1l0xmye52.b[2][0]++, 'w') : (cov_1l0xmye52.b[2][1]++, 'wx')
  });
};

/**
 * delete file
 * @return {Promise}
 */
cov_1l0xmye52.s[4]++;
var deleteFile = exports.deleteFile = function deleteFile(sourceParams) {
  var file = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1l0xmye52.b[3][0]++, '');
  cov_1l0xmye52.f[2]++;
  cov_1l0xmye52.s[5]++;
  return (
    // ensure to prevent from path traversal with path.join
    _fsExtra2.default.unlink(_path2.default.join(sourceParams.basePath, '/', file))
  );
};

/**
 * write list of files
 * @return {Promise}
 */
cov_1l0xmye52.s[6]++;
var writeFiles = exports.writeFiles = function writeFiles(sourceParams) {
  var files = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1l0xmye52.b[4][0]++, []);
  var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1l0xmye52.b[5][0]++, false);
  var encoding = arguments[3];
  cov_1l0xmye52.f[3]++;
  cov_1l0xmye52.s[7]++;
  return _promise2.default.all(files.map(function (file) {
    cov_1l0xmye52.f[4]++;
    cov_1l0xmye52.s[8]++;
    return writeFile(sourceParams, file.fileName, file.fileContent, overwrite, encoding);
  }));
};

/**
 * delete list of files
 * @return {Promise}
 */
cov_1l0xmye52.s[9]++;
var deleteFiles = exports.deleteFiles = function deleteFiles(sourceParams) {
  var files = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1l0xmye52.b[6][0]++, []);
  cov_1l0xmye52.f[5]++;
  cov_1l0xmye52.s[10]++;
  return _promise2.default.all(files.map(function (file) {
    cov_1l0xmye52.f[6]++;
    cov_1l0xmye52.s[11]++;
    return deleteFile(sourceParams, file);
  }));
};

/**
 * list asset files names
 * @return {Promise}
 */
cov_1l0xmye52.s[12]++;
var listFiles = exports.listFiles = function listFiles(sourceParams) {
  cov_1l0xmye52.f[7]++;
  cov_1l0xmye52.s[13]++;
  return _fsExtra2.default.readdir(sourceParams.basePath);
};