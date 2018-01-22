'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAsset = exports.updateAsset = exports.createAsset = exports.getAssetAttachment = exports.getAsset = exports.getAssets = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var cov_100515d9mo = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/assets/assets.controller.js',
      hash = '2fe54010c67abb4a963290f868067b150ecbb5e0',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/assets/assets.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 28,
          column: 25
        },
        end: {
          line: 29,
          column: 28
        }
      },
      '1': {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 28
        }
      },
      '2': {
        start: {
          line: 36,
          column: 24
        },
        end: {
          line: 41,
          column: 3
        }
      },
      '3': {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 41,
          column: 3
        }
      },
      '4': {
        start: {
          line: 48,
          column: 34
        },
        end: {
          line: 58,
          column: 1
        }
      },
      '5': {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 57,
          column: 5
        }
      },
      '6': {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 51
        }
      },
      '7': {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 28
        }
      },
      '8': {
        start: {
          line: 65,
          column: 27
        },
        end: {
          line: 92,
          column: 1
        }
      },
      '9': {
        start: {
          line: 66,
          column: 19
        },
        end: {
          line: 66,
          column: 52
        }
      },
      '10': {
        start: {
          line: 67,
          column: 15
        },
        end: {
          line: 71,
          column: 4
        }
      },
      '11': {
        start: {
          line: 73,
          column: 2
        },
        end: {
          line: 75,
          column: 5
        }
      },
      '12': {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 37
        }
      },
      '13': {
        start: {
          line: 78,
          column: 2
        },
        end: {
          line: 91,
          column: 5
        }
      },
      '14': {
        start: {
          line: 79,
          column: 27
        },
        end: {
          line: 79,
          column: 42
        }
      },
      '15': {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 90,
          column: 43
        }
      },
      '16': {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 86,
          column: 16
        }
      },
      '17': {
        start: {
          line: 88,
          column: 18
        },
        end: {
          line: 88,
          column: 40
        }
      },
      '18': {
        start: {
          line: 89,
          column: 18
        },
        end: {
          line: 89,
          column: 44
        }
      },
      '19': {
        start: {
          line: 90,
          column: 18
        },
        end: {
          line: 90,
          column: 41
        }
      },
      '20': {
        start: {
          line: 98,
          column: 27
        },
        end: {
          line: 132,
          column: 1
        }
      },
      '21': {
        start: {
          line: 99,
          column: 18
        },
        end: {
          line: 99,
          column: 31
        }
      },
      '22': {
        start: {
          line: 100,
          column: 15
        },
        end: {
          line: 104,
          column: 4
        }
      },
      '23': {
        start: {
          line: 106,
          column: 2
        },
        end: {
          line: 108,
          column: 5
        }
      },
      '24': {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 37
        }
      },
      '25': {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 131,
          column: 5
        }
      },
      '26': {
        start: {
          line: 112,
          column: 27
        },
        end: {
          line: 112,
          column: 42
        }
      },
      '27': {
        start: {
          line: 113,
          column: 20
        },
        end: {
          line: 113,
          column: 35
        }
      },
      '28': {
        start: {
          line: 114,
          column: 21
        },
        end: {
          line: 114,
          column: 37
        }
      },
      '29': {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 130,
          column: 43
        }
      },
      '30': {
        start: {
          line: 117,
          column: 8
        },
        end: {
          line: 120,
          column: 16
        }
      },
      '31': {
        start: {
          line: 122,
          column: 18
        },
        end: {
          line: 122,
          column: 40
        }
      },
      '32': {
        start: {
          line: 124,
          column: 8
        },
        end: {
          line: 128,
          column: 9
        }
      },
      '33': {
        start: {
          line: 130,
          column: 18
        },
        end: {
          line: 130,
          column: 41
        }
      },
      '34': {
        start: {
          line: 139,
          column: 27
        },
        end: {
          line: 140,
          column: 48
        }
      },
      '35': {
        start: {
          line: 140,
          column: 2
        },
        end: {
          line: 140,
          column: 48
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 28,
            column: 25
          },
          end: {
            line: 28,
            column: 26
          }
        },
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 28
          }
        },
        line: 29
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 36,
            column: 24
          },
          end: {
            line: 36,
            column: 25
          }
        },
        loc: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 37
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 48,
            column: 34
          },
          end: {
            line: 48,
            column: 35
          }
        },
        loc: {
          start: {
            line: 48,
            column: 48
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 48
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 54,
            column: 8
          },
          end: {
            line: 54,
            column: 9
          }
        },
        loc: {
          start: {
            line: 54,
            column: 30
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 54
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 65,
            column: 27
          },
          end: {
            line: 65,
            column: 28
          }
        },
        loc: {
          start: {
            line: 65,
            column: 41
          },
          end: {
            line: 92,
            column: 1
          }
        },
        line: 65
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 73,
            column: 19
          },
          end: {
            line: 73,
            column: 20
          }
        },
        loc: {
          start: {
            line: 73,
            column: 32
          },
          end: {
            line: 75,
            column: 3
          }
        },
        line: 73
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 78,
            column: 18
          },
          end: {
            line: 78,
            column: 19
          }
        },
        loc: {
          start: {
            line: 78,
            column: 47
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 78
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 81,
            column: 12
          },
          end: {
            line: 81,
            column: 13
          }
        },
        loc: {
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 86,
            column: 16
          }
        },
        line: 82
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 88,
            column: 12
          },
          end: {
            line: 88,
            column: 13
          }
        },
        loc: {
          start: {
            line: 88,
            column: 18
          },
          end: {
            line: 88,
            column: 40
          }
        },
        line: 88
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 89,
            column: 12
          },
          end: {
            line: 89,
            column: 13
          }
        },
        loc: {
          start: {
            line: 89,
            column: 18
          },
          end: {
            line: 89,
            column: 44
          }
        },
        line: 89
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 90,
            column: 13
          },
          end: {
            line: 90,
            column: 14
          }
        },
        loc: {
          start: {
            line: 90,
            column: 18
          },
          end: {
            line: 90,
            column: 41
          }
        },
        line: 90
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 98,
            column: 27
          },
          end: {
            line: 98,
            column: 28
          }
        },
        loc: {
          start: {
            line: 98,
            column: 41
          },
          end: {
            line: 132,
            column: 1
          }
        },
        line: 98
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 106,
            column: 19
          },
          end: {
            line: 106,
            column: 20
          }
        },
        loc: {
          start: {
            line: 106,
            column: 32
          },
          end: {
            line: 108,
            column: 3
          }
        },
        line: 106
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 111,
            column: 18
          },
          end: {
            line: 111,
            column: 19
          }
        },
        loc: {
          start: {
            line: 111,
            column: 47
          },
          end: {
            line: 131,
            column: 3
          }
        },
        line: 111
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 116,
            column: 12
          },
          end: {
            line: 116,
            column: 13
          }
        },
        loc: {
          start: {
            line: 117,
            column: 8
          },
          end: {
            line: 120,
            column: 16
          }
        },
        line: 117
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 122,
            column: 12
          },
          end: {
            line: 122,
            column: 13
          }
        },
        loc: {
          start: {
            line: 122,
            column: 18
          },
          end: {
            line: 122,
            column: 40
          }
        },
        line: 122
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 123,
            column: 12
          },
          end: {
            line: 123,
            column: 13
          }
        },
        loc: {
          start: {
            line: 124,
            column: 8
          },
          end: {
            line: 128,
            column: 9
          }
        },
        line: 124
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 130,
            column: 13
          },
          end: {
            line: 130,
            column: 14
          }
        },
        loc: {
          start: {
            line: 130,
            column: 18
          },
          end: {
            line: 130,
            column: 41
          }
        },
        line: 130
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 139,
            column: 27
          },
          end: {
            line: 139,
            column: 28
          }
        },
        loc: {
          start: {
            line: 140,
            column: 2
          },
          end: {
            line: 140,
            column: 48
          }
        },
        line: 140
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
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0
    },
    f: {
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
      '18': 0
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
      * This module provides express request handlers
      * for the assets component.
      * @module metis-backend/components/assets
      */

var _mimeTypes = require('mime-types');

var _uuid = require('uuid');

var _formidable = require('formidable');

var _formidable2 = _interopRequireDefault(_formidable);

var _fsExtra = require('fs-extra');

var _path = require('path');

var _assets = require('./assets.dal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a list of assets
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
cov_100515d9mo.s[0]++;
var getAssets = exports.getAssets = function getAssets(req, res) {
  cov_100515d9mo.f[0]++;
  cov_100515d9mo.s[1]++;
  return res.json((0, _assets.getAssets)({}));
};

/**
 * Get a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_100515d9mo.s[2]++;
var getAsset = exports.getAsset = function getAsset(req, res) {
  cov_100515d9mo.f[1]++;
  cov_100515d9mo.s[3]++;
  return res.json((0, _assets.getAsset)({
    id: req.params.id
  }));
};

/**
 * Get a single asset attachment
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_100515d9mo.s[4]++;
var getAssetAttachment = exports.getAssetAttachment = function getAssetAttachment(req, res) {
  cov_100515d9mo.f[2]++;
  cov_100515d9mo.s[5]++;

  (0, _assets.getAssetAttachment)((0, _extends3.default)({}, req.query, {
    id: req.params.id,
    filename: req.params.filename
  })).then(function (_ref) {
    var data = _ref.data,
        mimetype = _ref.mimetype;
    cov_100515d9mo.f[3]++;
    cov_100515d9mo.s[6]++;

    res.writeHead(200, { 'Content-Type': mimetype });
    cov_100515d9mo.s[7]++;
    res.end(data, 'binary');
  });
};

/**
 * Create a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_100515d9mo.s[8]++;
var createAsset = exports.createAsset = function createAsset(req, res) {
  cov_100515d9mo.f[4]++;

  var filename = (cov_100515d9mo.s[9]++, decodeURIComponent(req.params.id));
  var form = (cov_100515d9mo.s[10]++, new _formidable2.default.IncomingForm({
    uploadDir: (0, _path.resolve)(__dirname + '/../../../temp'),
    // multiples : true,
    keepExtensions: true
  }));

  cov_100515d9mo.s[11]++;
  form.on('error', function (err) {
    cov_100515d9mo.f[5]++;
    cov_100515d9mo.s[12]++;

    return res.status(500).send(err);
  });

  cov_100515d9mo.s[13]++;
  form.parse(req, function (err, fields, files) {
    cov_100515d9mo.f[6]++;

    var attachmentPath = (cov_100515d9mo.s[14]++, files.file.path);
    cov_100515d9mo.s[15]++;
    (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
      cov_100515d9mo.f[7]++;
      cov_100515d9mo.s[16]++;
      return (0, _assets.createAsset)({
        _id: (0, _uuid.v4)(),
        filename: filename,
        type: 'asset'
      }, data);
    }).then(function () {
      cov_100515d9mo.f[8]++;
      cov_100515d9mo.s[17]++;
      return (0, _fsExtra.remove)(attachmentPath);
    }).then(function () {
      cov_100515d9mo.f[9]++;
      cov_100515d9mo.s[18]++;
      return res.json((0, _assets.getAssets)({}));
    }).catch(function (e) {
      cov_100515d9mo.f[10]++;
      cov_100515d9mo.s[19]++;
      return res.status(500).send(e);
    });
  });
};
/**
 * Update a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_100515d9mo.s[20]++;
var updateAsset = exports.updateAsset = function updateAsset(req, res) {
  cov_100515d9mo.f[11]++;

  var assetId = (cov_100515d9mo.s[21]++, req.params.id);
  var form = (cov_100515d9mo.s[22]++, new _formidable2.default.IncomingForm({
    uploadDir: (0, _path.resolve)(__dirname + '/../../../temp'),
    // multiples : true,
    keepExtensions: true
  }));

  cov_100515d9mo.s[23]++;
  form.on('error', function (err) {
    cov_100515d9mo.f[12]++;
    cov_100515d9mo.s[24]++;

    return res.status(500).send(err);
  });

  cov_100515d9mo.s[25]++;
  form.parse(req, function (err, fields, files) {
    cov_100515d9mo.f[13]++;

    var attachmentPath = (cov_100515d9mo.s[26]++, files.file.path);
    var filename = (cov_100515d9mo.s[27]++, files.file.name);
    var mimetype = (cov_100515d9mo.s[28]++, (0, _mimeTypes.lookup)(filename));
    cov_100515d9mo.s[29]++;
    (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
      cov_100515d9mo.f[14]++;
      cov_100515d9mo.s[30]++;
      return (0, _assets.updateAsset)(assetId, {
        filename: filename,
        mimetype: mimetype
      }, data);
    }).then(function () {
      cov_100515d9mo.f[15]++;
      cov_100515d9mo.s[31]++;
      return (0, _fsExtra.remove)(attachmentPath);
    }).then(function () {
      cov_100515d9mo.f[16]++;
      cov_100515d9mo.s[32]++;
      return res.json((0, _assets.getAsset)({
        id: assetId
      }));
    }).catch(function (e) {
      cov_100515d9mo.f[17]++;
      cov_100515d9mo.s[33]++;
      return res.status(500).send(e);
    });
  });
};

/**
 * Delete a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_100515d9mo.s[34]++;
var deleteAsset = exports.deleteAsset = function deleteAsset(req, res) {
  cov_100515d9mo.f[18]++;
  cov_100515d9mo.s[35]++;
  return res.json((0, _assets.deleteAsset)({ _id: req.params.id }));
};