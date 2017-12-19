// import express from 'express';
// import request from 'supertest';
// import {expect} from 'chai';

// import api from './articles.api';
// import Article from './article.schema';

// import '../../utils/plugDb';

// const app = express();
// app.use(require('express-promise')());

// app.use('/', api);

// describe('Articles api', () => {

//   let mockId;
//   before(done => {
//     Article.create({
//       title: 'test',
//       content: 'test'
//     }).then(art => {
//       mockId = art._id;
//       done();
//     })
//   })

//   after(done => {
//     Article.remove({
//       _id: mockId
//     }).then(() => done())
//   })

//   describe('GET /', () => {
//     it('responds with a json array', (done) => {
//       request(app)
//         .get('/')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .then(response => {
//           expect(response.body).to.be.an.array;
//           done();
//         })
//         .catch(done)
//     });
//   });

//   describe('GET /:id', () => {
//     it('responds with an article object as json', (done) => {
//       request(app)
//         .get(`/${mockId}`)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .then(response => {
//           expect(response.body).to.be.an.object;
//           expect(response.body).to.have.property('title');
//           expect(response.body).to.have.property('content');
//           done();
//         })
//         .catch(done)
//     });
//   });

//   // describe('POST /', () => {
//   //   it('creates a new object', (done) => {
//   //     request(app)
//   //       .post(`/`)
//   //       .send({title: 'coucou', content: 'salut'})
//   //       .set('Accept', 'application/json')
//   //       .expect('Content-Type', /json/)
//   //       .expect(200)
//   //       .then(response => {
//   //         console.log('response', response.body)
//   //       })
//   //       .catch(done)
//   //   });
//   // });

//   // describe('PUT /:id', () => {
//   //   it('replace the content of an object with an article object as json', (done) => {
//   //     request(app)
//   //       .put(`/${mockId}`)
//   //       .send({title: 'coucou', content: 'salut'})
//   //       .set('Accept', 'application/json')
//   //       .expect('Content-Type', /json/)
//   //       .expect(200)
//   //       .then(response => {
//   //         expect(response.body).to.be.an.object;
//   //         expect(response.body).to.have.property('title');
//   //         expect(response.body).to.have.property('content');
//   //         expect(response.body.title).to.equal('coucou');
//   //         expect(response.body.content).to.equal('salut');
//   //         done();
//   //       })
//   //       .catch(done)
//   //   });
//   // });

//   describe('DELETE /:id', () => {
//     it('deletes an object and returns status and number of deleted objects', (done) => {
//       request(app)
//         .del(`/${mockId}`)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect({
//           ok: 1,
//           n: 1
//         })
//         .expect(200, done)
//     });

//     it('returns n=0 if object already deleted', (done) => {
//       request(app)
//         .del(`/${mockId}`)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect({
//           ok: 1,
//           n: 0
//         })
//         .expect(200, done)
//     });
//   });

// })
"use strict";

var cov_ky37c15nn = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/articles.api.spec.js",
      hash = "ef4f0fec3b3db7a86e658c8cfc996af14e010a6e",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/articles/articles.api.spec.js",
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