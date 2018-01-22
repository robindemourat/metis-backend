'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAllData = exports.uploadData = exports.downloadAllData = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_2lh1hksiee = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/dump/dump.controller.js',
      hash = '9b2da047388ddc2a453c0b7920a64c4b2e951d8e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/services/dump/dump.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 19
        },
        end: {
          line: 17,
          column: 61
        }
      },
      '1': {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 18,
          column: 40
        }
      },
      '2': {
        start: {
          line: 19,
          column: 16
        },
        end: {
          line: 19,
          column: 40
        }
      },
      '3': {
        start: {
          line: 22,
          column: 31
        },
        end: {
          line: 155,
          column: 4
        }
      },
      '4': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 155,
          column: 4
        }
      },
      '5': {
        start: {
          line: 24,
          column: 17
        },
        end: {
          line: 24,
          column: 19
        }
      },
      '6': {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 154,
          column: 19
        }
      },
      '7': {
        start: {
          line: 28,
          column: 18
        },
        end: {
          line: 28,
          column: 39
        }
      },
      '8': {
        start: {
          line: 29,
          column: 18
        },
        end: {
          line: 29,
          column: 49
        }
      },
      '9': {
        start: {
          line: 30,
          column: 18
        },
        end: {
          line: 30,
          column: 51
        }
      },
      '10': {
        start: {
          line: 31,
          column: 18
        },
        end: {
          line: 31,
          column: 57
        }
      },
      '11': {
        start: {
          line: 32,
          column: 18
        },
        end: {
          line: 32,
          column: 40
        }
      },
      '12': {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 35,
          column: 29
        }
      },
      '13': {
        start: {
          line: 37,
          column: 28
        },
        end: {
          line: 52,
          column: 10
        }
      },
      '14': {
        start: {
          line: 38,
          column: 10
        },
        end: {
          line: 51,
          column: 13
        }
      },
      '15': {
        start: {
          line: 39,
          column: 12
        },
        end: {
          line: 50,
          column: 28
        }
      },
      '16': {
        start: {
          line: 44,
          column: 33
        },
        end: {
          line: 44,
          column: 68
        }
      },
      '17': {
        start: {
          line: 45,
          column: 27
        },
        end: {
          line: 45,
          column: 60
        }
      },
      '18': {
        start: {
          line: 46,
          column: 14
        },
        end: {
          line: 47,
          column: 78
        }
      },
      '19': {
        start: {
          line: 47,
          column: 34
        },
        end: {
          line: 47,
          column: 76
        }
      },
      '20': {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 40
        }
      },
      '21': {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 57,
          column: 42
        }
      },
      '22': {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 60,
          column: 33
        }
      },
      '23': {
        start: {
          line: 61,
          column: 6
        },
        end: {
          line: 61,
          column: 48
        }
      },
      '24': {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 39
        }
      },
      '25': {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 65,
          column: 40
        }
      },
      '26': {
        start: {
          line: 68,
          column: 6
        },
        end: {
          line: 68,
          column: 31
        }
      },
      '27': {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 44
        }
      },
      '28': {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 72,
          column: 35
        }
      },
      '29': {
        start: {
          line: 73,
          column: 6
        },
        end: {
          line: 73,
          column: 48
        }
      },
      '30': {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 77,
          column: 39
        }
      },
      '31': {
        start: {
          line: 79,
          column: 26
        },
        end: {
          line: 94,
          column: 10
        }
      },
      '32': {
        start: {
          line: 80,
          column: 10
        },
        end: {
          line: 93,
          column: 13
        }
      },
      '33': {
        start: {
          line: 81,
          column: 12
        },
        end: {
          line: 92,
          column: 28
        }
      },
      '34': {
        start: {
          line: 86,
          column: 33
        },
        end: {
          line: 86,
          column: 80
        }
      },
      '35': {
        start: {
          line: 87,
          column: 27
        },
        end: {
          line: 87,
          column: 66
        }
      },
      '36': {
        start: {
          line: 88,
          column: 14
        },
        end: {
          line: 89,
          column: 78
        }
      },
      '37': {
        start: {
          line: 89,
          column: 34
        },
        end: {
          line: 89,
          column: 76
        }
      },
      '38': {
        start: {
          line: 95,
          column: 6
        },
        end: {
          line: 95,
          column: 38
        }
      },
      '39': {
        start: {
          line: 99,
          column: 19
        },
        end: {
          line: 99,
          column: 49
        }
      },
      '40': {
        start: {
          line: 100,
          column: 6
        },
        end: {
          line: 100,
          column: 59
        }
      },
      '41': {
        start: {
          line: 104,
          column: 6
        },
        end: {
          line: 144,
          column: 9
        }
      },
      '42': {
        start: {
          line: 105,
          column: 23
        },
        end: {
          line: 105,
          column: 49
        }
      },
      '43': {
        start: {
          line: 106,
          column: 24
        },
        end: {
          line: 108,
          column: 10
        }
      },
      '44': {
        start: {
          line: 109,
          column: 8
        },
        end: {
          line: 113,
          column: 11
        }
      },
      '45': {
        start: {
          line: 112,
          column: 10
        },
        end: {
          line: 112,
          column: 21
        }
      },
      '46': {
        start: {
          line: 118,
          column: 8
        },
        end: {
          line: 120,
          column: 11
        }
      },
      '47': {
        start: {
          line: 119,
          column: 10
        },
        end: {
          line: 119,
          column: 21
        }
      },
      '48': {
        start: {
          line: 124,
          column: 8
        },
        end: {
          line: 131,
          column: 11
        }
      },
      '49': {
        start: {
          line: 125,
          column: 10
        },
        end: {
          line: 130,
          column: 11
        }
      },
      '50': {
        start: {
          line: 129,
          column: 12
        },
        end: {
          line: 129,
          column: 25
        }
      },
      '51': {
        start: {
          line: 134,
          column: 8
        },
        end: {
          line: 136,
          column: 11
        }
      },
      '52': {
        start: {
          line: 135,
          column: 10
        },
        end: {
          line: 135,
          column: 23
        }
      },
      '53': {
        start: {
          line: 139,
          column: 8
        },
        end: {
          line: 139,
          column: 29
        }
      },
      '54': {
        start: {
          line: 142,
          column: 8
        },
        end: {
          line: 142,
          column: 45
        }
      },
      '55': {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 143,
          column: 27
        }
      },
      '56': {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 147,
          column: 31
        }
      },
      '57': {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 151,
          column: 37
        }
      },
      '58': {
        start: {
          line: 157,
          column: 21
        },
        end: {
          line: 181,
          column: 7
        }
      },
      '59': {
        start: {
          line: 158,
          column: 4
        },
        end: {
          line: 181,
          column: 7
        }
      },
      '60': {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 160,
          column: 80
        }
      },
      '61': {
        start: {
          line: 160,
          column: 40
        },
        end: {
          line: 160,
          column: 78
        }
      },
      '62': {
        start: {
          line: 162,
          column: 18
        },
        end: {
          line: 162,
          column: 46
        }
      },
      '63': {
        start: {
          line: 164,
          column: 8
        },
        end: {
          line: 164,
          column: 95
        }
      },
      '64': {
        start: {
          line: 164,
          column: 46
        },
        end: {
          line: 164,
          column: 93
        }
      },
      '65': {
        start: {
          line: 166,
          column: 18
        },
        end: {
          line: 166,
          column: 52
        }
      },
      '66': {
        start: {
          line: 168,
          column: 8
        },
        end: {
          line: 168,
          column: 110
        }
      },
      '67': {
        start: {
          line: 168,
          column: 52
        },
        end: {
          line: 168,
          column: 108
        }
      },
      '68': {
        start: {
          line: 170,
          column: 18
        },
        end: {
          line: 170,
          column: 44
        }
      },
      '69': {
        start: {
          line: 172,
          column: 8
        },
        end: {
          line: 172,
          column: 90
        }
      },
      '70': {
        start: {
          line: 172,
          column: 44
        },
        end: {
          line: 172,
          column: 88
        }
      },
      '71': {
        start: {
          line: 174,
          column: 18
        },
        end: {
          line: 174,
          column: 48
        }
      },
      '72': {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 176,
          column: 100
        }
      },
      '73': {
        start: {
          line: 176,
          column: 48
        },
        end: {
          line: 176,
          column: 98
        }
      },
      '74': {
        start: {
          line: 178,
          column: 18
        },
        end: {
          line: 178,
          column: 52
        }
      },
      '75': {
        start: {
          line: 180,
          column: 8
        },
        end: {
          line: 180,
          column: 110
        }
      },
      '76': {
        start: {
          line: 180,
          column: 52
        },
        end: {
          line: 180,
          column: 108
        }
      },
      '77': {
        start: {
          line: 183,
          column: 26
        },
        end: {
          line: 272,
          column: 6
        }
      },
      '78': {
        start: {
          line: 185,
          column: 2
        },
        end: {
          line: 272,
          column: 6
        }
      },
      '79': {
        start: {
          line: 187,
          column: 16
        },
        end: {
          line: 187,
          column: 30
        }
      },
      '80': {
        start: {
          line: 190,
          column: 6
        },
        end: {
          line: 210,
          column: 9
        }
      },
      '81': {
        start: {
          line: 191,
          column: 21
        },
        end: {
          line: 195,
          column: 10
        }
      },
      '82': {
        start: {
          line: 197,
          column: 8
        },
        end: {
          line: 199,
          column: 11
        }
      },
      '83': {
        start: {
          line: 198,
          column: 10
        },
        end: {
          line: 198,
          column: 29
        }
      },
      '84': {
        start: {
          line: 202,
          column: 8
        },
        end: {
          line: 209,
          column: 11
        }
      },
      '85': {
        start: {
          line: 203,
          column: 10
        },
        end: {
          line: 208,
          column: 11
        }
      },
      '86': {
        start: {
          line: 204,
          column: 12
        },
        end: {
          line: 204,
          column: 31
        }
      },
      '87': {
        start: {
          line: 206,
          column: 35
        },
        end: {
          line: 206,
          column: 50
        }
      },
      '88': {
        start: {
          line: 207,
          column: 12
        },
        end: {
          line: 207,
          column: 43
        }
      },
      '89': {
        start: {
          line: 214,
          column: 8
        },
        end: {
          line: 216,
          column: 18
        }
      },
      '90': {
        start: {
          line: 219,
          column: 16
        },
        end: {
          line: 219,
          column: 63
        }
      },
      '91': {
        start: {
          line: 221,
          column: 6
        },
        end: {
          line: 228,
          column: 8
        }
      },
      '92': {
        start: {
          line: 222,
          column: 8
        },
        end: {
          line: 227,
          column: 9
        }
      },
      '93': {
        start: {
          line: 223,
          column: 23
        },
        end: {
          line: 223,
          column: 38
        }
      },
      '94': {
        start: {
          line: 224,
          column: 10
        },
        end: {
          line: 224,
          column: 24
        }
      },
      '95': {
        start: {
          line: 226,
          column: 10
        },
        end: {
          line: 226,
          column: 20
        }
      },
      '96': {
        start: {
          line: 232,
          column: 23
        },
        end: {
          line: 239,
          column: 7
        }
      },
      '97': {
        start: {
          line: 233,
          column: 8
        },
        end: {
          line: 233,
          column: 24
        }
      },
      '98': {
        start: {
          line: 234,
          column: 8
        },
        end: {
          line: 237,
          column: 9
        }
      },
      '99': {
        start: {
          line: 236,
          column: 10
        },
        end: {
          line: 236,
          column: 34
        }
      },
      '100': {
        start: {
          line: 238,
          column: 8
        },
        end: {
          line: 238,
          column: 19
        }
      },
      '101': {
        start: {
          line: 240,
          column: 25
        },
        end: {
          line: 265,
          column: 7
        }
      },
      '102': {
        start: {
          line: 242,
          column: 27
        },
        end: {
          line: 242,
          column: 41
        }
      },
      '103': {
        start: {
          line: 243,
          column: 33
        },
        end: {
          line: 243,
          column: 79
        }
      },
      '104': {
        start: {
          line: 244,
          column: 10
        },
        end: {
          line: 245,
          column: 77
        }
      },
      '105': {
        start: {
          line: 245,
          column: 32
        },
        end: {
          line: 245,
          column: 75
        }
      },
      '106': {
        start: {
          line: 248,
          column: 10
        },
        end: {
          line: 248,
          column: 56
        }
      },
      '107': {
        start: {
          line: 251,
          column: 10
        },
        end: {
          line: 251,
          column: 65
        }
      },
      '108': {
        start: {
          line: 254,
          column: 10
        },
        end: {
          line: 254,
          column: 53
        }
      },
      '109': {
        start: {
          line: 257,
          column: 10
        },
        end: {
          line: 257,
          column: 59
        }
      },
      '110': {
        start: {
          line: 260,
          column: 27
        },
        end: {
          line: 260,
          column: 47
        }
      },
      '111': {
        start: {
          line: 261,
          column: 33
        },
        end: {
          line: 261,
          column: 91
        }
      },
      '112': {
        start: {
          line: 262,
          column: 10
        },
        end: {
          line: 263,
          column: 95
        }
      },
      '113': {
        start: {
          line: 263,
          column: 32
        },
        end: {
          line: 263,
          column: 93
        }
      },
      '114': {
        start: {
          line: 267,
          column: 6
        },
        end: {
          line: 267,
          column: 37
        }
      },
      '115': {
        start: {
          line: 269,
          column: 16
        },
        end: {
          line: 269,
          column: 40
        }
      },
      '116': {
        start: {
          line: 271,
          column: 6
        },
        end: {
          line: 271,
          column: 30
        }
      },
      '117': {
        start: {
          line: 274,
          column: 29
        },
        end: {
          line: 279,
          column: 40
        }
      },
      '118': {
        start: {
          line: 275,
          column: 2
        },
        end: {
          line: 279,
          column: 40
        }
      },
      '119': {
        start: {
          line: 277,
          column: 6
        },
        end: {
          line: 277,
          column: 38
        }
      },
      '120': {
        start: {
          line: 279,
          column: 16
        },
        end: {
          line: 279,
          column: 39
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 22,
            column: 31
          },
          end: {
            line: 22,
            column: 32
          }
        },
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 155,
            column: 4
          }
        },
        line: 23
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 23,
            column: 14
          },
          end: {
            line: 23,
            column: 15
          }
        },
        loc: {
          start: {
            line: 23,
            column: 35
          },
          end: {
            line: 155,
            column: 3
          }
        },
        line: 23
      },
      '2': {
        name: '(anonymous_2)',
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
            column: 39
          }
        },
        line: 28
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 13
          }
        },
        loc: {
          start: {
            line: 29,
            column: 18
          },
          end: {
            line: 29,
            column: 49
          }
        },
        line: 29
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 30,
            column: 12
          },
          end: {
            line: 30,
            column: 13
          }
        },
        loc: {
          start: {
            line: 30,
            column: 18
          },
          end: {
            line: 30,
            column: 51
          }
        },
        line: 30
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 31,
            column: 12
          },
          end: {
            line: 31,
            column: 13
          }
        },
        loc: {
          start: {
            line: 31,
            column: 18
          },
          end: {
            line: 31,
            column: 57
          }
        },
        line: 31
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 32,
            column: 12
          },
          end: {
            line: 32,
            column: 13
          }
        },
        loc: {
          start: {
            line: 32,
            column: 18
          },
          end: {
            line: 32,
            column: 40
          }
        },
        line: 32
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 34,
            column: 12
          },
          end: {
            line: 34,
            column: 13
          }
        },
        loc: {
          start: {
            line: 34,
            column: 22
          },
          end: {
            line: 54,
            column: 5
          }
        },
        line: 34
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 37,
            column: 39
          },
          end: {
            line: 37,
            column: 40
          }
        },
        loc: {
          start: {
            line: 37,
            column: 48
          },
          end: {
            line: 52,
            column: 9
          }
        },
        line: 37
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 38,
            column: 29
          },
          end: {
            line: 38,
            column: 30
          }
        },
        loc: {
          start: {
            line: 38,
            column: 52
          },
          end: {
            line: 51,
            column: 11
          }
        },
        line: 38
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 43,
            column: 18
          },
          end: {
            line: 43,
            column: 19
          }
        },
        loc: {
          start: {
            line: 43,
            column: 32
          },
          end: {
            line: 48,
            column: 13
          }
        },
        line: 43
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 47,
            column: 28
          },
          end: {
            line: 47,
            column: 29
          }
        },
        loc: {
          start: {
            line: 47,
            column: 34
          },
          end: {
            line: 47,
            column: 76
          }
        },
        line: 47
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 56,
            column: 10
          },
          end: {
            line: 56,
            column: 11
          }
        },
        loc: {
          start: {
            line: 56,
            column: 16
          },
          end: {
            line: 58,
            column: 5
          }
        },
        line: 56
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 59,
            column: 10
          },
          end: {
            line: 59,
            column: 11
          }
        },
        loc: {
          start: {
            line: 59,
            column: 23
          },
          end: {
            line: 62,
            column: 5
          }
        },
        line: 59
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 63,
            column: 10
          },
          end: {
            line: 63,
            column: 11
          }
        },
        loc: {
          start: {
            line: 63,
            column: 26
          },
          end: {
            line: 66,
            column: 5
          }
        },
        line: 63
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 67,
            column: 10
          },
          end: {
            line: 67,
            column: 11
          }
        },
        loc: {
          start: {
            line: 67,
            column: 22
          },
          end: {
            line: 70,
            column: 5
          }
        },
        line: 67
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 71,
            column: 10
          },
          end: {
            line: 71,
            column: 11
          }
        },
        loc: {
          start: {
            line: 71,
            column: 24
          },
          end: {
            line: 74,
            column: 5
          }
        },
        line: 71
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 76,
            column: 10
          },
          end: {
            line: 76,
            column: 11
          }
        },
        loc: {
          start: {
            line: 76,
            column: 26
          },
          end: {
            line: 96,
            column: 5
          }
        },
        line: 76
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 79,
            column: 43
          },
          end: {
            line: 79,
            column: 44
          }
        },
        loc: {
          start: {
            line: 79,
            column: 58
          },
          end: {
            line: 94,
            column: 9
          }
        },
        line: 79
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 80,
            column: 29
          },
          end: {
            line: 80,
            column: 30
          }
        },
        loc: {
          start: {
            line: 80,
            column: 52
          },
          end: {
            line: 93,
            column: 11
          }
        },
        line: 80
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 85,
            column: 18
          },
          end: {
            line: 85,
            column: 19
          }
        },
        loc: {
          start: {
            line: 85,
            column: 32
          },
          end: {
            line: 90,
            column: 13
          }
        },
        line: 85
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 89,
            column: 28
          },
          end: {
            line: 89,
            column: 29
          }
        },
        loc: {
          start: {
            line: 89,
            column: 34
          },
          end: {
            line: 89,
            column: 76
          }
        },
        line: 89
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 98,
            column: 10
          },
          end: {
            line: 98,
            column: 11
          }
        },
        loc: {
          start: {
            line: 98,
            column: 16
          },
          end: {
            line: 101,
            column: 5
          }
        },
        line: 98
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 103,
            column: 10
          },
          end: {
            line: 103,
            column: 11
          }
        },
        loc: {
          start: {
            line: 103,
            column: 16
          },
          end: {
            line: 145,
            column: 5
          }
        },
        line: 103
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 104,
            column: 25
          },
          end: {
            line: 104,
            column: 26
          }
        },
        loc: {
          start: {
            line: 104,
            column: 48
          },
          end: {
            line: 144,
            column: 7
          }
        },
        line: 104
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 109,
            column: 27
          },
          end: {
            line: 109,
            column: 28
          }
        },
        loc: {
          start: {
            line: 109,
            column: 38
          },
          end: {
            line: 113,
            column: 9
          }
        },
        line: 109
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 118,
            column: 25
          },
          end: {
            line: 118,
            column: 26
          }
        },
        loc: {
          start: {
            line: 118,
            column: 36
          },
          end: {
            line: 120,
            column: 9
          }
        },
        line: 118
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 124,
            column: 30
          },
          end: {
            line: 124,
            column: 31
          }
        },
        loc: {
          start: {
            line: 124,
            column: 44
          },
          end: {
            line: 131,
            column: 9
          }
        },
        line: 124
      },
      '28': {
        name: '(anonymous_28)',
        decl: {
          start: {
            line: 134,
            column: 28
          },
          end: {
            line: 134,
            column: 29
          }
        },
        loc: {
          start: {
            line: 134,
            column: 42
          },
          end: {
            line: 136,
            column: 9
          }
        },
        line: 134
      },
      '29': {
        name: '(anonymous_29)',
        decl: {
          start: {
            line: 146,
            column: 10
          },
          end: {
            line: 146,
            column: 11
          }
        },
        loc: {
          start: {
            line: 146,
            column: 16
          },
          end: {
            line: 148,
            column: 5
          }
        },
        line: 146
      },
      '30': {
        name: '(anonymous_30)',
        decl: {
          start: {
            line: 150,
            column: 10
          },
          end: {
            line: 150,
            column: 11
          }
        },
        loc: {
          start: {
            line: 150,
            column: 18
          },
          end: {
            line: 152,
            column: 5
          }
        },
        line: 150
      },
      '31': {
        name: '(anonymous_31)',
        decl: {
          start: {
            line: 157,
            column: 21
          },
          end: {
            line: 157,
            column: 22
          }
        },
        loc: {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 181,
            column: 7
          }
        },
        line: 158
      },
      '32': {
        name: '(anonymous_32)',
        decl: {
          start: {
            line: 159,
            column: 12
          },
          end: {
            line: 159,
            column: 13
          }
        },
        loc: {
          start: {
            line: 160,
            column: 8
          },
          end: {
            line: 160,
            column: 80
          }
        },
        line: 160
      },
      '33': {
        name: '(anonymous_33)',
        decl: {
          start: {
            line: 160,
            column: 31
          },
          end: {
            line: 160,
            column: 32
          }
        },
        loc: {
          start: {
            line: 160,
            column: 40
          },
          end: {
            line: 160,
            column: 78
          }
        },
        line: 160
      },
      '34': {
        name: '(anonymous_34)',
        decl: {
          start: {
            line: 162,
            column: 12
          },
          end: {
            line: 162,
            column: 13
          }
        },
        loc: {
          start: {
            line: 162,
            column: 18
          },
          end: {
            line: 162,
            column: 46
          }
        },
        line: 162
      },
      '35': {
        name: '(anonymous_35)',
        decl: {
          start: {
            line: 163,
            column: 12
          },
          end: {
            line: 163,
            column: 13
          }
        },
        loc: {
          start: {
            line: 164,
            column: 8
          },
          end: {
            line: 164,
            column: 95
          }
        },
        line: 164
      },
      '36': {
        name: '(anonymous_36)',
        decl: {
          start: {
            line: 164,
            column: 34
          },
          end: {
            line: 164,
            column: 35
          }
        },
        loc: {
          start: {
            line: 164,
            column: 46
          },
          end: {
            line: 164,
            column: 93
          }
        },
        line: 164
      },
      '37': {
        name: '(anonymous_37)',
        decl: {
          start: {
            line: 166,
            column: 12
          },
          end: {
            line: 166,
            column: 13
          }
        },
        loc: {
          start: {
            line: 166,
            column: 18
          },
          end: {
            line: 166,
            column: 52
          }
        },
        line: 166
      },
      '38': {
        name: '(anonymous_38)',
        decl: {
          start: {
            line: 167,
            column: 12
          },
          end: {
            line: 167,
            column: 13
          }
        },
        loc: {
          start: {
            line: 168,
            column: 8
          },
          end: {
            line: 168,
            column: 110
          }
        },
        line: 168
      },
      '39': {
        name: '(anonymous_39)',
        decl: {
          start: {
            line: 168,
            column: 37
          },
          end: {
            line: 168,
            column: 38
          }
        },
        loc: {
          start: {
            line: 168,
            column: 52
          },
          end: {
            line: 168,
            column: 108
          }
        },
        line: 168
      },
      '40': {
        name: '(anonymous_40)',
        decl: {
          start: {
            line: 170,
            column: 12
          },
          end: {
            line: 170,
            column: 13
          }
        },
        loc: {
          start: {
            line: 170,
            column: 18
          },
          end: {
            line: 170,
            column: 44
          }
        },
        line: 170
      },
      '41': {
        name: '(anonymous_41)',
        decl: {
          start: {
            line: 171,
            column: 12
          },
          end: {
            line: 171,
            column: 13
          }
        },
        loc: {
          start: {
            line: 172,
            column: 8
          },
          end: {
            line: 172,
            column: 90
          }
        },
        line: 172
      },
      '42': {
        name: '(anonymous_42)',
        decl: {
          start: {
            line: 172,
            column: 33
          },
          end: {
            line: 172,
            column: 34
          }
        },
        loc: {
          start: {
            line: 172,
            column: 44
          },
          end: {
            line: 172,
            column: 88
          }
        },
        line: 172
      },
      '43': {
        name: '(anonymous_43)',
        decl: {
          start: {
            line: 174,
            column: 12
          },
          end: {
            line: 174,
            column: 13
          }
        },
        loc: {
          start: {
            line: 174,
            column: 18
          },
          end: {
            line: 174,
            column: 48
          }
        },
        line: 174
      },
      '44': {
        name: '(anonymous_44)',
        decl: {
          start: {
            line: 175,
            column: 12
          },
          end: {
            line: 175,
            column: 13
          }
        },
        loc: {
          start: {
            line: 176,
            column: 8
          },
          end: {
            line: 176,
            column: 100
          }
        },
        line: 176
      },
      '45': {
        name: '(anonymous_45)',
        decl: {
          start: {
            line: 176,
            column: 35
          },
          end: {
            line: 176,
            column: 36
          }
        },
        loc: {
          start: {
            line: 176,
            column: 48
          },
          end: {
            line: 176,
            column: 98
          }
        },
        line: 176
      },
      '46': {
        name: '(anonymous_46)',
        decl: {
          start: {
            line: 178,
            column: 12
          },
          end: {
            line: 178,
            column: 13
          }
        },
        loc: {
          start: {
            line: 178,
            column: 18
          },
          end: {
            line: 178,
            column: 52
          }
        },
        line: 178
      },
      '47': {
        name: '(anonymous_47)',
        decl: {
          start: {
            line: 179,
            column: 12
          },
          end: {
            line: 179,
            column: 13
          }
        },
        loc: {
          start: {
            line: 180,
            column: 8
          },
          end: {
            line: 180,
            column: 110
          }
        },
        line: 180
      },
      '48': {
        name: '(anonymous_48)',
        decl: {
          start: {
            line: 180,
            column: 37
          },
          end: {
            line: 180,
            column: 38
          }
        },
        loc: {
          start: {
            line: 180,
            column: 52
          },
          end: {
            line: 180,
            column: 108
          }
        },
        line: 180
      },
      '49': {
        name: '(anonymous_49)',
        decl: {
          start: {
            line: 183,
            column: 26
          },
          end: {
            line: 183,
            column: 27
          }
        },
        loc: {
          start: {
            line: 185,
            column: 2
          },
          end: {
            line: 272,
            column: 6
          }
        },
        line: 185
      },
      '50': {
        name: '(anonymous_50)',
        decl: {
          start: {
            line: 187,
            column: 10
          },
          end: {
            line: 187,
            column: 11
          }
        },
        loc: {
          start: {
            line: 187,
            column: 16
          },
          end: {
            line: 187,
            column: 30
          }
        },
        line: 187
      },
      '51': {
        name: '(anonymous_51)',
        decl: {
          start: {
            line: 189,
            column: 10
          },
          end: {
            line: 189,
            column: 11
          }
        },
        loc: {
          start: {
            line: 189,
            column: 16
          },
          end: {
            line: 211,
            column: 5
          }
        },
        line: 189
      },
      '52': {
        name: '(anonymous_52)',
        decl: {
          start: {
            line: 190,
            column: 25
          },
          end: {
            line: 190,
            column: 26
          }
        },
        loc: {
          start: {
            line: 190,
            column: 46
          },
          end: {
            line: 210,
            column: 7
          }
        },
        line: 190
      },
      '53': {
        name: '(anonymous_53)',
        decl: {
          start: {
            line: 197,
            column: 25
          },
          end: {
            line: 197,
            column: 26
          }
        },
        loc: {
          start: {
            line: 197,
            column: 38
          },
          end: {
            line: 199,
            column: 9
          }
        },
        line: 197
      },
      '54': {
        name: '(anonymous_54)',
        decl: {
          start: {
            line: 202,
            column: 24
          },
          end: {
            line: 202,
            column: 25
          }
        },
        loc: {
          start: {
            line: 202,
            column: 53
          },
          end: {
            line: 209,
            column: 9
          }
        },
        line: 202
      },
      '55': {
        name: '(anonymous_55)',
        decl: {
          start: {
            line: 213,
            column: 10
          },
          end: {
            line: 213,
            column: 11
          }
        },
        loc: {
          start: {
            line: 214,
            column: 8
          },
          end: {
            line: 216,
            column: 18
          }
        },
        line: 214
      },
      '56': {
        name: '(anonymous_56)',
        decl: {
          start: {
            line: 219,
            column: 10
          },
          end: {
            line: 219,
            column: 11
          }
        },
        loc: {
          start: {
            line: 219,
            column: 16
          },
          end: {
            line: 219,
            column: 63
          }
        },
        line: 219
      },
      '57': {
        name: '(anonymous_57)',
        decl: {
          start: {
            line: 220,
            column: 10
          },
          end: {
            line: 220,
            column: 11
          }
        },
        loc: {
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 228,
            column: 8
          }
        },
        line: 221
      },
      '58': {
        name: '(anonymous_58)',
        decl: {
          start: {
            line: 221,
            column: 18
          },
          end: {
            line: 221,
            column: 19
          }
        },
        loc: {
          start: {
            line: 221,
            column: 39
          },
          end: {
            line: 228,
            column: 7
          }
        },
        line: 221
      },
      '59': {
        name: '(anonymous_59)',
        decl: {
          start: {
            line: 231,
            column: 10
          },
          end: {
            line: 231,
            column: 11
          }
        },
        loc: {
          start: {
            line: 231,
            column: 18
          },
          end: {
            line: 268,
            column: 5
          }
        },
        line: 231
      },
      '60': {
        name: '(anonymous_60)',
        decl: {
          start: {
            line: 232,
            column: 23
          },
          end: {
            line: 232,
            column: 24
          }
        },
        loc: {
          start: {
            line: 232,
            column: 30
          },
          end: {
            line: 239,
            column: 7
          }
        },
        line: 232
      },
      '61': {
        name: '(anonymous_61)',
        decl: {
          start: {
            line: 241,
            column: 27
          },
          end: {
            line: 241,
            column: 28
          }
        },
        loc: {
          start: {
            line: 241,
            column: 36
          },
          end: {
            line: 246,
            column: 9
          }
        },
        line: 241
      },
      '62': {
        name: '(anonymous_62)',
        decl: {
          start: {
            line: 245,
            column: 24
          },
          end: {
            line: 245,
            column: 25
          }
        },
        loc: {
          start: {
            line: 245,
            column: 32
          },
          end: {
            line: 245,
            column: 75
          }
        },
        line: 245
      },
      '63': {
        name: '(anonymous_63)',
        decl: {
          start: {
            line: 247,
            column: 30
          },
          end: {
            line: 247,
            column: 31
          }
        },
        loc: {
          start: {
            line: 248,
            column: 10
          },
          end: {
            line: 248,
            column: 56
          }
        },
        line: 248
      },
      '64': {
        name: '(anonymous_64)',
        decl: {
          start: {
            line: 250,
            column: 33
          },
          end: {
            line: 250,
            column: 34
          }
        },
        loc: {
          start: {
            line: 251,
            column: 10
          },
          end: {
            line: 251,
            column: 65
          }
        },
        line: 251
      },
      '65': {
        name: '(anonymous_65)',
        decl: {
          start: {
            line: 253,
            column: 29
          },
          end: {
            line: 253,
            column: 30
          }
        },
        loc: {
          start: {
            line: 254,
            column: 10
          },
          end: {
            line: 254,
            column: 53
          }
        },
        line: 254
      },
      '66': {
        name: '(anonymous_66)',
        decl: {
          start: {
            line: 256,
            column: 31
          },
          end: {
            line: 256,
            column: 32
          }
        },
        loc: {
          start: {
            line: 257,
            column: 10
          },
          end: {
            line: 257,
            column: 59
          }
        },
        line: 257
      },
      '67': {
        name: '(anonymous_67)',
        decl: {
          start: {
            line: 259,
            column: 33
          },
          end: {
            line: 259,
            column: 34
          }
        },
        loc: {
          start: {
            line: 259,
            column: 48
          },
          end: {
            line: 264,
            column: 9
          }
        },
        line: 259
      },
      '68': {
        name: '(anonymous_68)',
        decl: {
          start: {
            line: 263,
            column: 24
          },
          end: {
            line: 263,
            column: 25
          }
        },
        loc: {
          start: {
            line: 263,
            column: 32
          },
          end: {
            line: 263,
            column: 93
          }
        },
        line: 263
      },
      '69': {
        name: '(anonymous_69)',
        decl: {
          start: {
            line: 269,
            column: 10
          },
          end: {
            line: 269,
            column: 11
          }
        },
        loc: {
          start: {
            line: 269,
            column: 16
          },
          end: {
            line: 269,
            column: 40
          }
        },
        line: 269
      },
      '70': {
        name: '(anonymous_70)',
        decl: {
          start: {
            line: 270,
            column: 11
          },
          end: {
            line: 270,
            column: 12
          }
        },
        loc: {
          start: {
            line: 270,
            column: 16
          },
          end: {
            line: 272,
            column: 5
          }
        },
        line: 270
      },
      '71': {
        name: '(anonymous_71)',
        decl: {
          start: {
            line: 274,
            column: 29
          },
          end: {
            line: 274,
            column: 30
          }
        },
        loc: {
          start: {
            line: 275,
            column: 2
          },
          end: {
            line: 279,
            column: 40
          }
        },
        line: 275
      },
      '72': {
        name: '(anonymous_72)',
        decl: {
          start: {
            line: 276,
            column: 10
          },
          end: {
            line: 276,
            column: 11
          }
        },
        loc: {
          start: {
            line: 276,
            column: 16
          },
          end: {
            line: 278,
            column: 5
          }
        },
        line: 276
      },
      '73': {
        name: '(anonymous_73)',
        decl: {
          start: {
            line: 279,
            column: 11
          },
          end: {
            line: 279,
            column: 12
          }
        },
        loc: {
          start: {
            line: 279,
            column: 16
          },
          end: {
            line: 279,
            column: 39
          }
        },
        line: 279
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 125,
            column: 10
          },
          end: {
            line: 130,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 125,
            column: 10
          },
          end: {
            line: 130,
            column: 11
          }
        }, {
          start: {
            line: 125,
            column: 10
          },
          end: {
            line: 130,
            column: 11
          }
        }],
        line: 125
      },
      '1': {
        loc: {
          start: {
            line: 203,
            column: 10
          },
          end: {
            line: 208,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 203,
            column: 10
          },
          end: {
            line: 208,
            column: 11
          }
        }, {
          start: {
            line: 203,
            column: 10
          },
          end: {
            line: 208,
            column: 11
          }
        }],
        line: 203
      },
      '2': {
        loc: {
          start: {
            line: 234,
            column: 8
          },
          end: {
            line: 237,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 234,
            column: 8
          },
          end: {
            line: 237,
            column: 9
          }
        }, {
          start: {
            line: 234,
            column: 8
          },
          end: {
            line: 237,
            column: 9
          }
        }],
        line: 234
      },
      '3': {
        loc: {
          start: {
            line: 234,
            column: 12
          },
          end: {
            line: 234,
            column: 62
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 234,
            column: 12
          },
          end: {
            line: 234,
            column: 32
          }
        }, {
          start: {
            line: 234,
            column: 36
          },
          end: {
            line: 234,
            column: 62
          }
        }],
        line: 234
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
      '52': 0,
      '53': 0,
      '54': 0,
      '55': 0,
      '56': 0,
      '57': 0,
      '58': 0,
      '59': 0,
      '60': 0,
      '61': 0,
      '62': 0,
      '63': 0,
      '64': 0,
      '65': 0,
      '66': 0,
      '67': 0,
      '68': 0,
      '69': 0,
      '70': 0,
      '71': 0,
      '72': 0,
      '73': 0,
      '74': 0,
      '75': 0,
      '76': 0,
      '77': 0,
      '78': 0,
      '79': 0,
      '80': 0,
      '81': 0,
      '82': 0,
      '83': 0,
      '84': 0,
      '85': 0,
      '86': 0,
      '87': 0,
      '88': 0,
      '89': 0,
      '90': 0,
      '91': 0,
      '92': 0,
      '93': 0,
      '94': 0,
      '95': 0,
      '96': 0,
      '97': 0,
      '98': 0,
      '99': 0,
      '100': 0,
      '101': 0,
      '102': 0,
      '103': 0,
      '104': 0,
      '105': 0,
      '106': 0,
      '107': 0,
      '108': 0,
      '109': 0,
      '110': 0,
      '111': 0,
      '112': 0,
      '113': 0,
      '114': 0,
      '115': 0,
      '116': 0,
      '117': 0,
      '118': 0,
      '119': 0,
      '120': 0
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
      '52': 0,
      '53': 0,
      '54': 0,
      '55': 0,
      '56': 0,
      '57': 0,
      '58': 0,
      '59': 0,
      '60': 0,
      '61': 0,
      '62': 0,
      '63': 0,
      '64': 0,
      '65': 0,
      '66': 0,
      '67': 0,
      '68': 0,
      '69': 0,
      '70': 0,
      '71': 0,
      '72': 0,
      '73': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}(); /* eslint promise/param-names : 0 */

var _archiver = require('archiver');

var _archiver2 = _interopRequireDefault(_archiver);

var _fsExtra = require('fs-extra');

var _fs = require('fs');

var _unzipper = require('unzipper');

var _unzipper2 = _interopRequireDefault(_unzipper);

var _path = require('path');

var _formidable = require('formidable');

var _formidable2 = _interopRequireDefault(_formidable);

var _assets = require('../../components/assets');

var _resources = require('../../components/resources');

var _compositions = require('../../components/compositions');

var _montages = require('../../components/montages');

var _diffusions = require('../../components/diffusions');

var _deliverables = require('../../components/deliverables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tempFolder = (cov_2lh1hksiee.s[0]++, (0, _path.resolve)(__dirname + '/../../../temp/'));
var dumpFolder = (cov_2lh1hksiee.s[1]++, tempFolder + '/dump/');
var zipDest = (cov_2lh1hksiee.s[2]++, tempFolder + '/dump.zip');

cov_2lh1hksiee.s[3]++;
var downloadAllData = exports.downloadAllData = function downloadAllData(req, res) {
  cov_2lh1hksiee.f[0]++;
  cov_2lh1hksiee.s[4]++;
  return new _promise2.default(function (resolve, reject) {
    cov_2lh1hksiee.f[1]++;

    var data = (cov_2lh1hksiee.s[5]++, {});

    // ensure temp folder structure is set
    cov_2lh1hksiee.s[6]++;
    (0, _fsExtra.remove)(dumpFolder).then(function () {
      cov_2lh1hksiee.f[2]++;
      cov_2lh1hksiee.s[7]++;
      return (0, _fsExtra.ensureDir)(dumpFolder);
    }).then(function () {
      cov_2lh1hksiee.f[3]++;
      cov_2lh1hksiee.s[8]++;
      return (0, _fsExtra.ensureDir)(dumpFolder + '/data');
    }).then(function () {
      cov_2lh1hksiee.f[4]++;
      cov_2lh1hksiee.s[9]++;
      return (0, _fsExtra.ensureDir)(dumpFolder + '/assets');
    }).then(function () {
      cov_2lh1hksiee.f[5]++;
      cov_2lh1hksiee.s[10]++;
      return (0, _fsExtra.ensureDir)(dumpFolder + '/deliverables');
    }).then(function () {
      cov_2lh1hksiee.f[6]++;
      cov_2lh1hksiee.s[11]++;
      return _assets.dal.getAssets({});
    })
    // get assets
    .then(function (assets) {
      cov_2lh1hksiee.f[7]++;
      cov_2lh1hksiee.s[12]++;

      data.assets = assets;
      // download assets attachments
      var attachments = (cov_2lh1hksiee.s[13]++, assets.map(function (asset) {
        cov_2lh1hksiee.f[8]++;
        cov_2lh1hksiee.s[14]++;

        return new _promise2.default(function (resolve2, reject2) {
          cov_2lh1hksiee.f[9]++;
          cov_2lh1hksiee.s[15]++;

          _assets.dal.getAssetAttachment({
            id: asset._id,
            filename: asset.filename
          }).then(function (attachment) {
            cov_2lh1hksiee.f[10]++;

            var folderPath = (cov_2lh1hksiee.s[16]++, dumpFolder + '/assets/' + asset._id);
            var path = (cov_2lh1hksiee.s[17]++, folderPath + '/' + asset.filename);
            cov_2lh1hksiee.s[18]++;
            return (0, _fsExtra.ensureDir)(folderPath).then(function () {
              cov_2lh1hksiee.f[11]++;
              cov_2lh1hksiee.s[19]++;
              return (0, _fsExtra.writeFile)(path, attachment.data, 'binary');
            });
          }).then(resolve2).catch(reject2);
        });
      }));
      cov_2lh1hksiee.s[20]++;
      return _promise2.default.all(attachments);
    })
    // get other objects
    .then(function () {
      cov_2lh1hksiee.f[12]++;
      cov_2lh1hksiee.s[21]++;

      return _resources.dal.getResources({});
    }).then(function (resources) {
      cov_2lh1hksiee.f[13]++;
      cov_2lh1hksiee.s[22]++;

      data.resources = resources;
      cov_2lh1hksiee.s[23]++;
      return _compositions.dal.getCompositions({});
    }).then(function (compositions) {
      cov_2lh1hksiee.f[14]++;
      cov_2lh1hksiee.s[24]++;

      data.compositions = compositions;
      cov_2lh1hksiee.s[25]++;
      return _montages.dal.getMontages({});
    }).then(function (montages) {
      cov_2lh1hksiee.f[15]++;
      cov_2lh1hksiee.s[26]++;

      data.montages = montages;
      cov_2lh1hksiee.s[27]++;
      return _diffusions.dal.getDiffusions({});
    }).then(function (diffusions) {
      cov_2lh1hksiee.f[16]++;
      cov_2lh1hksiee.s[28]++;

      data.diffusions = diffusions;
      cov_2lh1hksiee.s[29]++;
      return _deliverables.dal.getDeliverables({});
    })
    // get deliverables
    .then(function (deliverables) {
      cov_2lh1hksiee.f[17]++;
      cov_2lh1hksiee.s[30]++;

      data.deliverables = deliverables;
      // download deliverables attachments
      var attachments = (cov_2lh1hksiee.s[31]++, deliverables.map(function (deliverable) {
        cov_2lh1hksiee.f[18]++;
        cov_2lh1hksiee.s[32]++;

        return new _promise2.default(function (resolve2, reject2) {
          cov_2lh1hksiee.f[19]++;
          cov_2lh1hksiee.s[33]++;

          _deliverables.dal.getDeliverableAttachment({
            id: deliverable._id,
            filename: deliverable.filename
          }).then(function (attachment) {
            cov_2lh1hksiee.f[20]++;

            var folderPath = (cov_2lh1hksiee.s[34]++, dumpFolder + '/deliverables/' + deliverable._id);
            var path = (cov_2lh1hksiee.s[35]++, folderPath + '/' + deliverable.filename);
            cov_2lh1hksiee.s[36]++;
            return (0, _fsExtra.ensureDir)(folderPath).then(function () {
              cov_2lh1hksiee.f[21]++;
              cov_2lh1hksiee.s[37]++;
              return (0, _fsExtra.writeFile)(path, attachment.data, 'binary');
            });
          }).then(resolve2).catch(reject2);
        });
      }));
      cov_2lh1hksiee.s[38]++;
      return _promise2.default.all(attachments);
    })
    // write data
    .then(function () {
      cov_2lh1hksiee.f[22]++;

      var dest = (cov_2lh1hksiee.s[39]++, dumpFolder + '/data/data.json');
      cov_2lh1hksiee.s[40]++;
      return (0, _fsExtra.writeFile)(dest, (0, _stringify2.default)(data), 'utf8');
    })
    // zip file
    .then(function () {
      cov_2lh1hksiee.f[23]++;
      cov_2lh1hksiee.s[41]++;

      return new _promise2.default(function (resolve2, reject2) {
        cov_2lh1hksiee.f[24]++;

        var output = (cov_2lh1hksiee.s[42]++, (0, _fs.createWriteStream)(zipDest));
        var archive = (cov_2lh1hksiee.s[43]++, (0, _archiver2.default)('zip', {
          zlib: { level: 9 // Sets the compression level.
          } }));
        cov_2lh1hksiee.s[44]++;
        output.on('close', function () {
          cov_2lh1hksiee.f[25]++;
          cov_2lh1hksiee.s[45]++;

          // console.log(archive.pointer() + ' total bytes');
          // console.log('archiver has been finalized and the output file descriptor has closed.');
          resolve2();
        });

        // This event is fired when the data source is drained no matter what was the data source.
        // It is not part of this library but rather from the NodeJS Stream API.
        // @see: https://nodejs.org/api/stream.html#stream_event_end
        cov_2lh1hksiee.s[46]++;
        output.on('end', function () {
          cov_2lh1hksiee.f[26]++;
          cov_2lh1hksiee.s[47]++;

          resolve2();
        });

        // good practice to catch warnings (ie stat failures and other non-blocking errors)
        cov_2lh1hksiee.s[48]++;
        archive.on('warning', function (err) {
          cov_2lh1hksiee.f[27]++;
          cov_2lh1hksiee.s[49]++;

          if (err.code === 'ENOENT') {
            // log warning

            cov_2lh1hksiee.b[0][0]++;
          } else {
            cov_2lh1hksiee.b[0][1]++;
            cov_2lh1hksiee.s[50]++;

            // throw error
            reject2(err);
          }
        });

        // good practice to catch this error explicitly
        cov_2lh1hksiee.s[51]++;
        archive.on('error', function (err) {
          cov_2lh1hksiee.f[28]++;
          cov_2lh1hksiee.s[52]++;

          reject2(err);
        });

        // pipe archive data to the file
        cov_2lh1hksiee.s[53]++;
        archive.pipe(output);

        // add folder to archive
        cov_2lh1hksiee.s[54]++;
        archive.directory(dumpFolder, false);
        cov_2lh1hksiee.s[55]++;
        archive.finalize();
      });
    }).then(function () {
      cov_2lh1hksiee.f[29]++;
      cov_2lh1hksiee.s[56]++;

      return (0, _fsExtra.readFile)(zipDest);
    })
    // return zip
    .then(function (file) {
      cov_2lh1hksiee.f[30]++;
      cov_2lh1hksiee.s[57]++;

      return res.end(file, 'binary');
    }).then(resolve).catch(reject);
  });
};

cov_2lh1hksiee.s[58]++;
var clearAllData = function clearAllData() {
  cov_2lh1hksiee.f[31]++;
  cov_2lh1hksiee.s[59]++;
  return _assets.dal.getAssets({}).then(function (assets) {
    cov_2lh1hksiee.f[32]++;
    cov_2lh1hksiee.s[60]++;
    return _promise2.default.all(assets.map(function (asset) {
      cov_2lh1hksiee.f[33]++;
      cov_2lh1hksiee.s[61]++;
      return _assets.dal.deleteAsset({ _id: asset._id });
    }));
  }).then(function () {
    cov_2lh1hksiee.f[34]++;
    cov_2lh1hksiee.s[62]++;
    return _resources.dal.getResources({});
  }).then(function (resources) {
    cov_2lh1hksiee.f[35]++;
    cov_2lh1hksiee.s[63]++;
    return _promise2.default.all(resources.map(function (resource) {
      cov_2lh1hksiee.f[36]++;
      cov_2lh1hksiee.s[64]++;
      return _resources.dal.deleteResource({ _id: resource._id });
    }));
  }).then(function () {
    cov_2lh1hksiee.f[37]++;
    cov_2lh1hksiee.s[65]++;
    return _compositions.dal.getCompositions({});
  }).then(function (compositions) {
    cov_2lh1hksiee.f[38]++;
    cov_2lh1hksiee.s[66]++;
    return _promise2.default.all(compositions.map(function (composition) {
      cov_2lh1hksiee.f[39]++;
      cov_2lh1hksiee.s[67]++;
      return _compositions.dal.deleteComposition({ _id: composition._id });
    }));
  }).then(function () {
    cov_2lh1hksiee.f[40]++;
    cov_2lh1hksiee.s[68]++;
    return _montages.dal.getMontages({});
  }).then(function (montages) {
    cov_2lh1hksiee.f[41]++;
    cov_2lh1hksiee.s[69]++;
    return _promise2.default.all(montages.map(function (montage) {
      cov_2lh1hksiee.f[42]++;
      cov_2lh1hksiee.s[70]++;
      return _montages.dal.deleteMontage({ _id: montage._id });
    }));
  }).then(function () {
    cov_2lh1hksiee.f[43]++;
    cov_2lh1hksiee.s[71]++;
    return _diffusions.dal.getDiffusions({});
  }).then(function (diffusions) {
    cov_2lh1hksiee.f[44]++;
    cov_2lh1hksiee.s[72]++;
    return _promise2.default.all(diffusions.map(function (diffusion) {
      cov_2lh1hksiee.f[45]++;
      cov_2lh1hksiee.s[73]++;
      return _diffusions.dal.deleteDiffusion({ _id: diffusion._id });
    }));
  }).then(function () {
    cov_2lh1hksiee.f[46]++;
    cov_2lh1hksiee.s[74]++;
    return _deliverables.dal.getDeliverables({});
  }).then(function (deliverables) {
    cov_2lh1hksiee.f[47]++;
    cov_2lh1hksiee.s[75]++;
    return _promise2.default.all(deliverables.map(function (deliverable) {
      cov_2lh1hksiee.f[48]++;
      cov_2lh1hksiee.s[76]++;
      return _deliverables.dal.deleteDeliverable({ _id: deliverable._id });
    }));
  });
};

cov_2lh1hksiee.s[77]++;
var uploadData = exports.uploadData = function uploadData(req, res) {
  cov_2lh1hksiee.f[49]++;
  cov_2lh1hksiee.s[78]++;
  return (
    // remove dump folder as we are going to replace it
    (0, _fsExtra.remove)(dumpFolder)
    // clear all previous data
    .then(function () {
      cov_2lh1hksiee.f[50]++;
      cov_2lh1hksiee.s[79]++;
      return clearAllData();
    })
    // store the zip dump file in temp dir
    .then(function () {
      cov_2lh1hksiee.f[51]++;
      cov_2lh1hksiee.s[80]++;

      return new _promise2.default(function (resolve, reject) {
        cov_2lh1hksiee.f[52]++;

        var form = (cov_2lh1hksiee.s[81]++, new _formidable2.default.IncomingForm({
          uploadDir: tempFolder,
          // multiples : true,
          keepExtensions: true
        }));

        cov_2lh1hksiee.s[82]++;
        form.on('error', function (err) {
          cov_2lh1hksiee.f[53]++;
          cov_2lh1hksiee.s[83]++;

          return reject(err);
        });

        cov_2lh1hksiee.s[84]++;
        form.parse(req, function (err, fields, files) {
          cov_2lh1hksiee.f[54]++;
          cov_2lh1hksiee.s[85]++;

          if (err) {
            cov_2lh1hksiee.b[1][0]++;
            cov_2lh1hksiee.s[86]++;

            return reject(err);
          } else {
            cov_2lh1hksiee.b[1][1]++;

            var attachmentPath = (cov_2lh1hksiee.s[87]++, files.file.path);
            cov_2lh1hksiee.s[88]++;
            return resolve(attachmentPath);
          }
        });
      });
    })
    // unzip file to dump folder
    .then(function (attachmentPath) {
      cov_2lh1hksiee.f[55]++;
      cov_2lh1hksiee.s[89]++;
      return (0, _fs.createReadStream)(attachmentPath).pipe(_unzipper2.default.Extract({ path: dumpFolder })).promise();
    })
    // load data
    .then(function () {
      cov_2lh1hksiee.f[56]++;
      cov_2lh1hksiee.s[90]++;
      return (0, _fsExtra.readFile)(dumpFolder + 'data/data.json', 'utf8');
    }).then(function (raw) {
      cov_2lh1hksiee.f[57]++;
      cov_2lh1hksiee.s[91]++;
      return new _promise2.default(function (resolve, reject) {
        cov_2lh1hksiee.f[58]++;
        cov_2lh1hksiee.s[92]++;

        try {
          var data = (cov_2lh1hksiee.s[93]++, JSON.parse(raw));
          cov_2lh1hksiee.s[94]++;
          resolve(data);
        } catch (e) {
          cov_2lh1hksiee.s[95]++;

          reject(e);
        }
      });
    })
    // create all objects
    .then(function (data) {
      cov_2lh1hksiee.f[59]++;
      cov_2lh1hksiee.s[96]++;

      var cleanRev = function cleanRev(doc) {
        cov_2lh1hksiee.f[60]++;
        cov_2lh1hksiee.s[97]++;

        delete doc._rev;
        cov_2lh1hksiee.s[98]++;
        if ((cov_2lh1hksiee.b[3][0]++, doc.type === 'asset') || (cov_2lh1hksiee.b[3][1]++, doc.type === 'deliverable')) {
          cov_2lh1hksiee.b[2][0]++;
          cov_2lh1hksiee.s[99]++;

          // delete attachment
          delete doc._attachments;
        } else {
          cov_2lh1hksiee.b[2][1]++;
        }
        cov_2lh1hksiee.s[100]++;
        return doc;
      };
      var operations = (cov_2lh1hksiee.s[101]++, [].concat((0, _toConsumableArray3.default)(data.assets.map(function (asset) {
        cov_2lh1hksiee.f[61]++;

        var fileName = (cov_2lh1hksiee.s[102]++, asset.filename);
        var attachmentPath = (cov_2lh1hksiee.s[103]++, dumpFolder + 'assets/' + asset._id + '/' + fileName);
        cov_2lh1hksiee.s[104]++;
        return (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
          cov_2lh1hksiee.f[62]++;
          cov_2lh1hksiee.s[105]++;
          return _assets.dal.createAsset(cleanRev(asset), data);
        });
      })), (0, _toConsumableArray3.default)(data.resources.map(function (resource) {
        cov_2lh1hksiee.f[63]++;
        cov_2lh1hksiee.s[106]++;
        return _resources.dal.createResource(cleanRev(resource));
      })), (0, _toConsumableArray3.default)(data.compositions.map(function (composition) {
        cov_2lh1hksiee.f[64]++;
        cov_2lh1hksiee.s[107]++;
        return _compositions.dal.createComposition(cleanRev(composition));
      })), (0, _toConsumableArray3.default)(data.montages.map(function (montage) {
        cov_2lh1hksiee.f[65]++;
        cov_2lh1hksiee.s[108]++;
        return _montages.dal.createMontage(cleanRev(montage));
      })), (0, _toConsumableArray3.default)(data.diffusions.map(function (diffusion) {
        cov_2lh1hksiee.f[66]++;
        cov_2lh1hksiee.s[109]++;
        return _diffusions.dal.createDiffusion(cleanRev(diffusion));
      })), (0, _toConsumableArray3.default)(data.deliverables.map(function (deliverable) {
        cov_2lh1hksiee.f[67]++;

        var fileName = (cov_2lh1hksiee.s[110]++, deliverable.filename);
        var attachmentPath = (cov_2lh1hksiee.s[111]++, dumpFolder + 'deliverables/' + deliverable._id + '/' + fileName);
        cov_2lh1hksiee.s[112]++;
        return (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
          cov_2lh1hksiee.f[68]++;
          cov_2lh1hksiee.s[113]++;
          return _deliverables.dal.createDeliverable(cleanRev(deliverable), data);
        });
      }))));

      cov_2lh1hksiee.s[114]++;
      return _promise2.default.all(operations);
    }).then(function () {
      cov_2lh1hksiee.f[69]++;
      cov_2lh1hksiee.s[115]++;
      return res.json({ status: 'ok' });
    }).catch(function (e) {
      cov_2lh1hksiee.f[70]++;
      cov_2lh1hksiee.s[116]++;

      res.status(500).send(e);
    })
  );
};

cov_2lh1hksiee.s[117]++;
var deleteAllData = exports.deleteAllData = function deleteAllData(req, res) {
  cov_2lh1hksiee.f[71]++;
  cov_2lh1hksiee.s[118]++;
  return clearAllData().then(function () {
    cov_2lh1hksiee.f[72]++;
    cov_2lh1hksiee.s[119]++;

    return res.json({ status: 'ok' });
  }).catch(function (e) {
    cov_2lh1hksiee.f[73]++;
    cov_2lh1hksiee.s[120]++;
    return res.status(500).send(e);
  });
};