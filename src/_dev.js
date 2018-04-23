'use strict';

var path = require('path');

var fs = require('fs');

var config = require('./_config');

var cp = require('child_process');

var chokidar = require('chokidar');

var watcher = chokidar.watch(path.join(__dirname, './views'));

var appIns = cp.fork(path.join(__dirname, './index.js'));

var lessFileList = [];

lessFileList = fetchAllFIleList(config.rootDir);

watcher.on('ready', function (val) {

  watcher.on('change', function (path) {
    console.info(path);
    compileLess(path);
    appIns = reload(appIns);
  });

  watcher.on('add', function (path) {

    lessFileList = fetchAllFIleList(config.rootDir);
    appIns = reload(appIns);
  });

  watcher.on('unlink', function (path) {

    lessFileList = fetchAllFIleList(config.rootDir);
    appIns = reload(appIns);
  });
});

process.on('SIGINT', function () {
  process.exit(0);
});

function compileLess(path) {
  var isLessFile = /.less/.test(path);
  isLessFile && lessFileList && lessFileList.length && lessFileList.forEach(function (item) {
    var temp = item.split('/main.less')[0];
    var dest = temp + '/css.ejs';
    cp.exec('lessc -clean-css ' + item + ' ' + dest);
  });
}

function reload(appIns) {
  appIns.kill('SIGINT');
  return cp.fork(require('path').join(__dirname, './index.js'));
}

function fetchAllFIleList(root) {
  var allFiles = fs.readdirSync(root);
  var res = [];
  allFiles && allFiles.length && allFiles.forEach(function (item) {
    var stat = fs.lstatSync(path.join(root, '/', item));
    if (!stat.isDirectory()) {
      /main.less/.test(item) && res.push(path.join(root, '/', item));
    } else {
      res = res.concat(fetchAllFIleList(path.join(root, '/', item)));
    }
  });
  return res;
}
//# sourceMappingURL=_dev.js.map