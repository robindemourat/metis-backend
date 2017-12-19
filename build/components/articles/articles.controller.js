/**
 * Plurishing-backend
 * =======
 * Article controller
 */
// import {
//   getArticles as getArticlesDAL,
//   getArticle as getArticleDAL,
//   createArticle as createArticleDAL,
//   updateArticle as updateArticleDAL,
//   deleteArticle as deleteArticleDAL
// } from './articles.dal';

// /**
//  * Get a list of articles
//  * @param {object} req - the request of query
//  * @param {object} res - the resource of query
//  * @todo add filters handling through req queries
//  */
// export const getArticles = (req, res) =>
//   res.json(getArticlesDAL());

// /**
//  * Get a single article
//  * @param {object} req - the request of query
//  * @param {object} res - the resource of query
//  */
// export const getArticle = (req, res) =>
//   res.json(getArticleDAL({_id: req.params.id}));

// *
//  * Create a single article
//  * @param {object} req - the request of query
//  * @param {object} res - the resource of query

// export const createArticle = (req, res) =>
//   res.json(createArticleDAL(req.body));

// /**
//  * Update a single article
//  * @param {object} req - the request of query
//  * @param {object} res - the resource of query
//  */
// export const updateArticle = (req, res) =>
//   res.json(
//     updateArticleDAL({_id: req.params.id},
//       req.body, // for now we perform a full replace (vs merge with $set)
//       true, // return new document
//     )
//   );

// /**
//  * Delete a single article
//  * @param {object} req - the request of query
//  * @param {object} res - the resource of query
//  */
// export const deleteArticle = (req, res) =>
//   res.json(deleteArticleDAL({_id: req.params.id}));
"use strict";

var cov_1jpey0pz3z = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/articles.controller.js",
      hash = "41a9bc2a952b025cbec072c983d9e16dbf00da89",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/articles.controller.js",
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