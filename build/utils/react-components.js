'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslationsProvider = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var cov_2hdibkdkhy = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/react-components.js',
      hash = 'd58c36c864396cd49a07b53241b0195795658f9f',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/metis-backend/src/utils/react-components.js',
    statementMap: {
      '0': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 17
        }
      },
      '1': {
        start: {
          line: 21,
          column: 27
        },
        end: {
          line: 23,
          column: 3
        }
      },
      '2': {
        start: {
          line: 28,
          column: 13
        },
        end: {
          line: 28,
          column: 16
        }
      },
      '3': {
        start: {
          line: 32,
          column: 23
        },
        end: {
          line: 32,
          column: 33
        }
      },
      '4': {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 37,
          column: 6
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        loc: {
          start: {
            line: 17,
            column: 21
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 17
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 21,
            column: 20
          },
          end: {
            line: 21,
            column: 21
          }
        },
        loc: {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 23,
            column: 3
          }
        },
        line: 21
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 28,
            column: 7
          }
        },
        loc: {
          start: {
            line: 28,
            column: 13
          },
          end: {
            line: 28,
            column: 16
          }
        },
        line: 28
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 11
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 31
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _class, _temp; /**
                    * This module provides react components to be used
                    * severside to render montages.
                    * @module metis-backend/utils/react-components
                    */

/* eslint no-unused-vars : 0 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TranslationsProvider = exports.TranslationsProvider = (_temp = _class = function (_ref) {
  (0, _inherits3.default)(TranslationsProvider, _ref);

  function TranslationsProvider(props) {
    (0, _classCallCheck3.default)(this, TranslationsProvider);
    cov_2hdibkdkhy.f[0]++;
    cov_2hdibkdkhy.s[0]++;

    var _this = (0, _possibleConstructorReturn3.default)(this, (TranslationsProvider.__proto__ || (0, _getPrototypeOf2.default)(TranslationsProvider)).call(this, props));

    _this.getChildContext = function () {
      cov_2hdibkdkhy.f[1]++;
      cov_2hdibkdkhy.s[1]++;
      return {
        t: _this.t
      };
    };

    _this.t = function (key) {
      cov_2hdibkdkhy.f[2]++;
      cov_2hdibkdkhy.s[2]++;
      return key;
    };

    return _this;
  }

  /**
   * @todo this is a hook for a translation provider for server-side rendering
   */


  (0, _createClass3.default)(TranslationsProvider, [{
    key: 'render',
    value: function render() {
      cov_2hdibkdkhy.f[3]++;

      var _ref2 = (cov_2hdibkdkhy.s[3]++, this.props),
          children = _ref2.children;

      cov_2hdibkdkhy.s[4]++;

      return _react2.default.createElement(
        'section',
        { className: 'translations-provider' },
        children
      );
    }
  }]);
  return TranslationsProvider;
}((_react.Component)), _class.childContextTypes = {
  t: _propTypes2.default.func.isRequired
}, _temp);