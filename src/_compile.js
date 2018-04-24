
var path = require('path');

var fs = require('fs');

var cp = require('child_process');

var config = require('./_config');

var compileLength = 0;

cp.exec(`rm -rf ../${config.buildRoot}`);

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
      
      const targetSrc = root.replace('src', config.buildRoot)

      if(/\.png$/.test(item)){
        console.info('!!!!!!!=>',currentFileRoot, targetSrc,item)
      }

      cp.exec(`test -d ${targetSrc} || mkdir -p ${targetSrc} && cp ${currentFileRoot} ${targetSrc}`);
      
      if(isJs){

        console.info(`********* compile ${compileLength++} js files : ${ item }`)
        
        cp.exec(`npx babel ${currentFileRoot} -o ${targetSrc}`);

      }

    } else {

      fetchAllFIleList(path.join(root, '/', item))

    }

  });

})(path.join(__dirname))
