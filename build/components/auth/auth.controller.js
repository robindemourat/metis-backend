'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.signup = exports.login = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var cov_9ry3vizze = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/auth/auth.controller.js',
      hash = 'a5c2651ce66e9e9fe0059def49f2b3d908c3beea',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/auth/auth.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 20,
          column: 15
        },
        end: {
          line: 20,
          column: 26
        }
      },
      '1': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 10
        }
      },
      '2': {
        start: {
          line: 30,
          column: 19
        },
        end: {
          line: 36,
          column: 1
        }
      },
      '3': {
        start: {
          line: 46,
          column: 19
        },
        end: {
          line: 55,
          column: 1
        }
      },
      '4': {
        start: {
          line: 47,
          column: 18
        },
        end: {
          line: 50,
          column: 3
        }
      },
      '5': {
        start: {
          line: 51,
          column: 16
        },
        end: {
          line: 53,
          column: 4
        }
      },
      '6': {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 54,
          column: 15
        }
      },
      '7': {
        start: {
          line: 63,
          column: 21
        },
        end: {
          line: 99,
          column: 1
        }
      },
      '8': {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 98,
          column: 5
        }
      },
      '9': {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 94,
          column: 5
        }
      },
      '10': {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 93
        }
      },
      '11': {
        start: {
          line: 72,
          column: 11
        },
        end: {
          line: 94,
          column: 5
        }
      },
      '12': {
        start: {
          line: 73,
          column: 18
        },
        end: {
          line: 73,
          column: 35
        }
      },
      '13': {
        start: {
          line: 74,
          column: 19
        },
        end: {
          line: 74,
          column: 32
        }
      },
      '14': {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 93,
          column: 11
        }
      },
      '15': {
        start: {
          line: 77,
          column: 10
        },
        end: {
          line: 89,
          column: 11
        }
      },
      '16': {
        start: {
          line: 80,
          column: 26
        },
        end: {
          line: 80,
          column: 70
        }
      },
      '17': {
        start: {
          line: 81,
          column: 12
        },
        end: {
          line: 86,
          column: 15
        }
      },
      '18': {
        start: {
          line: 88,
          column: 12
        },
        end: {
          line: 88,
          column: 104
        }
      },
      '19': {
        start: {
          line: 92,
          column: 10
        },
        end: {
          line: 92,
          column: 117
        }
      },
      '20': {
        start: {
          line: 97,
          column: 4
        },
        end: {
          line: 97,
          column: 74
        }
      },
      '21': {
        start: {
          line: 108,
          column: 22
        },
        end: {
          line: 159,
          column: 1
        }
      },
      '22': {
        start: {
          line: 110,
          column: 2
        },
        end: {
          line: 158,
          column: 5
        }
      },
      '23': {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 157,
          column: 5
        }
      },
      '24': {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 115,
          column: 86
        }
      },
      '25': {
        start: {
          line: 116,
          column: 11
        },
        end: {
          line: 157,
          column: 5
        }
      },
      '26': {
        start: {
          line: 117,
          column: 20
        },
        end: {
          line: 117,
          column: 89
        }
      },
      '27': {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 156,
          column: 7
        }
      },
      '28': {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 148,
          column: 11
        }
      },
      '29': {
        start: {
          line: 122,
          column: 10
        },
        end: {
          line: 147,
          column: 11
        }
      },
      '30': {
        start: {
          line: 123,
          column: 12
        },
        end: {
          line: 123,
          column: 97
        }
      },
      '31': {
        start: {
          line: 127,
          column: 29
        },
        end: {
          line: 127,
          column: 73
        }
      },
      '32': {
        start: {
          line: 131,
          column: 12
        },
        end: {
          line: 146,
          column: 17
        }
      },
      '33': {
        start: {
          line: 133,
          column: 16
        },
        end: {
          line: 138,
          column: 19
        }
      },
      '34': {
        start: {
          line: 141,
          column: 16
        },
        end: {
          line: 145,
          column: 19
        }
      },
      '35': {
        start: {
          line: 152,
          column: 8
        },
        end: {
          line: 155,
          column: 11
        }
      },
      '36': {
        start: {
          line: 167,
          column: 29
        },
        end: {
          line: 203,
          column: 1
        }
      },
      '37': {
        start: {
          line: 168,
          column: 15
        },
        end: {
          line: 168,
          column: 23
        }
      },
      '38': {
        start: {
          line: 169,
          column: 16
        },
        end: {
          line: 169,
          column: 26
        }
      },
      '39': {
        start: {
          line: 170,
          column: 2
        },
        end: {
          line: 202,
          column: 3
        }
      },
      '40': {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 199,
          column: 75
        }
      },
      '41': {
        start: {
          line: 175,
          column: 6
        },
        end: {
          line: 197,
          column: 7
        }
      },
      '42': {
        start: {
          line: 177,
          column: 22
        },
        end: {
          line: 177,
          column: 66
        }
      },
      '43': {
        start: {
          line: 178,
          column: 8
        },
        end: {
          line: 178,
          column: 40
        }
      },
      '44': {
        start: {
          line: 180,
          column: 8
        },
        end: {
          line: 194,
          column: 78
        }
      },
      '45': {
        start: {
          line: 182,
          column: 25
        },
        end: {
          line: 182,
          column: 42
        }
      },
      '46': {
        start: {
          line: 183,
          column: 34
        },
        end: {
          line: 183,
          column: 61
        }
      },
      '47': {
        start: {
          line: 185,
          column: 10
        },
        end: {
          line: 189,
          column: 34
        }
      },
      '48': {
        start: {
          line: 192,
          column: 10
        },
        end: {
          line: 192,
          column: 46
        }
      },
      '49': {
        start: {
          line: 194,
          column: 20
        },
        end: {
          line: 194,
          column: 76
        }
      },
      '50': {
        start: {
          line: 196,
          column: 8
        },
        end: {
          line: 196,
          column: 58
        }
      },
      '51': {
        start: {
          line: 199,
          column: 20
        },
        end: {
          line: 199,
          column: 73
        }
      },
      '52': {
        start: {
          line: 201,
          column: 4
        },
        end: {
          line: 201,
          column: 59
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 46,
            column: 19
          },
          end: {
            line: 46,
            column: 20
          }
        },
        loc: {
          start: {
            line: 46,
            column: 56
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 46
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 63,
            column: 21
          },
          end: {
            line: 63,
            column: 22
          }
        },
        loc: {
          start: {
            line: 63,
            column: 35
          },
          end: {
            line: 99,
            column: 1
          }
        },
        line: 63
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 69,
            column: 8
          },
          end: {
            line: 69,
            column: 9
          }
        },
        loc: {
          start: {
            line: 69,
            column: 16
          },
          end: {
            line: 95,
            column: 3
          }
        },
        line: 69
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 76,
            column: 14
          },
          end: {
            line: 76,
            column: 15
          }
        },
        loc: {
          start: {
            line: 76,
            column: 25
          },
          end: {
            line: 90,
            column: 9
          }
        },
        line: 76
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 91,
            column: 15
          },
          end: {
            line: 91,
            column: 16
          }
        },
        loc: {
          start: {
            line: 91,
            column: 20
          },
          end: {
            line: 93,
            column: 9
          }
        },
        line: 91
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 96,
            column: 9
          },
          end: {
            line: 96,
            column: 10
          }
        },
        loc: {
          start: {
            line: 96,
            column: 18
          },
          end: {
            line: 98,
            column: 3
          }
        },
        line: 96
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 108,
            column: 22
          },
          end: {
            line: 108,
            column: 23
          }
        },
        loc: {
          start: {
            line: 108,
            column: 36
          },
          end: {
            line: 159,
            column: 1
          }
        },
        line: 108
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 113,
            column: 8
          },
          end: {
            line: 113,
            column: 9
          }
        },
        loc: {
          start: {
            line: 113,
            column: 16
          },
          end: {
            line: 158,
            column: 3
          }
        },
        line: 113
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 121,
            column: 54
          },
          end: {
            line: 121,
            column: 55
          }
        },
        loc: {
          start: {
            line: 121,
            column: 63
          },
          end: {
            line: 148,
            column: 9
          }
        },
        line: 121
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 132,
            column: 20
          },
          end: {
            line: 132,
            column: 21
          }
        },
        loc: {
          start: {
            line: 132,
            column: 26
          },
          end: {
            line: 139,
            column: 15
          }
        },
        line: 132
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 140,
            column: 21
          },
          end: {
            line: 140,
            column: 22
          }
        },
        loc: {
          start: {
            line: 140,
            column: 26
          },
          end: {
            line: 146,
            column: 15
          }
        },
        line: 140
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 167,
            column: 29
          },
          end: {
            line: 167,
            column: 30
          }
        },
        loc: {
          start: {
            line: 167,
            column: 43
          },
          end: {
            line: 203,
            column: 1
          }
        },
        line: 167
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 174,
            column: 10
          },
          end: {
            line: 174,
            column: 11
          }
        },
        loc: {
          start: {
            line: 174,
            column: 18
          },
          end: {
            line: 198,
            column: 5
          }
        },
        line: 174
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 181,
            column: 14
          },
          end: {
            line: 181,
            column: 15
          }
        },
        loc: {
          start: {
            line: 181,
            column: 20
          },
          end: {
            line: 190,
            column: 9
          }
        },
        line: 181
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 191,
            column: 14
          },
          end: {
            line: 191,
            column: 15
          }
        },
        loc: {
          start: {
            line: 191,
            column: 20
          },
          end: {
            line: 193,
            column: 9
          }
        },
        line: 191
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 194,
            column: 15
          },
          end: {
            line: 194,
            column: 16
          }
        },
        loc: {
          start: {
            line: 194,
            column: 20
          },
          end: {
            line: 194,
            column: 76
          }
        },
        line: 194
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 199,
            column: 11
          },
          end: {
            line: 199,
            column: 12
          }
        },
        loc: {
          start: {
            line: 199,
            column: 20
          },
          end: {
            line: 199,
            column: 73
          }
        },
        line: 199
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 46,
            column: 34
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
            column: 46
          },
          end: {
            line: 46,
            column: 51
          }
        }],
        line: 46
      },
      '1': {
        loc: {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }, {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        }],
        line: 70
      },
      '2': {
        loc: {
          start: {
            line: 72,
            column: 11
          },
          end: {
            line: 94,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 72,
            column: 11
          },
          end: {
            line: 94,
            column: 5
          }
        }, {
          start: {
            line: 72,
            column: 11
          },
          end: {
            line: 94,
            column: 5
          }
        }],
        line: 72
      },
      '3': {
        loc: {
          start: {
            line: 77,
            column: 10
          },
          end: {
            line: 89,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 77,
            column: 10
          },
          end: {
            line: 89,
            column: 11
          }
        }, {
          start: {
            line: 77,
            column: 10
          },
          end: {
            line: 89,
            column: 11
          }
        }],
        line: 77
      },
      '4': {
        loc: {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        }, {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        }],
        line: 114
      },
      '5': {
        loc: {
          start: {
            line: 116,
            column: 11
          },
          end: {
            line: 157,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 116,
            column: 11
          },
          end: {
            line: 157,
            column: 5
          }
        }, {
          start: {
            line: 116,
            column: 11
          },
          end: {
            line: 157,
            column: 5
          }
        }],
        line: 116
      },
      '6': {
        loc: {
          start: {
            line: 117,
            column: 20
          },
          end: {
            line: 117,
            column: 89
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 117,
            column: 20
          },
          end: {
            line: 117,
            column: 34
          }
        }, {
          start: {
            line: 117,
            column: 38
          },
          end: {
            line: 117,
            column: 56
          }
        }, {
          start: {
            line: 117,
            column: 60
          },
          end: {
            line: 117,
            column: 89
          }
        }],
        line: 117
      },
      '7': {
        loc: {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        }, {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        }],
        line: 119
      },
      '8': {
        loc: {
          start: {
            line: 122,
            column: 10
          },
          end: {
            line: 147,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 122,
            column: 10
          },
          end: {
            line: 147,
            column: 11
          }
        }, {
          start: {
            line: 122,
            column: 10
          },
          end: {
            line: 147,
            column: 11
          }
        }],
        line: 122
      },
      '9': {
        loc: {
          start: {
            line: 170,
            column: 2
          },
          end: {
            line: 202,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 170,
            column: 2
          },
          end: {
            line: 202,
            column: 3
          }
        }, {
          start: {
            line: 170,
            column: 2
          },
          end: {
            line: 202,
            column: 3
          }
        }],
        line: 170
      },
      '10': {
        loc: {
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 197,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 197,
            column: 7
          }
        }, {
          start: {
            line: 175,
            column: 6
          },
          end: {
            line: 197,
            column: 7
          }
        }],
        line: 175
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
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0,
      '40': 0,
      '41': 0,
      '42': 0,
      '43': 0,
      '44': 0,
      '45': 0,
      '46': 0,
      '47': 0,
      '48': 0,
      '49': 0,
      '50': 0,
      '51': 0,
      '52': 0
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
      '16': 0
    },
    b: {
      '0': [0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0, 0],
      '7': [0, 0],
      '8': [0, 0],
      '9': [0, 0],
      '10': [0, 0]
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
      * Metis-backend
      * =======
      * Authentification routes handler
      */

// used to create, sign, and verify tokens


/**
 * @todo avoid this horizontal dependency
 */


var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _crypto = require('../../utils/crypto');

var _mailer = require('../../utils/mailer');

var _mailer2 = _interopRequireDefault(_mailer);

var _emails = require('../../utils/emails');

var _users = require('../users');

var _config = require('../../utils/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (cov_9ry3vizze.s[0]++, (0, _config.getConfig)());

var _ref = (cov_9ry3vizze.s[1]++, config),
    smtpEmail = _ref.smtpEmail,
    smtpService = _ref.smtpService,
    smtpPassword = _ref.smtpPassword,
    backofficeBaseUri = _ref.backofficeBaseUri;

var mailConfig = (cov_9ry3vizze.s[2]++, {
  // smtpPort,
  // smtpHost,
  smtpEmail: smtpEmail,
  smtpService: smtpService,
  smtpPassword: smtpPassword
});

/**
 * Builds a jwt token with user data in payload
 * @param {object} user - the user data to build the token with
 * @param {string} secret - the app secret to use to encode the token
 * @param {number} expiresIn - expiration delay of the token
 * @return {string} token
 * note : 86400 == expires in 24 hours
 */
cov_9ry3vizze.s[3]++;
var buildToken = function buildToken(user, secret) {
  var expiresIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_9ry3vizze.b[0][0]++, 86400);
  cov_9ry3vizze.f[0]++;

  var payload = (cov_9ry3vizze.s[4]++, {
    admin: user.admin,
    userid: user._id
  });
  var token = (cov_9ry3vizze.s[5]++, _jsonwebtoken2.default.sign(payload, secret, {
    expiresIn: expiresIn
  }));
  cov_9ry3vizze.s[6]++;
  return token;
};
/**
 * Handle login attempt from a user
 * @todo write everything in promise style
 * @todo normalize behaviors for error res
 * @param {object} req - the request
 * @param {object} res - the resource
 */
cov_9ry3vizze.s[7]++;
var login = exports.login = function login(req, res) {
  cov_9ry3vizze.f[1]++;
  cov_9ry3vizze.s[8]++;

  // find the user
  _users.dal.getUser({
    email: req.body.email
  })
  // then check his credentials
  .then(function (user) {
    cov_9ry3vizze.f[2]++;
    cov_9ry3vizze.s[9]++;

    if (!user) {
      cov_9ry3vizze.b[1][0]++;
      cov_9ry3vizze.s[10]++;

      return res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else {
        cov_9ry3vizze.b[1][1]++;
        cov_9ry3vizze.s[11]++;
        if (user) {
          cov_9ry3vizze.b[2][0]++;

          var pwd = (cov_9ry3vizze.s[12]++, req.body.password);
          var hash = (cov_9ry3vizze.s[13]++, user.password);
          cov_9ry3vizze.s[14]++;
          (0, _crypto.comparePwd)(pwd, hash).then(function (correct) {
            cov_9ry3vizze.f[3]++;
            cov_9ry3vizze.s[15]++;

            if (correct) {
              cov_9ry3vizze.b[3][0]++;

              // if user is found and password is right
              // create a token
              var token = (cov_9ry3vizze.s[16]++, buildToken(user, req.app.get('superSecret')));
              cov_9ry3vizze.s[17]++;
              res.json({
                success: true,
                message: 'Enjoy your token!',
                user: (0, _assign2.default)({}, user, { password: undefined }),
                token: token
              });
            } else {
              cov_9ry3vizze.b[3][1]++;
              cov_9ry3vizze.s[18]++;

              res.status(422).json({ success: false, message: 'Authentication failed. Wrong password.' });
            }
          }).catch(function (e) {
            cov_9ry3vizze.f[4]++;
            cov_9ry3vizze.s[19]++;

            res.status(422).json({ success: false, message: 'Authentication failed. Error with password.', error: e });
          });
        } else {
          cov_9ry3vizze.b[2][1]++;
        }
      }
  }).catch(function (error) {
    cov_9ry3vizze.f[5]++;
    cov_9ry3vizze.s[20]++;

    res.status(404).json({ success: false, message: 'No match.', error: error });
  });
};

/**
 * Handle signup request from a user
 * Note: for this cms users creation is protected (admins only)
 * so signup is just the process of activating an account and setting a first password
 * @param {object} req - the request
 * @param {object} res - the resource
 */
cov_9ry3vizze.s[21]++;
var signup = exports.signup = function signup(req, res) {
  cov_9ry3vizze.f[6]++;
  cov_9ry3vizze.s[22]++;

  // find the user
  _users.dal.getUser({
    id: req.body.id
  }).then(function (user) {
    cov_9ry3vizze.f[7]++;
    cov_9ry3vizze.s[23]++;

    if (!user) {
      cov_9ry3vizze.b[4][0]++;
      cov_9ry3vizze.s[24]++;

      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else {
        cov_9ry3vizze.b[4][1]++;
        cov_9ry3vizze.s[25]++;
        if (user) {
          cov_9ry3vizze.b[5][0]++;

          var token = (cov_9ry3vizze.s[26]++, (cov_9ry3vizze.b[6][0]++, req.body.token) || (cov_9ry3vizze.b[6][1]++, req.param('token')) || (cov_9ry3vizze.b[6][2]++, req.headers['x-access-token']));
          // decode token
          cov_9ry3vizze.s[27]++;
          if (token) {
            cov_9ry3vizze.b[7][0]++;
            cov_9ry3vizze.s[28]++;

            // verifies secret and checks exp
            _jsonwebtoken2.default.verify(token, req.app.get('superSecret'), function (err) {
              cov_9ry3vizze.f[8]++;
              cov_9ry3vizze.s[29]++;

              if (err) {
                cov_9ry3vizze.b[8][0]++;
                cov_9ry3vizze.s[30]++;

                return res.json({ success: false, message: 'Failed to authenticate signup token.' });
              } else {
                cov_9ry3vizze.b[8][1]++;


                // create a new login token
                var newToken = (cov_9ry3vizze.s[31]++, buildToken(user, req.app.get('superSecret')));
                // delete temporary token
                // user.resetPasswordToken = undefined;

                cov_9ry3vizze.s[32]++;
                _users.dal.updateUser(user._id, user).then(function () {
                  cov_9ry3vizze.f[9]++;
                  cov_9ry3vizze.s[33]++;

                  res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    user: user, // : Object.assign({}, user, {password: undefined, resetPasswordToken: undefined}),
                    token: newToken
                  });
                }).catch(function (e) {
                  cov_9ry3vizze.f[10]++;
                  cov_9ry3vizze.s[34]++;

                  res.status(500).send({
                    success: false,
                    message: 'Error while updating user with new data',
                    error: e
                  });
                });
              }
            });
          } else {
            cov_9ry3vizze.b[7][1]++;
            cov_9ry3vizze.s[35]++;

            // if there is no token
            // return an error
            return res.status(403).send({
              success: false,
              message: 'No signup token provided.'
            });
          }
        } else {
          cov_9ry3vizze.b[5][1]++;
        }
      }
  });
};

/**
 * Handle password reset request from a user
 * @todo write everything in promise style
 * @param {object} req - the request
 * @param {object} res - the resource
 */
cov_9ry3vizze.s[36]++;
var resetPassword = exports.resetPassword = function resetPassword(req, res) {
  cov_9ry3vizze.f[11]++;

  var body = (cov_9ry3vizze.s[37]++, req.body);
  var email = (cov_9ry3vizze.s[38]++, body.email);
  cov_9ry3vizze.s[39]++;
  if (email) {
    cov_9ry3vizze.b[9][0]++;
    cov_9ry3vizze.s[40]++;

    _users.dal.getUser({
      email: email
    }).then(function (user) {
      cov_9ry3vizze.f[12]++;
      cov_9ry3vizze.s[41]++;

      if (user) {
        cov_9ry3vizze.b[10][0]++;

        // create a token
        var token = (cov_9ry3vizze.s[42]++, buildToken(user, req.app.get('superSecret')));
        cov_9ry3vizze.s[43]++;
        user.resetPasswordToken = token;

        cov_9ry3vizze.s[44]++;
        _users.dal.updateUser(user._id, user).then(function () {
          cov_9ry3vizze.f[13]++;

          var appUrl = (cov_9ry3vizze.s[45]++, backofficeBaseUri);

          var _ref2 = (cov_9ry3vizze.s[46]++, (0, _emails.resetPwdEmail)(appUrl, user)),
              html = _ref2.html,
              subject = _ref2.subject;

          cov_9ry3vizze.s[47]++;


          return (0, _mailer2.default)({
            subject: subject,
            html: html,
            to: [email]
          }, mailConfig, req.log);
        }).then(function () {
          cov_9ry3vizze.f[14]++;
          cov_9ry3vizze.s[48]++;

          res.json({ message: 'request sent' });
        }).catch(function (e) {
          cov_9ry3vizze.f[15]++;
          cov_9ry3vizze.s[49]++;
          return res.status(500).send({ error: e, message: 'mail failed' });
        });
      } else {
        cov_9ry3vizze.b[10][1]++;
        cov_9ry3vizze.s[50]++;

        res.status(404).json({ message: 'user not found' });
      }
    }).catch(function (error) {
      cov_9ry3vizze.f[16]++;
      cov_9ry3vizze.s[51]++;
      return res.status(500).json({ message: 'error in db', error: error });
    });
  } else {
    cov_9ry3vizze.b[9][1]++;
    cov_9ry3vizze.s[52]++;

    res.status(422).json({ message: 'no email in request' });
  }
};