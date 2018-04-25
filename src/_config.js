"use strict";

const _defineProperty2 = require('babel-runtime/helpers/defineProperty');

const _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path');

const indCountry = 'india';

const usCountry = "us";

var _appId;

var appId = (_appId = {}, (0, _defineProperty3.default)(_appId, indCountry, indCountry), (0, _defineProperty3.default)(_appId, usCountry, usCountry), _appId);

const layoutDir = './components/layout/oneMilloneLayout';

const notFoundDir = './components/common/notfound';

const rootDir = path.join(__dirname + '/views');

const buildRoot = '/output'

const buildFilterPath = [
  '_compile.js',
  '_dev.js',
  'node_modules',
  '.babelrc',
  '.less'
]

module.exports = {
    rootDir: rootDir,
    appId: appId,
    layoutDir: layoutDir,
    notFoundDir: notFoundDir,
    buildRoot: buildRoot,
    buildFilterPath: buildFilterPath
};
//# sourceMappingURL=_config.js.map