'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAsset = exports.updateAsset = exports.createAsset = exports.getAssetAttachment = exports.getAsset = exports.getAssets = undefined;

var cov_46ir9d5pi = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.controller.js',
      hash = '4a5af8d0a2861f48a1b4898973b1c37300667abf',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 27,
          column: 25
        },
        end: {
          line: 28,
          column: 28
        }
      },
      '1': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 28
        }
      },
      '2': {
        start: {
          line: 35,
          column: 24
        },
        end: {
          line: 40,
          column: 3
        }
      },
      '3': {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      },
      '4': {
        start: {
          line: 47,
          column: 34
        },
        end: {
          line: 56,
          column: 1
        }
      },
      '5': {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 55,
          column: 5
        }
      },
      '6': {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 51
        }
      },
      '7': {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 28
        }
      },
      '8': {
        start: {
          line: 63,
          column: 27
        },
        end: {
          line: 90,
          column: 1
        }
      },
      '9': {
        start: {
          line: 64,
          column: 19
        },
        end: {
          line: 64,
          column: 52
        }
      },
      '10': {
        start: {
          line: 65,
          column: 15
        },
        end: {
          line: 69,
          column: 4
        }
      },
      '11': {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 73,
          column: 5
        }
      },
      '12': {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 37
        }
      },
      '13': {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 89,
          column: 5
        }
      },
      '14': {
        start: {
          line: 77,
          column: 27
        },
        end: {
          line: 77,
          column: 42
        }
      },
      '15': {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 88,
          column: 43
        }
      },
      '16': {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 84,
          column: 16
        }
      },
      '17': {
        start: {
          line: 86,
          column: 18
        },
        end: {
          line: 86,
          column: 40
        }
      },
      '18': {
        start: {
          line: 87,
          column: 18
        },
        end: {
          line: 87,
          column: 44
        }
      },
      '19': {
        start: {
          line: 88,
          column: 18
        },
        end: {
          line: 88,
          column: 41
        }
      },
      '20': {
        start: {
          line: 96,
          column: 27
        },
        end: {
          line: 130,
          column: 1
        }
      },
      '21': {
        start: {
          line: 97,
          column: 18
        },
        end: {
          line: 97,
          column: 31
        }
      },
      '22': {
        start: {
          line: 98,
          column: 15
        },
        end: {
          line: 102,
          column: 4
        }
      },
      '23': {
        start: {
          line: 104,
          column: 2
        },
        end: {
          line: 106,
          column: 5
        }
      },
      '24': {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 37
        }
      },
      '25': {
        start: {
          line: 109,
          column: 2
        },
        end: {
          line: 129,
          column: 5
        }
      },
      '26': {
        start: {
          line: 110,
          column: 27
        },
        end: {
          line: 110,
          column: 42
        }
      },
      '27': {
        start: {
          line: 111,
          column: 20
        },
        end: {
          line: 111,
          column: 35
        }
      },
      '28': {
        start: {
          line: 112,
          column: 21
        },
        end: {
          line: 112,
          column: 37
        }
      },
      '29': {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 128,
          column: 43
        }
      },
      '30': {
        start: {
          line: 115,
          column: 8
        },
        end: {
          line: 118,
          column: 16
        }
      },
      '31': {
        start: {
          line: 120,
          column: 18
        },
        end: {
          line: 120,
          column: 40
        }
      },
      '32': {
        start: {
          line: 122,
          column: 8
        },
        end: {
          line: 126,
          column: 9
        }
      },
      '33': {
        start: {
          line: 128,
          column: 18
        },
        end: {
          line: 128,
          column: 41
        }
      },
      '34': {
        start: {
          line: 137,
          column: 27
        },
        end: {
          line: 138,
          column: 48
        }
      },
      '35': {
        start: {
          line: 138,
          column: 2
        },
        end: {
          line: 138,
          column: 48
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 27,
            column: 25
          },
          end: {
            line: 27,
            column: 26
          }
        },
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 28
          }
        },
        line: 28
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 35,
            column: 24
          },
          end: {
            line: 35,
            column: 25
          }
        },
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 36
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 47,
            column: 34
          },
          end: {
            line: 47,
            column: 35
          }
        },
        loc: {
          start: {
            line: 47,
            column: 48
          },
          end: {
            line: 56,
            column: 1
          }
        },
        line: 47
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 52,
            column: 8
          },
          end: {
            line: 52,
            column: 9
          }
        },
        loc: {
          start: {
            line: 52,
            column: 30
          },
          end: {
            line: 55,
            column: 3
          }
        },
        line: 52
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 63,
            column: 27
          },
          end: {
            line: 63,
            column: 28
          }
        },
        loc: {
          start: {
            line: 63,
            column: 41
          },
          end: {
            line: 90,
            column: 1
          }
        },
        line: 63
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 71,
            column: 19
          },
          end: {
            line: 71,
            column: 20
          }
        },
        loc: {
          start: {
            line: 71,
            column: 32
          },
          end: {
            line: 73,
            column: 3
          }
        },
        line: 71
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 76,
            column: 18
          },
          end: {
            line: 76,
            column: 19
          }
        },
        loc: {
          start: {
            line: 76,
            column: 47
          },
          end: {
            line: 89,
            column: 3
          }
        },
        line: 76
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 79,
            column: 12
          },
          end: {
            line: 79,
            column: 13
          }
        },
        loc: {
          start: {
            line: 80,
            column: 8
          },
          end: {
            line: 84,
            column: 16
          }
        },
        line: 80
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 86,
            column: 12
          },
          end: {
            line: 86,
            column: 13
          }
        },
        loc: {
          start: {
            line: 86,
            column: 18
          },
          end: {
            line: 86,
            column: 40
          }
        },
        line: 86
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 87,
            column: 12
          },
          end: {
            line: 87,
            column: 13
          }
        },
        loc: {
          start: {
            line: 87,
            column: 18
          },
          end: {
            line: 87,
            column: 44
          }
        },
        line: 87
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 88,
            column: 13
          },
          end: {
            line: 88,
            column: 14
          }
        },
        loc: {
          start: {
            line: 88,
            column: 18
          },
          end: {
            line: 88,
            column: 41
          }
        },
        line: 88
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 96,
            column: 27
          },
          end: {
            line: 96,
            column: 28
          }
        },
        loc: {
          start: {
            line: 96,
            column: 41
          },
          end: {
            line: 130,
            column: 1
          }
        },
        line: 96
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 104,
            column: 19
          },
          end: {
            line: 104,
            column: 20
          }
        },
        loc: {
          start: {
            line: 104,
            column: 32
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 104
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 109,
            column: 18
          },
          end: {
            line: 109,
            column: 19
          }
        },
        loc: {
          start: {
            line: 109,
            column: 47
          },
          end: {
            line: 129,
            column: 3
          }
        },
        line: 109
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 114,
            column: 12
          },
          end: {
            line: 114,
            column: 13
          }
        },
        loc: {
          start: {
            line: 115,
            column: 8
          },
          end: {
            line: 118,
            column: 16
          }
        },
        line: 115
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 120,
            column: 12
          },
          end: {
            line: 120,
            column: 13
          }
        },
        loc: {
          start: {
            line: 120,
            column: 18
          },
          end: {
            line: 120,
            column: 40
          }
        },
        line: 120
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 121,
            column: 12
          },
          end: {
            line: 121,
            column: 13
          }
        },
        loc: {
          start: {
            line: 122,
            column: 8
          },
          end: {
            line: 126,
            column: 9
          }
        },
        line: 122
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 128,
            column: 13
          },
          end: {
            line: 128,
            column: 14
          }
        },
        loc: {
          start: {
            line: 128,
            column: 18
          },
          end: {
            line: 128,
            column: 41
          }
        },
        line: 128
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 137,
            column: 27
          },
          end: {
            line: 137,
            column: 28
          }
        },
        loc: {
          start: {
            line: 138,
            column: 2
          },
          end: {
            line: 138,
            column: 48
          }
        },
        line: 138
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
      * Plurishing-backend
      * =======
      * Assets component controller
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
cov_46ir9d5pi.s[0]++;
var getAssets = exports.getAssets = function getAssets(req, res) {
  cov_46ir9d5pi.f[0]++;
  cov_46ir9d5pi.s[1]++;
  return res.json((0, _assets.getAssets)({}));
};

/**
 * Get a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_46ir9d5pi.s[2]++;
var getAsset = exports.getAsset = function getAsset(req, res) {
  cov_46ir9d5pi.f[1]++;
  cov_46ir9d5pi.s[3]++;
  return res.json((0, _assets.getAsset)({
    id: req.params.id
  }));
};

/**
 * Get a single asset attachment
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_46ir9d5pi.s[4]++;
var getAssetAttachment = exports.getAssetAttachment = function getAssetAttachment(req, res) {
  cov_46ir9d5pi.f[2]++;
  cov_46ir9d5pi.s[5]++;

  (0, _assets.getAssetAttachment)({
    id: req.params.id,
    filename: req.params.filename
  }).then(function (_ref) {
    var data = _ref.data,
        mimetype = _ref.mimetype;
    cov_46ir9d5pi.f[3]++;
    cov_46ir9d5pi.s[6]++;

    res.writeHead(200, { 'Content-Type': mimetype });
    cov_46ir9d5pi.s[7]++;
    res.end(data, 'binary');
  });
};

/**
 * Create a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_46ir9d5pi.s[8]++;
var createAsset = exports.createAsset = function createAsset(req, res) {
  cov_46ir9d5pi.f[4]++;

  var filename = (cov_46ir9d5pi.s[9]++, decodeURIComponent(req.params.id));
  var form = (cov_46ir9d5pi.s[10]++, new _formidable2.default.IncomingForm({
    uploadDir: (0, _path.resolve)(__dirname + '/../../../temp'),
    // multiples : true,
    keepExtensions: true
  }));

  cov_46ir9d5pi.s[11]++;
  form.on('error', function (err) {
    cov_46ir9d5pi.f[5]++;
    cov_46ir9d5pi.s[12]++;

    return res.status(500).send(err);
  });

  cov_46ir9d5pi.s[13]++;
  form.parse(req, function (err, fields, files) {
    cov_46ir9d5pi.f[6]++;

    var attachmentPath = (cov_46ir9d5pi.s[14]++, files.file.path);
    cov_46ir9d5pi.s[15]++;
    (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
      cov_46ir9d5pi.f[7]++;
      cov_46ir9d5pi.s[16]++;
      return (0, _assets.createAsset)({
        _id: (0, _uuid.v4)(),
        filename: filename,
        type: 'asset'
      }, data);
    }).then(function () {
      cov_46ir9d5pi.f[8]++;
      cov_46ir9d5pi.s[17]++;
      return (0, _fsExtra.remove)(attachmentPath);
    }).then(function () {
      cov_46ir9d5pi.f[9]++;
      cov_46ir9d5pi.s[18]++;
      return res.json((0, _assets.getAssets)({}));
    }).catch(function (e) {
      cov_46ir9d5pi.f[10]++;
      cov_46ir9d5pi.s[19]++;
      return res.status(500).send(e);
    });
  });
};
/**
 * Update a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_46ir9d5pi.s[20]++;
var updateAsset = exports.updateAsset = function updateAsset(req, res) {
  cov_46ir9d5pi.f[11]++;

  var assetId = (cov_46ir9d5pi.s[21]++, req.params.id);
  var form = (cov_46ir9d5pi.s[22]++, new _formidable2.default.IncomingForm({
    uploadDir: (0, _path.resolve)(__dirname + '/../../../temp'),
    // multiples : true,
    keepExtensions: true
  }));

  cov_46ir9d5pi.s[23]++;
  form.on('error', function (err) {
    cov_46ir9d5pi.f[12]++;
    cov_46ir9d5pi.s[24]++;

    return res.status(500).send(err);
  });

  cov_46ir9d5pi.s[25]++;
  form.parse(req, function (err, fields, files) {
    cov_46ir9d5pi.f[13]++;

    var attachmentPath = (cov_46ir9d5pi.s[26]++, files.file.path);
    var filename = (cov_46ir9d5pi.s[27]++, files.file.name);
    var mimetype = (cov_46ir9d5pi.s[28]++, (0, _mimeTypes.lookup)(filename));
    cov_46ir9d5pi.s[29]++;
    (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
      cov_46ir9d5pi.f[14]++;
      cov_46ir9d5pi.s[30]++;
      return (0, _assets.updateAsset)(assetId, {
        filename: filename,
        mimetype: mimetype
      }, data);
    }).then(function () {
      cov_46ir9d5pi.f[15]++;
      cov_46ir9d5pi.s[31]++;
      return (0, _fsExtra.remove)(attachmentPath);
    }).then(function () {
      cov_46ir9d5pi.f[16]++;
      cov_46ir9d5pi.s[32]++;
      return res.json((0, _assets.getAsset)({
        id: assetId
      }));
    }).catch(function (e) {
      cov_46ir9d5pi.f[17]++;
      cov_46ir9d5pi.s[33]++;
      return res.status(500).send(e);
    });
  });
};

/**
 * Delete a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_46ir9d5pi.s[34]++;
var deleteAsset = exports.deleteAsset = function deleteAsset(req, res) {
  cov_46ir9d5pi.f[18]++;
  cov_46ir9d5pi.s[35]++;
  return res.json((0, _assets.deleteAsset)({ _id: req.params.id }));
};