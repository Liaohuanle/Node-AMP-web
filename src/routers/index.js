const operationMarkdown = require('../util/markdown-model') 
const markdown =require('markdown').markdown

const mk = new operationMarkdown()

const mkPathList = mk.getFilePathList()

const res = []

for(const i in mkPathList){
  res.push({
    isOnline: true,
    isRest: true,
    authority: _ => true,
    path: mkPathList[i],
    callback: _ => new Promise((resolve, reject) => {
      const text = mk.getOneFile(mkPathList[i])
      resolve(markdown.toHTML(text))
    })
  })
}

module.exports = res