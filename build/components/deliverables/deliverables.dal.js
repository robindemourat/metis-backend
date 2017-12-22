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

var cov_y45hgzcqv = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/deliverables/deliverables.dal.js',
      hash = 'aeb6edef0449046a00c6aaec2611c57c45fe66e9',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/deliverables/deliverables.dal.js',
    statementMap: {
      '0': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 38
        }
      },
      '1': {
        start: {
          line: 27,
          column: 31
        },
        end: {
          line: 57,
          column: 1
        }
      },
      '2': {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 56,
          column: 3
        }
      },
      '3': {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 43,
          column: 6
        }
      },
      '4': {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 42,
          column: 11
        }
      },
      '5': {
        start: {
          line: 39,
          column: 12
        },
        end: {
          line: 41,
          column: 13
        }
      },
      '6': {
        start: {
          line: 40,
          column: 38
        },
        end: {
          line: 40,
          column: 45
        }
      },
      '7': {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 55,
          column: 6
        }
      },
      '8': {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 54,
          column: 11
        }
      },
      '9': {
        start: {
          line: 51,
          column: 12
        },
        end: {
          line: 53,
          column: 13
        }
      },
      '10': {
        start: {
          line: 52,
          column: 38
        },
        end: {
          line: 52,
          column: 45
        }
      },
      '11': {
        start: {
          line: 64,
          column: 30
        },
        end: {
          line: 71,
          column: 5
        }
      },
      '12': {
        start: {
          line: 67,
          column: 2
        },
        end: {
          line: 71,
          column: 5
        }
      },
      '13': {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 38
        }
      },
      '14': {
        start: {
          line: 78,
          column: 40
        },
        end: {
          line: 90,
          column: 4
        }
      },
      '15': {
        start: {
          line: 82,
          column: 2
        },
        end: {
          line: 90,
          column: 4
        }
      },
      '16': {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 89,
          column: 7
        }
      },
      '17': {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 88,
          column: 7
        }
      },
      '18': {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 85,
          column: 20
        }
      },
      '19': {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 87,
          column: 58
        }
      },
      '20': {
        start: {
          line: 99,
          column: 33
        },
        end: {
          line: 138,
          column: 1
        }
      },
      '21': {
        start: {
          line: 100,
          column: 21
        },
        end: {
          line: 100,
          column: 32
        }
      },
      '22': {
        start: {
          line: 101,
          column: 19
        },
        end: {
          line: 101,
          column: 35
        }
      },
      '23': {
        start: {
          line: 103,
          column: 2
        },
        end: {
          line: 137,
          column: 5
        }
      },
      '24': {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 109,
          column: 6
        }
      },
      '25': {
        start: {
          line: 113,
          column: 22
        },
        end: {
          line: 113,
          column: 24
        }
      },
      '26': {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 136,
          column: 7
        }
      },
      '27': {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 135,
          column: 8
        }
      },
      '28': {
        start: {
          line: 129,
          column: 10
        },
        end: {
          line: 133,
          column: 11
        }
      },
      '29': {
        start: {
          line: 130,
          column: 12
        },
        end: {
          line: 130,
          column: 24
        }
      },
      '30': {
        start: {
          line: 132,
          column: 12
        },
        end: {
          line: 132,
          column: 26
        }
      },
      '31': {
        start: {
          line: 147,
          column: 33
        },
        end: {
          line: 203,
          column: 1
        }
      },
      '32': {
        start: {
          line: 149,
          column: 2
        },
        end: {
          line: 202,
          column: 13
        }
      },
      '33': {
        start: {
          line: 152,
          column: 12
        },
        end: {
          line: 157,
          column: 14
        }
      },
      '34': {
        start: {
          line: 161,
          column: 12
        },
        end: {
          line: 161,
          column: 38
        }
      },
      '35': {
        start: {
          line: 164,
          column: 40
        },
        end: {
          line: 164,
          column: 108
        }
      },
      '36': {
        start: {
          line: 165,
          column: 12
        },
        end: {
          line: 174,
          column: 15
        }
      },
      '37': {
        start: {
          line: 166,
          column: 14
        },
        end: {
          line: 173,
          column: 15
        }
      },
      '38': {
        start: {
          line: 167,
          column: 16
        },
        end: {
          line: 172,
          column: 21
        }
      },
      '39': {
        start: {
          line: 169,
          column: 20
        },
        end: {
          line: 171,
          column: 41
        }
      },
      '40': {
        start: {
          line: 170,
          column: 22
        },
        end: {
          line: 170,
          column: 34
        }
      },
      '41': {
        start: {
          line: 171,
          column: 27
        },
        end: {
          line: 171,
          column: 41
        }
      },
      '42': {
        start: {
          line: 178,
          column: 30
        },
        end: {
          line: 178,
          column: 32
        }
      },
      '43': {
        start: {
          line: 180,
          column: 12
        },
        end: {
          line: 201,
          column: 15
        }
      },
      '44': {
        start: {
          line: 181,
          column: 14
        },
        end: {
          line: 200,
          column: 16
        }
      },
      '45': {
        start: {
          line: 194,
          column: 18
        },
        end: {
          line: 198,
          column: 19
        }
      },
      '46': {
        start: {
          line: 195,
          column: 20
        },
        end: {
          line: 195,
          column: 32
        }
      },
      '47': {
        start: {
          line: 197,
          column: 20
        },
        end: {
          line: 197,
          column: 34
        }
      },
      '48': {
        start: {
          line: 210,
          column: 33
        },
        end: {
          line: 212,
          column: 64
        }
      },
      '49': {
        start: {
          line: 211,
          column: 2
        },
        end: {
          line: 212,
          column: 64
        }
      },
      '50': {
        start: {
          line: 212,
          column: 25
        },
        end: {
          line: 212,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 27,
            column: 31
          },
          end: {
            line: 27,
            column: 32
          }
        },
        loc: {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 30
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 7
          }
        },
        loc: {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 42,
            column: 11
          }
        },
        line: 37
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 38,
            column: 10
          },
          end: {
            line: 38,
            column: 11
          }
        },
        loc: {
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 41,
            column: 13
          }
        },
        line: 39
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 40,
            column: 31
          },
          end: {
            line: 40,
            column: 32
          }
        },
        loc: {
          start: {
            line: 40,
            column: 38
          },
          end: {
            line: 40,
            column: 45
          }
        },
        line: 40
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 7
          }
        },
        loc: {
          start: {
            line: 49,
            column: 8
          },
          end: {
            line: 54,
            column: 11
          }
        },
        line: 49
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 50,
            column: 10
          },
          end: {
            line: 50,
            column: 11
          }
        },
        loc: {
          start: {
            line: 51,
            column: 12
          },
          end: {
            line: 53,
            column: 13
          }
        },
        line: 51
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 52,
            column: 31
          },
          end: {
            line: 52,
            column: 32
          }
        },
        loc: {
          start: {
            line: 52,
            column: 38
          },
          end: {
            line: 52,
            column: 45
          }
        },
        line: 52
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 64,
            column: 30
          },
          end: {
            line: 64,
            column: 31
          }
        },
        loc: {
          start: {
            line: 67,
            column: 2
          },
          end: {
            line: 71,
            column: 5
          }
        },
        line: 67
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 68,
            column: 10
          },
          end: {
            line: 68,
            column: 11
          }
        },
        loc: {
          start: {
            line: 70,
            column: 6
          },
          end: {
            line: 70,
            column: 38
          }
        },
        line: 70
      },
      '9': {
        name: '(anonymous_9)',
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
            line: 82,
            column: 2
          },
          end: {
            line: 90,
            column: 4
          }
        },
        line: 82
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 82,
            column: 14
          },
          end: {
            line: 82,
            column: 15
          }
        },
        loc: {
          start: {
            line: 82,
            column: 35
          },
          end: {
            line: 90,
            column: 3
          }
        },
        line: 82
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 83,
            column: 36
          },
          end: {
            line: 83,
            column: 37
          }
        },
        loc: {
          start: {
            line: 83,
            column: 51
          },
          end: {
            line: 89,
            column: 5
          }
        },
        line: 83
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 99,
            column: 33
          },
          end: {
            line: 99,
            column: 34
          }
        },
        loc: {
          start: {
            line: 99,
            column: 56
          },
          end: {
            line: 138,
            column: 1
          }
        },
        line: 99
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 105,
            column: 9
          }
        },
        loc: {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 109,
            column: 6
          }
        },
        line: 106
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 112,
            column: 8
          },
          end: {
            line: 112,
            column: 9
          }
        },
        loc: {
          start: {
            line: 112,
            column: 14
          },
          end: {
            line: 137,
            column: 3
          }
        },
        line: 112
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 115,
            column: 23
          },
          end: {
            line: 115,
            column: 24
          }
        },
        loc: {
          start: {
            line: 115,
            column: 44
          },
          end: {
            line: 136,
            column: 5
          }
        },
        line: 115
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 128,
            column: 9
          }
        },
        loc: {
          start: {
            line: 128,
            column: 23
          },
          end: {
            line: 134,
            column: 9
          }
        },
        line: 128
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 147,
            column: 33
          },
          end: {
            line: 147,
            column: 34
          }
        },
        loc: {
          start: {
            line: 147,
            column: 90
          },
          end: {
            line: 203,
            column: 1
          }
        },
        line: 147
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 151,
            column: 16
          },
          end: {
            line: 151,
            column: 17
          }
        },
        loc: {
          start: {
            line: 152,
            column: 12
          },
          end: {
            line: 157,
            column: 14
          }
        },
        line: 152
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 160,
            column: 16
          },
          end: {
            line: 160,
            column: 17
          }
        },
        loc: {
          start: {
            line: 161,
            column: 12
          },
          end: {
            line: 161,
            column: 38
          }
        },
        line: 161
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 163,
            column: 16
          },
          end: {
            line: 163,
            column: 17
          }
        },
        loc: {
          start: {
            line: 163,
            column: 31
          },
          end: {
            line: 175,
            column: 11
          }
        },
        line: 163
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 165,
            column: 31
          },
          end: {
            line: 165,
            column: 32
          }
        },
        loc: {
          start: {
            line: 165,
            column: 52
          },
          end: {
            line: 174,
            column: 13
          }
        },
        line: 165
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 168,
            column: 18
          },
          end: {
            line: 168,
            column: 19
          }
        },
        loc: {
          start: {
            line: 168,
            column: 33
          },
          end: {
            line: 172,
            column: 19
          }
        },
        line: 168
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 177,
            column: 16
          },
          end: {
            line: 177,
            column: 17
          }
        },
        loc: {
          start: {
            line: 177,
            column: 22
          },
          end: {
            line: 202,
            column: 11
          }
        },
        line: 177
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 180,
            column: 31
          },
          end: {
            line: 180,
            column: 32
          }
        },
        loc: {
          start: {
            line: 180,
            column: 52
          },
          end: {
            line: 201,
            column: 13
          }
        },
        line: 180
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 193,
            column: 16
          },
          end: {
            line: 193,
            column: 17
          }
        },
        loc: {
          start: {
            line: 193,
            column: 31
          },
          end: {
            line: 199,
            column: 17
          }
        },
        line: 193
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 210,
            column: 33
          },
          end: {
            line: 210,
            column: 34
          }
        },
        loc: {
          start: {
            line: 211,
            column: 2
          },
          end: {
            line: 212,
            column: 64
          }
        },
        line: 211
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 212,
            column: 10
          },
          end: {
            line: 212,
            column: 11
          }
        },
        loc: {
          start: {
            line: 212,
            column: 25
          },
          end: {
            line: 212,
            column: 63
          }
        },
        line: 212
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 12
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 28,
            column: 10
          },
          end: {
            line: 28,
            column: 12
          }
        }],
        line: 28
      },
      '1': {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 21
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 29,
            column: 17
          },
          end: {
            line: 29,
            column: 21
          }
        }],
        line: 29
      },
      '2': {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        }, {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 56,
            column: 3
          }
        }],
        line: 31
      },
      '3': {
        loc: {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 88,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 88,
            column: 7
          }
        }, {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 88,
            column: 7
          }
        }],
        line: 84
      },
      '4': {
        loc: {
          start: {
            line: 129,
            column: 10
          },
          end: {
            line: 133,
            column: 11
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 129,
            column: 10
          },
          end: {
            line: 133,
            column: 11
          }
        }, {
          start: {
            line: 129,
            column: 10
          },
          end: {
            line: 133,
            column: 11
          }
        }],
        line: 129
      },
      '5': {
        loc: {
          start: {
            line: 164,
            column: 40
          },
          end: {
            line: 164,
            column: 108
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 164,
            column: 40
          },
          end: {
            line: 164,
            column: 64
          }
        }, {
          start: {
            line: 164,
            column: 68
          },
          end: {
            line: 164,
            column: 108
          }
        }],
        line: 164
      },
      '6': {
        loc: {
          start: {
            line: 166,
            column: 14
          },
          end: {
            line: 173,
            column: 15
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 166,
            column: 14
          },
          end: {
            line: 173,
            column: 15
          }
        }, {
          start: {
            line: 166,
            column: 14
          },
          end: {
            line: 173,
            column: 15
          }
        }],
        line: 166
      },
      '7': {
        loc: {
          start: {
            line: 169,
            column: 20
          },
          end: {
            line: 171,
            column: 41
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 169,
            column: 20
          },
          end: {
            line: 171,
            column: 41
          }
        }, {
          start: {
            line: 169,
            column: 20
          },
          end: {
            line: 171,
            column: 41
          }
        }],
        line: 169
      },
      '8': {
        loc: {
          start: {
            line: 194,
            column: 18
          },
          end: {
            line: 198,
            column: 19
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 194,
            column: 18
          },
          end: {
            line: 198,
            column: 19
          }
        }, {
          start: {
            line: 194,
            column: 18
          },
          end: {
            line: 198,
            column: 19
          }
        }],
        line: 194
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
      * Deliverable data access layer
      */


var _mimeTypes = require('mime-types');

var _plugDb = require('../../utils/plugDb');

var _plugDb2 = _interopRequireDefault(_plugDb);

var _plurishingSchemas = require('plurishing-schemas');

var _deliverables = require('./deliverables.design');

var _deliverables2 = _interopRequireDefault(_deliverables);

var _couchdb = require('../../utils/couchdb');

var _schemas = require('../../utils/schemas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Registering couchdb views related to deliverables objects
 */
cov_y45hgzcqv.s[0]++;
(0, _couchdb.addDesign)(_plugDb2.default, 'deliverables', _deliverables2.default);

/**
 * Gets a list of deliverables with optional query params
 * @param {object} parameters
 * @return {Promise}
 */
cov_y45hgzcqv.s[1]++;
var getDeliverables = exports.getDeliverables = function getDeliverables(_ref) {
  var _ref$query = _ref.query,
      query = _ref$query === undefined ? (cov_y45hgzcqv.b[0][0]++, {}) : _ref$query,
      _ref$include_docs = _ref.include_docs,
      include_docs = _ref$include_docs === undefined ? (cov_y45hgzcqv.b[1][0]++, true) : _ref$include_docs;
  cov_y45hgzcqv.f[0]++;
  cov_y45hgzcqv.s[2]++;

  if (query.filename) {
    cov_y45hgzcqv.b[2][0]++;
    cov_y45hgzcqv.s[3]++;

    return _plugDb2.default.viewAsync('deliverables', 'by_filename', {
      key: query.filename,
      include_docs: include_docs
    }).then(function (results) {
      cov_y45hgzcqv.f[1]++;
      cov_y45hgzcqv.s[4]++;
      return new _promise2.default(function (resolve) {
        cov_y45hgzcqv.f[2]++;
        cov_y45hgzcqv.s[5]++;
        return resolve(results.rows.map(function (doc) {
          cov_y45hgzcqv.f[3]++;
          cov_y45hgzcqv.s[6]++;
          return doc.doc;
        }));
      });
    });
  } else {
    cov_y45hgzcqv.b[2][1]++;
    cov_y45hgzcqv.s[7]++;

    return _plugDb2.default.viewAsync('deliverables', 'by_filename', {
      include_docs: include_docs
    }).then(function (results) {
      cov_y45hgzcqv.f[4]++;
      cov_y45hgzcqv.s[8]++;
      return new _promise2.default(function (resolve) {
        cov_y45hgzcqv.f[5]++;
        cov_y45hgzcqv.s[9]++;
        return resolve(results.rows.map(function (doc) {
          cov_y45hgzcqv.f[6]++;
          cov_y45hgzcqv.s[10]++;
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
cov_y45hgzcqv.s[11]++;
var getDeliverable = exports.getDeliverable = function getDeliverable(_ref2) {
  var id = _ref2.id;
  cov_y45hgzcqv.f[7]++;
  cov_y45hgzcqv.s[12]++;
  return _plugDb2.default.getAsync(id).then(function (deliverable) {
    cov_y45hgzcqv.f[8]++;
    cov_y45hgzcqv.s[13]++;
    return (
      // verify that data is compliant before returning it
      (0, _schemas.dataIsValid)(deliverable, _plurishingSchemas.Deliverable)
    );
  });
};

/**
 * Gets a deliverable with a specific id or email
 * @param {object} parameters
 * @return {Promise}
 */
cov_y45hgzcqv.s[14]++;
var getDeliverableAttachment = exports.getDeliverableAttachment = function getDeliverableAttachment(_ref3) {
  var id = _ref3.id,
      filename = _ref3.filename;
  cov_y45hgzcqv.f[9]++;
  cov_y45hgzcqv.s[15]++;
  return new _promise2.default(function (resolve, reject) {
    cov_y45hgzcqv.f[10]++;
    cov_y45hgzcqv.s[16]++;

    _plugDb2.default.attachment.get(id, filename, function (err, body) {
      cov_y45hgzcqv.f[11]++;
      cov_y45hgzcqv.s[17]++;

      if (err) {
        cov_y45hgzcqv.b[3][0]++;
        cov_y45hgzcqv.s[18]++;

        reject(err);
      } else {
        cov_y45hgzcqv.b[3][1]++;
        cov_y45hgzcqv.s[19]++;

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
cov_y45hgzcqv.s[20]++;
var createDeliverable = exports.createDeliverable = function createDeliverable(deliverable, data) {
  cov_y45hgzcqv.f[12]++;

  var _ref4 = (cov_y45hgzcqv.s[21]++, deliverable),
      filename = _ref4.filename;

  var mimeType = (cov_y45hgzcqv.s[22]++, (0, _mimeTypes.lookup)(filename));
  // validate data
  cov_y45hgzcqv.s[23]++;
  return (0, _schemas.dataIsValid)(deliverable, _plurishingSchemas.Deliverable)
  // create document
  .then(function () {
    cov_y45hgzcqv.f[13]++;
    cov_y45hgzcqv.s[24]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, deliverable, {
      mimetype: mimeType
    }));
  })
  // add attachment
  .then(function (op) {
    cov_y45hgzcqv.f[14]++;

    var _ref5 = (cov_y45hgzcqv.s[25]++, op),
        id = _ref5.id,
        rev = _ref5.rev;

    cov_y45hgzcqv.s[26]++;


    return new _promise2.default(function (resolve, reject) {
      cov_y45hgzcqv.f[15]++;
      cov_y45hgzcqv.s[27]++;

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
        cov_y45hgzcqv.f[16]++;
        cov_y45hgzcqv.s[28]++;

        if (err) {
          cov_y45hgzcqv.b[4][0]++;
          cov_y45hgzcqv.s[29]++;

          reject(err);
        } else {
          cov_y45hgzcqv.b[4][1]++;
          cov_y45hgzcqv.s[30]++;

          resolve(body);
        }
      });
    });
  });
};

/**
 * Updates an deliverable
 * @param {string} id - id of the deliverable
 * @param {object} deliverable - deliverable data to update
 * @param {object} data - attachment data to update
 * @return {Promise}
 */
cov_y45hgzcqv.s[31]++;
var updateDeliverable = exports.updateDeliverable = function updateDeliverable(deliverableId, _ref6, attachmentData) {
  var filename = _ref6.filename,
      mimetype = _ref6.mimetype;
  cov_y45hgzcqv.f[17]++;
  cov_y45hgzcqv.s[32]++;

  // get existing document
  return _plugDb2.default.getAsync(deliverableId)
  // then update document
  .then(function (deliverable) {
    cov_y45hgzcqv.f[18]++;
    cov_y45hgzcqv.s[33]++;
    return _plugDb2.default.insertAsync((0, _extends3.default)({}, deliverable, {
      filename: filename,
      mimetype: mimetype,
      rev: deliverable._rev
    }));
  })
  // destroy previous attachments
  .then(function () {
    cov_y45hgzcqv.f[19]++;
    cov_y45hgzcqv.s[34]++;
    return _plugDb2.default.getAsync(deliverableId);
  }).then(function (deliverable) {
    cov_y45hgzcqv.f[20]++;

    var previousAttachment = (cov_y45hgzcqv.s[35]++, (cov_y45hgzcqv.b[5][0]++, deliverable._attachments) && (cov_y45hgzcqv.b[5][1]++, (0, _keys2.default)(deliverable._attachments)[0]));
    cov_y45hgzcqv.s[36]++;
    return new _promise2.default(function (resolve, reject) {
      cov_y45hgzcqv.f[21]++;
      cov_y45hgzcqv.s[37]++;

      if (previousAttachment) {
        cov_y45hgzcqv.b[6][0]++;
        cov_y45hgzcqv.s[38]++;

        _plugDb2.default.attachment.destroy(deliverable._id, encodeURIComponent(previousAttachment), { rev: deliverable._rev }, function (err, body) {
          cov_y45hgzcqv.f[22]++;
          cov_y45hgzcqv.s[39]++;

          if (err) {
            cov_y45hgzcqv.b[7][0]++;
            cov_y45hgzcqv.s[40]++;

            reject(err);
          } else {
              cov_y45hgzcqv.b[7][1]++;
              cov_y45hgzcqv.s[41]++;
              resolve(body);
            }
        });
      } else {
        cov_y45hgzcqv.b[6][1]++;
      }
    });
  })
  // add new attachment
  .then(function (op) {
    cov_y45hgzcqv.f[23]++;

    var _ref7 = (cov_y45hgzcqv.s[42]++, op),
        id = _ref7.id,
        rev = _ref7.rev;

    cov_y45hgzcqv.s[43]++;


    return new _promise2.default(function (resolve, reject) {
      cov_y45hgzcqv.f[24]++;
      cov_y45hgzcqv.s[44]++;

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
        cov_y45hgzcqv.f[25]++;
        cov_y45hgzcqv.s[45]++;

        if (err) {
          cov_y45hgzcqv.b[8][0]++;
          cov_y45hgzcqv.s[46]++;

          reject(err);
        } else {
          cov_y45hgzcqv.b[8][1]++;
          cov_y45hgzcqv.s[47]++;

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
cov_y45hgzcqv.s[48]++;
var deleteDeliverable = exports.deleteDeliverable = function deleteDeliverable(_ref8) {
  var _id = _ref8._id;
  cov_y45hgzcqv.f[26]++;
  cov_y45hgzcqv.s[49]++;
  return _plugDb2.default.getAsync(_id).then(function (deliverable) {
    cov_y45hgzcqv.f[27]++;
    cov_y45hgzcqv.s[50]++;
    return _plugDb2.default.destroyAsync(_id, deliverable._rev);
  });
};