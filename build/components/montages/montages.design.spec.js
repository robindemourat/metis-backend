'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var cov_1qlim675if = function () {
    var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/montages/montages.design.spec.js',
        hash = 'a0bbaba9afb9d761535d750f085855262fdc1ed6',
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/components/montages/montages.design.spec.js',
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
                        column: 36
                    },
                    end: {
                        line: 4,
                        column: 37
                    }
                },
                loc: {
                    start: {
                        line: 4,
                        column: 42
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

var _montages = require('./montages.design');

var _montages2 = _interopRequireDefault(_montages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_1qlim675if.s[0]++;


describe('Montages couchdb design', function () {
    cov_1qlim675if.f[0]++;
    cov_1qlim675if.s[1]++;

    it('should eval each view map as a function', function (done) {
        cov_1qlim675if.f[1]++;
        cov_1qlim675if.s[2]++;

        (0, _keys2.default)(_montages2.default.views).forEach(function (id) {
            cov_1qlim675if.f[2]++;

            var view = (cov_1qlim675if.s[3]++, _montages2.default.views[id]);
            cov_1qlim675if.s[4]++;
            (0, _chai.expect)(eval('(' + view.map + ')')).to.be.a('function');
        });
        cov_1qlim675if.s[5]++;
        done();
    });
});