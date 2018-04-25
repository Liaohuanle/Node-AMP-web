
var path = require('path');

var fs = require('fs');

var cp = require('child_process');

var config = require('./_config');
const logger = require('./util/logger')

var compileLength = 0;

(function fetchAllFIleList(root) {

  var allFiles = fs.readdirSync(root);
  
  allFiles && allFiles.length && allFiles.forEach(function (item) {
    
    const currentFileRoot = path.join(root, '/', item)
    
    var stat = fs.lstatSync(currentFileRoot);
    
    if (!stat.isDirectory()) {
      
      const shouldPass = config.buildFilterPath.filter(i => (new RegExp(i)).test(currentFileRoot)).length > 0

      if(shouldPass){

        return
        
      }

      var isJs = /\.js$/.test(item)
      
      const targetSrc = root.replace('/src', config.buildRoot)
      const targetFile = path.join(targetSrc,'/',item)
      cp.exec(`test -d ${targetSrc} || mkdir -p ${targetSrc} && cp ${currentFileRoot} ${targetSrc}`);
      
      if(isJs){

        logger.info(`********* compile ${compileLength++} js files : ${ item }`)
        cp.exec(`npx babel ${currentFileRoot} -o ${targetFile}`);

      }

    } else {

      fetchAllFIleList(path.join(root, '/', item))

    }

  });

})(path.join(__dirname))
