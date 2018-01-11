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

var cov_shizl4dmo = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/services/dump/dump.controller.js',
      hash = '33d832df59e63597b69371a67d0d5fa72b3e4344',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/services/dump/dump.controller.js',
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
          line: 151,
          column: 4
        }
      },
      '4': {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 151,
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
          line: 150,
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
          line: 50,
          column: 10
        }
      },
      '14': {
        start: {
          line: 38,
          column: 10
        },
        end: {
          line: 49,
          column: 13
        }
      },
      '15': {
        start: {
          line: 39,
          column: 12
        },
        end: {
          line: 48,
          column: 28
        }
      },
      '16': {
        start: {
          line: 44,
          column: 27
        },
        end: {
          line: 44,
          column: 67
        }
      },
      '17': {
        start: {
          line: 45,
          column: 14
        },
        end: {
          line: 45,
          column: 64
        }
      },
      '18': {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 40
        }
      },
      '19': {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 42
        }
      },
      '20': {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 33
        }
      },
      '21': {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 48
        }
      },
      '22': {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 62,
          column: 39
        }
      },
      '23': {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 63,
          column: 40
        }
      },
      '24': {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 66,
          column: 31
        }
      },
      '25': {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 44
        }
      },
      '26': {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 35
        }
      },
      '27': {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 48
        }
      },
      '28': {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 75,
          column: 39
        }
      },
      '29': {
        start: {
          line: 77,
          column: 26
        },
        end: {
          line: 90,
          column: 10
        }
      },
      '30': {
        start: {
          line: 78,
          column: 10
        },
        end: {
          line: 89,
          column: 13
        }
      },
      '31': {
        start: {
          line: 79,
          column: 12
        },
        end: {
          line: 88,
          column: 28
        }
      },
      '32': {
        start: {
          line: 84,
          column: 27
        },
        end: {
          line: 84,
          column: 79
        }
      },
      '33': {
        start: {
          line: 85,
          column: 14
        },
        end: {
          line: 85,
          column: 64
        }
      },
      '34': {
        start: {
          line: 91,
          column: 6
        },
        end: {
          line: 91,
          column: 38
        }
      },
      '35': {
        start: {
          line: 95,
          column: 19
        },
        end: {
          line: 95,
          column: 49
        }
      },
      '36': {
        start: {
          line: 96,
          column: 6
        },
        end: {
          line: 96,
          column: 59
        }
      },
      '37': {
        start: {
          line: 100,
          column: 6
        },
        end: {
          line: 140,
          column: 9
        }
      },
      '38': {
        start: {
          line: 101,
          column: 23
        },
        end: {
          line: 101,
          column: 49
        }
      },
      '39': {
        start: {
          line: 102,
          column: 24
        },
        end: {
          line: 104,
          column: 10
        }
      },
      '40': {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 109,
          column: 11
        }
      },
      '41': {
        start: {
          line: 108,
          column: 10
        },
        end: {
          line: 108,
          column: 21
        }
      },
      '42': {
        start: {
          line: 114,
          column: 8
        },
        end: {
          line: 116,
          column: 11
        }
      },
      '43': {
        start: {
          line: 115,
          column: 10
        },
        end: {
          line: 115,
          column: 21
        }
      },
      '44': {
        start: {
          line: 120,
          column: 8
        },
        end: {
          line: 127,
          column: 11
        }
      },
      '45': {
        start: {
          line: 121,
          column: 10
        },
        end: {
          line: 126,
          column: 11
        }
      },
      '46': {
        start: {
          line: 125,
          column: 12
        },
        end: {
          line: 125,
          column: 25
        }
      },
      '47': {
        start: {
          line: 130,
          column: 8
        },
        end: {
          line: 132,
          column: 11
        }
      },
      '48': {
        start: {
          line: 131,
          column: 10
        },
        end: {
          line: 131,
          column: 23
        }
      },
      '49': {
        start: {
          line: 135,
          column: 8
        },
        end: {
          line: 135,
          column: 29
        }
      },
      '50': {
        start: {
          line: 138,
          column: 8
        },
        end: {
          line: 138,
          column: 45
        }
      },
      '51': {
        start: {
          line: 139,
          column: 8
        },
        end: {
          line: 139,
          column: 27
        }
      },
      '52': {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 31
        }
      },
      '53': {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 147,
          column: 37
        }
      },
      '54': {
        start: {
          line: 153,
          column: 21
        },
        end: {
          line: 177,
          column: 7
        }
      },
      '55': {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 177,
          column: 7
        }
      },
      '56': {
        start: {
          line: 156,
          column: 8
        },
        end: {
          line: 156,
          column: 80
        }
      },
      '57': {
        start: {
          line: 156,
          column: 40
        },
        end: {
          line: 156,
          column: 78
        }
      },
      '58': {
        start: {
          line: 158,
          column: 18
        },
        end: {
          line: 158,
          column: 46
        }
      },
      '59': {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 160,
          column: 95
        }
      },
      '60': {
        start: {
          line: 160,
          column: 46
        },
        end: {
          line: 160,
          column: 93
        }
      },
      '61': {
        start: {
          line: 162,
          column: 18
        },
        end: {
          line: 162,
          column: 52
        }
      },
      '62': {
        start: {
          line: 164,
          column: 8
        },
        end: {
          line: 164,
          column: 110
        }
      },
      '63': {
        start: {
          line: 164,
          column: 52
        },
        end: {
          line: 164,
          column: 108
        }
      },
      '64': {
        start: {
          line: 166,
          column: 18
        },
        end: {
          line: 166,
          column: 44
        }
      },
      '65': {
        start: {
          line: 168,
          column: 8
        },
        end: {
          line: 168,
          column: 90
        }
      },
      '66': {
        start: {
          line: 168,
          column: 44
        },
        end: {
          line: 168,
          column: 88
        }
      },
      '67': {
        start: {
          line: 170,
          column: 18
        },
        end: {
          line: 170,
          column: 48
        }
      },
      '68': {
        start: {
          line: 172,
          column: 8
        },
        end: {
          line: 172,
          column: 100
        }
      },
      '69': {
        start: {
          line: 172,
          column: 48
        },
        end: {
          line: 172,
          column: 98
        }
      },
      '70': {
        start: {
          line: 174,
          column: 18
        },
        end: {
          line: 174,
          column: 52
        }
      },
      '71': {
        start: {
          line: 176,
          column: 8
        },
        end: {
          line: 176,
          column: 110
        }
      },
      '72': {
        start: {
          line: 176,
          column: 52
        },
        end: {
          line: 176,
          column: 108
        }
      },
      '73': {
        start: {
          line: 179,
          column: 26
        },
        end: {
          line: 268,
          column: 6
        }
      },
      '74': {
        start: {
          line: 181,
          column: 2
        },
        end: {
          line: 268,
          column: 6
        }
      },
      '75': {
        start: {
          line: 183,
          column: 16
        },
        end: {
          line: 183,
          column: 30
        }
      },
      '76': {
        start: {
          line: 186,
          column: 6
        },
        end: {
          line: 206,
          column: 9
        }
      },
      '77': {
        start: {
          line: 187,
          column: 21
        },
        end: {
          line: 191,
          column: 10
        }
      },
      '78': {
        start: {
          line: 193,
          column: 8
        },
        end: {
          line: 195,
          column: 11
        }
      },
      '79': {
        start: {
          line: 194,
          column: 10
        },
        end: {
          line: 194,
          column: 29
        }
      },
      '80': {
        start: {
          line: 198,
          column: 8
        },
        end: {
          line: 205,
          column: 11
        }
      },
      '81': {
        start: {
          line: 199,
          column: 10
        },
        end: {
          line: 204,
          column: 11
        }
      },
      '82': {
        start: {
          line: 200,
          column: 12
        },
        end: {
          line: 200,
          column: 31
        }
      },
      '83': {
        start: {
          line: 202,
          column: 35
        },
        end: {
          line: 202,
          column: 50
        }
      },
      '84': {
        start: {
          line: 203,
          column: 12
        },
        end: {
          line: 203,
          column: 43
        }
      },
      '85': {
        start: {
          line: 210,
          column: 8
        },
        end: {
          line: 212,
          column: 18
        }
      },
      '86': {
        start: {
          line: 215,
          column: 16
        },
        end: {
          line: 215,
          column: 63
        }
      },
      '87': {
        start: {
          line: 217,
          column: 6
        },
        end: {
          line: 224,
          column: 8
        }
      },
      '88': {
        start: {
          line: 218,
          column: 8
        },
        end: {
          line: 223,
          column: 9
        }
      },
      '89': {
        start: {
          line: 219,
          column: 23
        },
        end: {
          line: 219,
          column: 38
        }
      },
      '90': {
        start: {
          line: 220,
          column: 10
        },
        end: {
          line: 220,
          column: 24
        }
      },
      '91': {
        start: {
          line: 222,
          column: 10
        },
        end: {
          line: 222,
          column: 20
        }
      },
      '92': {
        start: {
          line: 228,
          column: 23
        },
        end: {
          line: 235,
          column: 7
        }
      },
      '93': {
        start: {
          line: 229,
          column: 8
        },
        end: {
          line: 229,
          column: 24
        }
      },
      '94': {
        start: {
          line: 230,
          column: 8
        },
        end: {
          line: 233,
          column: 9
        }
      },
      '95': {
        start: {
          line: 232,
          column: 10
        },
        end: {
          line: 232,
          column: 34
        }
      },
      '96': {
        start: {
          line: 234,
          column: 8
        },
        end: {
          line: 234,
          column: 19
        }
      },
      '97': {
        start: {
          line: 236,
          column: 25
        },
        end: {
          line: 261,
          column: 7
        }
      },
      '98': {
        start: {
          line: 238,
          column: 27
        },
        end: {
          line: 238,
          column: 41
        }
      },
      '99': {
        start: {
          line: 239,
          column: 33
        },
        end: {
          line: 239,
          column: 66
        }
      },
      '100': {
        start: {
          line: 240,
          column: 10
        },
        end: {
          line: 241,
          column: 77
        }
      },
      '101': {
        start: {
          line: 241,
          column: 32
        },
        end: {
          line: 241,
          column: 75
        }
      },
      '102': {
        start: {
          line: 244,
          column: 10
        },
        end: {
          line: 244,
          column: 56
        }
      },
      '103': {
        start: {
          line: 247,
          column: 10
        },
        end: {
          line: 247,
          column: 65
        }
      },
      '104': {
        start: {
          line: 250,
          column: 10
        },
        end: {
          line: 250,
          column: 53
        }
      },
      '105': {
        start: {
          line: 253,
          column: 10
        },
        end: {
          line: 253,
          column: 59
        }
      },
      '106': {
        start: {
          line: 256,
          column: 27
        },
        end: {
          line: 256,
          column: 47
        }
      },
      '107': {
        start: {
          line: 257,
          column: 33
        },
        end: {
          line: 257,
          column: 72
        }
      },
      '108': {
        start: {
          line: 258,
          column: 10
        },
        end: {
          line: 259,
          column: 95
        }
      },
      '109': {
        start: {
          line: 259,
          column: 32
        },
        end: {
          line: 259,
          column: 93
        }
      },
      '110': {
        start: {
          line: 263,
          column: 6
        },
        end: {
          line: 263,
          column: 37
        }
      },
      '111': {
        start: {
          line: 265,
          column: 16
        },
        end: {
          line: 265,
          column: 40
        }
      },
      '112': {
        start: {
          line: 267,
          column: 6
        },
        end: {
          line: 267,
          column: 30
        }
      },
      '113': {
        start: {
          line: 270,
          column: 29
        },
        end: {
          line: 275,
          column: 40
        }
      },
      '114': {
        start: {
          line: 271,
          column: 2
        },
        end: {
          line: 275,
          column: 40
        }
      },
      '115': {
        start: {
          line: 273,
          column: 6
        },
        end: {
          line: 273,
          column: 38
        }
      },
      '116': {
        start: {
          line: 275,
          column: 16
        },
        end: {
          line: 275,
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
            line: 151,
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
            line: 151,
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
            line: 52,
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
            line: 50,
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
            line: 49,
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
            line: 46,
            column: 13
          }
        },
        line: 43
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 54,
            column: 10
          },
          end: {
            line: 54,
            column: 11
          }
        },
        loc: {
          start: {
            line: 54,
            column: 16
          },
          end: {
            line: 56,
            column: 5
          }
        },
        line: 54
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 57,
            column: 10
          },
          end: {
            line: 57,
            column: 11
          }
        },
        loc: {
          start: {
            line: 57,
            column: 23
          },
          end: {
            line: 60,
            column: 5
          }
        },
        line: 57
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 61,
            column: 10
          },
          end: {
            line: 61,
            column: 11
          }
        },
        loc: {
          start: {
            line: 61,
            column: 26
          },
          end: {
            line: 64,
            column: 5
          }
        },
        line: 61
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 65,
            column: 10
          },
          end: {
            line: 65,
            column: 11
          }
        },
        loc: {
          start: {
            line: 65,
            column: 22
          },
          end: {
            line: 68,
            column: 5
          }
        },
        line: 65
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 69,
            column: 10
          },
          end: {
            line: 69,
            column: 11
          }
        },
        loc: {
          start: {
            line: 69,
            column: 24
          },
          end: {
            line: 72,
            column: 5
          }
        },
        line: 69
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 74,
            column: 10
          },
          end: {
            line: 74,
            column: 11
          }
        },
        loc: {
          start: {
            line: 74,
            column: 26
          },
          end: {
            line: 92,
            column: 5
          }
        },
        line: 74
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 77,
            column: 43
          },
          end: {
            line: 77,
            column: 44
          }
        },
        loc: {
          start: {
            line: 77,
            column: 58
          },
          end: {
            line: 90,
            column: 9
          }
        },
        line: 77
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 78,
            column: 29
          },
          end: {
            line: 78,
            column: 30
          }
        },
        loc: {
          start: {
            line: 78,
            column: 52
          },
          end: {
            line: 89,
            column: 11
          }
        },
        line: 78
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 83,
            column: 18
          },
          end: {
            line: 83,
            column: 19
          }
        },
        loc: {
          start: {
            line: 83,
            column: 32
          },
          end: {
            line: 86,
            column: 13
          }
        },
        line: 83
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 94,
            column: 10
          },
          end: {
            line: 94,
            column: 11
          }
        },
        loc: {
          start: {
            line: 94,
            column: 16
          },
          end: {
            line: 97,
            column: 5
          }
        },
        line: 94
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 99,
            column: 10
          },
          end: {
            line: 99,
            column: 11
          }
        },
        loc: {
          start: {
            line: 99,
            column: 16
          },
          end: {
            line: 141,
            column: 5
          }
        },
        line: 99
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 100,
            column: 25
          },
          end: {
            line: 100,
            column: 26
          }
        },
        loc: {
          start: {
            line: 100,
            column: 48
          },
          end: {
            line: 140,
            column: 7
          }
        },
        line: 100
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 105,
            column: 27
          },
          end: {
            line: 105,
            column: 28
          }
        },
        loc: {
          start: {
            line: 105,
            column: 38
          },
          end: {
            line: 109,
            column: 9
          }
        },
        line: 105
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 114,
            column: 25
          },
          end: {
            line: 114,
            column: 26
          }
        },
        loc: {
          start: {
            line: 114,
            column: 36
          },
          end: {
            line: 116,
            column: 9
          }
        },
        line: 114
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 120,
            column: 30
          },
          end: {
            line: 120,
            column: 31
          }
        },
        loc: {
          start: {
            line: 120,
            column: 44
          },
          end: {
            line: 127,
            column: 9
          }
        },
        line: 120
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 130,
            column: 28
          },
          end: {
            line: 130,
            column: 29
          }
        },
        loc: {
          start: {
            line: 130,
            column: 42
          },
          end: {
            line: 132,
            column: 9
          }
        },
        line: 130
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 142,
            column: 10
          },
          end: {
            line: 142,
            column: 11
          }
        },
        loc: {
          start: {
            line: 142,
            column: 16
          },
          end: {
            line: 144,
            column: 5
          }
        },
        line: 142
      },
      '28': {
        name: '(anonymous_28)',
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
            column: 18
          },
          end: {
            line: 148,
            column: 5
          }
        },
        line: 146
      },
      '29': {
        name: '(anonymous_29)',
        decl: {
          start: {
            line: 153,
            column: 21
          },
          end: {
            line: 153,
            column: 22
          }
        },
        loc: {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 177,
            column: 7
          }
        },
        line: 154
      },
      '30': {
        name: '(anonymous_30)',
        decl: {
          start: {
            line: 155,
            column: 12
          },
          end: {
            line: 155,
            column: 13
          }
        },
        loc: {
          start: {
            line: 156,
            column: 8
          },
          end: {
            line: 156,
            column: 80
          }
        },
        line: 156
      },
      '31': {
        name: '(anonymous_31)',
        decl: {
          start: {
            line: 156,
            column: 31
          },
          end: {
            line: 156,
            column: 32
          }
        },
        loc: {
          start: {
            line: 156,
            column: 40
          },
          end: {
            line: 156,
            column: 78
          }
        },
        line: 156
      },
      '32': {
        name: '(anonymous_32)',
        decl: {
          start: {
            line: 158,
            column: 12
          },
          end: {
            line: 158,
            column: 13
          }
        },
        loc: {
          start: {
            line: 158,
            column: 18
          },
          end: {
            line: 158,
            column: 46
          }
        },
        line: 158
      },
      '33': {
        name: '(anonymous_33)',
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
            column: 95
          }
        },
        line: 160
      },
      '34': {
        name: '(anonymous_34)',
        decl: {
          start: {
            line: 160,
            column: 34
          },
          end: {
            line: 160,
            column: 35
          }
        },
        loc: {
          start: {
            line: 160,
            column: 46
          },
          end: {
            line: 160,
            column: 93
          }
        },
        line: 160
      },
      '35': {
        name: '(anonymous_35)',
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
            column: 52
          }
        },
        line: 162
      },
      '36': {
        name: '(anonymous_36)',
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
            column: 110
          }
        },
        line: 164
      },
      '37': {
        name: '(anonymous_37)',
        decl: {
          start: {
            line: 164,
            column: 37
          },
          end: {
            line: 164,
            column: 38
          }
        },
        loc: {
          start: {
            line: 164,
            column: 52
          },
          end: {
            line: 164,
            column: 108
          }
        },
        line: 164
      },
      '38': {
        name: '(anonymous_38)',
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
            column: 44
          }
        },
        line: 166
      },
      '39': {
        name: '(anonymous_39)',
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
            column: 90
          }
        },
        line: 168
      },
      '40': {
        name: '(anonymous_40)',
        decl: {
          start: {
            line: 168,
            column: 33
          },
          end: {
            line: 168,
            column: 34
          }
        },
        loc: {
          start: {
            line: 168,
            column: 44
          },
          end: {
            line: 168,
            column: 88
          }
        },
        line: 168
      },
      '41': {
        name: '(anonymous_41)',
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
            column: 48
          }
        },
        line: 170
      },
      '42': {
        name: '(anonymous_42)',
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
            column: 100
          }
        },
        line: 172
      },
      '43': {
        name: '(anonymous_43)',
        decl: {
          start: {
            line: 172,
            column: 35
          },
          end: {
            line: 172,
            column: 36
          }
        },
        loc: {
          start: {
            line: 172,
            column: 48
          },
          end: {
            line: 172,
            column: 98
          }
        },
        line: 172
      },
      '44': {
        name: '(anonymous_44)',
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
            column: 52
          }
        },
        line: 174
      },
      '45': {
        name: '(anonymous_45)',
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
            column: 110
          }
        },
        line: 176
      },
      '46': {
        name: '(anonymous_46)',
        decl: {
          start: {
            line: 176,
            column: 37
          },
          end: {
            line: 176,
            column: 38
          }
        },
        loc: {
          start: {
            line: 176,
            column: 52
          },
          end: {
            line: 176,
            column: 108
          }
        },
        line: 176
      },
      '47': {
        name: '(anonymous_47)',
        decl: {
          start: {
            line: 179,
            column: 26
          },
          end: {
            line: 179,
            column: 27
          }
        },
        loc: {
          start: {
            line: 181,
            column: 2
          },
          end: {
            line: 268,
            column: 6
          }
        },
        line: 181
      },
      '48': {
        name: '(anonymous_48)',
        decl: {
          start: {
            line: 183,
            column: 10
          },
          end: {
            line: 183,
            column: 11
          }
        },
        loc: {
          start: {
            line: 183,
            column: 16
          },
          end: {
            line: 183,
            column: 30
          }
        },
        line: 183
      },
      '49': {
        name: '(anonymous_49)',
        decl: {
          start: {
            line: 185,
            column: 10
          },
          end: {
            line: 185,
            column: 11
          }
        },
        loc: {
          start: {
            line: 185,
            column: 16
          },
          end: {
            line: 207,
            column: 5
          }
        },
        line: 185
      },
      '50': {
        name: '(anonymous_50)',
        decl: {
          start: {
            line: 186,
            column: 25
          },
          end: {
            line: 186,
            column: 26
          }
        },
        loc: {
          start: {
            line: 186,
            column: 46
          },
          end: {
            line: 206,
            column: 7
          }
        },
        line: 186
      },
      '51': {
        name: '(anonymous_51)',
        decl: {
          start: {
            line: 193,
            column: 25
          },
          end: {
            line: 193,
            column: 26
          }
        },
        loc: {
          start: {
            line: 193,
            column: 38
          },
          end: {
            line: 195,
            column: 9
          }
        },
        line: 193
      },
      '52': {
        name: '(anonymous_52)',
        decl: {
          start: {
            line: 198,
            column: 24
          },
          end: {
            line: 198,
            column: 25
          }
        },
        loc: {
          start: {
            line: 198,
            column: 53
          },
          end: {
            line: 205,
            column: 9
          }
        },
        line: 198
      },
      '53': {
        name: '(anonymous_53)',
        decl: {
          start: {
            line: 209,
            column: 10
          },
          end: {
            line: 209,
            column: 11
          }
        },
        loc: {
          start: {
            line: 210,
            column: 8
          },
          end: {
            line: 212,
            column: 18
          }
        },
        line: 210
      },
      '54': {
        name: '(anonymous_54)',
        decl: {
          start: {
            line: 215,
            column: 10
          },
          end: {
            line: 215,
            column: 11
          }
        },
        loc: {
          start: {
            line: 215,
            column: 16
          },
          end: {
            line: 215,
            column: 63
          }
        },
        line: 215
      },
      '55': {
        name: '(anonymous_55)',
        decl: {
          start: {
            line: 216,
            column: 10
          },
          end: {
            line: 216,
            column: 11
          }
        },
        loc: {
          start: {
            line: 217,
            column: 6
          },
          end: {
            line: 224,
            column: 8
          }
        },
        line: 217
      },
      '56': {
        name: '(anonymous_56)',
        decl: {
          start: {
            line: 217,
            column: 18
          },
          end: {
            line: 217,
            column: 19
          }
        },
        loc: {
          start: {
            line: 217,
            column: 39
          },
          end: {
            line: 224,
            column: 7
          }
        },
        line: 217
      },
      '57': {
        name: '(anonymous_57)',
        decl: {
          start: {
            line: 227,
            column: 10
          },
          end: {
            line: 227,
            column: 11
          }
        },
        loc: {
          start: {
            line: 227,
            column: 18
          },
          end: {
            line: 264,
            column: 5
          }
        },
        line: 227
      },
      '58': {
        name: '(anonymous_58)',
        decl: {
          start: {
            line: 228,
            column: 23
          },
          end: {
            line: 228,
            column: 24
          }
        },
        loc: {
          start: {
            line: 228,
            column: 30
          },
          end: {
            line: 235,
            column: 7
          }
        },
        line: 228
      },
      '59': {
        name: '(anonymous_59)',
        decl: {
          start: {
            line: 237,
            column: 27
          },
          end: {
            line: 237,
            column: 28
          }
        },
        loc: {
          start: {
            line: 237,
            column: 36
          },
          end: {
            line: 242,
            column: 9
          }
        },
        line: 237
      },
      '60': {
        name: '(anonymous_60)',
        decl: {
          start: {
            line: 241,
            column: 24
          },
          end: {
            line: 241,
            column: 25
          }
        },
        loc: {
          start: {
            line: 241,
            column: 32
          },
          end: {
            line: 241,
            column: 75
          }
        },
        line: 241
      },
      '61': {
        name: '(anonymous_61)',
        decl: {
          start: {
            line: 243,
            column: 30
          },
          end: {
            line: 243,
            column: 31
          }
        },
        loc: {
          start: {
            line: 244,
            column: 10
          },
          end: {
            line: 244,
            column: 56
          }
        },
        line: 244
      },
      '62': {
        name: '(anonymous_62)',
        decl: {
          start: {
            line: 246,
            column: 33
          },
          end: {
            line: 246,
            column: 34
          }
        },
        loc: {
          start: {
            line: 247,
            column: 10
          },
          end: {
            line: 247,
            column: 65
          }
        },
        line: 247
      },
      '63': {
        name: '(anonymous_63)',
        decl: {
          start: {
            line: 249,
            column: 29
          },
          end: {
            line: 249,
            column: 30
          }
        },
        loc: {
          start: {
            line: 250,
            column: 10
          },
          end: {
            line: 250,
            column: 53
          }
        },
        line: 250
      },
      '64': {
        name: '(anonymous_64)',
        decl: {
          start: {
            line: 252,
            column: 31
          },
          end: {
            line: 252,
            column: 32
          }
        },
        loc: {
          start: {
            line: 253,
            column: 10
          },
          end: {
            line: 253,
            column: 59
          }
        },
        line: 253
      },
      '65': {
        name: '(anonymous_65)',
        decl: {
          start: {
            line: 255,
            column: 33
          },
          end: {
            line: 255,
            column: 34
          }
        },
        loc: {
          start: {
            line: 255,
            column: 48
          },
          end: {
            line: 260,
            column: 9
          }
        },
        line: 255
      },
      '66': {
        name: '(anonymous_66)',
        decl: {
          start: {
            line: 259,
            column: 24
          },
          end: {
            line: 259,
            column: 25
          }
        },
        loc: {
          start: {
            line: 259,
            column: 32
          },
          end: {
            line: 259,
            column: 93
          }
        },
        line: 259
      },
      '67': {
        name: '(anonymous_67)',
        decl: {
          start: {
            line: 265,
            column: 10
          },
          end: {
            line: 265,
            column: 11
          }
        },
        loc: {
          start: {
            line: 265,
            column: 16
          },
          end: {
            line: 265,
            column: 40
          }
        },
        line: 265
      },
      '68': {
        name: '(anonymous_68)',
        decl: {
          start: {
            line: 266,
            column: 11
          },
          end: {
            line: 266,
            column: 12
          }
        },
        loc: {
          start: {
            line: 266,
            column: 16
          },
          end: {
            line: 268,
            column: 5
          }
        },
        line: 266
      },
      '69': {
        name: '(anonymous_69)',
        decl: {
          start: {
            line: 270,
            column: 29
          },
          end: {
            line: 270,
            column: 30
          }
        },
        loc: {
          start: {
            line: 271,
            column: 2
          },
          end: {
            line: 275,
            column: 40
          }
        },
        line: 271
      },
      '70': {
        name: '(anonymous_70)',
        decl: {
          start: {
            line: 272,
            column: 10
          },
          end: {
            line: 272,
            column: 11
          }
        },
        loc: {
          start: {
            line: 272,
            column: 16
          },
          end: {
            line: 274,
            column: 5
          }
        },
        line: 272
      },
      '71': {
        name: '(anonymous_71)',
        decl: {
          start: {
            line: 275,
            column: 11
          },
          end: {
            line: 275,
            column: 12
          }
        },
        loc: {
          start: {
            line: 275,
            column: 16
          },
          end: {
            line: 275,
            column: 39
          }
        },
        line: 275
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 121,
            column: 10
          },
          end: {
            line: 126,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 121,
            column: 10
          },
          end: {
            line: 126,
            column: 11
          }
        }, {
          start: {
            line: 121,
            column: 10
          },
          end: {
            line: 126,
            column: 11
          }
        }],
        line: 121
      },
      '1': {
        loc: {
          start: {
            line: 199,
            column: 10
          },
          end: {
            line: 204,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 199,
            column: 10
          },
          end: {
            line: 204,
            column: 11
          }
        }, {
          start: {
            line: 199,
            column: 10
          },
          end: {
            line: 204,
            column: 11
          }
        }],
        line: 199
      },
      '2': {
        loc: {
          start: {
            line: 230,
            column: 8
          },
          end: {
            line: 233,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 230,
            column: 8
          },
          end: {
            line: 233,
            column: 9
          }
        }, {
          start: {
            line: 230,
            column: 8
          },
          end: {
            line: 233,
            column: 9
          }
        }],
        line: 230
      },
      '3': {
        loc: {
          start: {
            line: 230,
            column: 12
          },
          end: {
            line: 230,
            column: 62
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 230,
            column: 12
          },
          end: {
            line: 230,
            column: 32
          }
        }, {
          start: {
            line: 230,
            column: 36
          },
          end: {
            line: 230,
            column: 62
          }
        }],
        line: 230
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
      '116': 0
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
      '71': 0
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

var tempFolder = (cov_shizl4dmo.s[0]++, (0, _path.resolve)(__dirname + '/../../../temp/'));
var dumpFolder = (cov_shizl4dmo.s[1]++, tempFolder + '/dump/');
var zipDest = (cov_shizl4dmo.s[2]++, tempFolder + '/dump.zip');

cov_shizl4dmo.s[3]++;
var downloadAllData = exports.downloadAllData = function downloadAllData(req, res) {
  cov_shizl4dmo.f[0]++;
  cov_shizl4dmo.s[4]++;
  return new _promise2.default(function (resolve, reject) {
    cov_shizl4dmo.f[1]++;

    var data = (cov_shizl4dmo.s[5]++, {});

    // ensure temp folder structure is set
    cov_shizl4dmo.s[6]++;
    (0, _fsExtra.remove)(dumpFolder).then(function () {
      cov_shizl4dmo.f[2]++;
      cov_shizl4dmo.s[7]++;
      return (0, _fsExtra.ensureDir)(dumpFolder);
    }).then(function () {
      cov_shizl4dmo.f[3]++;
      cov_shizl4dmo.s[8]++;
      return (0, _fsExtra.ensureDir)(dumpFolder + '/data');
    }).then(function () {
      cov_shizl4dmo.f[4]++;
      cov_shizl4dmo.s[9]++;
      return (0, _fsExtra.ensureDir)(dumpFolder + '/assets');
    }).then(function () {
      cov_shizl4dmo.f[5]++;
      cov_shizl4dmo.s[10]++;
      return (0, _fsExtra.ensureDir)(dumpFolder + '/deliverables');
    }).then(function () {
      cov_shizl4dmo.f[6]++;
      cov_shizl4dmo.s[11]++;
      return _assets.dal.getAssets({});
    })
    // get assets
    .then(function (assets) {
      cov_shizl4dmo.f[7]++;
      cov_shizl4dmo.s[12]++;

      data.assets = assets;
      // download assets attachments
      var attachments = (cov_shizl4dmo.s[13]++, assets.map(function (asset) {
        cov_shizl4dmo.f[8]++;
        cov_shizl4dmo.s[14]++;

        return new _promise2.default(function (resolve2, reject2) {
          cov_shizl4dmo.f[9]++;
          cov_shizl4dmo.s[15]++;

          _assets.dal.getAssetAttachment({
            id: asset._id,
            filename: asset.filename
          }).then(function (attachment) {
            cov_shizl4dmo.f[10]++;

            var path = (cov_shizl4dmo.s[16]++, dumpFolder + '/assets/' + asset.filename);
            cov_shizl4dmo.s[17]++;
            return (0, _fsExtra.writeFile)(path, attachment.data, 'binary');
          }).then(resolve2).catch(reject2);
        });
      }));
      cov_shizl4dmo.s[18]++;
      return _promise2.default.all(attachments);
    })
    // get other objects
    .then(function () {
      cov_shizl4dmo.f[11]++;
      cov_shizl4dmo.s[19]++;

      return _resources.dal.getResources({});
    }).then(function (resources) {
      cov_shizl4dmo.f[12]++;
      cov_shizl4dmo.s[20]++;

      data.resources = resources;
      cov_shizl4dmo.s[21]++;
      return _compositions.dal.getCompositions({});
    }).then(function (compositions) {
      cov_shizl4dmo.f[13]++;
      cov_shizl4dmo.s[22]++;

      data.compositions = compositions;
      cov_shizl4dmo.s[23]++;
      return _montages.dal.getMontages({});
    }).then(function (montages) {
      cov_shizl4dmo.f[14]++;
      cov_shizl4dmo.s[24]++;

      data.montages = montages;
      cov_shizl4dmo.s[25]++;
      return _diffusions.dal.getDiffusions({});
    }).then(function (diffusions) {
      cov_shizl4dmo.f[15]++;
      cov_shizl4dmo.s[26]++;

      data.diffusions = diffusions;
      cov_shizl4dmo.s[27]++;
      return _deliverables.dal.getDeliverables({});
    })
    // get deliverables
    .then(function (deliverables) {
      cov_shizl4dmo.f[16]++;
      cov_shizl4dmo.s[28]++;

      data.deliverables = deliverables;
      // download deliverables attachments
      var attachments = (cov_shizl4dmo.s[29]++, deliverables.map(function (deliverable) {
        cov_shizl4dmo.f[17]++;
        cov_shizl4dmo.s[30]++;

        return new _promise2.default(function (resolve2, reject2) {
          cov_shizl4dmo.f[18]++;
          cov_shizl4dmo.s[31]++;

          _deliverables.dal.getDeliverableAttachment({
            id: deliverable._id,
            filename: deliverable.filename
          }).then(function (attachment) {
            cov_shizl4dmo.f[19]++;

            var path = (cov_shizl4dmo.s[32]++, dumpFolder + '/deliverables/' + deliverable.filename);
            cov_shizl4dmo.s[33]++;
            return (0, _fsExtra.writeFile)(path, attachment.data, 'binary');
          }).then(resolve2).catch(reject2);
        });
      }));
      cov_shizl4dmo.s[34]++;
      return _promise2.default.all(attachments);
    })
    // write data
    .then(function () {
      cov_shizl4dmo.f[20]++;

      var dest = (cov_shizl4dmo.s[35]++, dumpFolder + '/data/data.json');
      cov_shizl4dmo.s[36]++;
      return (0, _fsExtra.writeFile)(dest, (0, _stringify2.default)(data), 'utf8');
    })
    // zip file
    .then(function () {
      cov_shizl4dmo.f[21]++;
      cov_shizl4dmo.s[37]++;

      return new _promise2.default(function (resolve2, reject2) {
        cov_shizl4dmo.f[22]++;

        var output = (cov_shizl4dmo.s[38]++, (0, _fs.createWriteStream)(zipDest));
        var archive = (cov_shizl4dmo.s[39]++, (0, _archiver2.default)('zip', {
          zlib: { level: 9 // Sets the compression level.
          } }));
        cov_shizl4dmo.s[40]++;
        output.on('close', function () {
          cov_shizl4dmo.f[23]++;
          cov_shizl4dmo.s[41]++;

          // console.log(archive.pointer() + ' total bytes');
          // console.log('archiver has been finalized and the output file descriptor has closed.');
          resolve2();
        });

        // This event is fired when the data source is drained no matter what was the data source.
        // It is not part of this library but rather from the NodeJS Stream API.
        // @see: https://nodejs.org/api/stream.html#stream_event_end
        cov_shizl4dmo.s[42]++;
        output.on('end', function () {
          cov_shizl4dmo.f[24]++;
          cov_shizl4dmo.s[43]++;

          resolve2();
        });

        // good practice to catch warnings (ie stat failures and other non-blocking errors)
        cov_shizl4dmo.s[44]++;
        archive.on('warning', function (err) {
          cov_shizl4dmo.f[25]++;
          cov_shizl4dmo.s[45]++;

          if (err.code === 'ENOENT') {
            // log warning

            cov_shizl4dmo.b[0][0]++;
          } else {
            cov_shizl4dmo.b[0][1]++;
            cov_shizl4dmo.s[46]++;

            // throw error
            reject2(err);
          }
        });

        // good practice to catch this error explicitly
        cov_shizl4dmo.s[47]++;
        archive.on('error', function (err) {
          cov_shizl4dmo.f[26]++;
          cov_shizl4dmo.s[48]++;

          reject2(err);
        });

        // pipe archive data to the file
        cov_shizl4dmo.s[49]++;
        archive.pipe(output);

        // add folder to archive
        cov_shizl4dmo.s[50]++;
        archive.directory(dumpFolder, false);
        cov_shizl4dmo.s[51]++;
        archive.finalize();
      });
    }).then(function () {
      cov_shizl4dmo.f[27]++;
      cov_shizl4dmo.s[52]++;

      return (0, _fsExtra.readFile)(zipDest);
    })
    // return zip
    .then(function (file) {
      cov_shizl4dmo.f[28]++;
      cov_shizl4dmo.s[53]++;

      return res.end(file, 'binary');
    }).then(resolve).catch(reject);
  });
};

cov_shizl4dmo.s[54]++;
var clearAllData = function clearAllData() {
  cov_shizl4dmo.f[29]++;
  cov_shizl4dmo.s[55]++;
  return _assets.dal.getAssets({}).then(function (assets) {
    cov_shizl4dmo.f[30]++;
    cov_shizl4dmo.s[56]++;
    return _promise2.default.all(assets.map(function (asset) {
      cov_shizl4dmo.f[31]++;
      cov_shizl4dmo.s[57]++;
      return _assets.dal.deleteAsset({ _id: asset._id });
    }));
  }).then(function () {
    cov_shizl4dmo.f[32]++;
    cov_shizl4dmo.s[58]++;
    return _resources.dal.getResources({});
  }).then(function (resources) {
    cov_shizl4dmo.f[33]++;
    cov_shizl4dmo.s[59]++;
    return _promise2.default.all(resources.map(function (resource) {
      cov_shizl4dmo.f[34]++;
      cov_shizl4dmo.s[60]++;
      return _resources.dal.deleteResource({ _id: resource._id });
    }));
  }).then(function () {
    cov_shizl4dmo.f[35]++;
    cov_shizl4dmo.s[61]++;
    return _compositions.dal.getCompositions({});
  }).then(function (compositions) {
    cov_shizl4dmo.f[36]++;
    cov_shizl4dmo.s[62]++;
    return _promise2.default.all(compositions.map(function (composition) {
      cov_shizl4dmo.f[37]++;
      cov_shizl4dmo.s[63]++;
      return _compositions.dal.deleteComposition({ _id: composition._id });
    }));
  }).then(function () {
    cov_shizl4dmo.f[38]++;
    cov_shizl4dmo.s[64]++;
    return _montages.dal.getMontages({});
  }).then(function (montages) {
    cov_shizl4dmo.f[39]++;
    cov_shizl4dmo.s[65]++;
    return _promise2.default.all(montages.map(function (montage) {
      cov_shizl4dmo.f[40]++;
      cov_shizl4dmo.s[66]++;
      return _montages.dal.deleteMontage({ _id: montage._id });
    }));
  }).then(function () {
    cov_shizl4dmo.f[41]++;
    cov_shizl4dmo.s[67]++;
    return _diffusions.dal.getDiffusions({});
  }).then(function (diffusions) {
    cov_shizl4dmo.f[42]++;
    cov_shizl4dmo.s[68]++;
    return _promise2.default.all(diffusions.map(function (diffusion) {
      cov_shizl4dmo.f[43]++;
      cov_shizl4dmo.s[69]++;
      return _diffusions.dal.deleteDiffusion({ _id: diffusion._id });
    }));
  }).then(function () {
    cov_shizl4dmo.f[44]++;
    cov_shizl4dmo.s[70]++;
    return _deliverables.dal.getDeliverables({});
  }).then(function (deliverables) {
    cov_shizl4dmo.f[45]++;
    cov_shizl4dmo.s[71]++;
    return _promise2.default.all(deliverables.map(function (deliverable) {
      cov_shizl4dmo.f[46]++;
      cov_shizl4dmo.s[72]++;
      return _deliverables.dal.deleteDeliverable({ _id: deliverable._id });
    }));
  });
};

cov_shizl4dmo.s[73]++;
var uploadData = exports.uploadData = function uploadData(req, res) {
  cov_shizl4dmo.f[47]++;
  cov_shizl4dmo.s[74]++;
  return (
    // remove dump folder as we are going to replace it
    (0, _fsExtra.remove)(dumpFolder)
    // clear all previous data
    .then(function () {
      cov_shizl4dmo.f[48]++;
      cov_shizl4dmo.s[75]++;
      return clearAllData();
    })
    // store the zip dump file in temp dir
    .then(function () {
      cov_shizl4dmo.f[49]++;
      cov_shizl4dmo.s[76]++;

      return new _promise2.default(function (resolve, reject) {
        cov_shizl4dmo.f[50]++;

        var form = (cov_shizl4dmo.s[77]++, new _formidable2.default.IncomingForm({
          uploadDir: tempFolder,
          // multiples : true,
          keepExtensions: true
        }));

        cov_shizl4dmo.s[78]++;
        form.on('error', function (err) {
          cov_shizl4dmo.f[51]++;
          cov_shizl4dmo.s[79]++;

          return reject(err);
        });

        cov_shizl4dmo.s[80]++;
        form.parse(req, function (err, fields, files) {
          cov_shizl4dmo.f[52]++;
          cov_shizl4dmo.s[81]++;

          if (err) {
            cov_shizl4dmo.b[1][0]++;
            cov_shizl4dmo.s[82]++;

            return reject(err);
          } else {
            cov_shizl4dmo.b[1][1]++;

            var attachmentPath = (cov_shizl4dmo.s[83]++, files.file.path);
            cov_shizl4dmo.s[84]++;
            return resolve(attachmentPath);
          }
        });
      });
    })
    // unzip file to dump folder
    .then(function (attachmentPath) {
      cov_shizl4dmo.f[53]++;
      cov_shizl4dmo.s[85]++;
      return (0, _fs.createReadStream)(attachmentPath).pipe(_unzipper2.default.Extract({ path: dumpFolder })).promise();
    })
    // load data
    .then(function () {
      cov_shizl4dmo.f[54]++;
      cov_shizl4dmo.s[86]++;
      return (0, _fsExtra.readFile)(dumpFolder + 'data/data.json', 'utf8');
    }).then(function (raw) {
      cov_shizl4dmo.f[55]++;
      cov_shizl4dmo.s[87]++;
      return new _promise2.default(function (resolve, reject) {
        cov_shizl4dmo.f[56]++;
        cov_shizl4dmo.s[88]++;

        try {
          var data = (cov_shizl4dmo.s[89]++, JSON.parse(raw));
          cov_shizl4dmo.s[90]++;
          resolve(data);
        } catch (e) {
          cov_shizl4dmo.s[91]++;

          reject(e);
        }
      });
    })
    // create all objects
    .then(function (data) {
      cov_shizl4dmo.f[57]++;
      cov_shizl4dmo.s[92]++;

      var cleanRev = function cleanRev(doc) {
        cov_shizl4dmo.f[58]++;
        cov_shizl4dmo.s[93]++;

        delete doc._rev;
        cov_shizl4dmo.s[94]++;
        if ((cov_shizl4dmo.b[3][0]++, doc.type === 'asset') || (cov_shizl4dmo.b[3][1]++, doc.type === 'deliverable')) {
          cov_shizl4dmo.b[2][0]++;
          cov_shizl4dmo.s[95]++;

          // delete attachment
          delete doc._attachments;
        } else {
          cov_shizl4dmo.b[2][1]++;
        }
        cov_shizl4dmo.s[96]++;
        return doc;
      };
      var operations = (cov_shizl4dmo.s[97]++, [].concat((0, _toConsumableArray3.default)(data.assets.map(function (asset) {
        cov_shizl4dmo.f[59]++;

        var fileName = (cov_shizl4dmo.s[98]++, asset.filename);
        var attachmentPath = (cov_shizl4dmo.s[99]++, dumpFolder + 'assets/' + fileName);
        cov_shizl4dmo.s[100]++;
        return (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
          cov_shizl4dmo.f[60]++;
          cov_shizl4dmo.s[101]++;
          return _assets.dal.createAsset(cleanRev(asset), data);
        });
      })), (0, _toConsumableArray3.default)(data.resources.map(function (resource) {
        cov_shizl4dmo.f[61]++;
        cov_shizl4dmo.s[102]++;
        return _resources.dal.createResource(cleanRev(resource));
      })), (0, _toConsumableArray3.default)(data.compositions.map(function (composition) {
        cov_shizl4dmo.f[62]++;
        cov_shizl4dmo.s[103]++;
        return _compositions.dal.createComposition(cleanRev(composition));
      })), (0, _toConsumableArray3.default)(data.montages.map(function (montage) {
        cov_shizl4dmo.f[63]++;
        cov_shizl4dmo.s[104]++;
        return _montages.dal.createMontage(cleanRev(montage));
      })), (0, _toConsumableArray3.default)(data.diffusions.map(function (diffusion) {
        cov_shizl4dmo.f[64]++;
        cov_shizl4dmo.s[105]++;
        return _diffusions.dal.createDiffusion(cleanRev(diffusion));
      })), (0, _toConsumableArray3.default)(data.deliverables.map(function (deliverable) {
        cov_shizl4dmo.f[65]++;

        var fileName = (cov_shizl4dmo.s[106]++, deliverable.filename);
        var attachmentPath = (cov_shizl4dmo.s[107]++, dumpFolder + 'deliverables/' + fileName);
        cov_shizl4dmo.s[108]++;
        return (0, _fsExtra.readFile)(attachmentPath).then(function (data) {
          cov_shizl4dmo.f[66]++;
          cov_shizl4dmo.s[109]++;
          return _deliverables.dal.createDeliverable(cleanRev(deliverable), data);
        });
      }))));

      cov_shizl4dmo.s[110]++;
      return _promise2.default.all(operations);
    }).then(function () {
      cov_shizl4dmo.f[67]++;
      cov_shizl4dmo.s[111]++;
      return res.json({ status: 'ok' });
    }).catch(function (e) {
      cov_shizl4dmo.f[68]++;
      cov_shizl4dmo.s[112]++;

      res.status(500).send(e);
    })
  );
};

cov_shizl4dmo.s[113]++;
var deleteAllData = exports.deleteAllData = function deleteAllData(req, res) {
  cov_shizl4dmo.f[69]++;
  cov_shizl4dmo.s[114]++;
  return clearAllData().then(function () {
    cov_shizl4dmo.f[70]++;
    cov_shizl4dmo.s[115]++;

    return res.json({ status: 'ok' });
  }).catch(function (e) {
    cov_shizl4dmo.f[71]++;
    cov_shizl4dmo.s[116]++;
    return res.status(500).send(e);
  });
};