'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAsset = exports.updateAsset = exports.createAsset = exports.getAssetAttachment = exports.getAsset = exports.getAssets = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_2hhud5wwfm = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.dal.js',
      hash = 'dcb74c25c796c7047fc9e9ebcf22680e49fa9838',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 34
        }
      },
      '1': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 32
        }
      },
      '2': {
        start: {
          line: 29,
          column: 25
        },
        end: {
          line: 59,
          column: 1
        }
      },
      '3': {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      '4': {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 45,
          column: 6
        }
      },
      '5': {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 44,
          column: 11
        }
      },
      '6': {
        start: {
          line: 41,
          column: 12
        },
        end: {
          line: 43,
          column: 13
        }
      },
      '7': {
        start: {
          line: 42,
          column: 38
        },
        end: {
          line: 42,
          column: 45
        }
      },
      '8': {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 57,
          column: 6
        }
      },
      '9': {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 56,
          column: 11
        }
      },
      '10': {
        start: {
          line: 53,
          column: 12
        },
        end: {
          line: 55,
          column: 13
        }
      },
      '11': {
        start: {
          line: 54,
          column: 38
        },
        end: {
          line: 54,
          column: 45
        }
      },
      '12': {
        start: {
          line: 66,
          column: 24
        },
        end: {
          line: 73,
          column: 5
        }
      },
      '13': {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 73,
          column: 5
        }
      },
      '14': {
        start: {
          line: 72,
          column: 6
        },
        end: {
          line: 72,
          column: 32
        }
      },
      '15': {
        start: {
          line: 80,
          column: 34
        },
        end: {
          line: 92,
          column: 4
        }
      },
      '16': {
        start: {
          line: 84,
          column: 2
        },
        end: {
          line: 92,
          column: 4
        }
      },
      '17': {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 91,
          column: 7
        }
      },
      '18': {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 90,
          column: 7
        }
      },
      '19': {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 87,
          column: 20
        }
      },
      '20': {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 89,
          column: 58
        }
      },
      '21': {
        start: {
          line: 101,
          column: 27
        },
        end: {
          line: 140,
          column: 1
        }
      },
      '22': {
        start: {
          line: 102,
          column: 21
        },
        end: {
          line: 102,
          column: 26
        }
      },
      '23': {
        start: {
          line: 103,
          column: 19
        },
        end: {
          line: 103,
          column: 35
        }
      },
      '24': {
        start: {
          line: 105,
          column: 2
        },
        end: {
          line: 139,
          column: 5
        }
      },
      '25': {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 111,
          column: 6
        }
      },
      '26': {
        start: {
          line: 115,
          column: 22
        },
        end: {
          line: 115,
          column: 24
        }
      },
      '27': {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 138,
          column: 7
        }
      },
      '28': {
        start: {
          line: 118,
          column: 6
        },
        end: {
          line: 137,
          column: 8
        }
      },
      '29': {
        start: {
          line: 131,
          column: 10
        },
        end: {
          line: 135,
          column: 11
        }
      },
      '30': {
        start: {
          line: 132,
          column: 12
        },
        end: {
          line: 132,
          column: 24
        }
      },
      '31': {
        start: {
          line: 134,
          column: 12
        },
        end: {
          line: 134,
          column: 26
        }
      },
      '32': {
        start: {
          line: 149,
          column: 27
        },
        end: {
          line: 205,
          column: 1
        }
      },
      '33': {
        start: {
          line: 151,
          column: 2
        },
        end: {
          line: 204,
          column: 13
        }
      },
      '34': {
        start: {
          line: 154,
          column: 12
        },
        end: {
          line: 159,
          column: 14
        }
      },
      '35': {
        start: {
          line: 163,
          column: 12
        },
        end: {
          line: 163,
          column: 32
        }
      },
      '36': {
        start: {
          line: 166,
          column: 40
        },
        end: {
          line: 166,
          column: 96
        }
      },
      '37': {
        start: {
          line: 167,
          column: 12
        },
        end: {
          line: 176,
          column: 15
        }
      },
      '38': {
        start: {
          line: 168,
          column: 14
        },
        end: {
          line: 175,
          column: 15
        }
      },
      '39': {
        start: {
          line: 169,
          column: 16
        },
        end: {
          line: 174,
          column: 21
        }
      },
      '40': {
        start: {
          line: 171,
          column: 20
        },
        end: {
          line: 173,
          column: 41
        }
      },
      '41': {
        start: {
          line: 172,
          column: 22
        },
        end: {
          line: 172,
          column: 34
        }
      },
      '42': {
        start: {
          line: 173,
          column: 27
        },
        end: {
          line: 173,
          column: 41
        }
      },
      '43': {
        start: {
          line: 180,
          column: 30
        },
        end: {
          line: 180,
          column: 32
        }
      },
      '44': {
        start: {
          line: 182,
          column: 12
        },
        end: {
          line: 203,
          column: 15
        }
      },
      '45': {
        start: {
          line: 183,
          column: 14
        },
        end: {
          line: 202,
          column: 16
        }
      },
      '46': {
        start: {
          line: 196,
          column: 18
        },
        end: {
          line: 200,
          column: 19
        }
      },
      '47': {
        start: {
          line: 197,
          column: 20
        },
        end: {
          line: 197,
          column: 32
        }
      },
      '48': {
        start: {
          line: 199,
          column: 20
        },
        end: {
          line: 199,
          column: 34
        }
      },
      '49': {
        start: {
          line: 212,
          column: 27
        },
        end: {
          line: 214,
          column: 52
        }
      },
      '50': {
        start: {
          line: 213,
          column: 2
        },
        end: {
          line: 214,
          column: 52
        }
      },
      '51': {
        start: {
          line: 214,
          column: 19
        },
        end: {
          line: 214,
          column: 51
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 29,
            column: 25
          },
          end: {
            line: 29,
            column: 26
          }
        },
        loc: {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 32
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 7
          }
        },
        loc: {
          start: {
            line: 39,
            column: 8
          },
          end: {
            line: 44,
            column: 11
          }
        },
        line: 39
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 40,
            column: 10
          },
          end: {
            line: 40,
            column: 11
          }
        },
        loc: {
          start: {
            line: 41,
            column: 12
          },
          end: {
            line: 43,
            column: 13
          }
        },
        line: 41
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 42,
            column: 31
          },
          end: {
            line: 42,
            column: 32
          }
        },
        loc: {
          start: {
            line: 42,
            column: 38
          },
          end: {
            line: 42,
            column: 45
          }
        },
        line: 42
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 7
          }
        },
        loc: {
          start: {
            line: 51,
            column: 8
          },
          end: {
            line: 56,
            column: 11
          }
        },
        line: 51
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 52,
            column: 10
          },
          end: {
            line: 52,
            column: 11
          }
        },
        loc: {
          start: {
            line: 53,
            column: 12
          },
          end: {
            line: 55,
            column: 13
          }
        },
        line: 53
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 54,
            column: 31
          },
          end: {
            line: 54,
            column: 32
          }
        },
        loc: {
          start: {
            line: 54,
            column: 38
          },
          end: {
            line: 54,
            column: 45
          }
        },
        line: 54
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 66,
            column: 24
          },
          end: {
            line: 66,
            column: 25
          }
        },
        loc: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 73,
            column: 5
          }
        },
        line: 69
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 70,
            column: 10
          },
          end: {
            line: 70,
            column: 11
          }
        },
        loc: {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 72,
            column: 32
          }
        },
        line: 72
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 80,
            column: 34
          },
          end: {
            line: 80,
            column: 35
          }
        },
        loc: {
          start: {
            line: 84,
            column: 2
          },
          end: {
            line: 92,
            column: 4
          }
        },
        line: 84
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 84,
            column: 14
          },
          end: {
            line: 84,
            column: 15
          }
        },
        loc: {
          start: {
            line: 84,
            column: 35
          },
          end: {
            line: 92,
            column: 3
          }
        },
        line: 84
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 85,
            column: 36
          },
          end: {
            line: 85,
            column: 37
          }
        },
        loc: {
          start: {
            line: 85,
            column: 51
          },
          end: {
            line: 91,
            column: 5
          }
        },
        line: 85
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 101,
            column: 27
          },
          end: {
            line: 101,
            column: 28
          }
        },
        loc: {
          start: {
            line: 101,
            column: 44
          },
          end: {
            line: 140,
            column: 1
          }
        },
        line: 101
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 107,
            column: 8
          },
          end: {
            line: 107,
            column: 9
          }
        },
        loc: {
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 111,
            column: 6
          }
        },
        line: 108
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 114,
            column: 8
          },
          end: {
            line: 114,
            column: 9
          }
        },
        loc: {
          start: {
            line: 114,
            column: 14
          },
          end: {
            line: 139,
            column: 3
          }
        },
        line: 114
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 117,
            column: 23
          },
          end: {
            line: 117,
            column: 24
          }
        },
        loc: {
          start: {
            line: 117,
            column: 44
          },
          end: {
            line: 138,
            column: 5
          }
        },
        line: 117
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 130,
            column: 9
          }
        },
        loc: {
          start: {
            line: 130,
            column: 23
          },
          end: {
            line: 136,
            column: 9
          }
        },
        line: 130
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 149,
            column: 27
          },
          end: {
            line: 149,
            column: 28
          }
        },
        loc: {
          start: {
            line: 149,
            column: 78
          },
          end: {
            line: 205,
            column: 1
          }
        },
        line: 149
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 153,
            column: 16
          },
          end: {
            line: 153,
            column: 17
          }
        },
        loc: {
          start: {
            line: 154,
            column: 12
          },
          end: {
            line: 159,
            column: 14
          }
        },
        line: 154
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 162,
            column: 16
          },
          end: {
            line: 162,
            column: 17
          }
        },
        loc: {
          start: {
            line: 163,
            column: 12
          },
          end: {
            line: 163,
            column: 32
          }
        },
        line: 163
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 165,
            column: 16
          },
          end: {
            line: 165,
            column: 17
          }
        },
        loc: {
          start: {
            line: 165,
            column: 25
          },
          end: {
            line: 177,
            column: 11
          }
        },
        line: 165
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 167,
            column: 31
          },
          end: {
            line: 167,
            column: 32
          }
        },
        loc: {
          start: {
            line: 167,
            column: 52
          },
          end: {
            line: 176,
            column: 13
          }
        },
        line: 167
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 170,
            column: 18
          },
          end: {
            line: 170,
            column: 19
          }
        },
        loc: {
          start: {
            line: 170,
            column: 33
          },
          end: {
            line: 174,
            column: 19
          }
        },
        line: 170
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 179,
            column: 16
          },
          end: {
            line: 179,
            column: 17
          }
        },
        loc: {
          start: {
            line: 179,
            column: 22
          },
          end: {
            line: 204,
            column: 11
          }
        },
        line: 179
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 182,
            column: 31
          },
          end: {
            line: 182,
            column: 32
          }
        },
        loc: {
          start: {
            line: 182,
            column: 52
          },
          end: {
            line: 203,
            column: 13
          }
        },
        line: 182
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 195,
            column: 16
          },
          end: {
            line: 195,
            column: 17
          }
        },
        loc: {
          start: {
            line: 195,
            column: 31
          },
          end: {
            line: 201,
            column: 17
          }
        },
        line: 195
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 212,
            column: 27
          },
          end: {
            line: 212,
            column: 28
          }
        },
        loc: {
          start: {
            line: 213,
            column: 2
          },
          end: {
            line: 214,
            column: 52
          }
        },
        line: 213
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 214,
            column: 10
          },
          end: {
            line: 214,
            column: 11
          }
        },
        loc: {
          start: {
            line: 214,
            column: 19
          },
          end: {
            line: 214,
            column: 51
          }
        },
        line: 214
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 12
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 30,
            column: 10
          },
          end: {
            line: 30,
            column: 12
          }
        }],
        line: 30
      },
      '1': {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 21
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 31,
            column: 17
          },
          end: {
            line: 31,
            column: 21
          }
        }],
        line: 31
      },
      '2': {
        loc: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        }, {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        }],
        line: 33
      },
      '3': {
        loc: {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 90,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 90,
            column: 7
          }
        }, {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 90,
            column: 7
          }
        }],
        line: 86
      },
      '4': {
        loc: {
          start: {
            line: 131,
            column: 10
          },
          end: {
            line: 135,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 131,
            column: 10
          },
          end: {
            line: 135,
            column: 11
          }
        }, {
          start: {
            line: 131,
            column: 10
          },
          end: {
            line: 135,
            column: 11
          }
        }],
        line: 131
      },
      '5': {
        loc: {
          start: {
            line: 166,
            column: 40
          },
          end: {
            line: 166,
            column: 96
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 166,
            column: 40
          },
          end: {
            line: 166,
            column: 58
          }
        }, {
          start: {
            line: 166,
            column: 62
          },
          end: {
            line: 166,
            column: 96
          }
        }],
        line: 166
      },
      '6': {
        loc: {
          start: {
            line: 168,
            column: 14
          },
          end: {
            line: 175,
            column: 15
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 168,
            column: 14
          },
          end: {
            line: 175,
            column: 15
          }
        }, {
          start: {
            line: 168,
            column: 14
          },
          end: {
            line: 175,
            column: 15
          }
        }],
        line: 168
      },
      '7': {
        loc: {
          start: {
            line: 171,
            column: 20
          },
          end: {
            line: 173,
            column: 41
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 171,
            column: 20
          },
          end: {
            line: 173,
            column: 41
          }
        }, {
          start: {
            line: 171,
            column: 20
          },
          end: {
            line: 173,
            column: 41
          }
        }],
        line: 171
      },
      '8': {
        loc: {
          start: {
            line: 196,
            column: 18
          },
          end: {
            line: 200,
            column: 19
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 196,
            column: 18
          },
          end: {
            line: 200,
            column: 19
          }
        }, {
          start: {
            line: 196,
            column: 18
          },
          end: {
            line: 200,
            column: 19
          }
        }],
        line: 196
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
      '51': 0
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
      '27': 0
    },
    b: {
      '0': [0],
      '1': [0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0],
      '8': [0, 0]
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
      * Asset data access layer
      */


var _mimeTypes = require('mime-types');

var _plugDb = require('../../utils/plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

var _plurishingSchemas = require('plurishing-schemas');

var _assets = require('./assets.design');

var _assets2 = _interopRequireDefault(_assets);

var _couchdb = require('../../utils/couchdb');

var _schemas = require('../../utils/schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_2hhud5wwfm.s[0]++;

console.log('resource', _plurishingSchemas.Resource);

/**
 * Registering couchdb views related to assets objects
 */
cov_2hhud5wwfm.s[1]++;
(0, _couchdb.addDesign)(_plugDb2.default, 'assets', _assets2.default);

/**
 * Gets a list of assets with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
cov_2hhud5wwfm.s[2]++;
var getAssets = exports.getAssets = function getAssets(_ref) {
  var _ref$query = _ref.query,
      query = _ref$query === undefined ? (cov_2hhud5wwfm.b[0][0]++, {}) : _ref$query,
      _ref$include_docs = _ref.include_docs,
      include_docs = _ref$include_docs === undefined ? (cov_2hhud5wwfm.b[1][0]++, true) : _ref$include_docs;
  cov_2hhud5wwfm.f[0]++;
  cov_2hhud5wwfm.s[3]++;

  if (query.filename) {
    cov_2hhud5wwfm.b[2][0]++;
    cov_2hhud5wwfm.s[4]++;

    return _plugDb2.default.viewAsync('assets', 'by_filename', {
      key: query.filename,
      include_docs: include_docs
    }).then(function (results) {
      cov_2hhud5wwfm.f[1]++;
      cov_2hhud5wwfm.s[5]++;
      return new _promise2.default(function (resolve) {
        cov_2hhud5wwfm.f[2]++;
        cov_2hhud5wwfm.s[6]++;
        return resolve(results.rows.map(function (doc) {
          cov_2hhud5wwfm.f[3]++;
          cov_2hhud5wwfm.s[7]++;
          return doc.doc;
        }));
      });
    });
  } else {
    cov_2hhud5wwfm.b[2][1]++;
    cov_2hhud5wwfm.s[8]++;

    return _plugDb2.default.viewAsync('assets', 'by_filename', {
      include_docs: include_docs
    }).then(function (results) {
      cov_2hhud5wwfm.f[4]++;
      cov_2hhud5wwfm.s[9]++;
      return new _promise2.default(function (resolve) {
        cov_2hhud5wwfm.f[5]++;
        cov_2hhud5wwfm.s[10]++;
        return resolve(results.rows.map(function (doc) {
          cov_2hhud5wwfm.f[6]++;
          cov_2hhud5wwfm.s[11]++;
          return doc.doc;
        }));
      });
    });
  }
};

/**
 * Gets a asset with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
cov_2hhud5wwfm.s[12]++;
var getAsset = exports.getAsset = function getAsset(_ref2) {
  var id = _ref2.id;
  cov_2hhud5wwfm.f[7]++;
  cov_2hhud5wwfm.s[13]++;
  return _plugDb2.default.getAsync(id).then(function (asset) {
    cov_2hhud5wwfm.f[8]++;
    cov_2hhud5wwfm.s[14]++;
    return (
      // verify that data is compliant before returning it
      (0, _schemas.dataIsValid)(asset, _plurishingSchemas.Asset)
    );
  });
};

/**
 * Gets a asset with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
cov_2hhud5wwfm.s[15]++;
var getAssetAttachment = exports.getAssetAttachment = function getAssetAttachment(_ref3) {
  var id = _ref3.id,
      filename = _ref3.filename;
  cov_2hhud5wwfm.f[9]++;
  cov_2hhud5wwfm.s[16]++;
  return new _promise2.default(function (resolve, reject) {
    cov_2hhud5wwfm.f[10]++;
    cov_2hhud5wwfm.s[17]++;

    _plugDb2.default.attachment.get(id, filename, function (err, body) {
      cov_2hhud5wwfm.f[11]++;
      cov_2hhud5wwfm.s[18]++;

      if (err) {
        cov_2hhud5wwfm.b[3][0]++;
        cov_2hhud5wwfm.s[19]++;

        reject(err);
      } else {
        cov_2hhud5wwfm.b[3][1]++;
        cov_2hhud5wwfm.s[20]++;

        resolve({ data: body, mimetype: (0, _mimeTypes.lookup)(filename) });
      }
    });
  });
};

/**
 * Creates a new asset
 * @param {object} asset
 * @param {object} data
 * @return {Promise}
 */
cov_2hhud5wwfm.s[21]++;
var createAsset = exports.createAsset = function createAsset(asset, data) {
  cov_2hhud5wwfm.f[12]++;

  var _ref4 = (cov_2hhud5wwfm.s[22]++, asset),
      filename = _ref4.filename;

  var mimeType = (cov_2hhud5wwfm.s[23]++, (0, _mimeTypes.lookup)(filename));
  // validate data
  cov_2hhud5wwfm.s[24]++;
  return (0, _schemas.dataIsValid)(asset, _plurishingSchemas.Asset)
  // create document
  .then(function () {
    cov_2hhud5wwfm.f[13]++;
    cov_2hhud5wwfm.s[25]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, asset, {
      mimetype: mimeType
    }));
  })
  // add attachment
  .then(function (op) {
    cov_2hhud5wwfm.f[14]++;

    var _ref5 = (cov_2hhud5wwfm.s[26]++, op),
        id = _ref5.id,
        rev = _ref5.rev;

    cov_2hhud5wwfm.s[27]++;


    return new _promise2.default(function (resolve, reject) {
      cov_2hhud5wwfm.f[15]++;
      cov_2hhud5wwfm.s[28]++;

      _plugDb2.default.attachment.insert(
      // doc id
      id,
      // attachment filename
      filename,
      // attachment data
      data,
      // doc mimetype
      mimeType,
      // doc rev
      { rev: rev },
      // callback
      function (err, body) {
        cov_2hhud5wwfm.f[16]++;
        cov_2hhud5wwfm.s[29]++;

        if (err) {
          cov_2hhud5wwfm.b[4][0]++;
          cov_2hhud5wwfm.s[30]++;

          reject(err);
        } else {
          cov_2hhud5wwfm.b[4][1]++;
          cov_2hhud5wwfm.s[31]++;

          resolve(body);
        }
      });
    });
  });
};

/**
 * Updates an asset
 * @param {string} id - id of the asset
 * @param {object} asset - asset data to update
 * @param {object} data - attachment data to update
 * @return {Promise}
 */
cov_2hhud5wwfm.s[32]++;
var updateAsset = exports.updateAsset = function updateAsset(assetId, _ref6, attachmentData) {
  var filename = _ref6.filename,
      mimetype = _ref6.mimetype;
  cov_2hhud5wwfm.f[17]++;
  cov_2hhud5wwfm.s[33]++;

  // get existing document
  return _plugDb2.default.getAsync(assetId)
  // then update document
  .then(function (asset) {
    cov_2hhud5wwfm.f[18]++;
    cov_2hhud5wwfm.s[34]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, asset, {
      filename: filename,
      mimetype: mimetype,
      rev: asset._rev
    }));
  })
  // destroy previous attachments
  .then(function () {
    cov_2hhud5wwfm.f[19]++;
    cov_2hhud5wwfm.s[35]++;
    return _plugDb2.default.getAsync(assetId);
  }).then(function (asset) {
    cov_2hhud5wwfm.f[20]++;

    var previousAttachment = (cov_2hhud5wwfm.s[36]++, (cov_2hhud5wwfm.b[5][0]++, asset._attachments) && (cov_2hhud5wwfm.b[5][1]++, (0, _keys2.default)(asset._attachments)[0]));
    cov_2hhud5wwfm.s[37]++;
    return new _promise2.default(function (resolve, reject) {
      cov_2hhud5wwfm.f[21]++;
      cov_2hhud5wwfm.s[38]++;

      if (previousAttachment) {
        cov_2hhud5wwfm.b[6][0]++;
        cov_2hhud5wwfm.s[39]++;

        _plugDb2.default.attachment.destroy(asset._id, encodeURIComponent(previousAttachment), { rev: asset._rev }, function (err, body) {
          cov_2hhud5wwfm.f[22]++;
          cov_2hhud5wwfm.s[40]++;

          if (err) {
            cov_2hhud5wwfm.b[7][0]++;
            cov_2hhud5wwfm.s[41]++;

            reject(err);
          } else {
              cov_2hhud5wwfm.b[7][1]++;
              cov_2hhud5wwfm.s[42]++;
              resolve(body);
            }
        });
      } else {
        cov_2hhud5wwfm.b[6][1]++;
      }
    });
  })
  // add new attachment
  .then(function (op) {
    cov_2hhud5wwfm.f[23]++;

    var _ref7 = (cov_2hhud5wwfm.s[43]++, op),
        id = _ref7.id,
        rev = _ref7.rev;

    cov_2hhud5wwfm.s[44]++;


    return new _promise2.default(function (resolve, reject) {
      cov_2hhud5wwfm.f[24]++;
      cov_2hhud5wwfm.s[45]++;

      _plugDb2.default.attachment.insert(
      // doc id
      id,
      // attachment filename
      filename,
      // attachment data
      attachmentData,
      // doc mimetype
      mimetype,
      // doc rev
      { rev: rev },
      // callback
      function (err, body) {
        cov_2hhud5wwfm.f[25]++;
        cov_2hhud5wwfm.s[46]++;

        if (err) {
          cov_2hhud5wwfm.b[8][0]++;
          cov_2hhud5wwfm.s[47]++;

          reject(err);
        } else {
          cov_2hhud5wwfm.b[8][1]++;
          cov_2hhud5wwfm.s[48]++;

          resolve(body);
        }
      });
    });
  });
};

/**
 * Deletes a asset
 * @param {object} asset - asset to delete
 * @return {Promise}
 */
cov_2hhud5wwfm.s[49]++;
var deleteAsset = exports.deleteAsset = function deleteAsset(_ref8) {
  var _id = _ref8._id;
  cov_2hhud5wwfm.f[26]++;
  cov_2hhud5wwfm.s[50]++;
  return _plugDb2.default.getAsync(_id).then(function (asset) {
    cov_2hhud5wwfm.f[27]++;
    cov_2hhud5wwfm.s[51]++;
    return _plugDb2.default.destroyAsync(_id, asset._rev);
  });
};