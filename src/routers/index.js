const operationMarkdown = require('../util/markdown-model') 
const markdown =require('markdown').markdown

const mk = new operationMarkdown()

const mkPathList = mk.getFilePathList()

module.exports = {
  isOnline: true,
  isRest: true,
  authority: _ => true,
  path: 'mk/file',
  callback: (req) => new Promise((resolve, reject) => {
    const { path } = req.query
    if(!path){
      return resolve(null)
    }
    const text = mk.getOneFile(path)
    return resolve(markdown.toHTML(text))
  })
}