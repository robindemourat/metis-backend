'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_2kf36xu05y = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/pdf/index.js',
      hash = '6400e7778626fa67aed571d935ae944afa6780bf',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/pdf/index.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 61
        }
      },
      '1': {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 44,
          column: 5
        }
      },
      '2': {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 43,
          column: 19
        }
      },
      '3': {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 36,
          column: 8
        }
      },
      '4': {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 40,
          column: 11
        }
      },
      '5': {
        start: {
          line: 39,
          column: 10
        },
        end: {
          line: 39,
          column: 80
        }
      }
    },
    fnMap: {
      '0': {
        name: 'publish',
        decl: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 15,
            column: 31
          }
        },
        loc: {
          start: {
            line: 15,
            column: 49
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 15
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 16,
            column: 21
          },
          end: {
            line: 16,
            column: 22
          }
        },
        loc: {
          start: {
            line: 16,
            column: 42
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 16
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 25,
            column: 7
          },
          end: {
            line: 25,
            column: 8
          }
        },
        loc: {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 41,
            column: 5
          }
        },
        line: 25
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 38,
            column: 14
          },
          end: {
            line: 38,
            column: 15
          }
        },
        loc: {
          start: {
            line: 38,
            column: 33
          },
          end: {
            line: 40,
            column: 9
          }
        },
        line: 38
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
/**
 * @todo use proper component to render pdf view
 */


exports.default = publish;

var _path = require('path');

var _fsExtra = require('fs-extra');

var _PreviewContainer = require('plurishing-shared/dist/components/previews/StaticMontagePreview/PreviewContainer');

var _PreviewContainer2 = _interopRequireDefault(_PreviewContainer);

var _pdf = require('./pdf.generator');

var _pdf2 = _interopRequireDefault(_pdf);

var _deliverables = require('../../components/deliverables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tempDirPath = (cov_2kf36xu05y.s[0]++, (0, _path.resolve)(__dirname + '/../../../temp'));

function publish(data, diffusion) {
  cov_2kf36xu05y.f[0]++;
  cov_2kf36xu05y.s[1]++;

  return new _promise2.default(function (resolve, reject) {
    cov_2kf36xu05y.f[1]++;


    var deliverable = void 0;

    cov_2kf36xu05y.s[2]++;
    (0, _pdf2.default)({
      Component: _PreviewContainer2.default,
      props: data,
      tempDirPath: tempDirPath,
      outputDirPath: tempDirPath
    }, function (pdfPath) {
      cov_2kf36xu05y.f[2]++;
      cov_2kf36xu05y.s[3]++;

      deliverable = {
        type: 'deliverable',
        date_produce: new Date().getTime(),
        diffusion_id: diffusion.id,
        montage_id: data.montage._id,
        montage_type: data.montage.metadata.montage_type,
        montage_title: data.montage.metadata.title,
        version: diffusion.version,
        filename: pdfPath.split('/').pop(),
        mimetype: 'application/pdf'
      };
      cov_2kf36xu05y.s[4]++;
      return (0, _fsExtra.readFile)(pdfPath).then(function (deliverableData) {
        cov_2kf36xu05y.f[3]++;
        cov_2kf36xu05y.s[5]++;

        return _deliverables.dal.createDeliverable(deliverable, deliverableData);
      });
    }).then(resolve).catch(reject);
  });
}