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
      hash = '06bc274fa52537d4696e4e9a4089254dace2de57',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/assets/assets.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 32
        }
      },
      '1': {
        start: {
          line: 26,
          column: 25
        },
        end: {
          line: 56,
          column: 1
        }
      },
      '2': {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 55,
          column: 3
        }
      },
      '3': {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 42,
          column: 6
        }
      },
      '4': {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 41,
          column: 11
        }
      },
      '5': {
        start: {
          line: 38,
          column: 12
        },
        end: {
          line: 40,
          column: 13
        }
      },
      '6': {
        start: {
          line: 39,
          column: 38
        },
        end: {
          line: 39,
          column: 45
        }
      },
      '7': {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 54,
          column: 6
        }
      },
      '8': {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 53,
          column: 11
        }
      },
      '9': {
        start: {
          line: 50,
          column: 12
        },
        end: {
          line: 52,
          column: 13
        }
      },
      '10': {
        start: {
          line: 51,
          column: 38
        },
        end: {
          line: 51,
          column: 45
        }
      },
      '11': {
        start: {
          line: 63,
          column: 24
        },
        end: {
          line: 70,
          column: 5
        }
      },
      '12': {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 70,
          column: 5
        }
      },
      '13': {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 32
        }
      },
      '14': {
        start: {
          line: 77,
          column: 34
        },
        end: {
          line: 89,
          column: 4
        }
      },
      '15': {
        start: {
          line: 81,
          column: 2
        },
        end: {
          line: 89,
          column: 4
        }
      },
      '16': {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 88,
          column: 7
        }
      },
      '17': {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 87,
          column: 7
        }
      },
      '18': {
        start: {
          line: 84,
          column: 8
        },
        end: {
          line: 84,
          column: 20
        }
      },
      '19': {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 86,
          column: 58
        }
      },
      '20': {
        start: {
          line: 98,
          column: 27
        },
        end: {
          line: 137,
          column: 1
        }
      },
      '21': {
        start: {
          line: 99,
          column: 21
        },
        end: {
          line: 99,
          column: 26
        }
      },
      '22': {
        start: {
          line: 100,
          column: 19
        },
        end: {
          line: 100,
          column: 35
        }
      },
      '23': {
        start: {
          line: 102,
          column: 2
        },
        end: {
          line: 136,
          column: 5
        }
      },
      '24': {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 108,
          column: 6
        }
      },
      '25': {
        start: {
          line: 112,
          column: 22
        },
        end: {
          line: 112,
          column: 24
        }
      },
      '26': {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 135,
          column: 7
        }
      },
      '27': {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 134,
          column: 8
        }
      },
      '28': {
        start: {
          line: 128,
          column: 10
        },
        end: {
          line: 132,
          column: 11
        }
      },
      '29': {
        start: {
          line: 129,
          column: 12
        },
        end: {
          line: 129,
          column: 24
        }
      },
      '30': {
        start: {
          line: 131,
          column: 12
        },
        end: {
          line: 131,
          column: 26
        }
      },
      '31': {
        start: {
          line: 146,
          column: 27
        },
        end: {
          line: 202,
          column: 1
        }
      },
      '32': {
        start: {
          line: 148,
          column: 2
        },
        end: {
          line: 201,
          column: 13
        }
      },
      '33': {
        start: {
          line: 151,
          column: 12
        },
        end: {
          line: 156,
          column: 14
        }
      },
      '34': {
        start: {
          line: 160,
          column: 12
        },
        end: {
          line: 160,
          column: 32
        }
      },
      '35': {
        start: {
          line: 163,
          column: 40
        },
        end: {
          line: 163,
          column: 96
        }
      },
      '36': {
        start: {
          line: 164,
          column: 12
        },
        end: {
          line: 173,
          column: 15
        }
      },
      '37': {
        start: {
          line: 165,
          column: 14
        },
        end: {
          line: 172,
          column: 15
        }
      },
      '38': {
        start: {
          line: 166,
          column: 16
        },
        end: {
          line: 171,
          column: 21
        }
      },
      '39': {
        start: {
          line: 168,
          column: 20
        },
        end: {
          line: 170,
          column: 41
        }
      },
      '40': {
        start: {
          line: 169,
          column: 22
        },
        end: {
          line: 169,
          column: 34
        }
      },
      '41': {
        start: {
          line: 170,
          column: 27
        },
        end: {
          line: 170,
          column: 41
        }
      },
      '42': {
        start: {
          line: 177,
          column: 30
        },
        end: {
          line: 177,
          column: 32
        }
      },
      '43': {
        start: {
          line: 179,
          column: 12
        },
        end: {
          line: 200,
          column: 15
        }
      },
      '44': {
        start: {
          line: 180,
          column: 14
        },
        end: {
          line: 199,
          column: 16
        }
      },
      '45': {
        start: {
          line: 193,
          column: 18
        },
        end: {
          line: 197,
          column: 19
        }
      },
      '46': {
        start: {
          line: 194,
          column: 20
        },
        end: {
          line: 194,
          column: 32
        }
      },
      '47': {
        start: {
          line: 196,
          column: 20
        },
        end: {
          line: 196,
          column: 34
        }
      },
      '48': {
        start: {
          line: 209,
          column: 27
        },
        end: {
          line: 211,
          column: 52
        }
      },
      '49': {
        start: {
          line: 210,
          column: 2
        },
        end: {
          line: 211,
          column: 52
        }
      },
      '50': {
        start: {
          line: 211,
          column: 19
        },
        end: {
          line: 211,
          column: 51
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 26,
            column: 25
          },
          end: {
            line: 26,
            column: 26
          }
        },
        loc: {
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 56,
            column: 1
          }
        },
        line: 29
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 35,
            column: 6
          },
          end: {
            line: 35,
            column: 7
          }
        },
        loc: {
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 41,
            column: 11
          }
        },
        line: 36
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 37,
            column: 10
          },
          end: {
            line: 37,
            column: 11
          }
        },
        loc: {
          start: {
            line: 38,
            column: 12
          },
          end: {
            line: 40,
            column: 13
          }
        },
        line: 38
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 39,
            column: 31
          },
          end: {
            line: 39,
            column: 32
          }
        },
        loc: {
          start: {
            line: 39,
            column: 38
          },
          end: {
            line: 39,
            column: 45
          }
        },
        line: 39
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 47,
            column: 7
          }
        },
        loc: {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 53,
            column: 11
          }
        },
        line: 48
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 49,
            column: 10
          },
          end: {
            line: 49,
            column: 11
          }
        },
        loc: {
          start: {
            line: 50,
            column: 12
          },
          end: {
            line: 52,
            column: 13
          }
        },
        line: 50
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 51,
            column: 31
          },
          end: {
            line: 51,
            column: 32
          }
        },
        loc: {
          start: {
            line: 51,
            column: 38
          },
          end: {
            line: 51,
            column: 45
          }
        },
        line: 51
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 63,
            column: 24
          },
          end: {
            line: 63,
            column: 25
          }
        },
        loc: {
          start: {
            line: 66,
            column: 2
          },
          end: {
            line: 70,
            column: 5
          }
        },
        line: 66
      },
      '8': {
        name: '(anonymous_8)',
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
            line: 69,
            column: 6
          },
          end: {
            line: 69,
            column: 32
          }
        },
        line: 69
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 77,
            column: 34
          },
          end: {
            line: 77,
            column: 35
          }
        },
        loc: {
          start: {
            line: 81,
            column: 2
          },
          end: {
            line: 89,
            column: 4
          }
        },
        line: 81
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 81,
            column: 14
          },
          end: {
            line: 81,
            column: 15
          }
        },
        loc: {
          start: {
            line: 81,
            column: 35
          },
          end: {
            line: 89,
            column: 3
          }
        },
        line: 81
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 82,
            column: 36
          },
          end: {
            line: 82,
            column: 37
          }
        },
        loc: {
          start: {
            line: 82,
            column: 51
          },
          end: {
            line: 88,
            column: 5
          }
        },
        line: 82
      },
      '12': {
        name: '(anonymous_12)',
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
            column: 44
          },
          end: {
            line: 137,
            column: 1
          }
        },
        line: 98
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 104,
            column: 8
          },
          end: {
            line: 104,
            column: 9
          }
        },
        loc: {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 108,
            column: 6
          }
        },
        line: 105
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 111,
            column: 8
          },
          end: {
            line: 111,
            column: 9
          }
        },
        loc: {
          start: {
            line: 111,
            column: 14
          },
          end: {
            line: 136,
            column: 3
          }
        },
        line: 111
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 114,
            column: 23
          },
          end: {
            line: 114,
            column: 24
          }
        },
        loc: {
          start: {
            line: 114,
            column: 44
          },
          end: {
            line: 135,
            column: 5
          }
        },
        line: 114
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 127,
            column: 9
          }
        },
        loc: {
          start: {
            line: 127,
            column: 23
          },
          end: {
            line: 133,
            column: 9
          }
        },
        line: 127
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 146,
            column: 27
          },
          end: {
            line: 146,
            column: 28
          }
        },
        loc: {
          start: {
            line: 146,
            column: 78
          },
          end: {
            line: 202,
            column: 1
          }
        },
        line: 146
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 150,
            column: 16
          },
          end: {
            line: 150,
            column: 17
          }
        },
        loc: {
          start: {
            line: 151,
            column: 12
          },
          end: {
            line: 156,
            column: 14
          }
        },
        line: 151
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 159,
            column: 16
          },
          end: {
            line: 159,
            column: 17
          }
        },
        loc: {
          start: {
            line: 160,
            column: 12
          },
          end: {
            line: 160,
            column: 32
          }
        },
        line: 160
      },
      '20': {
        name: '(anonymous_20)',
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
            line: 162,
            column: 25
          },
          end: {
            line: 174,
            column: 11
          }
        },
        line: 162
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 164,
            column: 31
          },
          end: {
            line: 164,
            column: 32
          }
        },
        loc: {
          start: {
            line: 164,
            column: 52
          },
          end: {
            line: 173,
            column: 13
          }
        },
        line: 164
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 167,
            column: 18
          },
          end: {
            line: 167,
            column: 19
          }
        },
        loc: {
          start: {
            line: 167,
            column: 33
          },
          end: {
            line: 171,
            column: 19
          }
        },
        line: 167
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 176,
            column: 16
          },
          end: {
            line: 176,
            column: 17
          }
        },
        loc: {
          start: {
            line: 176,
            column: 22
          },
          end: {
            line: 201,
            column: 11
          }
        },
        line: 176
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 179,
            column: 31
          },
          end: {
            line: 179,
            column: 32
          }
        },
        loc: {
          start: {
            line: 179,
            column: 52
          },
          end: {
            line: 200,
            column: 13
          }
        },
        line: 179
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 192,
            column: 16
          },
          end: {
            line: 192,
            column: 17
          }
        },
        loc: {
          start: {
            line: 192,
            column: 31
          },
          end: {
            line: 198,
            column: 17
          }
        },
        line: 192
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 209,
            column: 27
          },
          end: {
            line: 209,
            column: 28
          }
        },
        loc: {
          start: {
            line: 210,
            column: 2
          },
          end: {
            line: 211,
            column: 52
          }
        },
        line: 210
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 211,
            column: 10
          },
          end: {
            line: 211,
            column: 11
          }
        },
        loc: {
          start: {
            line: 211,
            column: 19
          },
          end: {
            line: 211,
            column: 51
          }
        },
        line: 211
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 27,
            column: 12
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 27,
            column: 10
          },
          end: {
            line: 27,
            column: 12
          }
        }],
        line: 27
      },
      '1': {
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 21
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 28,
            column: 17
          },
          end: {
            line: 28,
            column: 21
          }
        }],
        line: 28
      },
      '2': {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        }, {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        }],
        line: 30
      },
      '3': {
        loc: {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        }, {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        }],
        line: 83
      },
      '4': {
        loc: {
          start: {
            line: 128,
            column: 10
          },
          end: {
            line: 132,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 128,
            column: 10
          },
          end: {
            line: 132,
            column: 11
          }
        }, {
          start: {
            line: 128,
            column: 10
          },
          end: {
            line: 132,
            column: 11
          }
        }],
        line: 128
      },
      '5': {
        loc: {
          start: {
            line: 163,
            column: 40
          },
          end: {
            line: 163,
            column: 96
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 163,
            column: 40
          },
          end: {
            line: 163,
            column: 58
          }
        }, {
          start: {
            line: 163,
            column: 62
          },
          end: {
            line: 163,
            column: 96
          }
        }],
        line: 163
      },
      '6': {
        loc: {
          start: {
            line: 165,
            column: 14
          },
          end: {
            line: 172,
            column: 15
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 165,
            column: 14
          },
          end: {
            line: 172,
            column: 15
          }
        }, {
          start: {
            line: 165,
            column: 14
          },
          end: {
            line: 172,
            column: 15
          }
        }],
        line: 165
      },
      '7': {
        loc: {
          start: {
            line: 168,
            column: 20
          },
          end: {
            line: 170,
            column: 41
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 168,
            column: 20
          },
          end: {
            line: 170,
            column: 41
          }
        }, {
          start: {
            line: 168,
            column: 20
          },
          end: {
            line: 170,
            column: 41
          }
        }],
        line: 168
      },
      '8': {
        loc: {
          start: {
            line: 193,
            column: 18
          },
          end: {
            line: 197,
            column: 19
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 193,
            column: 18
          },
          end: {
            line: 197,
            column: 19
          }
        }, {
          start: {
            line: 193,
            column: 18
          },
          end: {
            line: 197,
            column: 19
          }
        }],
        line: 193
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
      '50': 0
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

var _asset = require('./asset.schema');

var _asset2 = _interopRequireDefault(_asset);

var _assets = require('./assets.design');

var _assets2 = _interopRequireDefault(_assets);

var _couchdb = require('../../utils/couchdb');

var _schemas = require('../../utils/schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Registering couchdb views related to assets objects
 */
cov_2hhud5wwfm.s[0]++;
(0, _couchdb.addDesign)(_plugDb2.default, 'assets', _assets2.default);

/**
 * Gets a list of assets with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
cov_2hhud5wwfm.s[1]++;
var getAssets = exports.getAssets = function getAssets(_ref) {
  var _ref$query = _ref.query,
      query = _ref$query === undefined ? (cov_2hhud5wwfm.b[0][0]++, {}) : _ref$query,
      _ref$include_docs = _ref.include_docs,
      include_docs = _ref$include_docs === undefined ? (cov_2hhud5wwfm.b[1][0]++, true) : _ref$include_docs;
  cov_2hhud5wwfm.f[0]++;
  cov_2hhud5wwfm.s[2]++;

  if (query.filename) {
    cov_2hhud5wwfm.b[2][0]++;
    cov_2hhud5wwfm.s[3]++;

    return _plugDb2.default.viewAsync('assets', 'by_filename', {
      key: query.filename,
      include_docs: include_docs
    }).then(function (results) {
      cov_2hhud5wwfm.f[1]++;
      cov_2hhud5wwfm.s[4]++;
      return new _promise2.default(function (resolve) {
        cov_2hhud5wwfm.f[2]++;
        cov_2hhud5wwfm.s[5]++;
        return resolve(results.rows.map(function (doc) {
          cov_2hhud5wwfm.f[3]++;
          cov_2hhud5wwfm.s[6]++;
          return doc.doc;
        }));
      });
    });
  } else {
    cov_2hhud5wwfm.b[2][1]++;
    cov_2hhud5wwfm.s[7]++;

    return _plugDb2.default.viewAsync('assets', 'by_filename', {
      include_docs: include_docs
    }).then(function (results) {
      cov_2hhud5wwfm.f[4]++;
      cov_2hhud5wwfm.s[8]++;
      return new _promise2.default(function (resolve) {
        cov_2hhud5wwfm.f[5]++;
        cov_2hhud5wwfm.s[9]++;
        return resolve(results.rows.map(function (doc) {
          cov_2hhud5wwfm.f[6]++;
          cov_2hhud5wwfm.s[10]++;
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
cov_2hhud5wwfm.s[11]++;
var getAsset = exports.getAsset = function getAsset(_ref2) {
  var id = _ref2.id;
  cov_2hhud5wwfm.f[7]++;
  cov_2hhud5wwfm.s[12]++;
  return _plugDb2.default.getAsync(id).then(function (asset) {
    cov_2hhud5wwfm.f[8]++;
    cov_2hhud5wwfm.s[13]++;
    return (
      // verify that data is compliant before returning it
      (0, _schemas.dataIsValid)(asset, _asset2.default)
    );
  });
};

/**
 * Gets a asset with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
cov_2hhud5wwfm.s[14]++;
var getAssetAttachment = exports.getAssetAttachment = function getAssetAttachment(_ref3) {
  var id = _ref3.id,
      filename = _ref3.filename;
  cov_2hhud5wwfm.f[9]++;
  cov_2hhud5wwfm.s[15]++;
  return new _promise2.default(function (resolve, reject) {
    cov_2hhud5wwfm.f[10]++;
    cov_2hhud5wwfm.s[16]++;

    _plugDb2.default.attachment.get(id, filename, function (err, body) {
      cov_2hhud5wwfm.f[11]++;
      cov_2hhud5wwfm.s[17]++;

      if (err) {
        cov_2hhud5wwfm.b[3][0]++;
        cov_2hhud5wwfm.s[18]++;

        reject(err);
      } else {
        cov_2hhud5wwfm.b[3][1]++;
        cov_2hhud5wwfm.s[19]++;

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
cov_2hhud5wwfm.s[20]++;
var createAsset = exports.createAsset = function createAsset(asset, data) {
  cov_2hhud5wwfm.f[12]++;

  var _ref4 = (cov_2hhud5wwfm.s[21]++, asset),
      filename = _ref4.filename;

  var mimeType = (cov_2hhud5wwfm.s[22]++, (0, _mimeTypes.lookup)(filename));
  // validate data
  cov_2hhud5wwfm.s[23]++;
  return (0, _schemas.dataIsValid)(asset, _asset2.default)
  // create document
  .then(function () {
    cov_2hhud5wwfm.f[13]++;
    cov_2hhud5wwfm.s[24]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, asset, {
      mimetype: mimeType
    }));
  })
  // add attachment
  .then(function (op) {
    cov_2hhud5wwfm.f[14]++;

    var _ref5 = (cov_2hhud5wwfm.s[25]++, op),
        id = _ref5.id,
        rev = _ref5.rev;

    cov_2hhud5wwfm.s[26]++;


    return new _promise2.default(function (resolve, reject) {
      cov_2hhud5wwfm.f[15]++;
      cov_2hhud5wwfm.s[27]++;

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
        cov_2hhud5wwfm.s[28]++;

        if (err) {
          cov_2hhud5wwfm.b[4][0]++;
          cov_2hhud5wwfm.s[29]++;

          reject(err);
        } else {
          cov_2hhud5wwfm.b[4][1]++;
          cov_2hhud5wwfm.s[30]++;

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
cov_2hhud5wwfm.s[31]++;
var updateAsset = exports.updateAsset = function updateAsset(assetId, _ref6, attachmentData) {
  var filename = _ref6.filename,
      mimetype = _ref6.mimetype;
  cov_2hhud5wwfm.f[17]++;
  cov_2hhud5wwfm.s[32]++;

  // get existing document
  return _plugDb2.default.getAsync(assetId)
  // then update document
  .then(function (asset) {
    cov_2hhud5wwfm.f[18]++;
    cov_2hhud5wwfm.s[33]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, asset, {
      filename: filename,
      mimetype: mimetype,
      rev: asset._rev
    }));
  })
  // destroy previous attachments
  .then(function () {
    cov_2hhud5wwfm.f[19]++;
    cov_2hhud5wwfm.s[34]++;
    return _plugDb2.default.getAsync(assetId);
  }).then(function (asset) {
    cov_2hhud5wwfm.f[20]++;

    var previousAttachment = (cov_2hhud5wwfm.s[35]++, (cov_2hhud5wwfm.b[5][0]++, asset._attachments) && (cov_2hhud5wwfm.b[5][1]++, (0, _keys2.default)(asset._attachments)[0]));
    cov_2hhud5wwfm.s[36]++;
    return new _promise2.default(function (resolve, reject) {
      cov_2hhud5wwfm.f[21]++;
      cov_2hhud5wwfm.s[37]++;

      if (previousAttachment) {
        cov_2hhud5wwfm.b[6][0]++;
        cov_2hhud5wwfm.s[38]++;

        _plugDb2.default.attachment.destroy(asset._id, encodeURIComponent(previousAttachment), { rev: asset._rev }, function (err, body) {
          cov_2hhud5wwfm.f[22]++;
          cov_2hhud5wwfm.s[39]++;

          if (err) {
            cov_2hhud5wwfm.b[7][0]++;
            cov_2hhud5wwfm.s[40]++;

            reject(err);
          } else {
              cov_2hhud5wwfm.b[7][1]++;
              cov_2hhud5wwfm.s[41]++;
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

    var _ref7 = (cov_2hhud5wwfm.s[42]++, op),
        id = _ref7.id,
        rev = _ref7.rev;

    cov_2hhud5wwfm.s[43]++;


    return new _promise2.default(function (resolve, reject) {
      cov_2hhud5wwfm.f[24]++;
      cov_2hhud5wwfm.s[44]++;

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
        cov_2hhud5wwfm.s[45]++;

        if (err) {
          cov_2hhud5wwfm.b[8][0]++;
          cov_2hhud5wwfm.s[46]++;

          reject(err);
        } else {
          cov_2hhud5wwfm.b[8][1]++;
          cov_2hhud5wwfm.s[47]++;

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
cov_2hhud5wwfm.s[48]++;
var deleteAsset = exports.deleteAsset = function deleteAsset(_ref8) {
  var _id = _ref8._id;
  cov_2hhud5wwfm.f[26]++;
  cov_2hhud5wwfm.s[49]++;
  return _plugDb2.default.getAsync(_id).then(function (asset) {
    cov_2hhud5wwfm.f[27]++;
    cov_2hhud5wwfm.s[50]++;
    return _plugDb2.default.destroyAsync(_id, asset._rev);
  });
};