const moment = require('moment')
const fs = require('fs')
const log = require('./logger')

const fileDir = './db/static-text-file.json'

class operationMarkdown{

  constructor(){
    this.textBuffer = {}
    this.path = ''
    this.allFile = {}
    this.init()
  }

  init(){
    this.getAllFile()
  }

  getAllFile(callBackSuccess){
    const data = fs.readFileSync(fileDir)
    this.allFile = JSON.parse(data || {})
    callBackSuccess && callBackSuccess(this.allFile)
  }

  getOneFile(path){
    if(!path){
      log.warn('get one file need the path')
      return
    }
    this.getAllFile()
    return this.allFile[path] ? this.allFile[path].content : '# wiating for you!'
  }

  getFilePathList(){
    try {
      this.getAllFile()
      const res = new Set() 
      for(let i in this.allFile){
        res.add(i)
      }
      return [...res]
    } catch (error) {
      return []
    }
  }

  save(params){
    const { buffer, path, callBackSuccess, callBackfail } = params
    if(!path){
      callBackfail && callBackfail()
      return
    }
    try {
      const target = Object.assign({}, this.allFile)
      target[path] = {
        content: buffer,
        date: moment().format('YYYY.MM.DD dd:mm')
      }
      fs.writeFile(fileDir, JSON.stringify(target), (err) => {
        if (err) throw err;
        log.success('The file has been saved!');
        callBackSuccess && callBackSuccess()
      })
      
    } catch (error) {
      log.warn(error)
      callBackfail && callBackfail()
    }
  }
}

module.exports = operationMarkdown