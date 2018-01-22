'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMontageDependencies = exports.fetchCitationData = exports.unmountLocalAssets = exports.mountLocalAssets = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_1amvx6zirx = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/data.js',
      hash = '6d59d0ee4333635e129714f73be5922ec3a0a5f9',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/data.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 21
        },
        end: {
          line: 21,
          column: 61
        }
      },
      '1': {
        start: {
          line: 22,
          column: 19
        },
        end: {
          line: 22,
          column: 57
        }
      },
      '2': {
        start: {
          line: 23,
          column: 25
        },
        end: {
          line: 23,
          column: 60
        }
      },
      '3': {
        start: {
          line: 25,
          column: 32
        },
        end: {
          line: 48,
          column: 4
        }
      },
      '4': {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 48,
          column: 4
        }
      },
      '5': {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 47,
          column: 27
        }
      },
      '6': {
        start: {
          line: 29,
          column: 24
        },
        end: {
          line: 29,
          column: 51
        }
      },
      '7': {
        start: {
          line: 31,
          column: 32
        },
        end: {
          line: 40,
          column: 16
        }
      },
      '8': {
        start: {
          line: 32,
          column: 16
        },
        end: {
          line: 39,
          column: 21
        }
      },
      '9': {
        start: {
          line: 34,
          column: 20
        },
        end: {
          line: 35,
          column: 87
        }
      },
      '10': {
        start: {
          line: 38,
          column: 20
        },
        end: {
          line: 38,
          column: 97
        }
      },
      '11': {
        start: {
          line: 41,
          column: 14
        },
        end: {
          line: 41,
          column: 44
        }
      },
      '12': {
        start: {
          line: 44,
          column: 34
        },
        end: {
          line: 44,
          column: 95
        }
      },
      '13': {
        start: {
          line: 44,
          column: 43
        },
        end: {
          line: 44,
          column: 95
        }
      },
      '14': {
        start: {
          line: 45,
          column: 14
        },
        end: {
          line: 45,
          column: 35
        }
      },
      '15': {
        start: {
          line: 50,
          column: 34
        },
        end: {
          line: 60,
          column: 4
        }
      },
      '16': {
        start: {
          line: 51,
          column: 2
        },
        end: {
          line: 60,
          column: 4
        }
      },
      '17': {
        start: {
          line: 53,
          column: 4
        },
        end: {
          line: 53,
          column: 64
        }
      },
      '18': {
        start: {
          line: 62,
          column: 33
        },
        end: {
          line: 76,
          column: 4
        }
      },
      '19': {
        start: {
          line: 63,
          column: 2
        },
        end: {
          line: 76,
          column: 4
        }
      },
      '20': {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 75,
          column: 25
        }
      },
      '21': {
        start: {
          line: 68,
          column: 12
        },
        end: {
          line: 68,
          column: 32
        }
      },
      '22': {
        start: {
          line: 69,
          column: 12
        },
        end: {
          line: 69,
          column: 74
        }
      },
      '23': {
        start: {
          line: 72,
          column: 12
        },
        end: {
          line: 72,
          column: 33
        }
      },
      '24': {
        start: {
          line: 73,
          column: 12
        },
        end: {
          line: 73,
          column: 53
        }
      },
      '25': {
        start: {
          line: 78,
          column: 40
        },
        end: {
          line: 164,
          column: 1
        }
      },
      '26': {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 163,
          column: 5
        }
      },
      '27': {
        start: {
          line: 84,
          column: 37
        },
        end: {
          line: 87,
          column: 59
        }
      },
      '28': {
        start: {
          line: 85,
          column: 27
        },
        end: {
          line: 85,
          column: 55
        }
      },
      '29': {
        start: {
          line: 86,
          column: 26
        },
        end: {
          line: 86,
          column: 28
        }
      },
      '30': {
        start: {
          line: 87,
          column: 23
        },
        end: {
          line: 87,
          column: 58
        }
      },
      '31': {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 162,
          column: 23
        }
      },
      '32': {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 90,
          column: 41
        }
      },
      '33': {
        start: {
          line: 93,
          column: 38
        },
        end: {
          line: 97,
          column: 49
        }
      },
      '34': {
        start: {
          line: 94,
          column: 10
        },
        end: {
          line: 94,
          column: 60
        }
      },
      '35': {
        start: {
          line: 96,
          column: 22
        },
        end: {
          line: 96,
          column: 24
        }
      },
      '36': {
        start: {
          line: 97,
          column: 19
        },
        end: {
          line: 97,
          column: 48
        }
      },
      '37': {
        start: {
          line: 99,
          column: 8
        },
        end: {
          line: 161,
          column: 27
        }
      },
      '38': {
        start: {
          line: 101,
          column: 12
        },
        end: {
          line: 101,
          column: 39
        }
      },
      '39': {
        start: {
          line: 102,
          column: 30
        },
        end: {
          line: 108,
          column: 22
        }
      },
      '40': {
        start: {
          line: 103,
          column: 14
        },
        end: {
          line: 108,
          column: 22
        }
      },
      '41': {
        start: {
          line: 104,
          column: 18
        },
        end: {
          line: 106,
          column: 19
        }
      },
      '42': {
        start: {
          line: 105,
          column: 20
        },
        end: {
          line: 105,
          column: 52
        }
      },
      '43': {
        start: {
          line: 107,
          column: 18
        },
        end: {
          line: 107,
          column: 32
        }
      },
      '44': {
        start: {
          line: 111,
          column: 39
        },
        end: {
          line: 144,
          column: 13
        }
      },
      '45': {
        start: {
          line: 113,
          column: 16
        },
        end: {
          line: 118,
          column: 17
        }
      },
      '46': {
        start: {
          line: 114,
          column: 18
        },
        end: {
          line: 116,
          column: 26
        }
      },
      '47': {
        start: {
          line: 115,
          column: 20
        },
        end: {
          line: 115,
          column: 59
        }
      },
      '48': {
        start: {
          line: 119,
          column: 16
        },
        end: {
          line: 119,
          column: 64
        }
      },
      '49': {
        start: {
          line: 121,
          column: 26
        },
        end: {
          line: 121,
          column: 28
        }
      },
      '50': {
        start: {
          line: 123,
          column: 14
        },
        end: {
          line: 143,
          column: 16
        }
      },
      '51': {
        start: {
          line: 125,
          column: 16
        },
        end: {
          line: 142,
          column: 36
        }
      },
      '52': {
        start: {
          line: 128,
          column: 26
        },
        end: {
          line: 139,
          column: 27
        }
      },
      '53': {
        start: {
          line: 129,
          column: 28
        },
        end: {
          line: 138,
          column: 31
        }
      },
      '54': {
        start: {
          line: 134,
          column: 30
        },
        end: {
          line: 137,
          column: 33
        }
      },
      '55': {
        start: {
          line: 140,
          column: 26
        },
        end: {
          line: 140,
          column: 45
        }
      },
      '56': {
        start: {
          line: 147,
          column: 12
        },
        end: {
          line: 160,
          column: 29
        }
      },
      '57': {
        start: {
          line: 149,
          column: 16
        },
        end: {
          line: 149,
          column: 37
        }
      },
      '58': {
        start: {
          line: 150,
          column: 16
        },
        end: {
          line: 158,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 25,
            column: 32
          },
          end: {
            line: 25,
            column: 33
          }
        },
        loc: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 48,
            column: 4
          }
        },
        line: 26
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 26,
            column: 14
          },
          end: {
            line: 26,
            column: 15
          }
        },
        loc: {
          start: {
            line: 26,
            column: 35
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 26
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 29,
            column: 18
          },
          end: {
            line: 29,
            column: 19
          }
        },
        loc: {
          start: {
            line: 29,
            column: 24
          },
          end: {
            line: 29,
            column: 51
          }
        },
        line: 29
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 30,
            column: 18
          },
          end: {
            line: 30,
            column: 19
          }
        },
        loc: {
          start: {
            line: 30,
            column: 24
          },
          end: {
            line: 42,
            column: 13
          }
        },
        line: 30
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 31,
            column: 43
          },
          end: {
            line: 31,
            column: 44
          }
        },
        loc: {
          start: {
            line: 31,
            column: 52
          },
          end: {
            line: 40,
            column: 15
          }
        },
        line: 31
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 33,
            column: 24
          },
          end: {
            line: 33,
            column: 25
          }
        },
        loc: {
          start: {
            line: 33,
            column: 30
          },
          end: {
            line: 36,
            column: 19
          }
        },
        line: 33
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 37,
            column: 24
          },
          end: {
            line: 37,
            column: 25
          }
        },
        loc: {
          start: {
            line: 37,
            column: 36
          },
          end: {
            line: 39,
            column: 19
          }
        },
        line: 37
      },
      '7': {
        name: '(anonymous_7)',
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
            column: 24
          },
          end: {
            line: 46,
            column: 13
          }
        },
        line: 43
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 44,
            column: 34
          },
          end: {
            line: 44,
            column: 35
          }
        },
        loc: {
          start: {
            line: 44,
            column: 43
          },
          end: {
            line: 44,
            column: 95
          }
        },
        line: 44
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 50,
            column: 34
          },
          end: {
            line: 50,
            column: 35
          }
        },
        loc: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 60,
            column: 4
          }
        },
        line: 51
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 51,
            column: 14
          },
          end: {
            line: 51,
            column: 15
          }
        },
        loc: {
          start: {
            line: 51,
            column: 35
          },
          end: {
            line: 60,
            column: 3
          }
        },
        line: 51
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 62,
            column: 33
          },
          end: {
            line: 62,
            column: 34
          }
        },
        loc: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 76,
            column: 4
          }
        },
        line: 63
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 63,
            column: 14
          },
          end: {
            line: 63,
            column: 15
          }
        },
        loc: {
          start: {
            line: 63,
            column: 35
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 63
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 67,
            column: 16
          },
          end: {
            line: 67,
            column: 17
          }
        },
        loc: {
          start: {
            line: 67,
            column: 23
          },
          end: {
            line: 70,
            column: 11
          }
        },
        line: 67
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 71,
            column: 16
          },
          end: {
            line: 71,
            column: 17
          }
        },
        loc: {
          start: {
            line: 71,
            column: 23
          },
          end: {
            line: 74,
            column: 11
          }
        },
        line: 71
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 78,
            column: 40
          },
          end: {
            line: 78,
            column: 41
          }
        },
        loc: {
          start: {
            line: 78,
            column: 53
          },
          end: {
            line: 164,
            column: 1
          }
        },
        line: 78
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 79,
            column: 21
          },
          end: {
            line: 79,
            column: 22
          }
        },
        loc: {
          start: {
            line: 79,
            column: 42
          },
          end: {
            line: 163,
            column: 3
          }
        },
        line: 79
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 85,
            column: 17
          },
          end: {
            line: 85,
            column: 18
          }
        },
        loc: {
          start: {
            line: 85,
            column: 27
          },
          end: {
            line: 85,
            column: 55
          }
        },
        line: 85
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 86,
            column: 20
          },
          end: {
            line: 86,
            column: 21
          }
        },
        loc: {
          start: {
            line: 86,
            column: 26
          },
          end: {
            line: 86,
            column: 28
          }
        },
        line: 86
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 87,
            column: 17
          },
          end: {
            line: 87,
            column: 18
          }
        },
        loc: {
          start: {
            line: 87,
            column: 23
          },
          end: {
            line: 87,
            column: 58
          }
        },
        line: 87
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 89,
            column: 12
          },
          end: {
            line: 89,
            column: 13
          }
        },
        loc: {
          start: {
            line: 89,
            column: 33
          },
          end: {
            line: 162,
            column: 7
          }
        },
        line: 89
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 93,
            column: 58
          },
          end: {
            line: 93,
            column: 59
          }
        },
        loc: {
          start: {
            line: 93,
            column: 83
          },
          end: {
            line: 95,
            column: 9
          }
        },
        line: 93
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 96,
            column: 16
          },
          end: {
            line: 96,
            column: 17
          }
        },
        loc: {
          start: {
            line: 96,
            column: 22
          },
          end: {
            line: 96,
            column: 24
          }
        },
        line: 96
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 97,
            column: 13
          },
          end: {
            line: 97,
            column: 14
          }
        },
        loc: {
          start: {
            line: 97,
            column: 19
          },
          end: {
            line: 97,
            column: 48
          }
        },
        line: 97
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 100,
            column: 16
          },
          end: {
            line: 100,
            column: 17
          }
        },
        loc: {
          start: {
            line: 100,
            column: 34
          },
          end: {
            line: 161,
            column: 11
          }
        },
        line: 100
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 102,
            column: 30
          },
          end: {
            line: 102,
            column: 31
          }
        },
        loc: {
          start: {
            line: 103,
            column: 14
          },
          end: {
            line: 108,
            column: 22
          }
        },
        line: 103
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 103,
            column: 39
          },
          end: {
            line: 103,
            column: 40
          }
        },
        loc: {
          start: {
            line: 103,
            column: 56
          },
          end: {
            line: 108,
            column: 17
          }
        },
        line: 103
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 112,
            column: 22
          },
          end: {
            line: 112,
            column: 23
          }
        },
        loc: {
          start: {
            line: 112,
            column: 44
          },
          end: {
            line: 120,
            column: 15
          }
        },
        line: 112
      },
      '28': {
        name: '(anonymous_28)',
        decl: {
          start: {
            line: 114,
            column: 60
          },
          end: {
            line: 114,
            column: 61
          }
        },
        loc: {
          start: {
            line: 114,
            column: 79
          },
          end: {
            line: 116,
            column: 19
          }
        },
        line: 114
      },
      '29': {
        name: '(anonymous_29)',
        decl: {
          start: {
            line: 121,
            column: 20
          },
          end: {
            line: 121,
            column: 21
          }
        },
        loc: {
          start: {
            line: 121,
            column: 26
          },
          end: {
            line: 121,
            column: 28
          }
        },
        line: 121
      },
      '30': {
        name: '(anonymous_30)',
        decl: {
          start: {
            line: 122,
            column: 17
          },
          end: {
            line: 122,
            column: 18
          }
        },
        loc: {
          start: {
            line: 123,
            column: 14
          },
          end: {
            line: 143,
            column: 16
          }
        },
        line: 123
      },
      '31': {
        name: '(anonymous_31)',
        decl: {
          start: {
            line: 123,
            column: 26
          },
          end: {
            line: 123,
            column: 27
          }
        },
        loc: {
          start: {
            line: 123,
            column: 41
          },
          end: {
            line: 143,
            column: 15
          }
        },
        line: 123
      },
      '32': {
        name: '(anonymous_32)',
        decl: {
          start: {
            line: 126,
            column: 30
          },
          end: {
            line: 126,
            column: 31
          }
        },
        loc: {
          start: {
            line: 126,
            column: 39
          },
          end: {
            line: 141,
            column: 25
          }
        },
        line: 126
      },
      '33': {
        name: '(anonymous_33)',
        decl: {
          start: {
            line: 133,
            column: 34
          },
          end: {
            line: 133,
            column: 35
          }
        },
        loc: {
          start: {
            line: 133,
            column: 48
          },
          end: {
            line: 138,
            column: 29
          }
        },
        line: 133
      },
      '34': {
        name: '(anonymous_34)',
        decl: {
          start: {
            line: 148,
            column: 20
          },
          end: {
            line: 148,
            column: 21
          }
        },
        loc: {
          start: {
            line: 148,
            column: 35
          },
          end: {
            line: 159,
            column: 15
          }
        },
        line: 148
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 94,
            column: 31
          },
          end: {
            line: 94,
            column: 58
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 94,
            column: 31
          },
          end: {
            line: 94,
            column: 52
          }
        }, {
          start: {
            line: 94,
            column: 56
          },
          end: {
            line: 94,
            column: 58
          }
        }],
        line: 94
      },
      '1': {
        loc: {
          start: {
            line: 104,
            column: 18
          },
          end: {
            line: 106,
            column: 19
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 104,
            column: 18
          },
          end: {
            line: 106,
            column: 19
          }
        }, {
          start: {
            line: 104,
            column: 18
          },
          end: {
            line: 106,
            column: 19
          }
        }],
        line: 104
      },
      '2': {
        loc: {
          start: {
            line: 113,
            column: 16
          },
          end: {
            line: 118,
            column: 17
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 113,
            column: 16
          },
          end: {
            line: 118,
            column: 17
          }
        }, {
          start: {
            line: 113,
            column: 16
          },
          end: {
            line: 118,
            column: 17
          }
        }],
        line: 113
      },
      '3': {
        loc: {
          start: {
            line: 128,
            column: 26
          },
          end: {
            line: 139,
            column: 27
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 128,
            column: 26
          },
          end: {
            line: 139,
            column: 27
          }
        }, {
          start: {
            line: 128,
            column: 26
          },
          end: {
            line: 139,
            column: 27
          }
        }],
        line: 128
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
      '58': 0
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
      '34': 0
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
/**
 * This module exports several functions related to data management,
 * especially querying data and static files,
 * and storing data from db to local temp files.
 * @module metis-backend/utils/data
 */

var _compositions = require('../components/compositions');

var _resources = require('../components/resources');

var _assets = require('../components/assets');

var _fsExtra = require('fs-extra');

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assetsFolder = (cov_1amvx6zirx.s[0]++, (0, _path.resolve)(__dirname + '/../../assets'));
var tempFolder = (cov_1amvx6zirx.s[1]++, (0, _path.resolve)(__dirname + '/../../temp'));
var tempAssetsFolder = (cov_1amvx6zirx.s[2]++, (0, _path.resolve)(tempFolder + '/assets'));

cov_1amvx6zirx.s[3]++;
var mountLocalAssets = exports.mountLocalAssets = function mountLocalAssets(assets) {
  cov_1amvx6zirx.f[0]++;
  cov_1amvx6zirx.s[4]++;
  return new _promise2.default(function (resolve, reject) {
    cov_1amvx6zirx.f[1]++;
    cov_1amvx6zirx.s[5]++;

    // should return getAssetUri function ie : asset => `${tempDirPath}/${asset._id}/${asset.filename}`
    return (0, _fsExtra.remove)(tempAssetsFolder).then(function () {
      cov_1amvx6zirx.f[2]++;
      cov_1amvx6zirx.s[6]++;
      return (0, _fsExtra.ensureDir)(tempAssetsFolder);
    }).then(function () {
      cov_1amvx6zirx.f[3]++;

      var toResolve = (cov_1amvx6zirx.s[7]++, assets.map(function (asset) {
        cov_1amvx6zirx.f[4]++;
        cov_1amvx6zirx.s[8]++;

        return (0, _fsExtra.ensureDir)(tempAssetsFolder + '/' + asset._id).then(function () {
          cov_1amvx6zirx.f[5]++;
          cov_1amvx6zirx.s[9]++;

          return _assets.dal.getAssetAttachment({ id: asset._id, filename: asset.filename });
        }).then(function (_ref) {
          var data = _ref.data;
          cov_1amvx6zirx.f[6]++;
          cov_1amvx6zirx.s[10]++;

          return (0, _fsExtra.writeFile)(tempAssetsFolder + '/' + asset._id + '/' + asset.filename, data);
        });
      }));
      cov_1amvx6zirx.s[11]++;
      return _promise2.default.all(toResolve);
    }).then(function () {
      cov_1amvx6zirx.f[7]++;
      cov_1amvx6zirx.s[12]++;

      var getAssetUri = function getAssetUri(asset) {
        cov_1amvx6zirx.f[8]++;
        cov_1amvx6zirx.s[13]++;
        return tempAssetsFolder + '/' + asset._id + '/' + asset.filename;
      };
      cov_1amvx6zirx.s[14]++;
      resolve(getAssetUri);
    }).catch(reject);
  });
};

cov_1amvx6zirx.s[15]++;
var unmountLocalAssets = exports.unmountLocalAssets = function unmountLocalAssets() {
  cov_1amvx6zirx.f[9]++;
  cov_1amvx6zirx.s[16]++;
  return (/*assets*/new _promise2.default(function (resolve, reject) {
      cov_1amvx6zirx.f[10]++;
      cov_1amvx6zirx.s[17]++;

      // removing all assets
      return (0, _fsExtra.remove)(tempAssetsFolder).then(resolve).catch(reject);
      // targeting only specific assets
      // const toResolve = assets.map(asset => {
      //   const folder = `${tempAssetsFolder}/${asset._id}`;
      //   return remove(folder)
      // });
      // return Promise.all(toResolve)
    })
  );
};

cov_1amvx6zirx.s[18]++;
var fetchCitationData = exports.fetchCitationData = function fetchCitationData() {
  cov_1amvx6zirx.f[11]++;
  cov_1amvx6zirx.s[19]++;
  return new _promise2.default(function (resolve, reject) {
    cov_1amvx6zirx.f[12]++;

    var citationStyle = void 0;
    var citationLocale = void 0;
    cov_1amvx6zirx.s[20]++;
    (0, _fsExtra.readFile)(assetsFolder + '/apa.csl', 'utf8').then(function (str) {
      cov_1amvx6zirx.f[13]++;
      cov_1amvx6zirx.s[21]++;

      citationStyle = str;
      cov_1amvx6zirx.s[22]++;
      return (0, _fsExtra.readFile)(assetsFolder + '/english-locale.xml', 'utf8');
    }).then(function (str) {
      cov_1amvx6zirx.f[14]++;
      cov_1amvx6zirx.s[23]++;

      citationLocale = str;
      cov_1amvx6zirx.s[24]++;
      resolve({ citationStyle: citationStyle, citationLocale: citationLocale });
    }).catch(reject);
  });
};

cov_1amvx6zirx.s[25]++;
var fetchMontageDependencies = exports.fetchMontageDependencies = function fetchMontageDependencies(montage) {
  cov_1amvx6zirx.f[15]++;
  cov_1amvx6zirx.s[26]++;

  return new _promise2.default(function (resolve, reject) {
    cov_1amvx6zirx.f[16]++;

    var compositions = void 0;
    var resources = void 0;
    var assets = void 0;
    // register compositions
    var compositionsRequirements = (cov_1amvx6zirx.s[27]++, montage.data.compositions.map(function (target) {
      cov_1amvx6zirx.f[17]++;
      cov_1amvx6zirx.s[28]++;
      return target.target_composition_id;
    }).filter(function (id) {
      cov_1amvx6zirx.f[18]++;
      cov_1amvx6zirx.s[29]++;
      return id;
    }).map(function (id) {
      cov_1amvx6zirx.f[19]++;
      cov_1amvx6zirx.s[30]++;
      return _compositions.dal.getComposition({ id: id });
    }));
    cov_1amvx6zirx.s[31]++;
    _promise2.default.all(compositionsRequirements).then(function (theseCompositions) {
      cov_1amvx6zirx.f[20]++;
      cov_1amvx6zirx.s[32]++;

      compositions = theseCompositions;

      // register resources requirement
      var resourcesRequirements = (cov_1amvx6zirx.s[33]++, compositions.reduce(function (result, composition) {
        cov_1amvx6zirx.f[21]++;
        cov_1amvx6zirx.s[34]++;

        return result.concat((cov_1amvx6zirx.b[0][0]++, composition.resources) || (cov_1amvx6zirx.b[0][1]++, []));
      }, []).filter(function (id) {
        cov_1amvx6zirx.f[22]++;
        cov_1amvx6zirx.s[35]++;
        return id;
      }).map(function (id) {
        cov_1amvx6zirx.f[23]++;
        cov_1amvx6zirx.s[36]++;
        return _resources.dal.getResource({ id: id });
      }));

      cov_1amvx6zirx.s[37]++;
      _promise2.default.all(resourcesRequirements).then(function (theseResources) {
        cov_1amvx6zirx.f[24]++;
        cov_1amvx6zirx.s[38]++;

        resources = theseResources;
        cov_1amvx6zirx.s[39]++;
        var parseData = function parseData(data) {
          cov_1amvx6zirx.f[25]++;
          cov_1amvx6zirx.s[40]++;
          return (0, _keys2.default)(data).reduce(function (result, key) {
            cov_1amvx6zirx.f[26]++;
            cov_1amvx6zirx.s[41]++;

            if (key.indexOf('asset_id') > -1) {
              cov_1amvx6zirx.b[1][0]++;
              cov_1amvx6zirx.s[42]++;

              return result.concat(data[key]); /* eslint security/detect-object-injection : 0 */
            } else {
              cov_1amvx6zirx.b[1][1]++;
            }
            cov_1amvx6zirx.s[43]++;
            return result;
          }, []);
        };

        // register assets requirement as a list of assets ids
        var assetsRequirements = (cov_1amvx6zirx.s[44]++, resources.reduce(function (result, resource) {
          cov_1amvx6zirx.f[27]++;
          cov_1amvx6zirx.s[45]++;

          if (Array.isArray(resource.data)) {
            cov_1amvx6zirx.b[2][0]++;
            cov_1amvx6zirx.s[46]++;

            return result.concat(resource.data.reduce(function (result2, item) {
              cov_1amvx6zirx.f[28]++;
              cov_1amvx6zirx.s[47]++;

              return result2.concat(parseData(item));
            }, []));
          } else {
            cov_1amvx6zirx.b[2][1]++;
          }
          cov_1amvx6zirx.s[48]++;
          return result.concat(parseData(resource.data));
        }, []).filter(function (id) {
          cov_1amvx6zirx.f[29]++;
          cov_1amvx6zirx.s[49]++;
          return id;
        }).map(function (id) {
          cov_1amvx6zirx.f[30]++;
          cov_1amvx6zirx.s[50]++;
          return new _promise2.default(function (reso, rej) {
            cov_1amvx6zirx.f[31]++;
            cov_1amvx6zirx.s[51]++;


            return _assets.dal.getAsset({ id: id }).then(function (asset) {
              cov_1amvx6zirx.f[32]++;
              cov_1amvx6zirx.s[52]++;

              // fetch raw data for text assets
              if (asset.mimetype.indexOf('text') === 0) {
                cov_1amvx6zirx.b[3][0]++;
                cov_1amvx6zirx.s[53]++;

                return _assets.dal.getAssetAttachment({
                  id: id,
                  filename: asset.filename
                }).then(function (attachment) {
                  cov_1amvx6zirx.f[33]++;
                  cov_1amvx6zirx.s[54]++;

                  return reso((0, _extends3.default)({}, asset, {
                    rawData: attachment.data.toString()
                  }));
                });
              } else {
                cov_1amvx6zirx.b[3][1]++;
              }
              cov_1amvx6zirx.s[55]++;
              return reso(asset);
            }).catch(rej);
          });
        }));

        cov_1amvx6zirx.s[56]++;
        _promise2.default.all(assetsRequirements).then(function (theseAssets) {
          cov_1amvx6zirx.f[34]++;
          cov_1amvx6zirx.s[57]++;

          assets = theseAssets;
          cov_1amvx6zirx.s[58]++;
          resolve({
            montage: montage,
            compositions: compositions,
            resources: resources,
            assets: assets
            // compositions: mapify(compositions, '_id'),
            // resources: mapify(resources, '_id'),
            // assets: mapify(assets, '_id')
          });
        }).catch(reject);
      }).catch(reject);
    }).catch(reject);
  });
};