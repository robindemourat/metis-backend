'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var cov_28jbn4t7kk = function () {
    var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/users.design.spec.js',
        hash = 'd452f620ea84332c2fe22645cf6c3026d3a771ca',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/users/users.design.spec.js',
        statementMap: {
            '0': {
                start: {
                    line: 4,
                    column: 0
                },
                end: {
                    line: 12,
                    column: 3
                }
            },
            '1': {
                start: {
                    line: 5,
                    column: 4
                },
                end: {
                    line: 11,
                    column: 7
                }
            },
            '2': {
                start: {
                    line: 6,
                    column: 8
                },
                end: {
                    line: 9,
                    column: 11
                }
            },
            '3': {
                start: {
                    line: 7,
                    column: 23
                },
                end: {
                    line: 7,
                    column: 39
                }
            },
            '4': {
                start: {
                    line: 8,
                    column: 10
                },
                end: {
                    line: 8,
                    column: 60
                }
            },
            '5': {
                start: {
                    line: 10,
                    column: 8
                },
                end: {
                    line: 10,
                    column: 15
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 4,
                        column: 33
                    },
                    end: {
                        line: 4,
                        column: 34
                    }
                },
                loc: {
                    start: {
                        line: 4,
                        column: 39
                    },
                    end: {
                        line: 12,
                        column: 1
                    }
                },
                line: 4
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 5,
                        column: 50
                    },
                    end: {
                        line: 5,
                        column: 51
                    }
                },
                loc: {
                    start: {
                        line: 5,
                        column: 60
                    },
                    end: {
                        line: 11,
                        column: 5
                    }
                },
                line: 5
            },
            '2': {
                name: '(anonymous_2)',
                decl: {
                    start: {
                        line: 6,
                        column: 42
                    },
                    end: {
                        line: 6,
                        column: 43
                    }
                },
                loc: {
                    start: {
                        line: 6,
                        column: 48
                    },
                    end: {
                        line: 9,
                        column: 9
                    }
                },
                line: 6
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0
        },
        f: {
            '0': 0,
            '1': 0,
            '2': 0
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

var _chai = require('chai');

var _users = require('./users.design');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_28jbn4t7kk.s[0]++;


describe('Users couchdb design', function () {
    cov_28jbn4t7kk.f[0]++;
    cov_28jbn4t7kk.s[1]++;

    it('should eval each view map as a function', function (done) {
        cov_28jbn4t7kk.f[1]++;
        cov_28jbn4t7kk.s[2]++;

        (0, _keys2.default)(_users2.default.views).forEach(function (id) {
            cov_28jbn4t7kk.f[2]++;

            var view = (cov_28jbn4t7kk.s[3]++, _users2.default.views[id]);
            cov_28jbn4t7kk.s[4]++;
            (0, _chai.expect)(eval('(' + view.map + ')')).to.be.a('function');
        });
        cov_28jbn4t7kk.s[5]++;
        done();
    });
});