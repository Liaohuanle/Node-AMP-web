const path = require('path');

const fs = require('fs')

const config = require('./_config')

const cp = require('child_process');

const chokidar = require('chokidar');

const watcher = chokidar.watch(path.join(__dirname, '../'));

let appIns = cp.fork(path.join(__dirname, './index.js'));

let lessFileList = []

const currentApp = config.appId['us']

const lessUrl = config[`${currentApp}-less`]

lessFileList = fetchAllFIleList(config.rootDir)

watcher.on('ready', () => {

  watcher.on('change', (path) => {

    console.log('** change: watched file change, do something', lessUrl);

    compileLess(path)

    appIns = reload(appIns);

  });

  watcher.on('add', (path) => {

    lessFileList = fetchAllFIleList(config.rootDir)
    appIns = reload(appIns);

  });

  watcher.on('unlink', (path) => {

    lessFileList = fetchAllFIleList(config.rootDir)
    appIns = reload(appIns);

  });

});

process.on('SIGINT', () => {
  process.exit(0);
});

function compileLess(path){
  const isLessFile = /.less/.test(path)
  isLessFile && lessFileList && lessFileList.length && lessFileList.forEach(item => {
    const temp =  item.split('/main.less')[0]
    const dest = `${temp}/css.ejs`
    cp.exec(`lessc -clean-css ${item} ${dest}`)
    console.info('lessc compile => ', item, dest)
  })
}

function reload(appIns) {
  appIns.kill('SIGINT');
  return cp.fork(require('path').join(__dirname, './index.js'));
}

function fetchAllFIleList(root){
  const allFiles = fs.readdirSync(root)
  let res = []
  allFiles && allFiles.length && allFiles.forEach(item => {
    const stat = fs.lstatSync(path.join(root, '/',item))
    if (!stat.isDirectory()){
      /main.less/.test(item) && res.push(path.join(root,'/',item));
    } else {
      res = res.concat(fetchAllFIleList(path.join(root,'/',item)));
    }
  })
  return res
}