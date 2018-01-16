'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var cov_2kf36xu05y = function () {
  var path = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/pdf/index.js',
      hash = '216d0212bfb88c9683a50a35a97ed8f69b5fa59a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-backend/src/releasers/pdf/index.js',
    statementMap: {
      '0': {
        start: {
          line: 21,
          column: 20
        },
        end: {
          line: 21,
          column: 61
        }
      },
      '1': {
        start: {
          line: 22,
          column: 15
        },
        end: {
          line: 22,
          column: 119
        }
      },
      '2': {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 69,
          column: 5
        }
      },
      '3': {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 68,
          column: 19
        }
      },
      '4': {
        start: {
          line: 34,
          column: 6
        },
        end: {
          line: 34,
          column: 23
        }
      },
      '5': {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 33
        }
      },
      '6': {
        start: {
          line: 38,
          column: 46
        },
        end: {
          line: 38,
          column: 58
        }
      },
      '7': {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 64,
          column: 9
        }
      },
      '8': {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 59,
          column: 10
        }
      },
      '9': {
        start: {
          line: 60,
          column: 8
        },
        end: {
          line: 63,
          column: 13
        }
      },
      '10': {
        start: {
          line: 62,
          column: 12
        },
        end: {
          line: 62,
          column: 82
        }
      },
      '11': {
        start: {
          line: 66,
          column: 16
        },
        end: {
          line: 66,
          column: 47
        }
      }
    },
    fnMap: {
      '0': {
        name: 'publish',
        decl: {
          start: {
            line: 25,
            column: 24
          },
          end: {
            line: 25,
            column: 31
          }
        },
        loc: {
          start: {
            line: 25,
            column: 49
          },
          end: {
            line: 70,
            column: 1
          }
        },
        line: 25
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 26,
            column: 21
          },
          end: {
            line: 26,
            column: 22
          }
        },
        loc: {
          start: {
            line: 26,
            column: 42
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 26
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 33,
            column: 10
          },
          end: {
            line: 33,
            column: 11
          }
        },
        loc: {
          start: {
            line: 33,
            column: 16
          },
          end: {
            line: 36,
            column: 5
          }
        },
        line: 33
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 37,
            column: 10
          },
          end: {
            line: 37,
            column: 11
          }
        },
        loc: {
          start: {
            line: 37,
            column: 26
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 37
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 48,
            column: 9
          },
          end: {
            line: 48,
            column: 10
          }
        },
        loc: {
          start: {
            line: 48,
            column: 20
          },
          end: {
            line: 64,
            column: 7
          }
        },
        line: 48
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 61,
            column: 16
          },
          end: {
            line: 61,
            column: 17
          }
        },
        loc: {
          start: {
            line: 61,
            column: 35
          },
          end: {
            line: 63,
            column: 11
          }
        },
        line: 61
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 66,
            column: 10
          },
          end: {
            line: 66,
            column: 11
          }
        },
        loc: {
          start: {
            line: 66,
            column: 16
          },
          end: {
            line: 66,
            column: 47
          }
        },
        line: 66
      }
    },
    branchMap: {},
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
      '11': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
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

var _fs = require('fs');

var _PreviewContainer = require('plurishing-shared/dist/components/previews/StaticMontagePreview/PreviewContainer');

var _PreviewContainer2 = _interopRequireDefault(_PreviewContainer);

var _data = require('../../utils/data');

var _pdf = require('./pdf.generator');

var _pdf2 = _interopRequireDefault(_pdf);

var _deliverables = require('../../components/deliverables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tempDirPath = (cov_2kf36xu05y.s[0]++, (0, _path.resolve)(__dirname + '/../../../temp'));
var styles = (cov_2kf36xu05y.s[1]++, (0, _fs.readFileSync)((0, _path.resolve)(__dirname + '/../../../node_modules/plurishing-shared/dist/style.css'), 'utf8'));

function publish(data, diffusion) {
  cov_2kf36xu05y.f[0]++;
  cov_2kf36xu05y.s[2]++;

  return new _promise2.default(function (resolve, reject) {
    cov_2kf36xu05y.f[1]++;


    var deliverable = void 0;
    var getAssetUri = void 0;

    cov_2kf36xu05y.s[3]++;
    (0, _data.mountLocalAssets)(data.assets).then(function (fn) {
      cov_2kf36xu05y.f[2]++;
      cov_2kf36xu05y.s[4]++;

      getAssetUri = fn;
      cov_2kf36xu05y.s[5]++;
      return (0, _data.fetchCitationData)();
    }).then(function (citationData) {
      cov_2kf36xu05y.f[3]++;

      var _ref = (cov_2kf36xu05y.s[6]++, citationData),
          citationStyle = _ref.citationStyle,
          citationLocale = _ref.citationLocale;

      cov_2kf36xu05y.s[7]++;

      return (0, _pdf2.default)({
        Component: _PreviewContainer2.default,
        props: data,
        tempDirPath: tempDirPath,
        outputDirPath: tempDirPath,
        citationLocale: citationLocale,
        citationStyle: citationStyle,
        getAssetUri: getAssetUri,
        styles: styles
      }, function (pdfPath) {
        cov_2kf36xu05y.f[4]++;
        cov_2kf36xu05y.s[8]++;

        deliverable = {
          type: 'deliverable',
          date_produced: new Date().getTime(),
          diffusion_id: diffusion._id,
          montage_id: data.montage._id,
          montage_type: data.montage.metadata.montage_type,
          montage_title: data.montage.metadata.title,
          version: diffusion.version,
          filename: pdfPath.split('/').pop(),
          mimetype: 'application/pdf'
        };
        cov_2kf36xu05y.s[9]++;
        return (0, _fsExtra.readFile)(pdfPath).then(function (deliverableData) {
          cov_2kf36xu05y.f[5]++;
          cov_2kf36xu05y.s[10]++;

          return _deliverables.dal.createDeliverable(deliverable, deliverableData);
        });
      });
    }).then(function () {
      cov_2kf36xu05y.f[6]++;
      cov_2kf36xu05y.s[11]++;
      return (0, _data.unmountLocalAssets)(data.assets);
    }).then(resolve).catch(reject);
  });
}