'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDeliverable = exports.updateDeliverable = exports.createDeliverable = exports.getDeliverableAttachment = exports.getDeliverable = exports.getDeliverables = undefined;

var cov_13dictikxa = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/deliverables/deliverables.controller.js',
      hash = '804b4bc6c1f7c2b18264680046f31fbc6ac28523',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/deliverables/deliverables.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 27,
          column: 31
        },
        end: {
          line: 28,
          column: 34
        }
      },
      '1': {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 34
        }
      },
      '2': {
        start: {
          line: 35,
          column: 30
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
          column: 40
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
          column: 33
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
          column: 50
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
          column: 33
        },
        end: {
          line: 130,
          column: 1
        }
      },
      '21': {
        start: {
          line: 97,
          column: 24
        },
        end: {
          line: 97,
          column: 37
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
          column: 33
        },
        end: {
          line: 138,
          column: 54
        }
      },
      '35': {
        start: {
          line: 138,
          column: 2
        },
        end: {
          line: 138,
          column: 54
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 27,
            column: 31
          },
          end: {
            line: 27,
            column: 32
          }
        },
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 34
          }
        },
        line: 28
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 35,
            column: 30
          },
          end: {
            line: 35,
            column: 31
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
            column: 40
          },
          end: {
            line: 47,
            column: 41
          }
        },
        loc: {
          start: {
            line: 47,
            column: 54
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
            column: 33
          },
          end: {
            line: 63,
            column: 34
          }
        },
        loc: {
          start: {
            line: 63,
            column: 47
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
            column: 50
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
            column: 33
          },
          end: {
            line: 96,
            column: 34
          }
        },
        loc: {
          start: {
            line: 96,
            column: 47
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
            column: 33
          },
          end: {
            line: 137,
            column: 34
          }
        },
        loc: {
          start: {
            line: 138,
            column: 2
          },
          end: {
            line: 138,
            column: 54
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
      * Metis-backend
      * =======
      * Deliverables component controller
      */


var _mimeTypes = require('mime-types');

var _uuid = require('uuid');

var _formidable = require('formidable');

var _formidable2 = _interopRequireDefault(_formidable);

var _fsExtra = require('fs-extra');

var _path = require('path');

var _deliverables = require('./deliverables.dal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a list of deliverables
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
cov_13dictikxa.s[0]++;
var getDeliverables = exports.getDeliverables = function getDeliverables(req, res) {
  cov_13dictikxa.f[0]++;
  cov_13dictikxa.s[1]++;
  return res.json((0, _deliverables.getDeliverables)({}));
};

/**
 * Get a single deliverable
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_13dictikxa.s[2]++;
var getDeliverable = exports.getDeliverable = function getDeliverable(req, res) {
  cov_13dictikxa.f[1]++;
  cov_13dictikxa.s[3]++;
  return res.json((0, _deliverables.getDeliverable)({
    id: req.params.id
  }));
};

/**
 * Get a single deliverable attachment
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_13dictikxa.s[4]++;
var getDeliverableAttachment = exports.getDeliverableAttachment = function getDeliverableAttachment(req, res) {
  cov_13dictikxa.f[2]++;
  cov_13dictikxa.s[5]++;

  (0, _deliverables.getDeliverableAttachment)({
    id: req.params.id,
    filename: req.params.filename
  }).then(function (_ref) {
    var data = _ref.data,
        mimetype = _ref.mimetype;
    cov_13dictikxa.f[3]++;
    cov_13dictikxa.s[6]++;

    res.writeHead(200, { 'Content-Type': mimetype });
    cov_13dictikxa.s[7]++;
    res.end(data, 'binary');
  });
};

/**
 * Create a single deliverable
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_13dictikxa.s[8]++;
var createDeliverable = exports.createDeliverable = function createDeliverable(req, res) {
  cov_13dictikxa.f[4]++;

  var filename = (cov_13dictikxa.s[9]++, decodeURIComponent(req.params.id));
  var form = (cov_13dictikxa.s[10]++, new _formidable2.default.IncomingForm({
    uploadDir: (0, _path.resolve)(__dirname + '/../../../temp'),
    // multiples : true,
    keepExtensions: true
  }));

  cov_13dictikxa.s[11]++;
  form.on('error', function (err) {
    cov_13dictikxa.f[5]++;
    cov_13dictikxa.s[12]++;

    return res.status(500).send(err);
  });

  cov_13dictikxa.s[13]++;
  form.parse(req, function (err, fields, files) {
    cov_13dictikxa.f[6]++;

    var attachmentPath = (cov_13dictikxa.s[14]++, files.file.path);
    cov_13dictikxa.s[15]++;
    (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
      cov_13dictikxa.f[7]++;
      cov_13dictikxa.s[16]++;
      return (0, _deliverables.createDeliverable)({
        _id: (0, _uuid.v4)(),
        filename: filename,
        type: 'deliverable'
      }, data);
    }).then(function () {
      cov_13dictikxa.f[8]++;
      cov_13dictikxa.s[17]++;
      return (0, _fsExtra.remove)(attachmentPath);
    }).then(function () {
      cov_13dictikxa.f[9]++;
      cov_13dictikxa.s[18]++;
      return res.json((0, _deliverables.getDeliverables)({}));
    }).catch(function (e) {
      cov_13dictikxa.f[10]++;
      cov_13dictikxa.s[19]++;
      return res.status(500).send(e);
    });
  });
};
/**
 * Update a single deliverable
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_13dictikxa.s[20]++;
var updateDeliverable = exports.updateDeliverable = function updateDeliverable(req, res) {
  cov_13dictikxa.f[11]++;

  var deliverableId = (cov_13dictikxa.s[21]++, req.params.id);
  var form = (cov_13dictikxa.s[22]++, new _formidable2.default.IncomingForm({
    uploadDir: (0, _path.resolve)(__dirname + '/../../../temp'),
    // multiples : true,
    keepExtensions: true
  }));

  cov_13dictikxa.s[23]++;
  form.on('error', function (err) {
    cov_13dictikxa.f[12]++;
    cov_13dictikxa.s[24]++;

    return res.status(500).send(err);
  });

  cov_13dictikxa.s[25]++;
  form.parse(req, function (err, fields, files) {
    cov_13dictikxa.f[13]++;

    var attachmentPath = (cov_13dictikxa.s[26]++, files.file.path);
    var filename = (cov_13dictikxa.s[27]++, files.file.name);
    var mimetype = (cov_13dictikxa.s[28]++, (0, _mimeTypes.lookup)(filename));
    cov_13dictikxa.s[29]++;
    (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
      cov_13dictikxa.f[14]++;
      cov_13dictikxa.s[30]++;
      return (0, _deliverables.updateDeliverable)(deliverableId, {
        filename: filename,
        mimetype: mimetype
      }, data);
    }).then(function () {
      cov_13dictikxa.f[15]++;
      cov_13dictikxa.s[31]++;
      return (0, _fsExtra.remove)(attachmentPath);
    }).then(function () {
      cov_13dictikxa.f[16]++;
      cov_13dictikxa.s[32]++;
      return res.json((0, _deliverables.getDeliverable)({
        id: deliverableId
      }));
    }).catch(function (e) {
      cov_13dictikxa.f[17]++;
      cov_13dictikxa.s[33]++;
      return res.status(500).send(e);
    });
  });
};

/**
 * Delete a single deliverable
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_13dictikxa.s[34]++;
var deleteDeliverable = exports.deleteDeliverable = function deleteDeliverable(req, res) {
  cov_13dictikxa.f[18]++;
  cov_13dictikxa.s[35]++;
  return res.json((0, _deliverables.deleteDeliverable)({ _id: req.params.id }));
};