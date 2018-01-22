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
      hash = '49d52cbd64314883efce54dd4939aceebab713e6',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/users/users.controller.js',
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
          line: 60,
          column: 4
        }
      },
      '6': {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 60,
          column: 4
        }
      },
      '7': {
        start: {
          line: 49,
          column: 18
        },
        end: {
          line: 49,
          column: 36
        }
      },
      '8': {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 59,
          column: 7
        }
      },
      '9': {
        start: {
          line: 52,
          column: 6
        },
        end: {
          line: 58,
          column: 7
        }
      },
      '10': {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 20
        }
      },
      '11': {
        start: {
          line: 54,
          column: 13
        },
        end: {
          line: 58,
          column: 7
        }
      },
      '12': {
        start: {
          line: 55,
          column: 8
        },
        end: {
          line: 55,
          column: 18
        }
      },
      '13': {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 57,
          column: 17
        }
      },
      '14': {
        start: {
          line: 67,
          column: 25
        },
        end: {
          line: 82,
          column: 4
        }
      },
      '15': {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 82,
          column: 4
        }
      },
      '16': {
        start: {
          line: 69,
          column: 18
        },
        end: {
          line: 69,
          column: 36
        }
      },
      '17': {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 81,
          column: 7
        }
      },
      '18': {
        start: {
          line: 72,
          column: 20
        },
        end: {
          line: 72,
          column: 33
        }
      },
      '19': {
        start: {
          line: 73,
          column: 18
        },
        end: {
          line: 73,
          column: 50
        }
      },
      '20': {
        start: {
          line: 74,
          column: 6
        },
        end: {
          line: 80,
          column: 7
        }
      },
      '21': {
        start: {
          line: 75,
          column: 8
        },
        end: {
          line: 75,
          column: 20
        }
      },
      '22': {
        start: {
          line: 76,
          column: 13
        },
        end: {
          line: 80,
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
          column: 18
        }
      },
      '24': {
        start: {
          line: 79,
          column: 8
        },
        end: {
          line: 79,
          column: 17
        }
      },
      '25': {
        start: {
          line: 90,
          column: 24
        },
        end: {
          line: 95,
          column: 73
        }
      },
      '26': {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 95,
          column: 73
        }
      },
      '27': {
        start: {
          line: 93,
          column: 8
        },
        end: {
          line: 93,
          column: 33
        }
      },
      '28': {
        start: {
          line: 95,
          column: 20
        },
        end: {
          line: 95,
          column: 72
        }
      },
      '29': {
        start: {
          line: 102,
          column: 23
        },
        end: {
          line: 107,
          column: 3
        }
      },
      '30': {
        start: {
          line: 103,
          column: 2
        },
        end: {
          line: 107,
          column: 3
        }
      },
      '31': {
        start: {
          line: 114,
          column: 26
        },
        end: {
          line: 157,
          column: 6
        }
      },
      '32': {
        start: {
          line: 115,
          column: 2
        },
        end: {
          line: 157,
          column: 6
        }
      },
      '33': {
        start: {
          line: 116,
          column: 20
        },
        end: {
          line: 116,
          column: 72
        }
      },
      '34': {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 51
        }
      },
      '35': {
        start: {
          line: 122,
          column: 6
        },
        end: {
          line: 130,
          column: 7
        }
      },
      '36': {
        start: {
          line: 123,
          column: 8
        },
        end: {
          line: 123,
          column: 71
        }
      },
      '37': {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 129,
          column: 11
        }
      },
      '38': {
        start: {
          line: 132,
          column: 20
        },
        end: {
          line: 132,
          column: 36
        }
      },
      '39': {
        start: {
          line: 135,
          column: 20
        },
        end: {
          line: 138,
          column: 7
        }
      },
      '40': {
        start: {
          line: 139,
          column: 18
        },
        end: {
          line: 141,
          column: 8
        }
      },
      '41': {
        start: {
          line: 142,
          column: 6
        },
        end: {
          line: 142,
          column: 38
        }
      },
      '42': {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 43
        }
      },
      '43': {
        start: {
          line: 145,
          column: 20
        },
        end: {
          line: 145,
          column: 36
        }
      },
      '44': {
        start: {
          line: 147,
          column: 21
        },
        end: {
          line: 147,
          column: 38
        }
      },
      '45': {
        start: {
          line: 148,
          column: 30
        },
        end: {
          line: 148,
          column: 56
        }
      },
      '46': {
        start: {
          line: 149,
          column: 6
        },
        end: {
          line: 153,
          column: 30
        }
      },
      '47': {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 156,
          column: 32
        }
      },
      '48': {
        start: {
          line: 164,
          column: 26
        },
        end: {
          line: 174,
          column: 5
        }
      },
      '49': {
        start: {
          line: 165,
          column: 2
        },
        end: {
          line: 174,
          column: 5
        }
      },
      '50': {
        start: {
          line: 166,
          column: 20
        },
        end: {
          line: 166,
          column: 72
        }
      },
      '51': {
        start: {
          line: 168,
          column: 6
        },
        end: {
          line: 173,
          column: 7
        }
      },
      '52': {
        start: {
          line: 181,
          column: 26
        },
        end: {
          line: 186,
          column: 5
        }
      },
      '53': {
        start: {
          line: 182,
          column: 2
        },
        end: {
          line: 186,
          column: 5
        }
      },
      '54': {
        start: {
          line: 183,
          column: 20
        },
        end: {
          line: 183,
          column: 72
        }
      },
      '55': {
        start: {
          line: 185,
          column: 6
        },
        end: {
          line: 185,
          column: 51
        }
      },
      '56': {
        start: {
          line: 193,
          column: 34
        },
        end: {
          line: 228,
          column: 1
        }
      },
      '57': {
        start: {
          line: 194,
          column: 26
        },
        end: {
          line: 194,
          column: 34
        }
      },
      '58': {
        start: {
          line: 195,
          column: 16
        },
        end: {
          line: 195,
          column: 34
        }
      },
      '59': {
        start: {
          line: 197,
          column: 2
        },
        end: {
          line: 227,
          column: 5
        }
      },
      '60': {
        start: {
          line: 198,
          column: 4
        },
        end: {
          line: 226,
          column: 5
        }
      },
      '61': {
        start: {
          line: 199,
          column: 6
        },
        end: {
          line: 199,
          column: 67
        }
      },
      '62': {
        start: {
          line: 200,
          column: 11
        },
        end: {
          line: 226,
          column: 5
        }
      },
      '63': {
        start: {
          line: 201,
          column: 6
        },
        end: {
          line: 223,
          column: 88
        }
      },
      '64': {
        start: {
          line: 203,
          column: 10
        },
        end: {
          line: 212,
          column: 11
        }
      },
      '65': {
        start: {
          line: 214,
          column: 12
        },
        end: {
          line: 214,
          column: 42
        }
      },
      '66': {
        start: {
          line: 217,
          column: 12
        },
        end: {
          line: 221,
          column: 13
        }
      },
      '67': {
        start: {
          line: 218,
          column: 14
        },
        end: {
          line: 218,
          column: 29
        }
      },
      '68': {
        start: {
          line: 220,
          column: 14
        },
        end: {
          line: 220,
          column: 64
        }
      },
      '69': {
        start: {
          line: 223,
          column: 24
        },
        end: {
          line: 223,
          column: 86
        }
      },
      '70': {
        start: {
          line: 225,
          column: 6
        },
        end: {
          line: 225,
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
            line: 60,
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
            line: 60,
            column: 3
          }
        },
        line: 48
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 51,
            column: 30
          },
          end: {
            line: 51,
            column: 31
          }
        },
        loc: {
          start: {
            line: 51,
            column: 54
          },
          end: {
            line: 59,
            column: 5
          }
        },
        line: 51
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 67,
            column: 25
          },
          end: {
            line: 67,
            column: 26
          }
        },
        loc: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 82,
            column: 4
          }
        },
        line: 68
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 68,
            column: 14
          },
          end: {
            line: 68,
            column: 15
          }
        },
        loc: {
          start: {
            line: 68,
            column: 35
          },
          end: {
            line: 82,
            column: 3
          }
        },
        line: 68
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 71,
            column: 30
          },
          end: {
            line: 71,
            column: 31
          }
        },
        loc: {
          start: {
            line: 71,
            column: 54
          },
          end: {
            line: 81,
            column: 5
          }
        },
        line: 71
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 90,
            column: 24
          },
          end: {
            line: 90,
            column: 25
          }
        },
        loc: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 95,
            column: 73
          }
        },
        line: 91
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 92,
            column: 10
          },
          end: {
            line: 92,
            column: 11
          }
        },
        loc: {
          start: {
            line: 93,
            column: 8
          },
          end: {
            line: 93,
            column: 33
          }
        },
        line: 93
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 95,
            column: 11
          },
          end: {
            line: 95,
            column: 12
          }
        },
        loc: {
          start: {
            line: 95,
            column: 20
          },
          end: {
            line: 95,
            column: 72
          }
        },
        line: 95
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 102,
            column: 23
          },
          end: {
            line: 102,
            column: 24
          }
        },
        loc: {
          start: {
            line: 103,
            column: 2
          },
          end: {
            line: 107,
            column: 3
          }
        },
        line: 103
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 114,
            column: 26
          },
          end: {
            line: 114,
            column: 27
          }
        },
        loc: {
          start: {
            line: 115,
            column: 2
          },
          end: {
            line: 157,
            column: 6
          }
        },
        line: 115
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 116,
            column: 11
          },
          end: {
            line: 116,
            column: 12
          }
        },
        loc: {
          start: {
            line: 116,
            column: 20
          },
          end: {
            line: 116,
            column: 72
          }
        },
        line: 116
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 118,
            column: 10
          },
          end: {
            line: 118,
            column: 11
          }
        },
        loc: {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 51
          }
        },
        line: 119
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 121,
            column: 10
          },
          end: {
            line: 121,
            column: 11
          }
        },
        loc: {
          start: {
            line: 121,
            column: 19
          },
          end: {
            line: 131,
            column: 5
          }
        },
        line: 121
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 132,
            column: 10
          },
          end: {
            line: 132,
            column: 11
          }
        },
        loc: {
          start: {
            line: 132,
            column: 20
          },
          end: {
            line: 132,
            column: 36
          }
        },
        line: 132
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 133,
            column: 10
          },
          end: {
            line: 133,
            column: 11
          }
        },
        loc: {
          start: {
            line: 133,
            column: 18
          },
          end: {
            line: 144,
            column: 5
          }
        },
        line: 133
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 145,
            column: 10
          },
          end: {
            line: 145,
            column: 11
          }
        },
        loc: {
          start: {
            line: 145,
            column: 20
          },
          end: {
            line: 145,
            column: 36
          }
        },
        line: 145
      },
      '18': {
        name: '(anonymous_18)',
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
            line: 154,
            column: 5
          }
        },
        line: 146
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 155,
            column: 10
          },
          end: {
            line: 155,
            column: 11
          }
        },
        loc: {
          start: {
            line: 155,
            column: 16
          },
          end: {
            line: 157,
            column: 5
          }
        },
        line: 155
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 164,
            column: 26
          },
          end: {
            line: 164,
            column: 27
          }
        },
        loc: {
          start: {
            line: 165,
            column: 2
          },
          end: {
            line: 174,
            column: 5
          }
        },
        line: 165
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 166,
            column: 11
          },
          end: {
            line: 166,
            column: 12
          }
        },
        loc: {
          start: {
            line: 166,
            column: 20
          },
          end: {
            line: 166,
            column: 72
          }
        },
        line: 166
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 167,
            column: 10
          },
          end: {
            line: 167,
            column: 11
          }
        },
        loc: {
          start: {
            line: 168,
            column: 6
          },
          end: {
            line: 173,
            column: 7
          }
        },
        line: 168
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 181,
            column: 26
          },
          end: {
            line: 181,
            column: 27
          }
        },
        loc: {
          start: {
            line: 182,
            column: 2
          },
          end: {
            line: 186,
            column: 5
          }
        },
        line: 182
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 183,
            column: 11
          },
          end: {
            line: 183,
            column: 12
          }
        },
        loc: {
          start: {
            line: 183,
            column: 20
          },
          end: {
            line: 183,
            column: 72
          }
        },
        line: 183
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 184,
            column: 10
          },
          end: {
            line: 184,
            column: 11
          }
        },
        loc: {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 185,
            column: 51
          }
        },
        line: 185
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 193,
            column: 34
          },
          end: {
            line: 193,
            column: 35
          }
        },
        loc: {
          start: {
            line: 193,
            column: 48
          },
          end: {
            line: 228,
            column: 1
          }
        },
        line: 193
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 197,
            column: 28
          },
          end: {
            line: 197,
            column: 29
          }
        },
        loc: {
          start: {
            line: 197,
            column: 52
          },
          end: {
            line: 227,
            column: 3
          }
        },
        line: 197
      },
      '28': {
        name: '(anonymous_28)',
        decl: {
          start: {
            line: 202,
            column: 14
          },
          end: {
            line: 202,
            column: 15
          }
        },
        loc: {
          start: {
            line: 203,
            column: 10
          },
          end: {
            line: 212,
            column: 11
          }
        },
        line: 203
      },
      '29': {
        name: '(anonymous_29)',
        decl: {
          start: {
            line: 213,
            column: 16
          },
          end: {
            line: 213,
            column: 17
          }
        },
        loc: {
          start: {
            line: 214,
            column: 12
          },
          end: {
            line: 214,
            column: 42
          }
        },
        line: 214
      },
      '30': {
        name: '(anonymous_30)',
        decl: {
          start: {
            line: 216,
            column: 16
          },
          end: {
            line: 216,
            column: 17
          }
        },
        loc: {
          start: {
            line: 216,
            column: 24
          },
          end: {
            line: 222,
            column: 11
          }
        },
        line: 216
      },
      '31': {
        name: '(anonymous_31)',
        decl: {
          start: {
            line: 223,
            column: 15
          },
          end: {
            line: 223,
            column: 16
          }
        },
        loc: {
          start: {
            line: 223,
            column: 24
          },
          end: {
            line: 223,
            column: 86
          }
        },
        line: 223
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
            line: 52,
            column: 6
          },
          end: {
            line: 58,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 58,
            column: 7
          }
        }, {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 58,
            column: 7
          }
        }],
        line: 52
      },
      '2': {
        loc: {
          start: {
            line: 54,
            column: 13
          },
          end: {
            line: 58,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 54,
            column: 13
          },
          end: {
            line: 58,
            column: 7
          }
        }, {
          start: {
            line: 54,
            column: 13
          },
          end: {
            line: 58,
            column: 7
          }
        }],
        line: 54
      },
      '3': {
        loc: {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 80,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 80,
            column: 7
          }
        }, {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 80,
            column: 7
          }
        }],
        line: 74
      },
      '4': {
        loc: {
          start: {
            line: 76,
            column: 13
          },
          end: {
            line: 80,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 76,
            column: 13
          },
          end: {
            line: 80,
            column: 7
          }
        }, {
          start: {
            line: 76,
            column: 13
          },
          end: {
            line: 80,
            column: 7
          }
        }],
        line: 76
      },
      '5': {
        loc: {
          start: {
            line: 76,
            column: 17
          },
          end: {
            line: 76,
            column: 29
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 76,
            column: 17
          },
          end: {
            line: 76,
            column: 22
          }
        }, {
          start: {
            line: 76,
            column: 26
          },
          end: {
            line: 76,
            column: 29
          }
        }],
        line: 76
      },
      '6': {
        loc: {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 130,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 130,
            column: 7
          }
        }, {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 130,
            column: 7
          }
        }],
        line: 122
      },
      '7': {
        loc: {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 226,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 226,
            column: 5
          }
        }, {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 226,
            column: 5
          }
        }],
        line: 198
      },
      '8': {
        loc: {
          start: {
            line: 200,
            column: 11
          },
          end: {
            line: 226,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 200,
            column: 11
          },
          end: {
            line: 226,
            column: 5
          }
        }, {
          start: {
            line: 200,
            column: 11
          },
          end: {
            line: 226,
            column: 5
          }
        }],
        line: 200
      },
      '9': {
        loc: {
          start: {
            line: 217,
            column: 12
          },
          end: {
            line: 221,
            column: 13
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 217,
            column: 12
          },
          end: {
            line: 221,
            column: 13
          }
        }, {
          start: {
            line: 217,
            column: 12
          },
          end: {
            line: 221,
            column: 13
          }
        }],
        line: 217
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
      '70': 0
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
      '31': 0
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
//  * Metis-backend
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
  return res.json((0, _users.getUser)({
    id: req.params.id
  }));
};

/**
 * Create a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_xhh33vcol.s[31]++;
var createUser = exports.createUser = function createUser(req, res) {
  cov_xhh33vcol.f[11]++;
  cov_xhh33vcol.s[32]++;
  return ensureAdmin(req).catch(function (error) {
    cov_xhh33vcol.f[12]++;
    cov_xhh33vcol.s[33]++;
    return res.status(403).json({ message: 'admin only', error: error });
  })
  // ensure user does not already exists
  .then(function () {
    cov_xhh33vcol.f[13]++;
    cov_xhh33vcol.s[34]++;
    return (0, _users.getUsers)({ query: { email: req.body.email } });
  }).then(function (users) {
    cov_xhh33vcol.f[14]++;
    cov_xhh33vcol.s[35]++;

    if (users.length) {
      cov_xhh33vcol.b[6][0]++;
      cov_xhh33vcol.s[36]++;

      return res.status(403).json({ message: 'email already exists' });
    } else {
      cov_xhh33vcol.b[6][1]++;
      cov_xhh33vcol.s[37]++;

      // create user
      return (0, _users.createUser)((0, _extends3.default)({}, req.body, {
        type: 'user'
      }));
    }
  }).then(function (_ref2) {
    var id = _ref2.id;
    cov_xhh33vcol.f[15]++;
    cov_xhh33vcol.s[38]++;
    return (0, _users.getUser)({ id: id });
  }).then(function (user) {
    cov_xhh33vcol.f[16]++;

    // create a token
    var payload = (cov_xhh33vcol.s[39]++, {
      admin: user.admin,
      userid: user._id
    });
    var token = (cov_xhh33vcol.s[40]++, _jsonwebtoken2.default.sign(payload, secret, {
      expiresIn: 86400 // expires in 24 hours
    }));
    cov_xhh33vcol.s[41]++;
    user.resetPasswordToken = token;
    cov_xhh33vcol.s[42]++;
    return (0, _users.updateUser)(user._id, user);
  }).then(function (_ref3) {
    var id = _ref3.id;
    cov_xhh33vcol.f[17]++;
    cov_xhh33vcol.s[43]++;
    return (0, _users.getUser)({ id: id });
  }).then(function (user) {
    cov_xhh33vcol.f[18]++;

    var appUrl = (cov_xhh33vcol.s[44]++, backofficeBaseUri);

    var _ref4 = (cov_xhh33vcol.s[45]++, (0, _emails.welcomeEmail)(appUrl, user)),
        subject = _ref4.subject,
        html = _ref4.html;

    cov_xhh33vcol.s[46]++;

    return (0, _mailer2.default)({
      subject: subject,
      html: html,
      to: [user.email]
    }, mailConfig, req.log);
  }).then(function () {
    cov_xhh33vcol.f[19]++;
    cov_xhh33vcol.s[47]++;

    res.json((0, _users.getUsers)({}));
  });
};

/**
 * Update a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_xhh33vcol.s[48]++;
var updateUser = exports.updateUser = function updateUser(req, res) {
  cov_xhh33vcol.f[20]++;
  cov_xhh33vcol.s[49]++;
  return ensureAdminOrOwn(req).catch(function (error) {
    cov_xhh33vcol.f[21]++;
    cov_xhh33vcol.s[50]++;
    return res.status(403).json({ message: 'admin only', error: error });
  }).then(function () {
    cov_xhh33vcol.f[22]++;
    cov_xhh33vcol.s[51]++;
    return res.json((0, _users.updateUser)(req.params.id, req.body // for now we perform a full replace (vs merge with $set)
    ));
  });
};

/**
 * Delete a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_xhh33vcol.s[52]++;
var deleteUser = exports.deleteUser = function deleteUser(req, res) {
  cov_xhh33vcol.f[23]++;
  cov_xhh33vcol.s[53]++;
  return ensureAdmin(req).catch(function (error) {
    cov_xhh33vcol.f[24]++;
    cov_xhh33vcol.s[54]++;
    return res.status(403).json({ message: 'admin only', error: error });
  }).then(function () {
    cov_xhh33vcol.f[25]++;
    cov_xhh33vcol.s[55]++;
    return res.json((0, _users.deleteUser)({ _id: req.params.id }));
  });
};

/**
 * Handles password reset (only own user can do that, not even admin)
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
cov_xhh33vcol.s[56]++;
var changeUserPassword = exports.changeUserPassword = function changeUserPassword(req, res) {
  cov_xhh33vcol.f[26]++;

  var _ref5 = (cov_xhh33vcol.s[57]++, req.body),
      _id = _ref5._id,
      password = _ref5.password;

  var token = (cov_xhh33vcol.s[58]++, retrieveToken(req));
  // verify that the token data corresponds to the user willing to change the password
  cov_xhh33vcol.s[59]++;
  _jsonwebtoken2.default.verify(token, secret, function (err, decoded) {
    cov_xhh33vcol.f[27]++;
    cov_xhh33vcol.s[60]++;

    if (err) {
      cov_xhh33vcol.b[7][0]++;
      cov_xhh33vcol.s[61]++;

      res.status(422).json({ message: 'Invalid token', error: err });
    } else {
        cov_xhh33vcol.b[7][1]++;
        cov_xhh33vcol.s[62]++;
        if (decoded.userid === _id) {
          cov_xhh33vcol.b[8][0]++;
          cov_xhh33vcol.s[63]++;

          (0, _crypto.hash)(password).then(function (hash) {
            cov_xhh33vcol.f[28]++;
            cov_xhh33vcol.s[64]++;
            return (0, _users.updateUser)(
            // get
            _id,
            // set
            (0, _extends3.default)({}, req.body, {
              password: hash,
              resetPasswordToken: undefined
            }));
          }).then(function () {
            cov_xhh33vcol.f[29]++;
            cov_xhh33vcol.s[65]++;
            return (0, _users.getUser)({ query: { id: _id } });
          }).then(function (user) {
            cov_xhh33vcol.f[30]++;
            cov_xhh33vcol.s[66]++;

            if (user) {
              cov_xhh33vcol.b[9][0]++;
              cov_xhh33vcol.s[67]++;

              res.json(user);
            } else {
              cov_xhh33vcol.b[9][1]++;
              cov_xhh33vcol.s[68]++;

              res.status(404).json({ message: 'user not found' });
            }
          }).catch(function (error) {
            cov_xhh33vcol.f[31]++;
            cov_xhh33vcol.s[69]++;
            return res.status(500).json({ message: 'error with database.', error: error });
          });
        } else {
          cov_xhh33vcol.b[8][1]++;
          cov_xhh33vcol.s[70]++;

          res.status(403).json({ message: 'not allowed to modify password of another user' });
        }
      }
  });
};