"use strict";

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _appId;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');

var indCountry = 'india';

var usCountry = "us";

var appId = (_appId = {}, (0, _defineProperty3.default)(_appId, indCountry, indCountry), (0, _defineProperty3.default)(_appId, usCountry, usCountry), _appId);

var layoutDir = './components/layout/oneMilloneLayout';

var notFoundDir = './components/common/notfound';

var rootDir = path.join(__dirname + '/views');

var buildRoot = '/output'

var buildFilterPath = [
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