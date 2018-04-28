const operationMarkdown = require('../util/markdown-model') 
const markdown =require('markdown').markdown

const mk = new operationMarkdown()

const mkPathList = mk.getFilePathList()

module.exports = {
  isOnline: true,
  path: 'mk/file',
  callback: (req, res) => {
    const { path } = req.query
    if(!path){
      return res.send(null)
    }
    const text = mk.getOneFile(path)
    res.send(markdown.toHTML(text))
  }
}