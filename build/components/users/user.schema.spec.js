// import {expect} from 'chai';
// import User from './user.schema';

// describe('User schema', function() {
//     it('should be invalid if name is empty', function(done) {
//         var m = new User();

//         m.validate(function(err) {
//           expect(err.errors.name).to.exist;
//           done();
//         });
//     });

//     it('should be invalid if email is empty', function(done) {
//         var m = new User({name: 'coucou'});

//         m.validate(function(err) {
//           expect(err.errors.email).to.exist;
//           done();
//         });
//     });
// });
"use strict";

var cov_5kedjt13o = function () {
  var path = "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/user.schema.spec.js",
      hash = "b44ad150b0f57045f594c41bc2fc88c1f31672b5",
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/user.schema.spec.js",
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