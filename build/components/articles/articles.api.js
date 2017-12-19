'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_xlm01xuiy = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/articles.api.js',
      hash = '677d7099768b6712b203dc1bd232a53ca16aeebb',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/articles.api.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 15
        },
        end: {
          line: 17,
          column: 35
        }
      },
      '1': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 29
        }
      },
      '2': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 31
        }
      },
      '3': {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 32
        }
      },
      '4': {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 34
        }
      },
      '5': {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 37
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {},
    b: {},
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
      * Article api
      */

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _articles = require('./articles.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_xlm01xuiy.s[0]++, new _express2.default.Router());

cov_xlm01xuiy.s[1]++;
router.get('/', _articles.getArticles);
cov_xlm01xuiy.s[2]++;
router.get('/:id', _articles.getArticle);
cov_xlm01xuiy.s[3]++;
router.post('/', _articles.createArticle);
cov_xlm01xuiy.s[4]++;
router.put('/:id', _articles.updateArticle);
cov_xlm01xuiy.s[5]++;
router.delete('/:id', _articles.deleteArticle);

exports.default = router;