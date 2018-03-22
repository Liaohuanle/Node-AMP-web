const path = require('path');

const fs = require('fs')

const config = require('./_config')

const cp = require('child_process');

const chokidar = require('chokidar');

const watcher = chokidar.watch(path.join(__dirname, '../'));

let appIns = cp.fork(path.join(__dirname, './index.js'));

let lessFile = ''

const currentApp = config.appId['us']

const lessUrl = config[`${currentApp}-less`]

readFile()

watcher.on('ready', () => {

      watcher.on('change', (path) => {

            console.log('** change: watched file change, do something', lessUrl);

            compileLess(path)

            appIns = reload(appIns);

      });

      watcher.on('add', (path) => {

            console.log('** add: watched new file add, do something');

            appIns = reload(appIns);

      });

      watcher.on('unlink', (path) => {
        
            console.log('** remove: watched file remove, do something');

            appIns = reload(appIns);

      });

});

process.on('SIGINT', () => {
  process.exit(0);
});

function readFile(){
  const src = lessUrl.from
  fs.readFile(src, (err, data) => {
    essFile = data
  })
}

function compileLess(path){
  const isLess = /.less$/.test(path)
  console.info(path, isLess)
  isLess && cp.exec(`lessc ${lessUrl.from} ${lessUrl.dest};`)
}

function reload(appIns) {

      appIns.kill('SIGINT');

      return cp.fork(require('path').join(__dirname, './index.js'));

}
