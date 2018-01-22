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

var cov_2fn4dh385k = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/assets/assets.dal.js',
      hash = '04872eae24ea7a2bfe05ea33f7b744c61870d841',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/assets/assets.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 32
        }
      },
      '1': {
        start: {
          line: 28,
          column: 25
        },
        end: {
          line: 58,
          column: 1
        }
      },
      '2': {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 57,
          column: 3
        }
      },
      '3': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 44,
          column: 6
        }
      },
      '4': {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 43,
          column: 11
        }
      },
      '5': {
        start: {
          line: 40,
          column: 12
        },
        end: {
          line: 42,
          column: 13
        }
      },
      '6': {
        start: {
          line: 41,
          column: 38
        },
        end: {
          line: 41,
          column: 45
        }
      },
      '7': {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 56,
          column: 6
        }
      },
      '8': {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 55,
          column: 11
        }
      },
      '9': {
        start: {
          line: 52,
          column: 12
        },
        end: {
          line: 54,
          column: 13
        }
      },
      '10': {
        start: {
          line: 53,
          column: 38
        },
        end: {
          line: 53,
          column: 45
        }
      },
      '11': {
        start: {
          line: 65,
          column: 24
        },
        end: {
          line: 72,
          column: 5
        }
      },
      '12': {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 72,
          column: 5
        }
      },
      '13': {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 71,
          column: 32
        }
      },
      '14': {
        start: {
          line: 79,
          column: 34
        },
        end: {
          line: 95,
          column: 4
        }
      },
      '15': {
        start: {
          line: 84,
          column: 2
        },
        end: {
          line: 95,
          column: 4
        }
      },
      '16': {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 94,
          column: 7
        }
      },
      '17': {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 93,
          column: 7
        }
      },
      '18': {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 87,
          column: 20
        }
      },
      '19': {
        start: {
          line: 89,
          column: 24
        },
        end: {
          line: 91,
          column: 16
        }
      },
      '20': {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 92,
          column: 61
        }
      },
      '21': {
        start: {
          line: 104,
          column: 27
        },
        end: {
          line: 143,
          column: 1
        }
      },
      '22': {
        start: {
          line: 105,
          column: 21
        },
        end: {
          line: 105,
          column: 26
        }
      },
      '23': {
        start: {
          line: 106,
          column: 19
        },
        end: {
          line: 106,
          column: 65
        }
      },
      '24': {
        start: {
          line: 108,
          column: 2
        },
        end: {
          line: 142,
          column: 5
        }
      },
      '25': {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 114,
          column: 6
        }
      },
      '26': {
        start: {
          line: 118,
          column: 22
        },
        end: {
          line: 118,
          column: 24
        }
      },
      '27': {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 141,
          column: 7
        }
      },
      '28': {
        start: {
          line: 121,
          column: 6
        },
        end: {
          line: 140,
          column: 8
        }
      },
      '29': {
        start: {
          line: 134,
          column: 10
        },
        end: {
          line: 138,
          column: 11
        }
      },
      '30': {
        start: {
          line: 135,
          column: 12
        },
        end: {
          line: 135,
          column: 24
        }
      },
      '31': {
        start: {
          line: 137,
          column: 12
        },
        end: {
          line: 137,
          column: 26
        }
      },
      '32': {
        start: {
          line: 152,
          column: 27
        },
        end: {
          line: 208,
          column: 1
        }
      },
      '33': {
        start: {
          line: 154,
          column: 2
        },
        end: {
          line: 207,
          column: 13
        }
      },
      '34': {
        start: {
          line: 157,
          column: 12
        },
        end: {
          line: 162,
          column: 14
        }
      },
      '35': {
        start: {
          line: 166,
          column: 12
        },
        end: {
          line: 166,
          column: 32
        }
      },
      '36': {
        start: {
          line: 169,
          column: 40
        },
        end: {
          line: 169,
          column: 96
        }
      },
      '37': {
        start: {
          line: 170,
          column: 12
        },
        end: {
          line: 179,
          column: 15
        }
      },
      '38': {
        start: {
          line: 171,
          column: 14
        },
        end: {
          line: 178,
          column: 15
        }
      },
      '39': {
        start: {
          line: 172,
          column: 16
        },
        end: {
          line: 177,
          column: 21
        }
      },
      '40': {
        start: {
          line: 174,
          column: 20
        },
        end: {
          line: 176,
          column: 41
        }
      },
      '41': {
        start: {
          line: 175,
          column: 22
        },
        end: {
          line: 175,
          column: 34
        }
      },
      '42': {
        start: {
          line: 176,
          column: 27
        },
        end: {
          line: 176,
          column: 41
        }
      },
      '43': {
        start: {
          line: 183,
          column: 30
        },
        end: {
          line: 183,
          column: 32
        }
      },
      '44': {
        start: {
          line: 185,
          column: 12
        },
        end: {
          line: 206,
          column: 15
        }
      },
      '45': {
        start: {
          line: 186,
          column: 14
        },
        end: {
          line: 205,
          column: 16
        }
      },
      '46': {
        start: {
          line: 199,
          column: 18
        },
        end: {
          line: 203,
          column: 19
        }
      },
      '47': {
        start: {
          line: 200,
          column: 20
        },
        end: {
          line: 200,
          column: 32
        }
      },
      '48': {
        start: {
          line: 202,
          column: 20
        },
        end: {
          line: 202,
          column: 34
        }
      },
      '49': {
        start: {
          line: 215,
          column: 27
        },
        end: {
          line: 217,
          column: 52
        }
      },
      '50': {
        start: {
          line: 216,
          column: 2
        },
        end: {
          line: 217,
          column: 52
        }
      },
      '51': {
        start: {
          line: 217,
          column: 19
        },
        end: {
          line: 217,
          column: 51
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 28,
            column: 25
          },
          end: {
            line: 28,
            column: 26
          }
        },
        loc: {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 31
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 37,
            column: 6
          },
          end: {
            line: 37,
            column: 7
          }
        },
        loc: {
          start: {
            line: 38,
            column: 8
          },
          end: {
            line: 43,
            column: 11
          }
        },
        line: 38
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 39,
            column: 10
          },
          end: {
            line: 39,
            column: 11
          }
        },
        loc: {
          start: {
            line: 40,
            column: 12
          },
          end: {
            line: 42,
            column: 13
          }
        },
        line: 40
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 41,
            column: 31
          },
          end: {
            line: 41,
            column: 32
          }
        },
        loc: {
          start: {
            line: 41,
            column: 38
          },
          end: {
            line: 41,
            column: 45
          }
        },
        line: 41
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 49,
            column: 7
          }
        },
        loc: {
          start: {
            line: 50,
            column: 8
          },
          end: {
            line: 55,
            column: 11
          }
        },
        line: 50
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 51,
            column: 10
          },
          end: {
            line: 51,
            column: 11
          }
        },
        loc: {
          start: {
            line: 52,
            column: 12
          },
          end: {
            line: 54,
            column: 13
          }
        },
        line: 52
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 53,
            column: 31
          },
          end: {
            line: 53,
            column: 32
          }
        },
        loc: {
          start: {
            line: 53,
            column: 38
          },
          end: {
            line: 53,
            column: 45
          }
        },
        line: 53
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 65,
            column: 24
          },
          end: {
            line: 65,
            column: 25
          }
        },
        loc: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 72,
            column: 5
          }
        },
        line: 68
      },
      '8': {
        name: '(anonymous_8)',
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
            line: 71,
            column: 6
          },
          end: {
            line: 71,
            column: 32
          }
        },
        line: 71
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 79,
            column: 34
          },
          end: {
            line: 79,
            column: 35
          }
        },
        loc: {
          start: {
            line: 84,
            column: 2
          },
          end: {
            line: 95,
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
            line: 95,
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
            line: 94,
            column: 5
          }
        },
        line: 85
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 104,
            column: 27
          },
          end: {
            line: 104,
            column: 28
          }
        },
        loc: {
          start: {
            line: 104,
            column: 44
          },
          end: {
            line: 143,
            column: 1
          }
        },
        line: 104
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 110,
            column: 8
          },
          end: {
            line: 110,
            column: 9
          }
        },
        loc: {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 114,
            column: 6
          }
        },
        line: 111
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 117,
            column: 8
          },
          end: {
            line: 117,
            column: 9
          }
        },
        loc: {
          start: {
            line: 117,
            column: 14
          },
          end: {
            line: 142,
            column: 3
          }
        },
        line: 117
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 120,
            column: 23
          },
          end: {
            line: 120,
            column: 24
          }
        },
        loc: {
          start: {
            line: 120,
            column: 44
          },
          end: {
            line: 141,
            column: 5
          }
        },
        line: 120
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 133,
            column: 9
          }
        },
        loc: {
          start: {
            line: 133,
            column: 23
          },
          end: {
            line: 139,
            column: 9
          }
        },
        line: 133
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 152,
            column: 27
          },
          end: {
            line: 152,
            column: 28
          }
        },
        loc: {
          start: {
            line: 152,
            column: 78
          },
          end: {
            line: 208,
            column: 1
          }
        },
        line: 152
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 156,
            column: 16
          },
          end: {
            line: 156,
            column: 17
          }
        },
        loc: {
          start: {
            line: 157,
            column: 12
          },
          end: {
            line: 162,
            column: 14
          }
        },
        line: 157
      },
      '19': {
        name: '(anonymous_19)',
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
            line: 166,
            column: 12
          },
          end: {
            line: 166,
            column: 32
          }
        },
        line: 166
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 168,
            column: 16
          },
          end: {
            line: 168,
            column: 17
          }
        },
        loc: {
          start: {
            line: 168,
            column: 25
          },
          end: {
            line: 180,
            column: 11
          }
        },
        line: 168
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 170,
            column: 31
          },
          end: {
            line: 170,
            column: 32
          }
        },
        loc: {
          start: {
            line: 170,
            column: 52
          },
          end: {
            line: 179,
            column: 13
          }
        },
        line: 170
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 173,
            column: 18
          },
          end: {
            line: 173,
            column: 19
          }
        },
        loc: {
          start: {
            line: 173,
            column: 33
          },
          end: {
            line: 177,
            column: 19
          }
        },
        line: 173
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 182,
            column: 16
          },
          end: {
            line: 182,
            column: 17
          }
        },
        loc: {
          start: {
            line: 182,
            column: 22
          },
          end: {
            line: 207,
            column: 11
          }
        },
        line: 182
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 185,
            column: 31
          },
          end: {
            line: 185,
            column: 32
          }
        },
        loc: {
          start: {
            line: 185,
            column: 52
          },
          end: {
            line: 206,
            column: 13
          }
        },
        line: 185
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 198,
            column: 16
          },
          end: {
            line: 198,
            column: 17
          }
        },
        loc: {
          start: {
            line: 198,
            column: 31
          },
          end: {
            line: 204,
            column: 17
          }
        },
        line: 198
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 215,
            column: 27
          },
          end: {
            line: 215,
            column: 28
          }
        },
        loc: {
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 217,
            column: 52
          }
        },
        line: 216
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 217,
            column: 10
          },
          end: {
            line: 217,
            column: 11
          }
        },
        loc: {
          start: {
            line: 217,
            column: 19
          },
          end: {
            line: 217,
            column: 51
          }
        },
        line: 217
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 12
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 29,
            column: 10
          },
          end: {
            line: 29,
            column: 12
          }
        }],
        line: 29
      },
      '1': {
        loc: {
          start: {
            line: 30,
            column: 2
          },
          end: {
            line: 30,
            column: 21
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 30,
            column: 17
          },
          end: {
            line: 30,
            column: 21
          }
        }],
        line: 30
      },
      '2': {
        loc: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        }, {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        }],
        line: 32
      },
      '3': {
        loc: {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 93,
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
            line: 93,
            column: 7
          }
        }, {
          start: {
            line: 86,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        }],
        line: 86
      },
      '4': {
        loc: {
          start: {
            line: 89,
            column: 24
          },
          end: {
            line: 91,
            column: 16
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 90,
            column: 10
          },
          end: {
            line: 90,
            column: 56
          }
        }, {
          start: {
            line: 91,
            column: 12
          },
          end: {
            line: 91,
            column: 16
          }
        }],
        line: 89
      },
      '5': {
        loc: {
          start: {
            line: 106,
            column: 19
          },
          end: {
            line: 106,
            column: 65
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 106,
            column: 19
          },
          end: {
            line: 106,
            column: 35
          }
        }, {
          start: {
            line: 106,
            column: 39
          },
          end: {
            line: 106,
            column: 65
          }
        }],
        line: 106
      },
      '6': {
        loc: {
          start: {
            line: 134,
            column: 10
          },
          end: {
            line: 138,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 134,
            column: 10
          },
          end: {
            line: 138,
            column: 11
          }
        }, {
          start: {
            line: 134,
            column: 10
          },
          end: {
            line: 138,
            column: 11
          }
        }],
        line: 134
      },
      '7': {
        loc: {
          start: {
            line: 169,
            column: 40
          },
          end: {
            line: 169,
            column: 96
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 169,
            column: 40
          },
          end: {
            line: 169,
            column: 58
          }
        }, {
          start: {
            line: 169,
            column: 62
          },
          end: {
            line: 169,
            column: 96
          }
        }],
        line: 169
      },
      '8': {
        loc: {
          start: {
            line: 171,
            column: 14
          },
          end: {
            line: 178,
            column: 15
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 171,
            column: 14
          },
          end: {
            line: 178,
            column: 15
          }
        }, {
          start: {
            line: 171,
            column: 14
          },
          end: {
            line: 178,
            column: 15
          }
        }],
        line: 171
      },
      '9': {
        loc: {
          start: {
            line: 174,
            column: 20
          },
          end: {
            line: 176,
            column: 41
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 174,
            column: 20
          },
          end: {
            line: 176,
            column: 41
          }
        }, {
          start: {
            line: 174,
            column: 20
          },
          end: {
            line: 176,
            column: 41
          }
        }],
        line: 174
      },
      '10': {
        loc: {
          start: {
            line: 199,
            column: 18
          },
          end: {
            line: 203,
            column: 19
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 199,
            column: 18
          },
          end: {
            line: 203,
            column: 19
          }
        }, {
          start: {
            line: 199,
            column: 18
          },
          end: {
            line: 203,
            column: 19
          }
        }],
        line: 199
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
      * This module provides couchdb database operations managers
      * for the assets component.
      * @module metis-backend/components/assets
      */

var _mimeTypes = require('mime-types');

var _plugDb = require('../../utils/plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

var _metisSchemas = require('metis-schemas');

var _assets = require('./assets.design');

var _assets2 = _interopRequireDefault(_assets);

var _couchdb = require('../../utils/couchdb');

var _schemas = require('../../utils/schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Registering couchdb views related to assets objects
 */
cov_2fn4dh385k.s[0]++;
(0, _couchdb.addDesign)(_plugDb2.default, 'assets', _assets2.default);

/**
 * Gets a list of assets with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
cov_2fn4dh385k.s[1]++;
var getAssets = exports.getAssets = function getAssets(_ref) {
  var _ref$query = _ref.query,
      query = _ref$query === undefined ? (cov_2fn4dh385k.b[0][0]++, {}) : _ref$query,
      _ref$include_docs = _ref.include_docs,
      include_docs = _ref$include_docs === undefined ? (cov_2fn4dh385k.b[1][0]++, true) : _ref$include_docs;
  cov_2fn4dh385k.f[0]++;
  cov_2fn4dh385k.s[2]++;

  if (query.filename) {
    cov_2fn4dh385k.b[2][0]++;
    cov_2fn4dh385k.s[3]++;

    return _plugDb2.default.viewAsync('assets', 'by_filename', {
      key: query.filename,
      include_docs: include_docs
    }).then(function (results) {
      cov_2fn4dh385k.f[1]++;
      cov_2fn4dh385k.s[4]++;
      return new _promise2.default(function (resolve) {
        cov_2fn4dh385k.f[2]++;
        cov_2fn4dh385k.s[5]++;
        return resolve(results.rows.map(function (doc) {
          cov_2fn4dh385k.f[3]++;
          cov_2fn4dh385k.s[6]++;
          return doc.doc;
        }));
      });
    });
  } else {
    cov_2fn4dh385k.b[2][1]++;
    cov_2fn4dh385k.s[7]++;

    return _plugDb2.default.viewAsync('assets', 'by_filename', {
      include_docs: include_docs
    }).then(function (results) {
      cov_2fn4dh385k.f[4]++;
      cov_2fn4dh385k.s[8]++;
      return new _promise2.default(function (resolve) {
        cov_2fn4dh385k.f[5]++;
        cov_2fn4dh385k.s[9]++;
        return resolve(results.rows.map(function (doc) {
          cov_2fn4dh385k.f[6]++;
          cov_2fn4dh385k.s[10]++;
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
cov_2fn4dh385k.s[11]++;
var getAsset = exports.getAsset = function getAsset(_ref2) {
  var id = _ref2.id;
  cov_2fn4dh385k.f[7]++;
  cov_2fn4dh385k.s[12]++;
  return _plugDb2.default.getAsync(id).then(function (asset) {
    cov_2fn4dh385k.f[8]++;
    cov_2fn4dh385k.s[13]++;
    return (
      // verify that data is compliant before returning it
      (0, _schemas.dataIsValid)(asset, _metisSchemas.Asset)
    );
  });
};

/**
 * Gets a asset with a specific id or filename
 * @param {object} parameters
 * @return {Promise}
 */
cov_2fn4dh385k.s[14]++;
var getAssetAttachment = exports.getAssetAttachment = function getAssetAttachment(_ref3) {
  var id = _ref3.id,
      filename = _ref3.filename,
      encoding = _ref3.encoding;
  cov_2fn4dh385k.f[9]++;
  cov_2fn4dh385k.s[15]++;
  return new _promise2.default(function (resolve, reject) {
    cov_2fn4dh385k.f[10]++;
    cov_2fn4dh385k.s[16]++;

    _plugDb2.default.attachment.get(id, filename, function (err, body) {
      cov_2fn4dh385k.f[11]++;
      cov_2fn4dh385k.s[17]++;

      if (err) {
        cov_2fn4dh385k.b[3][0]++;
        cov_2fn4dh385k.s[18]++;

        reject(err);
      } else {
        cov_2fn4dh385k.b[3][1]++;

        var content = (cov_2fn4dh385k.s[19]++, encoding === 'base64' ? (cov_2fn4dh385k.b[4][0]++, Buffer.from(body, 'binary').toString('base64')) : (cov_2fn4dh385k.b[4][1]++, body));
        cov_2fn4dh385k.s[20]++;
        resolve({ data: content, mimetype: (0, _mimeTypes.lookup)(filename) });
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
cov_2fn4dh385k.s[21]++;
var createAsset = exports.createAsset = function createAsset(asset, data) {
  cov_2fn4dh385k.f[12]++;

  var _ref4 = (cov_2fn4dh385k.s[22]++, asset),
      filename = _ref4.filename;

  var mimeType = (cov_2fn4dh385k.s[23]++, (cov_2fn4dh385k.b[5][0]++, (0, _mimeTypes.lookup)(filename)) || (cov_2fn4dh385k.b[5][1]++, 'application/octet-stream'));
  // validate data
  cov_2fn4dh385k.s[24]++;
  return (0, _schemas.dataIsValid)(asset, _metisSchemas.Asset)
  // create document
  .then(function () {
    cov_2fn4dh385k.f[13]++;
    cov_2fn4dh385k.s[25]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, asset, {
      mimetype: mimeType
    }));
  })
  // add attachment
  .then(function (op) {
    cov_2fn4dh385k.f[14]++;

    var _ref5 = (cov_2fn4dh385k.s[26]++, op),
        id = _ref5.id,
        rev = _ref5.rev;

    cov_2fn4dh385k.s[27]++;


    return new _promise2.default(function (resolve, reject) {
      cov_2fn4dh385k.f[15]++;
      cov_2fn4dh385k.s[28]++;

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
        cov_2fn4dh385k.f[16]++;
        cov_2fn4dh385k.s[29]++;

        if (err) {
          cov_2fn4dh385k.b[6][0]++;
          cov_2fn4dh385k.s[30]++;

          reject(err);
        } else {
          cov_2fn4dh385k.b[6][1]++;
          cov_2fn4dh385k.s[31]++;

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
cov_2fn4dh385k.s[32]++;
var updateAsset = exports.updateAsset = function updateAsset(assetId, _ref6, attachmentData) {
  var filename = _ref6.filename,
      mimetype = _ref6.mimetype;
  cov_2fn4dh385k.f[17]++;
  cov_2fn4dh385k.s[33]++;

  // get existing document
  return _plugDb2.default.getAsync(assetId)
  // then update document
  .then(function (asset) {
    cov_2fn4dh385k.f[18]++;
    cov_2fn4dh385k.s[34]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, asset, {
      filename: filename,
      mimetype: mimetype,
      rev: asset._rev
    }));
  })
  // destroy previous attachments
  .then(function () {
    cov_2fn4dh385k.f[19]++;
    cov_2fn4dh385k.s[35]++;
    return _plugDb2.default.getAsync(assetId);
  }).then(function (asset) {
    cov_2fn4dh385k.f[20]++;

    var previousAttachment = (cov_2fn4dh385k.s[36]++, (cov_2fn4dh385k.b[7][0]++, asset._attachments) && (cov_2fn4dh385k.b[7][1]++, (0, _keys2.default)(asset._attachments)[0]));
    cov_2fn4dh385k.s[37]++;
    return new _promise2.default(function (resolve, reject) {
      cov_2fn4dh385k.f[21]++;
      cov_2fn4dh385k.s[38]++;

      if (previousAttachment) {
        cov_2fn4dh385k.b[8][0]++;
        cov_2fn4dh385k.s[39]++;

        _plugDb2.default.attachment.destroy(asset._id, encodeURIComponent(previousAttachment), { rev: asset._rev }, function (err, body) {
          cov_2fn4dh385k.f[22]++;
          cov_2fn4dh385k.s[40]++;

          if (err) {
            cov_2fn4dh385k.b[9][0]++;
            cov_2fn4dh385k.s[41]++;

            reject(err);
          } else {
              cov_2fn4dh385k.b[9][1]++;
              cov_2fn4dh385k.s[42]++;
              resolve(body);
            }
        });
      } else {
        cov_2fn4dh385k.b[8][1]++;
      }
    });
  })
  // add new attachment
  .then(function (op) {
    cov_2fn4dh385k.f[23]++;

    var _ref7 = (cov_2fn4dh385k.s[43]++, op),
        id = _ref7.id,
        rev = _ref7.rev;

    cov_2fn4dh385k.s[44]++;


    return new _promise2.default(function (resolve, reject) {
      cov_2fn4dh385k.f[24]++;
      cov_2fn4dh385k.s[45]++;

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
        cov_2fn4dh385k.f[25]++;
        cov_2fn4dh385k.s[46]++;

        if (err) {
          cov_2fn4dh385k.b[10][0]++;
          cov_2fn4dh385k.s[47]++;

          reject(err);
        } else {
          cov_2fn4dh385k.b[10][1]++;
          cov_2fn4dh385k.s[48]++;

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
cov_2fn4dh385k.s[49]++;
var deleteAsset = exports.deleteAsset = function deleteAsset(_ref8) {
  var _id = _ref8._id;
  cov_2fn4dh385k.f[26]++;
  cov_2fn4dh385k.s[50]++;
  return _plugDb2.default.getAsync(_id).then(function (asset) {
    cov_2fn4dh385k.f[27]++;
    cov_2fn4dh385k.s[51]++;
    return _plugDb2.default.destroyAsync(_id, asset._rev);
  });
};