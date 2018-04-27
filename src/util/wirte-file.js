var fs = require("fs");

class writeStrem{

  constructor(path){
    this.path = path
    this.code = 'UTF8'
    this.writerStream = fs.createWriteStream(this.path);
  }

  write(data){
    const text = new Date() + data
    this.writerStream.write(text,this.code);
  }

  wirteFinsh(callback){
    this.writerStream.on('finish', () =>{
      callback && callback()
    })
  }

  wirteError(callback){
    this.writerStream.on('finish', () =>{
      callback && callback()
    })
    this.writerStream.on('error', () =>{
      callback && callback()
    })
  }
}

module.exports = writeStrem