'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDeliverable = exports.updateDeliverable = exports.createDeliverable = exports.getDeliverableAttachment = exports.getDeliverable = exports.getDeliverables = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_1zxibton6j = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/deliverables/deliverables.dal.js',
      hash = 'e6f186773b3c8f60afdd83cce2097b50581c229d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/components/deliverables/deliverables.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 38
        }
      },
      '1': {
        start: {
          line: 28,
          column: 31
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
          column: 30
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
          column: 38
        }
      },
      '14': {
        start: {
          line: 79,
          column: 40
        },
        end: {
          line: 91,
          column: 4
        }
      },
      '15': {
        start: {
          line: 83,
          column: 2
        },
        end: {
          line: 91,
          column: 4
        }
      },
      '16': {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 90,
          column: 7
        }
      },
      '17': {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 89,
          column: 7
        }
      },
      '18': {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 86,
          column: 20
        }
      },
      '19': {
        start: {
          line: 88,
          column: 8
        },
        end: {
          line: 88,
          column: 58
        }
      },
      '20': {
        start: {
          line: 100,
          column: 33
        },
        end: {
          line: 140,
          column: 1
        }
      },
      '21': {
        start: {
          line: 101,
          column: 21
        },
        end: {
          line: 101,
          column: 32
        }
      },
      '22': {
        start: {
          line: 102,
          column: 19
        },
        end: {
          line: 102,
          column: 35
        }
      },
      '23': {
        start: {
          line: 104,
          column: 2
        },
        end: {
          line: 139,
          column: 33
        }
      },
      '24': {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 110,
          column: 6
        }
      },
      '25': {
        start: {
          line: 114,
          column: 22
        },
        end: {
          line: 114,
          column: 24
        }
      },
      '26': {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 137,
          column: 7
        }
      },
      '27': {
        start: {
          line: 117,
          column: 6
        },
        end: {
          line: 136,
          column: 8
        }
      },
      '28': {
        start: {
          line: 130,
          column: 10
        },
        end: {
          line: 134,
          column: 11
        }
      },
      '29': {
        start: {
          line: 131,
          column: 12
        },
        end: {
          line: 131,
          column: 24
        }
      },
      '30': {
        start: {
          line: 133,
          column: 12
        },
        end: {
          line: 133,
          column: 26
        }
      },
      '31': {
        start: {
          line: 139,
          column: 14
        },
        end: {
          line: 139,
          column: 31
        }
      },
      '32': {
        start: {
          line: 149,
          column: 33
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
          column: 38
        }
      },
      '36': {
        start: {
          line: 166,
          column: 40
        },
        end: {
          line: 166,
          column: 108
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
          column: 33
        },
        end: {
          line: 214,
          column: 64
        }
      },
      '50': {
        start: {
          line: 213,
          column: 2
        },
        end: {
          line: 214,
          column: 64
        }
      },
      '51': {
        start: {
          line: 214,
          column: 25
        },
        end: {
          line: 214,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 28,
            column: 31
          },
          end: {
            line: 28,
            column: 32
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
            column: 30
          },
          end: {
            line: 65,
            column: 31
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
            column: 38
          }
        },
        line: 71
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 79,
            column: 40
          },
          end: {
            line: 79,
            column: 41
          }
        },
        loc: {
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 91,
            column: 4
          }
        },
        line: 83
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 83,
            column: 14
          },
          end: {
            line: 83,
            column: 15
          }
        },
        loc: {
          start: {
            line: 83,
            column: 35
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 83
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 84,
            column: 36
          },
          end: {
            line: 84,
            column: 37
          }
        },
        loc: {
          start: {
            line: 84,
            column: 51
          },
          end: {
            line: 90,
            column: 5
          }
        },
        line: 84
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 100,
            column: 33
          },
          end: {
            line: 100,
            column: 34
          }
        },
        loc: {
          start: {
            line: 100,
            column: 56
          },
          end: {
            line: 140,
            column: 1
          }
        },
        line: 100
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 106,
            column: 8
          },
          end: {
            line: 106,
            column: 9
          }
        },
        loc: {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 110,
            column: 6
          }
        },
        line: 107
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 113,
            column: 8
          },
          end: {
            line: 113,
            column: 9
          }
        },
        loc: {
          start: {
            line: 113,
            column: 14
          },
          end: {
            line: 138,
            column: 3
          }
        },
        line: 113
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 116,
            column: 23
          },
          end: {
            line: 116,
            column: 24
          }
        },
        loc: {
          start: {
            line: 116,
            column: 44
          },
          end: {
            line: 137,
            column: 5
          }
        },
        line: 116
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 129,
            column: 8
          },
          end: {
            line: 129,
            column: 9
          }
        },
        loc: {
          start: {
            line: 129,
            column: 23
          },
          end: {
            line: 135,
            column: 9
          }
        },
        line: 129
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 139,
            column: 9
          },
          end: {
            line: 139,
            column: 10
          }
        },
        loc: {
          start: {
            line: 139,
            column: 14
          },
          end: {
            line: 139,
            column: 31
          }
        },
        line: 139
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 149,
            column: 33
          },
          end: {
            line: 149,
            column: 34
          }
        },
        loc: {
          start: {
            line: 149,
            column: 90
          },
          end: {
            line: 205,
            column: 1
          }
        },
        line: 149
      },
      '19': {
        name: '(anonymous_19)',
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
            line: 163,
            column: 12
          },
          end: {
            line: 163,
            column: 38
          }
        },
        line: 163
      },
      '21': {
        name: '(anonymous_21)',
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
            column: 31
          },
          end: {
            line: 177,
            column: 11
          }
        },
        line: 165
      },
      '22': {
        name: '(anonymous_22)',
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
      '23': {
        name: '(anonymous_23)',
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
      '24': {
        name: '(anonymous_24)',
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
      '25': {
        name: '(anonymous_25)',
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
      '26': {
        name: '(anonymous_26)',
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
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 212,
            column: 33
          },
          end: {
            line: 212,
            column: 34
          }
        },
        loc: {
          start: {
            line: 213,
            column: 2
          },
          end: {
            line: 214,
            column: 64
          }
        },
        line: 213
      },
      '28': {
        name: '(anonymous_28)',
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
            column: 25
          },
          end: {
            line: 214,
            column: 63
          }
        },
        line: 214
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
            line: 85,
            column: 6
          },
          end: {
            line: 89,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 89,
            column: 7
          }
        }, {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 89,
            column: 7
          }
        }],
        line: 85
      },
      '4': {
        loc: {
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 134,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 134,
            column: 11
          }
        }, {
          start: {
            line: 130,
            column: 10
          },
          end: {
            line: 134,
            column: 11
          }
        }],
        line: 130
      },
      '5': {
        loc: {
          start: {
            line: 166,
            column: 40
          },
          end: {
            line: 166,
            column: 108
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
            column: 64
          }
        }, {
          start: {
            line: 166,
            column: 68
          },
          end: {
            line: 166,
            column: 108
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
      '27': 0,
      '28': 0
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
      * This module provides couchdb database operations managers
      * for the deliverables component.
      * @module metis-backend/components/deliverables
      */

var _mimeTypes = require('mime-types');

var _plugDb = require('../../utils/plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

var _metisSchemas = require('metis-schemas');

var _deliverables = require('./deliverables.design');

var _deliverables2 = _interopRequireDefault(_deliverables);

var _couchdb = require('../../utils/couchdb');

var _schemas = require('../../utils/schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Registering couchdb views related to deliverables objects
 */
cov_1zxibton6j.s[0]++;
(0, _couchdb.addDesign)(_plugDb2.default, 'deliverables', _deliverables2.default);

/**
 * Gets a list of deliverables with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
cov_1zxibton6j.s[1]++;
var getDeliverables = exports.getDeliverables = function getDeliverables(_ref) {
  var _ref$query = _ref.query,
      query = _ref$query === undefined ? (cov_1zxibton6j.b[0][0]++, {}) : _ref$query,
      _ref$include_docs = _ref.include_docs,
      include_docs = _ref$include_docs === undefined ? (cov_1zxibton6j.b[1][0]++, true) : _ref$include_docs;
  cov_1zxibton6j.f[0]++;
  cov_1zxibton6j.s[2]++;

  if (query.filename) {
    cov_1zxibton6j.b[2][0]++;
    cov_1zxibton6j.s[3]++;

    return _plugDb2.default.viewAsync('deliverables', 'by_filename', {
      key: query.filename,
      include_docs: include_docs
    }).then(function (results) {
      cov_1zxibton6j.f[1]++;
      cov_1zxibton6j.s[4]++;
      return new _promise2.default(function (resolve) {
        cov_1zxibton6j.f[2]++;
        cov_1zxibton6j.s[5]++;
        return resolve(results.rows.map(function (doc) {
          cov_1zxibton6j.f[3]++;
          cov_1zxibton6j.s[6]++;
          return doc.doc;
        }));
      });
    });
  } else {
    cov_1zxibton6j.b[2][1]++;
    cov_1zxibton6j.s[7]++;

    return _plugDb2.default.viewAsync('deliverables', 'by_filename', {
      include_docs: include_docs
    }).then(function (results) {
      cov_1zxibton6j.f[4]++;
      cov_1zxibton6j.s[8]++;
      return new _promise2.default(function (resolve) {
        cov_1zxibton6j.f[5]++;
        cov_1zxibton6j.s[9]++;
        return resolve(results.rows.map(function (doc) {
          cov_1zxibton6j.f[6]++;
          cov_1zxibton6j.s[10]++;
          return doc.doc;
        }));
      });
    });
  }
};

/**
 * Gets a deliverable with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
cov_1zxibton6j.s[11]++;
var getDeliverable = exports.getDeliverable = function getDeliverable(_ref2) {
  var id = _ref2.id;
  cov_1zxibton6j.f[7]++;
  cov_1zxibton6j.s[12]++;
  return _plugDb2.default.getAsync(id).then(function (deliverable) {
    cov_1zxibton6j.f[8]++;
    cov_1zxibton6j.s[13]++;
    return (
      // verify that data is compliant before returning it
      (0, _schemas.dataIsValid)(deliverable, _metisSchemas.Deliverable)
    );
  });
};

/**
 * Gets a deliverable with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
cov_1zxibton6j.s[14]++;
var getDeliverableAttachment = exports.getDeliverableAttachment = function getDeliverableAttachment(_ref3) {
  var id = _ref3.id,
      filename = _ref3.filename;
  cov_1zxibton6j.f[9]++;
  cov_1zxibton6j.s[15]++;
  return new _promise2.default(function (resolve, reject) {
    cov_1zxibton6j.f[10]++;
    cov_1zxibton6j.s[16]++;

    _plugDb2.default.attachment.get(id, filename, function (err, body) {
      cov_1zxibton6j.f[11]++;
      cov_1zxibton6j.s[17]++;

      if (err) {
        cov_1zxibton6j.b[3][0]++;
        cov_1zxibton6j.s[18]++;

        reject(err);
      } else {
        cov_1zxibton6j.b[3][1]++;
        cov_1zxibton6j.s[19]++;

        resolve({ data: body, mimetype: (0, _mimeTypes.lookup)(filename) });
      }
    });
  });
};

/**
 * Creates a new deliverable
 * @param {object} deliverable
 * @param {object} data
 * @return {Promise}
 */
cov_1zxibton6j.s[20]++;
var createDeliverable = exports.createDeliverable = function createDeliverable(deliverable, data) {
  cov_1zxibton6j.f[12]++;

  var _ref4 = (cov_1zxibton6j.s[21]++, deliverable),
      filename = _ref4.filename;

  var mimeType = (cov_1zxibton6j.s[22]++, (0, _mimeTypes.lookup)(filename));
  // validate data
  cov_1zxibton6j.s[23]++;
  return (0, _schemas.dataIsValid)(deliverable, _metisSchemas.Deliverable)
  // create document
  .then(function () {
    cov_1zxibton6j.f[13]++;
    cov_1zxibton6j.s[24]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, deliverable, {
      mimetype: mimeType
    }));
  })
  // add attachment
  .then(function (op) {
    cov_1zxibton6j.f[14]++;

    var _ref5 = (cov_1zxibton6j.s[25]++, op),
        id = _ref5.id,
        rev = _ref5.rev;

    cov_1zxibton6j.s[26]++;


    return new _promise2.default(function (resolve, reject) {
      cov_1zxibton6j.f[15]++;
      cov_1zxibton6j.s[27]++;

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
        cov_1zxibton6j.f[16]++;
        cov_1zxibton6j.s[28]++;

        if (err) {
          cov_1zxibton6j.b[4][0]++;
          cov_1zxibton6j.s[29]++;

          reject(err);
        } else {
          cov_1zxibton6j.b[4][1]++;
          cov_1zxibton6j.s[30]++;

          resolve(body);
        }
      });
    });
  }).catch(function (e) {
    cov_1zxibton6j.f[17]++;
    cov_1zxibton6j.s[31]++;
    return _promise2.default.reject(e);
  });
};

/**
 * Updates a deliverable
 * @param {string} id - id of the deliverable
 * @param {object} deliverable - deliverable data to update
 * @param {object} data - attachment data to update
 * @return {Promise}
 */
cov_1zxibton6j.s[32]++;
var updateDeliverable = exports.updateDeliverable = function updateDeliverable(deliverableId, _ref6, attachmentData) {
  var filename = _ref6.filename,
      mimetype = _ref6.mimetype;
  cov_1zxibton6j.f[18]++;
  cov_1zxibton6j.s[33]++;

  // get existing document
  return _plugDb2.default.getAsync(deliverableId)
  // then update document
  .then(function (deliverable) {
    cov_1zxibton6j.f[19]++;
    cov_1zxibton6j.s[34]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, deliverable, {
      filename: filename,
      mimetype: mimetype,
      rev: deliverable._rev
    }));
  })
  // destroy previous attachments
  .then(function () {
    cov_1zxibton6j.f[20]++;
    cov_1zxibton6j.s[35]++;
    return _plugDb2.default.getAsync(deliverableId);
  }).then(function (deliverable) {
    cov_1zxibton6j.f[21]++;

    var previousAttachment = (cov_1zxibton6j.s[36]++, (cov_1zxibton6j.b[5][0]++, deliverable._attachments) && (cov_1zxibton6j.b[5][1]++, (0, _keys2.default)(deliverable._attachments)[0]));
    cov_1zxibton6j.s[37]++;
    return new _promise2.default(function (resolve, reject) {
      cov_1zxibton6j.f[22]++;
      cov_1zxibton6j.s[38]++;

      if (previousAttachment) {
        cov_1zxibton6j.b[6][0]++;
        cov_1zxibton6j.s[39]++;

        _plugDb2.default.attachment.destroy(deliverable._id, encodeURIComponent(previousAttachment), { rev: deliverable._rev }, function (err, body) {
          cov_1zxibton6j.f[23]++;
          cov_1zxibton6j.s[40]++;

          if (err) {
            cov_1zxibton6j.b[7][0]++;
            cov_1zxibton6j.s[41]++;

            reject(err);
          } else {
              cov_1zxibton6j.b[7][1]++;
              cov_1zxibton6j.s[42]++;
              resolve(body);
            }
        });
      } else {
        cov_1zxibton6j.b[6][1]++;
      }
    });
  })
  // add new attachment
  .then(function (op) {
    cov_1zxibton6j.f[24]++;

    var _ref7 = (cov_1zxibton6j.s[43]++, op),
        id = _ref7.id,
        rev = _ref7.rev;

    cov_1zxibton6j.s[44]++;


    return new _promise2.default(function (resolve, reject) {
      cov_1zxibton6j.f[25]++;
      cov_1zxibton6j.s[45]++;

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
        cov_1zxibton6j.f[26]++;
        cov_1zxibton6j.s[46]++;

        if (err) {
          cov_1zxibton6j.b[8][0]++;
          cov_1zxibton6j.s[47]++;

          reject(err);
        } else {
          cov_1zxibton6j.b[8][1]++;
          cov_1zxibton6j.s[48]++;

          resolve(body);
        }
      });
    });
  });
};

/**
 * Deletes a deliverable
 * @param {object} deliverable - deliverable to delete
 * @return {Promise}
 */
cov_1zxibton6j.s[49]++;
var deleteDeliverable = exports.deleteDeliverable = function deleteDeliverable(_ref8) {
  var _id = _ref8._id;
  cov_1zxibton6j.f[27]++;
  cov_1zxibton6j.s[50]++;
  return _plugDb2.default.getAsync(_id).then(function (deliverable) {
    cov_1zxibton6j.f[28]++;
    cov_1zxibton6j.s[51]++;
    return _plugDb2.default.destroyAsync(_id, deliverable._rev);
  });
};