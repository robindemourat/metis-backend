'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMontageDependencies = exports.fetchCitationData = exports.unmountLocalAssets = exports.mountLocalAssets = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_ai645p28e = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/data.js',
      hash = '564b028f130464376acda689dec4d217efa5f934',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/utils/data.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 21
        },
        end: {
          line: 12,
          column: 61
        }
      },
      '1': {
        start: {
          line: 13,
          column: 19
        },
        end: {
          line: 13,
          column: 57
        }
      },
      '2': {
        start: {
          line: 14,
          column: 25
        },
        end: {
          line: 14,
          column: 60
        }
      },
      '3': {
        start: {
          line: 16,
          column: 32
        },
        end: {
          line: 39,
          column: 4
        }
      },
      '4': {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 39,
          column: 4
        }
      },
      '5': {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 38,
          column: 27
        }
      },
      '6': {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 20,
          column: 51
        }
      },
      '7': {
        start: {
          line: 22,
          column: 32
        },
        end: {
          line: 31,
          column: 16
        }
      },
      '8': {
        start: {
          line: 23,
          column: 16
        },
        end: {
          line: 30,
          column: 21
        }
      },
      '9': {
        start: {
          line: 25,
          column: 20
        },
        end: {
          line: 26,
          column: 87
        }
      },
      '10': {
        start: {
          line: 29,
          column: 20
        },
        end: {
          line: 29,
          column: 97
        }
      },
      '11': {
        start: {
          line: 32,
          column: 14
        },
        end: {
          line: 32,
          column: 44
        }
      },
      '12': {
        start: {
          line: 35,
          column: 34
        },
        end: {
          line: 35,
          column: 95
        }
      },
      '13': {
        start: {
          line: 35,
          column: 43
        },
        end: {
          line: 35,
          column: 95
        }
      },
      '14': {
        start: {
          line: 36,
          column: 14
        },
        end: {
          line: 36,
          column: 35
        }
      },
      '15': {
        start: {
          line: 41,
          column: 34
        },
        end: {
          line: 51,
          column: 4
        }
      },
      '16': {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 51,
          column: 4
        }
      },
      '17': {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 64
        }
      },
      '18': {
        start: {
          line: 53,
          column: 33
        },
        end: {
          line: 67,
          column: 4
        }
      },
      '19': {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 67,
          column: 4
        }
      },
      '20': {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 66,
          column: 25
        }
      },
      '21': {
        start: {
          line: 59,
          column: 12
        },
        end: {
          line: 59,
          column: 32
        }
      },
      '22': {
        start: {
          line: 60,
          column: 12
        },
        end: {
          line: 60,
          column: 74
        }
      },
      '23': {
        start: {
          line: 63,
          column: 12
        },
        end: {
          line: 63,
          column: 33
        }
      },
      '24': {
        start: {
          line: 64,
          column: 12
        },
        end: {
          line: 64,
          column: 53
        }
      },
      '25': {
        start: {
          line: 69,
          column: 40
        },
        end: {
          line: 133,
          column: 1
        }
      },
      '26': {
        start: {
          line: 70,
          column: 2
        },
        end: {
          line: 132,
          column: 5
        }
      },
      '27': {
        start: {
          line: 75,
          column: 37
        },
        end: {
          line: 78,
          column: 59
        }
      },
      '28': {
        start: {
          line: 76,
          column: 27
        },
        end: {
          line: 76,
          column: 55
        }
      },
      '29': {
        start: {
          line: 77,
          column: 26
        },
        end: {
          line: 77,
          column: 28
        }
      },
      '30': {
        start: {
          line: 78,
          column: 23
        },
        end: {
          line: 78,
          column: 58
        }
      },
      '31': {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 131,
          column: 23
        }
      },
      '32': {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 81,
          column: 41
        }
      },
      '33': {
        start: {
          line: 84,
          column: 38
        },
        end: {
          line: 88,
          column: 49
        }
      },
      '34': {
        start: {
          line: 85,
          column: 10
        },
        end: {
          line: 85,
          column: 60
        }
      },
      '35': {
        start: {
          line: 87,
          column: 22
        },
        end: {
          line: 87,
          column: 24
        }
      },
      '36': {
        start: {
          line: 88,
          column: 19
        },
        end: {
          line: 88,
          column: 48
        }
      },
      '37': {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 130,
          column: 27
        }
      },
      '38': {
        start: {
          line: 92,
          column: 12
        },
        end: {
          line: 92,
          column: 39
        }
      },
      '39': {
        start: {
          line: 93,
          column: 30
        },
        end: {
          line: 99,
          column: 22
        }
      },
      '40': {
        start: {
          line: 94,
          column: 14
        },
        end: {
          line: 99,
          column: 22
        }
      },
      '41': {
        start: {
          line: 95,
          column: 18
        },
        end: {
          line: 97,
          column: 19
        }
      },
      '42': {
        start: {
          line: 96,
          column: 20
        },
        end: {
          line: 96,
          column: 52
        }
      },
      '43': {
        start: {
          line: 98,
          column: 18
        },
        end: {
          line: 98,
          column: 32
        }
      },
      '44': {
        start: {
          line: 102,
          column: 39
        },
        end: {
          line: 113,
          column: 47
        }
      },
      '45': {
        start: {
          line: 104,
          column: 16
        },
        end: {
          line: 109,
          column: 17
        }
      },
      '46': {
        start: {
          line: 105,
          column: 18
        },
        end: {
          line: 107,
          column: 26
        }
      },
      '47': {
        start: {
          line: 106,
          column: 20
        },
        end: {
          line: 106,
          column: 59
        }
      },
      '48': {
        start: {
          line: 110,
          column: 16
        },
        end: {
          line: 110,
          column: 64
        }
      },
      '49': {
        start: {
          line: 112,
          column: 26
        },
        end: {
          line: 112,
          column: 28
        }
      },
      '50': {
        start: {
          line: 113,
          column: 23
        },
        end: {
          line: 113,
          column: 46
        }
      },
      '51': {
        start: {
          line: 116,
          column: 12
        },
        end: {
          line: 129,
          column: 29
        }
      },
      '52': {
        start: {
          line: 118,
          column: 16
        },
        end: {
          line: 118,
          column: 37
        }
      },
      '53': {
        start: {
          line: 119,
          column: 16
        },
        end: {
          line: 127,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 16,
            column: 32
          },
          end: {
            line: 16,
            column: 33
          }
        },
        loc: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 39,
            column: 4
          }
        },
        line: 17
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 17,
            column: 14
          },
          end: {
            line: 17,
            column: 15
          }
        },
        loc: {
          start: {
            line: 17,
            column: 35
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 17
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 20,
            column: 18
          },
          end: {
            line: 20,
            column: 19
          }
        },
        loc: {
          start: {
            line: 20,
            column: 24
          },
          end: {
            line: 20,
            column: 51
          }
        },
        line: 20
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 19
          }
        },
        loc: {
          start: {
            line: 21,
            column: 24
          },
          end: {
            line: 33,
            column: 13
          }
        },
        line: 21
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 22,
            column: 43
          },
          end: {
            line: 22,
            column: 44
          }
        },
        loc: {
          start: {
            line: 22,
            column: 52
          },
          end: {
            line: 31,
            column: 15
          }
        },
        line: 22
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 24,
            column: 24
          },
          end: {
            line: 24,
            column: 25
          }
        },
        loc: {
          start: {
            line: 24,
            column: 30
          },
          end: {
            line: 27,
            column: 19
          }
        },
        line: 24
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 28,
            column: 24
          },
          end: {
            line: 28,
            column: 25
          }
        },
        loc: {
          start: {
            line: 28,
            column: 36
          },
          end: {
            line: 30,
            column: 19
          }
        },
        line: 28
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 34,
            column: 18
          },
          end: {
            line: 34,
            column: 19
          }
        },
        loc: {
          start: {
            line: 34,
            column: 24
          },
          end: {
            line: 37,
            column: 13
          }
        },
        line: 34
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 35,
            column: 34
          },
          end: {
            line: 35,
            column: 35
          }
        },
        loc: {
          start: {
            line: 35,
            column: 43
          },
          end: {
            line: 35,
            column: 95
          }
        },
        line: 35
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 41,
            column: 34
          },
          end: {
            line: 41,
            column: 35
          }
        },
        loc: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 51,
            column: 4
          }
        },
        line: 42
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 42,
            column: 14
          },
          end: {
            line: 42,
            column: 15
          }
        },
        loc: {
          start: {
            line: 42,
            column: 35
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 42
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 53,
            column: 33
          },
          end: {
            line: 53,
            column: 34
          }
        },
        loc: {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 67,
            column: 4
          }
        },
        line: 54
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 54,
            column: 14
          },
          end: {
            line: 54,
            column: 15
          }
        },
        loc: {
          start: {
            line: 54,
            column: 35
          },
          end: {
            line: 67,
            column: 3
          }
        },
        line: 54
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 58,
            column: 16
          },
          end: {
            line: 58,
            column: 17
          }
        },
        loc: {
          start: {
            line: 58,
            column: 23
          },
          end: {
            line: 61,
            column: 11
          }
        },
        line: 58
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 62,
            column: 16
          },
          end: {
            line: 62,
            column: 17
          }
        },
        loc: {
          start: {
            line: 62,
            column: 23
          },
          end: {
            line: 65,
            column: 11
          }
        },
        line: 62
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 69,
            column: 40
          },
          end: {
            line: 69,
            column: 41
          }
        },
        loc: {
          start: {
            line: 69,
            column: 53
          },
          end: {
            line: 133,
            column: 1
          }
        },
        line: 69
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 70,
            column: 21
          },
          end: {
            line: 70,
            column: 22
          }
        },
        loc: {
          start: {
            line: 70,
            column: 42
          },
          end: {
            line: 132,
            column: 3
          }
        },
        line: 70
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 76,
            column: 17
          },
          end: {
            line: 76,
            column: 18
          }
        },
        loc: {
          start: {
            line: 76,
            column: 27
          },
          end: {
            line: 76,
            column: 55
          }
        },
        line: 76
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 77,
            column: 20
          },
          end: {
            line: 77,
            column: 21
          }
        },
        loc: {
          start: {
            line: 77,
            column: 26
          },
          end: {
            line: 77,
            column: 28
          }
        },
        line: 77
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 78,
            column: 17
          },
          end: {
            line: 78,
            column: 18
          }
        },
        loc: {
          start: {
            line: 78,
            column: 23
          },
          end: {
            line: 78,
            column: 58
          }
        },
        line: 78
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 80,
            column: 12
          },
          end: {
            line: 80,
            column: 13
          }
        },
        loc: {
          start: {
            line: 80,
            column: 33
          },
          end: {
            line: 131,
            column: 7
          }
        },
        line: 80
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 84,
            column: 58
          },
          end: {
            line: 84,
            column: 59
          }
        },
        loc: {
          start: {
            line: 84,
            column: 83
          },
          end: {
            line: 86,
            column: 9
          }
        },
        line: 84
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 87,
            column: 16
          },
          end: {
            line: 87,
            column: 17
          }
        },
        loc: {
          start: {
            line: 87,
            column: 22
          },
          end: {
            line: 87,
            column: 24
          }
        },
        line: 87
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 88,
            column: 13
          },
          end: {
            line: 88,
            column: 14
          }
        },
        loc: {
          start: {
            line: 88,
            column: 19
          },
          end: {
            line: 88,
            column: 48
          }
        },
        line: 88
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 91,
            column: 16
          },
          end: {
            line: 91,
            column: 17
          }
        },
        loc: {
          start: {
            line: 91,
            column: 34
          },
          end: {
            line: 130,
            column: 11
          }
        },
        line: 91
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 93,
            column: 30
          },
          end: {
            line: 93,
            column: 31
          }
        },
        loc: {
          start: {
            line: 94,
            column: 14
          },
          end: {
            line: 99,
            column: 22
          }
        },
        line: 94
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 94,
            column: 39
          },
          end: {
            line: 94,
            column: 40
          }
        },
        loc: {
          start: {
            line: 94,
            column: 56
          },
          end: {
            line: 99,
            column: 17
          }
        },
        line: 94
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 103,
            column: 22
          },
          end: {
            line: 103,
            column: 23
          }
        },
        loc: {
          start: {
            line: 103,
            column: 44
          },
          end: {
            line: 111,
            column: 15
          }
        },
        line: 103
      },
      '28': {
        name: '(anonymous_28)',
        decl: {
          start: {
            line: 105,
            column: 60
          },
          end: {
            line: 105,
            column: 61
          }
        },
        loc: {
          start: {
            line: 105,
            column: 79
          },
          end: {
            line: 107,
            column: 19
          }
        },
        line: 105
      },
      '29': {
        name: '(anonymous_29)',
        decl: {
          start: {
            line: 112,
            column: 20
          },
          end: {
            line: 112,
            column: 21
          }
        },
        loc: {
          start: {
            line: 112,
            column: 26
          },
          end: {
            line: 112,
            column: 28
          }
        },
        line: 112
      },
      '30': {
        name: '(anonymous_30)',
        decl: {
          start: {
            line: 113,
            column: 17
          },
          end: {
            line: 113,
            column: 18
          }
        },
        loc: {
          start: {
            line: 113,
            column: 23
          },
          end: {
            line: 113,
            column: 46
          }
        },
        line: 113
      },
      '31': {
        name: '(anonymous_31)',
        decl: {
          start: {
            line: 117,
            column: 20
          },
          end: {
            line: 117,
            column: 21
          }
        },
        loc: {
          start: {
            line: 117,
            column: 35
          },
          end: {
            line: 128,
            column: 15
          }
        },
        line: 117
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 85,
            column: 31
          },
          end: {
            line: 85,
            column: 58
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 85,
            column: 31
          },
          end: {
            line: 85,
            column: 52
          }
        }, {
          start: {
            line: 85,
            column: 56
          },
          end: {
            line: 85,
            column: 58
          }
        }],
        line: 85
      },
      '1': {
        loc: {
          start: {
            line: 95,
            column: 18
          },
          end: {
            line: 97,
            column: 19
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 95,
            column: 18
          },
          end: {
            line: 97,
            column: 19
          }
        }, {
          start: {
            line: 95,
            column: 18
          },
          end: {
            line: 97,
            column: 19
          }
        }],
        line: 95
      },
      '2': {
        loc: {
          start: {
            line: 104,
            column: 16
          },
          end: {
            line: 109,
            column: 17
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 104,
            column: 16
          },
          end: {
            line: 109,
            column: 17
          }
        }, {
          start: {
            line: 104,
            column: 16
          },
          end: {
            line: 109,
            column: 17
          }
        }],
        line: 104
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
      '53': 0
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
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _compositions = require('../components/compositions');

var _resources = require('../components/resources');

var _assets = require('../components/assets');

var _fsExtra = require('fs-extra');

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assetsFolder = (cov_ai645p28e.s[0]++, (0, _path.resolve)(__dirname + '/../../assets'));
var tempFolder = (cov_ai645p28e.s[1]++, (0, _path.resolve)(__dirname + '/../../temp'));
var tempAssetsFolder = (cov_ai645p28e.s[2]++, (0, _path.resolve)(tempFolder + '/assets'));

cov_ai645p28e.s[3]++;
var mountLocalAssets = exports.mountLocalAssets = function mountLocalAssets(assets) {
  cov_ai645p28e.f[0]++;
  cov_ai645p28e.s[4]++;
  return new _promise2.default(function (resolve, reject) {
    cov_ai645p28e.f[1]++;
    cov_ai645p28e.s[5]++;

    // should return getAssetUri function ie : asset => `${tempDirPath}/${asset._id}/${asset.filename}`
    return (0, _fsExtra.remove)(tempAssetsFolder).then(function () {
      cov_ai645p28e.f[2]++;
      cov_ai645p28e.s[6]++;
      return (0, _fsExtra.ensureDir)(tempAssetsFolder);
    }).then(function () {
      cov_ai645p28e.f[3]++;

      var toResolve = (cov_ai645p28e.s[7]++, assets.map(function (asset) {
        cov_ai645p28e.f[4]++;
        cov_ai645p28e.s[8]++;

        return (0, _fsExtra.ensureDir)(tempAssetsFolder + '/' + asset._id).then(function () {
          cov_ai645p28e.f[5]++;
          cov_ai645p28e.s[9]++;

          return _assets.dal.getAssetAttachment({ id: asset._id, filename: asset.filename });
        }).then(function (_ref) {
          var data = _ref.data;
          cov_ai645p28e.f[6]++;
          cov_ai645p28e.s[10]++;

          return (0, _fsExtra.writeFile)(tempAssetsFolder + '/' + asset._id + '/' + asset.filename, data);
        });
      }));
      cov_ai645p28e.s[11]++;
      return _promise2.default.all(toResolve);
    }).then(function () {
      cov_ai645p28e.f[7]++;
      cov_ai645p28e.s[12]++;

      var getAssetUri = function getAssetUri(asset) {
        cov_ai645p28e.f[8]++;
        cov_ai645p28e.s[13]++;
        return tempAssetsFolder + '/' + asset._id + '/' + asset.filename;
      };
      cov_ai645p28e.s[14]++;
      resolve(getAssetUri);
    }).catch(reject);
  });
};

cov_ai645p28e.s[15]++;
var unmountLocalAssets = exports.unmountLocalAssets = function unmountLocalAssets() {
  cov_ai645p28e.f[9]++;
  cov_ai645p28e.s[16]++;
  return (/*assets*/new _promise2.default(function (resolve, reject) {
      cov_ai645p28e.f[10]++;
      cov_ai645p28e.s[17]++;

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

cov_ai645p28e.s[18]++;
var fetchCitationData = exports.fetchCitationData = function fetchCitationData() {
  cov_ai645p28e.f[11]++;
  cov_ai645p28e.s[19]++;
  return new _promise2.default(function (resolve, reject) {
    cov_ai645p28e.f[12]++;

    var citationStyle = void 0;
    var citationLocale = void 0;
    cov_ai645p28e.s[20]++;
    (0, _fsExtra.readFile)(assetsFolder + '/apa.csl', 'utf8').then(function (str) {
      cov_ai645p28e.f[13]++;
      cov_ai645p28e.s[21]++;

      citationStyle = str;
      cov_ai645p28e.s[22]++;
      return (0, _fsExtra.readFile)(assetsFolder + '/english-locale.xml', 'utf8');
    }).then(function (str) {
      cov_ai645p28e.f[14]++;
      cov_ai645p28e.s[23]++;

      citationLocale = str;
      cov_ai645p28e.s[24]++;
      resolve({ citationStyle: citationStyle, citationLocale: citationLocale });
    }).catch(reject);
  });
};

cov_ai645p28e.s[25]++;
var fetchMontageDependencies = exports.fetchMontageDependencies = function fetchMontageDependencies(montage) {
  cov_ai645p28e.f[15]++;
  cov_ai645p28e.s[26]++;

  return new _promise2.default(function (resolve, reject) {
    cov_ai645p28e.f[16]++;

    var compositions = void 0;
    var resources = void 0;
    var assets = void 0;
    // register compositions
    var compositionsRequirements = (cov_ai645p28e.s[27]++, montage.data.compositions.map(function (target) {
      cov_ai645p28e.f[17]++;
      cov_ai645p28e.s[28]++;
      return target.target_composition_id;
    }).filter(function (id) {
      cov_ai645p28e.f[18]++;
      cov_ai645p28e.s[29]++;
      return id;
    }).map(function (id) {
      cov_ai645p28e.f[19]++;
      cov_ai645p28e.s[30]++;
      return _compositions.dal.getComposition({ id: id });
    }));
    cov_ai645p28e.s[31]++;
    _promise2.default.all(compositionsRequirements).then(function (theseCompositions) {
      cov_ai645p28e.f[20]++;
      cov_ai645p28e.s[32]++;

      compositions = theseCompositions;

      // register resources requirement
      var resourcesRequirements = (cov_ai645p28e.s[33]++, compositions.reduce(function (result, composition) {
        cov_ai645p28e.f[21]++;
        cov_ai645p28e.s[34]++;

        return result.concat((cov_ai645p28e.b[0][0]++, composition.resources) || (cov_ai645p28e.b[0][1]++, []));
      }, []).filter(function (id) {
        cov_ai645p28e.f[22]++;
        cov_ai645p28e.s[35]++;
        return id;
      }).map(function (id) {
        cov_ai645p28e.f[23]++;
        cov_ai645p28e.s[36]++;
        return _resources.dal.getResource({ id: id });
      }));

      cov_ai645p28e.s[37]++;
      _promise2.default.all(resourcesRequirements).then(function (theseResources) {
        cov_ai645p28e.f[24]++;
        cov_ai645p28e.s[38]++;

        resources = theseResources;
        cov_ai645p28e.s[39]++;
        var parseData = function parseData(data) {
          cov_ai645p28e.f[25]++;
          cov_ai645p28e.s[40]++;
          return (0, _keys2.default)(data).reduce(function (result, key) {
            cov_ai645p28e.f[26]++;
            cov_ai645p28e.s[41]++;

            if (key.indexOf('asset_id') > -1) {
              cov_ai645p28e.b[1][0]++;
              cov_ai645p28e.s[42]++;

              return result.concat(data[key]); /* eslint security/detect-object-injection : 0 */
            } else {
              cov_ai645p28e.b[1][1]++;
            }
            cov_ai645p28e.s[43]++;
            return result;
          }, []);
        };

        // register assets requirement as a list of assets ids
        var assetsRequirements = (cov_ai645p28e.s[44]++, resources.reduce(function (result, resource) {
          cov_ai645p28e.f[27]++;
          cov_ai645p28e.s[45]++;

          if (Array.isArray(resource.data)) {
            cov_ai645p28e.b[2][0]++;
            cov_ai645p28e.s[46]++;

            return result.concat(resource.data.reduce(function (result2, item) {
              cov_ai645p28e.f[28]++;
              cov_ai645p28e.s[47]++;

              return result2.concat(parseData(item));
            }, []));
          } else {
            cov_ai645p28e.b[2][1]++;
          }
          cov_ai645p28e.s[48]++;
          return result.concat(parseData(resource.data));
        }, []).filter(function (id) {
          cov_ai645p28e.f[29]++;
          cov_ai645p28e.s[49]++;
          return id;
        }).map(function (id) {
          cov_ai645p28e.f[30]++;
          cov_ai645p28e.s[50]++;
          return _assets.dal.getAsset({ id: id });
        }));

        cov_ai645p28e.s[51]++;
        _promise2.default.all(assetsRequirements).then(function (theseAssets) {
          cov_ai645p28e.f[31]++;
          cov_ai645p28e.s[52]++;

          assets = theseAssets;
          cov_ai645p28e.s[53]++;
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