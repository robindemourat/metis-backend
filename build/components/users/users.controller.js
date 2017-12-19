'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeUserPassword = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_1wqgru2aqo = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/users.controller.js',
      hash = 'ce4cf5ab9f3c76c872cfaff91bbb412b0364deb2',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/users.controller.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 15
        },
        end: {
          line: 21,
          column: 26
        }
      },
      '1': {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 10
        }
      },
      '2': {
        start: {
          line: 32,
          column: 19
        },
        end: {
          line: 38,
          column: 1
        }
      },
      '3': {
        start: {
          line: 40,
          column: 22
        },
        end: {
          line: 40,
          column: 96
        }
      },
      '4': {
        start: {
          line: 40,
          column: 29
        },
        end: {
          line: 40,
          column: 96
        }
      },
      '5': {
        start: {
          line: 47,
          column: 20
        },
        end: {
          line: 61,
          column: 4
        }
      },
      '6': {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 61,
          column: 4
        }
      },
      '7': {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 21
        }
      },
      '8': {
        start: {
          line: 50,
          column: 18
        },
        end: {
          line: 50,
          column: 36
        }
      },
      '9': {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 60,
          column: 7
        }
      },
      '10': {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 59,
          column: 7
        }
      },
      '11': {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 20
        }
      },
      '12': {
        start: {
          line: 55,
          column: 13
        },
        end: {
          line: 59,
          column: 7
        }
      },
      '13': {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 56,
          column: 18
        }
      },
      '14': {
        start: {
          line: 58,
          column: 8
        },
        end: {
          line: 58,
          column: 17
        }
      },
      '15': {
        start: {
          line: 68,
          column: 25
        },
        end: {
          line: 84,
          column: 4
        }
      },
      '16': {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 84,
          column: 4
        }
      },
      '17': {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 21
        }
      },
      '18': {
        start: {
          line: 71,
          column: 18
        },
        end: {
          line: 71,
          column: 36
        }
      },
      '19': {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 83,
          column: 7
        }
      },
      '20': {
        start: {
          line: 74,
          column: 20
        },
        end: {
          line: 74,
          column: 33
        }
      },
      '21': {
        start: {
          line: 75,
          column: 18
        },
        end: {
          line: 75,
          column: 50
        }
      },
      '22': {
        start: {
          line: 76,
          column: 6
        },
        end: {
          line: 82,
          column: 7
        }
      },
      '23': {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 20
        }
      },
      '24': {
        start: {
          line: 78,
          column: 13
        },
        end: {
          line: 82,
          column: 7
        }
      },
      '25': {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 18
        }
      },
      '26': {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 81,
          column: 17
        }
      },
      '27': {
        start: {
          line: 92,
          column: 24
        },
        end: {
          line: 97,
          column: 73
        }
      },
      '28': {
        start: {
          line: 93,
          column: 2
        },
        end: {
          line: 97,
          column: 73
        }
      },
      '29': {
        start: {
          line: 95,
          column: 8
        },
        end: {
          line: 95,
          column: 31
        }
      },
      '30': {
        start: {
          line: 97,
          column: 20
        },
        end: {
          line: 97,
          column: 72
        }
      },
      '31': {
        start: {
          line: 104,
          column: 23
        },
        end: {
          line: 105,
          column: 37
        }
      },
      '32': {
        start: {
          line: 105,
          column: 2
        },
        end: {
          line: 105,
          column: 37
        }
      },
      '33': {
        start: {
          line: 113,
          column: 26
        },
        end: {
          line: 149,
          column: 6
        }
      },
      '34': {
        start: {
          line: 114,
          column: 2
        },
        end: {
          line: 149,
          column: 6
        }
      },
      '35': {
        start: {
          line: 115,
          column: 20
        },
        end: {
          line: 115,
          column: 72
        }
      },
      '36': {
        start: {
          line: 117,
          column: 6
        },
        end: {
          line: 117,
          column: 42
        }
      },
      '37': {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 124,
          column: 7
        }
      },
      '38': {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 121,
          column: 71
        }
      },
      '39': {
        start: {
          line: 123,
          column: 8
        },
        end: {
          line: 123,
          column: 39
        }
      },
      '40': {
        start: {
          line: 128,
          column: 20
        },
        end: {
          line: 131,
          column: 7
        }
      },
      '41': {
        start: {
          line: 132,
          column: 18
        },
        end: {
          line: 134,
          column: 8
        }
      },
      '42': {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 135,
          column: 38
        }
      },
      '43': {
        start: {
          line: 136,
          column: 6
        },
        end: {
          line: 136,
          column: 25
        }
      },
      '44': {
        start: {
          line: 139,
          column: 21
        },
        end: {
          line: 139,
          column: 38
        }
      },
      '45': {
        start: {
          line: 140,
          column: 30
        },
        end: {
          line: 140,
          column: 56
        }
      },
      '46': {
        start: {
          line: 141,
          column: 6
        },
        end: {
          line: 145,
          column: 30
        }
      },
      '47': {
        start: {
          line: 148,
          column: 6
        },
        end: {
          line: 148,
          column: 30
        }
      },
      '48': {
        start: {
          line: 156,
          column: 26
        },
        end: {
          line: 167,
          column: 5
        }
      },
      '49': {
        start: {
          line: 157,
          column: 2
        },
        end: {
          line: 167,
          column: 5
        }
      },
      '50': {
        start: {
          line: 158,
          column: 20
        },
        end: {
          line: 158,
          column: 72
        }
      },
      '51': {
        start: {
          line: 160,
          column: 6
        },
        end: {
          line: 166,
          column: 7
        }
      },
      '52': {
        start: {
          line: 174,
          column: 26
        },
        end: {
          line: 179,
          column: 5
        }
      },
      '53': {
        start: {
          line: 175,
          column: 2
        },
        end: {
          line: 179,
          column: 5
        }
      },
      '54': {
        start: {
          line: 176,
          column: 20
        },
        end: {
          line: 176,
          column: 72
        }
      },
      '55': {
        start: {
          line: 178,
          column: 6
        },
        end: {
          line: 178,
          column: 51
        }
      },
      '56': {
        start: {
          line: 186,
          column: 34
        },
        end: {
          line: 224,
          column: 1
        }
      },
      '57': {
        start: {
          line: 187,
          column: 25
        },
        end: {
          line: 187,
          column: 33
        }
      },
      '58': {
        start: {
          line: 188,
          column: 16
        },
        end: {
          line: 188,
          column: 34
        }
      },
      '59': {
        start: {
          line: 190,
          column: 2
        },
        end: {
          line: 223,
          column: 5
        }
      },
      '60': {
        start: {
          line: 191,
          column: 4
        },
        end: {
          line: 222,
          column: 5
        }
      },
      '61': {
        start: {
          line: 192,
          column: 6
        },
        end: {
          line: 192,
          column: 67
        }
      },
      '62': {
        start: {
          line: 193,
          column: 11
        },
        end: {
          line: 222,
          column: 5
        }
      },
      '63': {
        start: {
          line: 194,
          column: 6
        },
        end: {
          line: 219,
          column: 10
        }
      },
      '64': {
        start: {
          line: 196,
          column: 10
        },
        end: {
          line: 218,
          column: 89
        }
      },
      '65': {
        start: {
          line: 212,
          column: 12
        },
        end: {
          line: 216,
          column: 13
        }
      },
      '66': {
        start: {
          line: 213,
          column: 14
        },
        end: {
          line: 213,
          column: 29
        }
      },
      '67': {
        start: {
          line: 215,
          column: 14
        },
        end: {
          line: 215,
          column: 64
        }
      },
      '68': {
        start: {
          line: 218,
          column: 26
        },
        end: {
          line: 218,
          column: 88
        }
      },
      '69': {
        start: {
          line: 221,
          column: 6
        },
        end: {
          line: 221,
          column: 88
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 40,
            column: 22
          },
          end: {
            line: 40,
            column: 23
          }
        },
        loc: {
          start: {
            line: 40,
            column: 29
          },
          end: {
            line: 40,
            column: 96
          }
        },
        line: 40
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 47,
            column: 20
          },
          end: {
            line: 47,
            column: 21
          }
        },
        loc: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 61,
            column: 4
          }
        },
        line: 48
      },
      '2': {
        name: '(anonymous_2)',
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
            column: 35
          },
          end: {
            line: 61,
            column: 3
          }
        },
        line: 48
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
            line: 84,
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
            line: 84,
            column: 3
          }
        },
        line: 69
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 73,
            column: 30
          },
          end: {
            line: 73,
            column: 31
          }
        },
        loc: {
          start: {
            line: 73,
            column: 54
          },
          end: {
            line: 83,
            column: 5
          }
        },
        line: 73
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 92,
            column: 24
          },
          end: {
            line: 92,
            column: 25
          }
        },
        loc: {
          start: {
            line: 93,
            column: 2
          },
          end: {
            line: 97,
            column: 73
          }
        },
        line: 93
      },
      '8': {
        name: '(anonymous_8)',
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
            line: 95,
            column: 8
          },
          end: {
            line: 95,
            column: 31
          }
        },
        line: 95
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 97,
            column: 11
          },
          end: {
            line: 97,
            column: 12
          }
        },
        loc: {
          start: {
            line: 97,
            column: 20
          },
          end: {
            line: 97,
            column: 72
          }
        },
        line: 97
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 104,
            column: 23
          },
          end: {
            line: 104,
            column: 24
          }
        },
        loc: {
          start: {
            line: 105,
            column: 2
          },
          end: {
            line: 105,
            column: 37
          }
        },
        line: 105
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 113,
            column: 26
          },
          end: {
            line: 113,
            column: 27
          }
        },
        loc: {
          start: {
            line: 114,
            column: 2
          },
          end: {
            line: 149,
            column: 6
          }
        },
        line: 114
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 115,
            column: 11
          },
          end: {
            line: 115,
            column: 12
          }
        },
        loc: {
          start: {
            line: 115,
            column: 20
          },
          end: {
            line: 115,
            column: 72
          }
        },
        line: 115
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 116,
            column: 10
          },
          end: {
            line: 116,
            column: 11
          }
        },
        loc: {
          start: {
            line: 117,
            column: 6
          },
          end: {
            line: 117,
            column: 42
          }
        },
        line: 117
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 119,
            column: 10
          },
          end: {
            line: 119,
            column: 11
          }
        },
        loc: {
          start: {
            line: 119,
            column: 19
          },
          end: {
            line: 125,
            column: 5
          }
        },
        line: 119
      },
      '15': {
        name: '(anonymous_15)',
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
            column: 18
          },
          end: {
            line: 137,
            column: 5
          }
        },
        line: 126
      },
      '16': {
        name: '(anonymous_16)',
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
            line: 146,
            column: 5
          }
        },
        line: 138
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 147,
            column: 10
          },
          end: {
            line: 147,
            column: 11
          }
        },
        loc: {
          start: {
            line: 147,
            column: 16
          },
          end: {
            line: 149,
            column: 5
          }
        },
        line: 147
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 156,
            column: 26
          },
          end: {
            line: 156,
            column: 27
          }
        },
        loc: {
          start: {
            line: 157,
            column: 2
          },
          end: {
            line: 167,
            column: 5
          }
        },
        line: 157
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 158,
            column: 11
          },
          end: {
            line: 158,
            column: 12
          }
        },
        loc: {
          start: {
            line: 158,
            column: 20
          },
          end: {
            line: 158,
            column: 72
          }
        },
        line: 158
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 159,
            column: 10
          },
          end: {
            line: 159,
            column: 11
          }
        },
        loc: {
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 166,
            column: 7
          }
        },
        line: 160
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 174,
            column: 26
          },
          end: {
            line: 174,
            column: 27
          }
        },
        loc: {
          start: {
            line: 175,
            column: 2
          },
          end: {
            line: 179,
            column: 5
          }
        },
        line: 175
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 176,
            column: 11
          },
          end: {
            line: 176,
            column: 12
          }
        },
        loc: {
          start: {
            line: 176,
            column: 20
          },
          end: {
            line: 176,
            column: 72
          }
        },
        line: 176
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 177,
            column: 10
          },
          end: {
            line: 177,
            column: 11
          }
        },
        loc: {
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 178,
            column: 51
          }
        },
        line: 178
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 186,
            column: 34
          },
          end: {
            line: 186,
            column: 35
          }
        },
        loc: {
          start: {
            line: 186,
            column: 48
          },
          end: {
            line: 224,
            column: 1
          }
        },
        line: 186
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 190,
            column: 28
          },
          end: {
            line: 190,
            column: 29
          }
        },
        loc: {
          start: {
            line: 190,
            column: 52
          },
          end: {
            line: 223,
            column: 3
          }
        },
        line: 190
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 195,
            column: 14
          },
          end: {
            line: 195,
            column: 15
          }
        },
        loc: {
          start: {
            line: 196,
            column: 10
          },
          end: {
            line: 218,
            column: 89
          }
        },
        line: 196
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 211,
            column: 16
          },
          end: {
            line: 211,
            column: 17
          }
        },
        loc: {
          start: {
            line: 211,
            column: 24
          },
          end: {
            line: 217,
            column: 11
          }
        },
        line: 211
      },
      '28': {
        name: '(anonymous_28)',
        decl: {
          start: {
            line: 218,
            column: 17
          },
          end: {
            line: 218,
            column: 18
          }
        },
        loc: {
          start: {
            line: 218,
            column: 26
          },
          end: {
            line: 218,
            column: 88
          }
        },
        line: 218
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 40,
            column: 29
          },
          end: {
            line: 40,
            column: 96
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 40,
            column: 29
          },
          end: {
            line: 40,
            column: 43
          }
        }, {
          start: {
            line: 40,
            column: 47
          },
          end: {
            line: 40,
            column: 63
          }
        }, {
          start: {
            line: 40,
            column: 67
          },
          end: {
            line: 40,
            column: 96
          }
        }],
        line: 40
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
            line: 76,
            column: 6
          },
          end: {
            line: 82,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 76,
            column: 6
          },
          end: {
            line: 82,
            column: 7
          }
        }, {
          start: {
            line: 76,
            column: 6
          },
          end: {
            line: 82,
            column: 7
          }
        }],
        line: 76
      },
      '4': {
        loc: {
          start: {
            line: 78,
            column: 13
          },
          end: {
            line: 82,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 78,
            column: 13
          },
          end: {
            line: 82,
            column: 7
          }
        }, {
          start: {
            line: 78,
            column: 13
          },
          end: {
            line: 82,
            column: 7
          }
        }],
        line: 78
      },
      '5': {
        loc: {
          start: {
            line: 78,
            column: 17
          },
          end: {
            line: 78,
            column: 29
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 78,
            column: 17
          },
          end: {
            line: 78,
            column: 22
          }
        }, {
          start: {
            line: 78,
            column: 26
          },
          end: {
            line: 78,
            column: 29
          }
        }],
        line: 78
      },
      '6': {
        loc: {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 124,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 124,
            column: 7
          }
        }, {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 124,
            column: 7
          }
        }],
        line: 120
      },
      '7': {
        loc: {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 222,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 222,
            column: 5
          }
        }, {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 222,
            column: 5
          }
        }],
        line: 191
      },
      '8': {
        loc: {
          start: {
            line: 193,
            column: 11
          },
          end: {
            line: 222,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 193,
            column: 11
          },
          end: {
            line: 222,
            column: 5
          }
        }, {
          start: {
            line: 193,
            column: 11
          },
          end: {
            line: 222,
            column: 5
          }
        }],
        line: 193
      },
      '9': {
        loc: {
          start: {
            line: 212,
            column: 12
          },
          end: {
            line: 216,
            column: 13
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 212,
            column: 12
          },
          end: {
            line: 216,
            column: 13
          }
        }, {
          start: {
            line: 212,
            column: 12
          },
          end: {
            line: 216,
            column: 13
          }
        }],
        line: 212
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
      '69': 0
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
      '28': 0
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
}(); // /**
//  * Plurishing-backend
//  * =======
//  * Users component controller
//  */
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

var config = (cov_1wqgru2aqo.s[0]++, (0, _config.getConfig)());

var _ref = (cov_1wqgru2aqo.s[1]++, config),
    smtpEmail = _ref.smtpEmail,
    smtpService = _ref.smtpService,
    smtpPassword = _ref.smtpPassword,
    secret = _ref.secret,
    backofficeBaseUri = _ref.backofficeBaseUri;

var mailConfig = (cov_1wqgru2aqo.s[2]++, {
  // smtpPort,
  // smtpHost,
  smtpEmail: smtpEmail,
  smtpService: smtpService,
  smtpPassword: smtpPassword
});

cov_1wqgru2aqo.s[3]++;
var retrieveToken = function retrieveToken(req) {
  cov_1wqgru2aqo.f[0]++;
  cov_1wqgru2aqo.s[4]++;
  return (cov_1wqgru2aqo.b[0][0]++, req.body.token) || (cov_1wqgru2aqo.b[0][1]++, req.params.token) || (cov_1wqgru2aqo.b[0][2]++, req.headers['x-access-token']);
};

/**
 * Verifies req is performed by an admin user by inspecting auth token
 * @param {object} req - the request of query
 * @return {Promise} res - resolves if token bearer is an admin
 */
cov_1wqgru2aqo.s[5]++;
var ensureAdmin = function ensureAdmin(req) {
  cov_1wqgru2aqo.f[1]++;
  cov_1wqgru2aqo.s[6]++;
  return new _promise2.default(function (resolve, reject) {
    cov_1wqgru2aqo.f[2]++;
    cov_1wqgru2aqo.s[7]++;

    return resolve();
    var token = (cov_1wqgru2aqo.s[8]++, retrieveToken(req));
    // verify that the token data corresponds to the user willing to change the password
    cov_1wqgru2aqo.s[9]++;
    _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
      cov_1wqgru2aqo.f[3]++;
      cov_1wqgru2aqo.s[10]++;

      if (err) {
        cov_1wqgru2aqo.b[1][0]++;
        cov_1wqgru2aqo.s[11]++;

        reject(err);
      } else {
          cov_1wqgru2aqo.b[1][1]++;
          cov_1wqgru2aqo.s[12]++;
          if (decoded.admin) {
            cov_1wqgru2aqo.b[2][0]++;
            cov_1wqgru2aqo.s[13]++;

            resolve();
          } else {
            cov_1wqgru2aqo.b[2][1]++;
            cov_1wqgru2aqo.s[14]++;

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
cov_1wqgru2aqo.s[15]++;
var ensureAdminOrOwn = function ensureAdminOrOwn(req) {
  cov_1wqgru2aqo.f[4]++;
  cov_1wqgru2aqo.s[16]++;
  return new _promise2.default(function (resolve, reject) {
    cov_1wqgru2aqo.f[5]++;
    cov_1wqgru2aqo.s[17]++;

    return resolve();
    var token = (cov_1wqgru2aqo.s[18]++, retrieveToken(req));
    // verify that the token data corresponds to the user willing to change the password
    cov_1wqgru2aqo.s[19]++;
    _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
      cov_1wqgru2aqo.f[6]++;

      var admin = (cov_1wqgru2aqo.s[20]++, decoded.admin);
      var own = (cov_1wqgru2aqo.s[21]++, decoded.userid === req.params.id);
      cov_1wqgru2aqo.s[22]++;
      if (err) {
        cov_1wqgru2aqo.b[3][0]++;
        cov_1wqgru2aqo.s[23]++;

        reject(err);
      } else {
          cov_1wqgru2aqo.b[3][1]++;
          cov_1wqgru2aqo.s[24]++;
          if ((cov_1wqgru2aqo.b[5][0]++, admin) || (cov_1wqgru2aqo.b[5][1]++, own)) {
            cov_1wqgru2aqo.b[4][0]++;
            cov_1wqgru2aqo.s[25]++;

            resolve();
          } else {
            cov_1wqgru2aqo.b[4][1]++;
            cov_1wqgru2aqo.s[26]++;

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
cov_1wqgru2aqo.s[27]++;
var getUsers = exports.getUsers = function getUsers(req, res) {
  cov_1wqgru2aqo.f[7]++;
  cov_1wqgru2aqo.s[28]++;
  return ensureAdmin(req).then(function () {
    cov_1wqgru2aqo.f[8]++;
    cov_1wqgru2aqo.s[29]++;
    return res.json((0, _users.getUsers)());
  }).catch(function (error) {
    cov_1wqgru2aqo.f[9]++;
    cov_1wqgru2aqo.s[30]++;
    return res.status(403).json({ message: 'admin only', error: error });
  });
};

/**
 * Get a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1wqgru2aqo.s[31]++;
var getUser = exports.getUser = function getUser(req, res) {
  cov_1wqgru2aqo.f[10]++;
  cov_1wqgru2aqo.s[32]++;
  return res.json((0, _users.getUser)(req.params.id));
};
// res.json(getUserDAL({_id: req.params.id}));

/**
 * Create a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1wqgru2aqo.s[33]++;
var createUser = exports.createUser = function createUser(req, res) {
  cov_1wqgru2aqo.f[11]++;
  cov_1wqgru2aqo.s[34]++;
  return ensureAdmin(req).catch(function (error) {
    cov_1wqgru2aqo.f[12]++;
    cov_1wqgru2aqo.s[35]++;
    return res.status(403).json({ message: 'admin only', error: error });
  }).then(function () {
    cov_1wqgru2aqo.f[13]++;
    cov_1wqgru2aqo.s[36]++;
    return (0, _users.getUsers)({ email: req.body.email });
  }).then(function (users) {
    cov_1wqgru2aqo.f[14]++;
    cov_1wqgru2aqo.s[37]++;

    if (users.length) {
      cov_1wqgru2aqo.b[6][0]++;
      cov_1wqgru2aqo.s[38]++;

      return res.status(403).json({ message: 'email already exists' });
    } else {
      cov_1wqgru2aqo.b[6][1]++;
      cov_1wqgru2aqo.s[39]++;

      return (0, _users.createUser)(req.body);
    }
  }).then(function (user) {
    cov_1wqgru2aqo.f[15]++;

    // create a token
    var payload = (cov_1wqgru2aqo.s[40]++, {
      admin: user.admin,
      userid: user._id
    });
    var token = (cov_1wqgru2aqo.s[41]++, _jsonwebtoken2.default.sign(payload, secret, {
      expiresIn: 86400 // expires in 24 hours
    }));
    cov_1wqgru2aqo.s[42]++;
    user.resetPasswordToken = token;
    cov_1wqgru2aqo.s[43]++;
    return user.save();
  }).then(function (user) {
    cov_1wqgru2aqo.f[16]++;

    var appUrl = (cov_1wqgru2aqo.s[44]++, backofficeBaseUri);

    var _ref2 = (cov_1wqgru2aqo.s[45]++, (0, _emails.welcomeEmail)(appUrl, user)),
        subject = _ref2.subject,
        html = _ref2.html;

    cov_1wqgru2aqo.s[46]++;

    return (0, _mailer2.default)({
      subject: subject,
      html: html,
      to: [user.email]
    }, mailConfig, req.log);
  }).then(function () {
    cov_1wqgru2aqo.f[17]++;
    cov_1wqgru2aqo.s[47]++;

    res.json((0, _users.getUsers)());
  });
};

/**
 * Update a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1wqgru2aqo.s[48]++;
var updateUser = exports.updateUser = function updateUser(req, res) {
  cov_1wqgru2aqo.f[18]++;
  cov_1wqgru2aqo.s[49]++;
  return ensureAdminOrOwn(req).catch(function (error) {
    cov_1wqgru2aqo.f[19]++;
    cov_1wqgru2aqo.s[50]++;
    return res.status(403).json({ message: 'admin only', error: error });
  }).then(function () {
    cov_1wqgru2aqo.f[20]++;
    cov_1wqgru2aqo.s[51]++;
    return res.json((0, _users.updateUser)({ _id: req.params.id }, req.body, // for now we perform a full replace (vs merge with $set)
    true // return new document
    ));
  });
};

/**
 * Delete a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1wqgru2aqo.s[52]++;
var deleteUser = exports.deleteUser = function deleteUser(req, res) {
  cov_1wqgru2aqo.f[21]++;
  cov_1wqgru2aqo.s[53]++;
  return ensureAdmin(req).catch(function (error) {
    cov_1wqgru2aqo.f[22]++;
    cov_1wqgru2aqo.s[54]++;
    return res.status(403).json({ message: 'admin only', error: error });
  }).then(function () {
    cov_1wqgru2aqo.f[23]++;
    cov_1wqgru2aqo.s[55]++;
    return res.json((0, _users.deleteUser)({ _id: req.params.id }));
  });
};

/**
 * Handles password reset (only own user can do that, not even admin)
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_1wqgru2aqo.s[56]++;
var changeUserPassword = exports.changeUserPassword = function changeUserPassword(req, res) {
  cov_1wqgru2aqo.f[24]++;

  var _ref3 = (cov_1wqgru2aqo.s[57]++, req.body),
      id = _ref3.id,
      password = _ref3.password;

  var token = (cov_1wqgru2aqo.s[58]++, retrieveToken(req));
  // verify that the token data corresponds to the user willing to change the password
  cov_1wqgru2aqo.s[59]++;
  _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
    cov_1wqgru2aqo.f[25]++;
    cov_1wqgru2aqo.s[60]++;

    if (err) {
      cov_1wqgru2aqo.b[7][0]++;
      cov_1wqgru2aqo.s[61]++;

      res.status(422).json({ message: 'Invalid token', error: err });
    } else {
        cov_1wqgru2aqo.b[7][1]++;
        cov_1wqgru2aqo.s[62]++;
        if (decoded.userid === id) {
          cov_1wqgru2aqo.b[8][0]++;
          cov_1wqgru2aqo.s[63]++;

          (0, _crypto.hash)(password).then(function (hash) {
            cov_1wqgru2aqo.f[26]++;
            cov_1wqgru2aqo.s[64]++;
            return (0, _users.updateUser)(
            // get
            {
              _id: id
            },
            // set
            {
              $set: {
                password: hash,
                resetPasswordToken: null
              }
            },
            // return new object
            true).then(function (user) {
              cov_1wqgru2aqo.f[27]++;
              cov_1wqgru2aqo.s[65]++;

              if (user) {
                cov_1wqgru2aqo.b[9][0]++;
                cov_1wqgru2aqo.s[66]++;

                res.json(user);
              } else {
                cov_1wqgru2aqo.b[9][1]++;
                cov_1wqgru2aqo.s[67]++;

                res.status(404).json({ message: 'user not found' });
              }
            }).catch(function (error) {
              cov_1wqgru2aqo.f[28]++;
              cov_1wqgru2aqo.s[68]++;
              return res.status(500).json({ message: 'error with database.', error: error });
            });
          });
        } else {
          cov_1wqgru2aqo.b[8][1]++;
          cov_1wqgru2aqo.s[69]++;

          res.status(403).json({ message: 'not allowed to modify password of another user' });
        }
      }
  });
};