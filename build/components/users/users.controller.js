'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeUserPassword = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_xhh33vcol = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/users/users.controller.js',
      hash = '6c364d19bf3de4c06c98fdb47ab40cdc0dcc1be8',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/users/users.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 22,
          column: 15
        },
        end: {
          line: 22,
          column: 26
        }
      },
      '1': {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 10
        }
      },
      '2': {
        start: {
          line: 33,
          column: 19
        },
        end: {
          line: 39,
          column: 1
        }
      },
      '3': {
        start: {
          line: 41,
          column: 22
        },
        end: {
          line: 41,
          column: 96
        }
      },
      '4': {
        start: {
          line: 41,
          column: 29
        },
        end: {
          line: 41,
          column: 96
        }
      },
      '5': {
        start: {
          line: 48,
          column: 20
        },
        end: {
          line: 61,
          column: 4
        }
      },
      '6': {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 61,
          column: 4
        }
      },
      '7': {
        start: {
          line: 50,
          column: 18
        },
        end: {
          line: 50,
          column: 36
        }
      },
      '8': {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 60,
          column: 7
        }
      },
      '9': {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 59,
          column: 7
        }
      },
      '10': {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 20
        }
      },
      '11': {
        start: {
          line: 55,
          column: 13
        },
        end: {
          line: 59,
          column: 7
        }
      },
      '12': {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 56,
          column: 18
        }
      },
      '13': {
        start: {
          line: 58,
          column: 8
        },
        end: {
          line: 58,
          column: 17
        }
      },
      '14': {
        start: {
          line: 68,
          column: 25
        },
        end: {
          line: 83,
          column: 4
        }
      },
      '15': {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 83,
          column: 4
        }
      },
      '16': {
        start: {
          line: 70,
          column: 18
        },
        end: {
          line: 70,
          column: 36
        }
      },
      '17': {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 82,
          column: 7
        }
      },
      '18': {
        start: {
          line: 73,
          column: 20
        },
        end: {
          line: 73,
          column: 33
        }
      },
      '19': {
        start: {
          line: 74,
          column: 18
        },
        end: {
          line: 74,
          column: 50
        }
      },
      '20': {
        start: {
          line: 75,
          column: 6
        },
        end: {
          line: 81,
          column: 7
        }
      },
      '21': {
        start: {
          line: 76,
          column: 8
        },
        end: {
          line: 76,
          column: 20
        }
      },
      '22': {
        start: {
          line: 77,
          column: 13
        },
        end: {
          line: 81,
          column: 7
        }
      },
      '23': {
        start: {
          line: 78,
          column: 8
        },
        end: {
          line: 78,
          column: 18
        }
      },
      '24': {
        start: {
          line: 80,
          column: 8
        },
        end: {
          line: 80,
          column: 17
        }
      },
      '25': {
        start: {
          line: 91,
          column: 24
        },
        end: {
          line: 96,
          column: 73
        }
      },
      '26': {
        start: {
          line: 92,
          column: 2
        },
        end: {
          line: 96,
          column: 73
        }
      },
      '27': {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 33
        }
      },
      '28': {
        start: {
          line: 96,
          column: 20
        },
        end: {
          line: 96,
          column: 72
        }
      },
      '29': {
        start: {
          line: 103,
          column: 23
        },
        end: {
          line: 112,
          column: 5
        }
      },
      '30': {
        start: {
          line: 104,
          column: 2
        },
        end: {
          line: 112,
          column: 5
        }
      },
      '31': {
        start: {
          line: 105,
          column: 20
        },
        end: {
          line: 105,
          column: 72
        }
      },
      '32': {
        start: {
          line: 107,
          column: 6
        },
        end: {
          line: 111,
          column: 7
        }
      },
      '33': {
        start: {
          line: 119,
          column: 26
        },
        end: {
          line: 162,
          column: 6
        }
      },
      '34': {
        start: {
          line: 120,
          column: 2
        },
        end: {
          line: 162,
          column: 6
        }
      },
      '35': {
        start: {
          line: 121,
          column: 20
        },
        end: {
          line: 121,
          column: 72
        }
      },
      '36': {
        start: {
          line: 124,
          column: 6
        },
        end: {
          line: 124,
          column: 51
        }
      },
      '37': {
        start: {
          line: 127,
          column: 6
        },
        end: {
          line: 135,
          column: 7
        }
      },
      '38': {
        start: {
          line: 128,
          column: 8
        },
        end: {
          line: 128,
          column: 71
        }
      },
      '39': {
        start: {
          line: 131,
          column: 8
        },
        end: {
          line: 134,
          column: 11
        }
      },
      '40': {
        start: {
          line: 137,
          column: 20
        },
        end: {
          line: 137,
          column: 36
        }
      },
      '41': {
        start: {
          line: 140,
          column: 20
        },
        end: {
          line: 143,
          column: 7
        }
      },
      '42': {
        start: {
          line: 144,
          column: 18
        },
        end: {
          line: 146,
          column: 8
        }
      },
      '43': {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 147,
          column: 38
        }
      },
      '44': {
        start: {
          line: 148,
          column: 6
        },
        end: {
          line: 148,
          column: 43
        }
      },
      '45': {
        start: {
          line: 150,
          column: 20
        },
        end: {
          line: 150,
          column: 36
        }
      },
      '46': {
        start: {
          line: 152,
          column: 21
        },
        end: {
          line: 152,
          column: 38
        }
      },
      '47': {
        start: {
          line: 153,
          column: 30
        },
        end: {
          line: 153,
          column: 56
        }
      },
      '48': {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 158,
          column: 30
        }
      },
      '49': {
        start: {
          line: 161,
          column: 6
        },
        end: {
          line: 161,
          column: 32
        }
      },
      '50': {
        start: {
          line: 169,
          column: 26
        },
        end: {
          line: 179,
          column: 5
        }
      },
      '51': {
        start: {
          line: 170,
          column: 2
        },
        end: {
          line: 179,
          column: 5
        }
      },
      '52': {
        start: {
          line: 171,
          column: 20
        },
        end: {
          line: 171,
          column: 72
        }
      },
      '53': {
        start: {
          line: 173,
          column: 6
        },
        end: {
          line: 178,
          column: 7
        }
      },
      '54': {
        start: {
          line: 186,
          column: 26
        },
        end: {
          line: 191,
          column: 5
        }
      },
      '55': {
        start: {
          line: 187,
          column: 2
        },
        end: {
          line: 191,
          column: 5
        }
      },
      '56': {
        start: {
          line: 188,
          column: 20
        },
        end: {
          line: 188,
          column: 72
        }
      },
      '57': {
        start: {
          line: 190,
          column: 6
        },
        end: {
          line: 190,
          column: 51
        }
      },
      '58': {
        start: {
          line: 198,
          column: 34
        },
        end: {
          line: 233,
          column: 1
        }
      },
      '59': {
        start: {
          line: 199,
          column: 26
        },
        end: {
          line: 199,
          column: 34
        }
      },
      '60': {
        start: {
          line: 200,
          column: 16
        },
        end: {
          line: 200,
          column: 34
        }
      },
      '61': {
        start: {
          line: 202,
          column: 2
        },
        end: {
          line: 232,
          column: 5
        }
      },
      '62': {
        start: {
          line: 203,
          column: 4
        },
        end: {
          line: 231,
          column: 5
        }
      },
      '63': {
        start: {
          line: 204,
          column: 6
        },
        end: {
          line: 204,
          column: 67
        }
      },
      '64': {
        start: {
          line: 205,
          column: 11
        },
        end: {
          line: 231,
          column: 5
        }
      },
      '65': {
        start: {
          line: 206,
          column: 6
        },
        end: {
          line: 228,
          column: 88
        }
      },
      '66': {
        start: {
          line: 208,
          column: 10
        },
        end: {
          line: 217,
          column: 11
        }
      },
      '67': {
        start: {
          line: 219,
          column: 12
        },
        end: {
          line: 219,
          column: 42
        }
      },
      '68': {
        start: {
          line: 222,
          column: 12
        },
        end: {
          line: 226,
          column: 13
        }
      },
      '69': {
        start: {
          line: 223,
          column: 14
        },
        end: {
          line: 223,
          column: 29
        }
      },
      '70': {
        start: {
          line: 225,
          column: 14
        },
        end: {
          line: 225,
          column: 64
        }
      },
      '71': {
        start: {
          line: 228,
          column: 24
        },
        end: {
          line: 228,
          column: 86
        }
      },
      '72': {
        start: {
          line: 230,
          column: 6
        },
        end: {
          line: 230,
          column: 88
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 41,
            column: 22
          },
          end: {
            line: 41,
            column: 23
          }
        },
        loc: {
          start: {
            line: 41,
            column: 29
          },
          end: {
            line: 41,
            column: 96
          }
        },
        line: 41
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 48,
            column: 20
          },
          end: {
            line: 48,
            column: 21
          }
        },
        loc: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 61,
            column: 4
          }
        },
        line: 49
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 49,
            column: 14
          },
          end: {
            line: 49,
            column: 15
          }
        },
        loc: {
          start: {
            line: 49,
            column: 35
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 49
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 52,
            column: 30
          },
          end: {
            line: 52,
            column: 31
          }
        },
        loc: {
          start: {
            line: 52,
            column: 54
          },
          end: {
            line: 60,
            column: 5
          }
        },
        line: 52
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 68,
            column: 25
          },
          end: {
            line: 68,
            column: 26
          }
        },
        loc: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 83,
            column: 4
          }
        },
        line: 69
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 69,
            column: 14
          },
          end: {
            line: 69,
            column: 15
          }
        },
        loc: {
          start: {
            line: 69,
            column: 35
          },
          end: {
            line: 83,
            column: 3
          }
        },
        line: 69
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 72,
            column: 30
          },
          end: {
            line: 72,
            column: 31
          }
        },
        loc: {
          start: {
            line: 72,
            column: 54
          },
          end: {
            line: 82,
            column: 5
          }
        },
        line: 72
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 91,
            column: 24
          },
          end: {
            line: 91,
            column: 25
          }
        },
        loc: {
          start: {
            line: 92,
            column: 2
          },
          end: {
            line: 96,
            column: 73
          }
        },
        line: 92
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 93,
            column: 10
          },
          end: {
            line: 93,
            column: 11
          }
        },
        loc: {
          start: {
            line: 94,
            column: 8
          },
          end: {
            line: 94,
            column: 33
          }
        },
        line: 94
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 96,
            column: 11
          },
          end: {
            line: 96,
            column: 12
          }
        },
        loc: {
          start: {
            line: 96,
            column: 20
          },
          end: {
            line: 96,
            column: 72
          }
        },
        line: 96
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 103,
            column: 23
          },
          end: {
            line: 103,
            column: 24
          }
        },
        loc: {
          start: {
            line: 104,
            column: 2
          },
          end: {
            line: 112,
            column: 5
          }
        },
        line: 104
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 105,
            column: 11
          },
          end: {
            line: 105,
            column: 12
          }
        },
        loc: {
          start: {
            line: 105,
            column: 20
          },
          end: {
            line: 105,
            column: 72
          }
        },
        line: 105
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 106,
            column: 10
          },
          end: {
            line: 106,
            column: 11
          }
        },
        loc: {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 111,
            column: 7
          }
        },
        line: 107
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 119,
            column: 26
          },
          end: {
            line: 119,
            column: 27
          }
        },
        loc: {
          start: {
            line: 120,
            column: 2
          },
          end: {
            line: 162,
            column: 6
          }
        },
        line: 120
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 121,
            column: 11
          },
          end: {
            line: 121,
            column: 12
          }
        },
        loc: {
          start: {
            line: 121,
            column: 20
          },
          end: {
            line: 121,
            column: 72
          }
        },
        line: 121
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 123,
            column: 10
          },
          end: {
            line: 123,
            column: 11
          }
        },
        loc: {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 124,
            column: 51
          }
        },
        line: 124
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 126,
            column: 10
          },
          end: {
            line: 126,
            column: 11
          }
        },
        loc: {
          start: {
            line: 126,
            column: 19
          },
          end: {
            line: 136,
            column: 5
          }
        },
        line: 126
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 137,
            column: 10
          },
          end: {
            line: 137,
            column: 11
          }
        },
        loc: {
          start: {
            line: 137,
            column: 20
          },
          end: {
            line: 137,
            column: 36
          }
        },
        line: 137
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 138,
            column: 10
          },
          end: {
            line: 138,
            column: 11
          }
        },
        loc: {
          start: {
            line: 138,
            column: 18
          },
          end: {
            line: 149,
            column: 5
          }
        },
        line: 138
      },
      '19': {
        name: '(anonymous_19)',
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
            column: 20
          },
          end: {
            line: 150,
            column: 36
          }
        },
        line: 150
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 151,
            column: 10
          },
          end: {
            line: 151,
            column: 11
          }
        },
        loc: {
          start: {
            line: 151,
            column: 18
          },
          end: {
            line: 159,
            column: 5
          }
        },
        line: 151
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 160,
            column: 10
          },
          end: {
            line: 160,
            column: 11
          }
        },
        loc: {
          start: {
            line: 160,
            column: 16
          },
          end: {
            line: 162,
            column: 5
          }
        },
        line: 160
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 169,
            column: 26
          },
          end: {
            line: 169,
            column: 27
          }
        },
        loc: {
          start: {
            line: 170,
            column: 2
          },
          end: {
            line: 179,
            column: 5
          }
        },
        line: 170
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 171,
            column: 11
          },
          end: {
            line: 171,
            column: 12
          }
        },
        loc: {
          start: {
            line: 171,
            column: 20
          },
          end: {
            line: 171,
            column: 72
          }
        },
        line: 171
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 172,
            column: 10
          },
          end: {
            line: 172,
            column: 11
          }
        },
        loc: {
          start: {
            line: 173,
            column: 6
          },
          end: {
            line: 178,
            column: 7
          }
        },
        line: 173
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 186,
            column: 26
          },
          end: {
            line: 186,
            column: 27
          }
        },
        loc: {
          start: {
            line: 187,
            column: 2
          },
          end: {
            line: 191,
            column: 5
          }
        },
        line: 187
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 188,
            column: 11
          },
          end: {
            line: 188,
            column: 12
          }
        },
        loc: {
          start: {
            line: 188,
            column: 20
          },
          end: {
            line: 188,
            column: 72
          }
        },
        line: 188
      },
      '27': {
        name: '(anonymous_27)',
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
            line: 190,
            column: 6
          },
          end: {
            line: 190,
            column: 51
          }
        },
        line: 190
      },
      '28': {
        name: '(anonymous_28)',
        decl: {
          start: {
            line: 198,
            column: 34
          },
          end: {
            line: 198,
            column: 35
          }
        },
        loc: {
          start: {
            line: 198,
            column: 48
          },
          end: {
            line: 233,
            column: 1
          }
        },
        line: 198
      },
      '29': {
        name: '(anonymous_29)',
        decl: {
          start: {
            line: 202,
            column: 28
          },
          end: {
            line: 202,
            column: 29
          }
        },
        loc: {
          start: {
            line: 202,
            column: 52
          },
          end: {
            line: 232,
            column: 3
          }
        },
        line: 202
      },
      '30': {
        name: '(anonymous_30)',
        decl: {
          start: {
            line: 207,
            column: 14
          },
          end: {
            line: 207,
            column: 15
          }
        },
        loc: {
          start: {
            line: 208,
            column: 10
          },
          end: {
            line: 217,
            column: 11
          }
        },
        line: 208
      },
      '31': {
        name: '(anonymous_31)',
        decl: {
          start: {
            line: 218,
            column: 16
          },
          end: {
            line: 218,
            column: 17
          }
        },
        loc: {
          start: {
            line: 219,
            column: 12
          },
          end: {
            line: 219,
            column: 42
          }
        },
        line: 219
      },
      '32': {
        name: '(anonymous_32)',
        decl: {
          start: {
            line: 221,
            column: 16
          },
          end: {
            line: 221,
            column: 17
          }
        },
        loc: {
          start: {
            line: 221,
            column: 24
          },
          end: {
            line: 227,
            column: 11
          }
        },
        line: 221
      },
      '33': {
        name: '(anonymous_33)',
        decl: {
          start: {
            line: 228,
            column: 15
          },
          end: {
            line: 228,
            column: 16
          }
        },
        loc: {
          start: {
            line: 228,
            column: 24
          },
          end: {
            line: 228,
            column: 86
          }
        },
        line: 228
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 41,
            column: 29
          },
          end: {
            line: 41,
            column: 96
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 41,
            column: 29
          },
          end: {
            line: 41,
            column: 43
          }
        }, {
          start: {
            line: 41,
            column: 47
          },
          end: {
            line: 41,
            column: 63
          }
        }, {
          start: {
            line: 41,
            column: 67
          },
          end: {
            line: 41,
            column: 96
          }
        }],
        line: 41
      },
      '1': {
        loc: {
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 59,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 59,
            column: 7
          }
        }, {
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 59,
            column: 7
          }
        }],
        line: 53
      },
      '2': {
        loc: {
          start: {
            line: 55,
            column: 13
          },
          end: {
            line: 59,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 55,
            column: 13
          },
          end: {
            line: 59,
            column: 7
          }
        }, {
          start: {
            line: 55,
            column: 13
          },
          end: {
            line: 59,
            column: 7
          }
        }],
        line: 55
      },
      '3': {
        loc: {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 81,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 81,
            column: 7
          }
        }, {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 81,
            column: 7
          }
        }],
        line: 75
      },
      '4': {
        loc: {
          start: {
            line: 77,
            column: 13
          },
          end: {
            line: 81,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 77,
            column: 13
          },
          end: {
            line: 81,
            column: 7
          }
        }, {
          start: {
            line: 77,
            column: 13
          },
          end: {
            line: 81,
            column: 7
          }
        }],
        line: 77
      },
      '5': {
        loc: {
          start: {
            line: 77,
            column: 17
          },
          end: {
            line: 77,
            column: 29
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 77,
            column: 17
          },
          end: {
            line: 77,
            column: 22
          }
        }, {
          start: {
            line: 77,
            column: 26
          },
          end: {
            line: 77,
            column: 29
          }
        }],
        line: 77
      },
      '6': {
        loc: {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        }, {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        }],
        line: 127
      },
      '7': {
        loc: {
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        }, {
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 231,
            column: 5
          }
        }],
        line: 203
      },
      '8': {
        loc: {
          start: {
            line: 205,
            column: 11
          },
          end: {
            line: 231,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 205,
            column: 11
          },
          end: {
            line: 231,
            column: 5
          }
        }, {
          start: {
            line: 205,
            column: 11
          },
          end: {
            line: 231,
            column: 5
          }
        }],
        line: 205
      },
      '9': {
        loc: {
          start: {
            line: 222,
            column: 12
          },
          end: {
            line: 226,
            column: 13
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 222,
            column: 12
          },
          end: {
            line: 226,
            column: 13
          }
        }, {
          start: {
            line: 222,
            column: 12
          },
          end: {
            line: 226,
            column: 13
          }
        }],
        line: 222
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
      '72': 0
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
      '33': 0
    },
    b: {
      '0': [0, 0, 0],
      '1': [0, 0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0],
      '8': [0, 0],
      '9': [0, 0]
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
      * for the users component.
      * @module metis-backend/components/users
      */

// used to create, sign, and verify tokens

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _crypto = require('../../utils/crypto');

var _mailer = require('../../utils/mailer');

var _mailer2 = _interopRequireDefault(_mailer);

var _emails = require('../../utils/emails');

var _users = require('./users.dal');

var _config = require('../../utils/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (cov_xhh33vcol.s[0]++, (0, _config.getConfig)());

var _ref = (cov_xhh33vcol.s[1]++, config),
    smtpEmail = _ref.smtpEmail,
    smtpService = _ref.smtpService,
    smtpPassword = _ref.smtpPassword,
    secret = _ref.secret,
    backofficeBaseUri = _ref.backofficeBaseUri;

var mailConfig = (cov_xhh33vcol.s[2]++, {
  // smtpPort,
  // smtpHost,
  smtpEmail: smtpEmail,
  smtpService: smtpService,
  smtpPassword: smtpPassword
});

cov_xhh33vcol.s[3]++;
var retrieveToken = function retrieveToken(req) {
  cov_xhh33vcol.f[0]++;
  cov_xhh33vcol.s[4]++;
  return (cov_xhh33vcol.b[0][0]++, req.body.token) || (cov_xhh33vcol.b[0][1]++, req.params.token) || (cov_xhh33vcol.b[0][2]++, req.headers['x-access-token']);
};

/**
 * Verifies req is performed by an admin user by inspecting auth token
 * @param {object} req - the request of query
 * @return {Promise} res - resolves if token bearer is an admin
 */
cov_xhh33vcol.s[5]++;
var ensureAdmin = function ensureAdmin(req) {
  cov_xhh33vcol.f[1]++;
  cov_xhh33vcol.s[6]++;
  return new _promise2.default(function (resolve, reject) {
    cov_xhh33vcol.f[2]++;

    var token = (cov_xhh33vcol.s[7]++, retrieveToken(req));
    // verify that the token data corresponds to the user willing to change the password
    cov_xhh33vcol.s[8]++;
    _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
      cov_xhh33vcol.f[3]++;
      cov_xhh33vcol.s[9]++;

      if (err) {
        cov_xhh33vcol.b[1][0]++;
        cov_xhh33vcol.s[10]++;

        reject(err);
      } else {
          cov_xhh33vcol.b[1][1]++;
          cov_xhh33vcol.s[11]++;
          if (decoded.admin) {
            cov_xhh33vcol.b[2][0]++;
            cov_xhh33vcol.s[12]++;

            resolve();
          } else {
            cov_xhh33vcol.b[2][1]++;
            cov_xhh33vcol.s[13]++;

            reject();
          }
        }
    });
  });
};

/**
 * Verifies req is performed by an admin user or by the user corresponding to id param by inspecting auth token
 * @param {object} req - the request of query
 * @return {Promise} res - resolves if token bearer is an admin or the own user
 */
cov_xhh33vcol.s[14]++;
var ensureAdminOrOwn = function ensureAdminOrOwn(req) {
  cov_xhh33vcol.f[4]++;
  cov_xhh33vcol.s[15]++;
  return new _promise2.default(function (resolve, reject) {
    cov_xhh33vcol.f[5]++;

    var token = (cov_xhh33vcol.s[16]++, retrieveToken(req));
    // verify that the token data corresponds to the user willing to change the password
    cov_xhh33vcol.s[17]++;
    _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
      cov_xhh33vcol.f[6]++;

      var admin = (cov_xhh33vcol.s[18]++, decoded.admin);
      var own = (cov_xhh33vcol.s[19]++, decoded.userid === req.params.id);
      cov_xhh33vcol.s[20]++;
      if (err) {
        cov_xhh33vcol.b[3][0]++;
        cov_xhh33vcol.s[21]++;

        reject(err);
      } else {
          cov_xhh33vcol.b[3][1]++;
          cov_xhh33vcol.s[22]++;
          if ((cov_xhh33vcol.b[5][0]++, admin) || (cov_xhh33vcol.b[5][1]++, own)) {
            cov_xhh33vcol.b[4][0]++;
            cov_xhh33vcol.s[23]++;

            resolve();
          } else {
            cov_xhh33vcol.b[4][1]++;
            cov_xhh33vcol.s[24]++;

            reject();
          }
        }
    });
  });
};

/**
 * Get a list of users
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
cov_xhh33vcol.s[25]++;
var getUsers = exports.getUsers = function getUsers(req, res) {
  cov_xhh33vcol.f[7]++;
  cov_xhh33vcol.s[26]++;
  return ensureAdmin(req).then(function () {
    cov_xhh33vcol.f[8]++;
    cov_xhh33vcol.s[27]++;
    return res.json((0, _users.getUsers)({}));
  }).catch(function (error) {
    cov_xhh33vcol.f[9]++;
    cov_xhh33vcol.s[28]++;
    return res.status(403).json({ message: 'admin only', error: error });
  });
};

/**
 * Get a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_xhh33vcol.s[29]++;
var getUser = exports.getUser = function getUser(req, res) {
  cov_xhh33vcol.f[10]++;
  cov_xhh33vcol.s[30]++;
  return ensureAdminOrOwn(req).catch(function (error) {
    cov_xhh33vcol.f[11]++;
    cov_xhh33vcol.s[31]++;
    return res.status(403).json({ message: 'admin only', error: error });
  }).then(function () {
    cov_xhh33vcol.f[12]++;
    cov_xhh33vcol.s[32]++;
    return res.json((0, _users.getUser)({
      id: req.params.id
    }));
  });
};

/**
 * Create a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_xhh33vcol.s[33]++;
var createUser = exports.createUser = function createUser(req, res) {
  cov_xhh33vcol.f[13]++;
  cov_xhh33vcol.s[34]++;
  return ensureAdmin(req).catch(function (error) {
    cov_xhh33vcol.f[14]++;
    cov_xhh33vcol.s[35]++;
    return res.status(403).json({ message: 'admin only', error: error });
  })
  // ensure user does not already exists
  .then(function () {
    cov_xhh33vcol.f[15]++;
    cov_xhh33vcol.s[36]++;
    return (0, _users.getUsers)({ query: { email: req.body.email } });
  }).then(function (users) {
    cov_xhh33vcol.f[16]++;
    cov_xhh33vcol.s[37]++;

    if (users.length) {
      cov_xhh33vcol.b[6][0]++;
      cov_xhh33vcol.s[38]++;

      return res.status(403).json({ message: 'email already exists' });
    } else {
      cov_xhh33vcol.b[6][1]++;
      cov_xhh33vcol.s[39]++;

      // create user
      return (0, _users.createUser)((0, _extends3.default)({}, req.body, {
        type: 'user'
      }));
    }
  }).then(function (_ref2) {
    var id = _ref2.id;
    cov_xhh33vcol.f[17]++;
    cov_xhh33vcol.s[40]++;
    return (0, _users.getUser)({ id: id });
  }).then(function (user) {
    cov_xhh33vcol.f[18]++;

    // create a token
    var payload = (cov_xhh33vcol.s[41]++, {
      admin: user.admin,
      userid: user._id
    });
    var token = (cov_xhh33vcol.s[42]++, _jsonwebtoken2.default.sign(payload, secret, {
      expiresIn: 86400 // expires in 24 hours
    }));
    cov_xhh33vcol.s[43]++;
    user.resetPasswordToken = token;
    cov_xhh33vcol.s[44]++;
    return (0, _users.updateUser)(user._id, user);
  }).then(function (_ref3) {
    var id = _ref3.id;
    cov_xhh33vcol.f[19]++;
    cov_xhh33vcol.s[45]++;
    return (0, _users.getUser)({ id: id });
  }).then(function (user) {
    cov_xhh33vcol.f[20]++;

    var appUrl = (cov_xhh33vcol.s[46]++, backofficeBaseUri);

    var _ref4 = (cov_xhh33vcol.s[47]++, (0, _emails.welcomeEmail)(appUrl, user)),
        subject = _ref4.subject,
        html = _ref4.html;

    cov_xhh33vcol.s[48]++;

    return (0, _mailer2.default)({
      subject: subject,
      html: html,
      to: [user.email]
    }, mailConfig, req.log);
  }).then(function () {
    cov_xhh33vcol.f[21]++;
    cov_xhh33vcol.s[49]++;

    res.json((0, _users.getUsers)({}));
  });
};

/**
 * Update a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_xhh33vcol.s[50]++;
var updateUser = exports.updateUser = function updateUser(req, res) {
  cov_xhh33vcol.f[22]++;
  cov_xhh33vcol.s[51]++;
  return ensureAdminOrOwn(req).catch(function (error) {
    cov_xhh33vcol.f[23]++;
    cov_xhh33vcol.s[52]++;
    return res.status(403).json({ message: 'admin only', error: error });
  }).then(function () {
    cov_xhh33vcol.f[24]++;
    cov_xhh33vcol.s[53]++;
    return res.json((0, _users.updateUser)(req.params.id, req.body // for now we perform a full replace (vs merge with $set)
    ));
  });
};

/**
 * Delete a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_xhh33vcol.s[54]++;
var deleteUser = exports.deleteUser = function deleteUser(req, res) {
  cov_xhh33vcol.f[25]++;
  cov_xhh33vcol.s[55]++;
  return ensureAdmin(req).catch(function (error) {
    cov_xhh33vcol.f[26]++;
    cov_xhh33vcol.s[56]++;
    return res.status(403).json({ message: 'admin only', error: error });
  }).then(function () {
    cov_xhh33vcol.f[27]++;
    cov_xhh33vcol.s[57]++;
    return res.json((0, _users.deleteUser)({ _id: req.params.id }));
  });
};

/**
 * Handles password reset (only own user can do that, not even admin)
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_xhh33vcol.s[58]++;
var changeUserPassword = exports.changeUserPassword = function changeUserPassword(req, res) {
  cov_xhh33vcol.f[28]++;

  var _ref5 = (cov_xhh33vcol.s[59]++, req.body),
      _id = _ref5._id,
      password = _ref5.password;

  var token = (cov_xhh33vcol.s[60]++, retrieveToken(req));
  // verify that the token data corresponds to the user willing to change the password
  cov_xhh33vcol.s[61]++;
  _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
    cov_xhh33vcol.f[29]++;
    cov_xhh33vcol.s[62]++;

    if (err) {
      cov_xhh33vcol.b[7][0]++;
      cov_xhh33vcol.s[63]++;

      res.status(422).json({ message: 'Invalid token', error: err });
    } else {
        cov_xhh33vcol.b[7][1]++;
        cov_xhh33vcol.s[64]++;
        if (decoded.userid === _id) {
          cov_xhh33vcol.b[8][0]++;
          cov_xhh33vcol.s[65]++;

          (0, _crypto.hash)(password).then(function (hash) {
            cov_xhh33vcol.f[30]++;
            cov_xhh33vcol.s[66]++;
            return (0, _users.updateUser)(
            // get
            _id,
            // set
            (0, _extends3.default)({}, req.body, {
              password: hash,
              resetPasswordToken: undefined
            }));
          }).then(function () {
            cov_xhh33vcol.f[31]++;
            cov_xhh33vcol.s[67]++;
            return (0, _users.getUser)({ query: { id: _id } });
          }).then(function (user) {
            cov_xhh33vcol.f[32]++;
            cov_xhh33vcol.s[68]++;

            if (user) {
              cov_xhh33vcol.b[9][0]++;
              cov_xhh33vcol.s[69]++;

              res.json(user);
            } else {
              cov_xhh33vcol.b[9][1]++;
              cov_xhh33vcol.s[70]++;

              res.status(404).json({ message: 'user not found' });
            }
          }).catch(function (error) {
            cov_xhh33vcol.f[33]++;
            cov_xhh33vcol.s[71]++;
            return res.status(500).json({ message: 'error with database.', error: error });
          });
        } else {
          cov_xhh33vcol.b[8][1]++;
          cov_xhh33vcol.s[72]++;

          res.status(403).json({ message: 'not allowed to modify password of another user' });
        }
      }
  });
};