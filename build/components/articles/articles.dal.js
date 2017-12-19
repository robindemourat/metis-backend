/**
 * Plurishing-backend
 * =======
 * Article data access layer
 */
// import 'promise-mongo';
// import Article from './article.schema';

// export const getArticles = (query = {}) =>
//   Article.find(query);

// export const getArticle = (query) =>
//   Article.findOne(query);

// export const createArticle = (article) =>
//   Article.create(article);

// export const updateArticle = (query, article, returnNew = true) =>
//   Article.findOneAndUpdate(
//       query,
//       article,
//       {new: returnNew}// return new document
//     );

// export const deleteArticle = (query) =>
//   Article.remove(query);
"use strict";

var cov_h8kly34ak = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/articles.dal.js",
      hash = "0b5a0da9b4a2c9f560db6a5cd79fcdc907f22991",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/articles.dal.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();