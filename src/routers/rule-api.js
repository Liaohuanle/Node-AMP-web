"use strict";

const operationMarkdown = require('../util/markdown-model')
const querystring = require('querystring')
const util = require('../util/util');
const config = require('../_config')
const DB = require('../db/db-connect');
const log = require('../util/logger')

module.exports = [{
  path: 'fetchWinnerList',
  isOnline: true,
  callback: (freq, res) => {
    var source = freq.query.source,
        length = freq.query.length;
    res.send(util.solveWinnerData(source, length));
  }
}, {
  path: 'fetchIpAddressList',
  isOnline: true,
  callback: (req, res) => {
    res.send(DB.queryAllIP(req.query))
  }
},{
  path: 'markdown/submit',
  isOnline: true,
  method: 'post',
  callback: (freq, res) => {
    const result = []
    freq
    .on('data', params => {
      result.push(params) 
    })
    .on('end', _ => {
      const getFromBuffer = Buffer.concat(result).toLocaleString()
      const parseVal = querystring.parse(getFromBuffer)
      const authority = parseVal.authority
      const { path, file } = parseVal
      log.info(JSON.stringify(parseVal))
      if(authority != config.authority){
        return res.send({
          success: false,
          path,
          msg: 'authority failed...'
        })
      }
      const mk = new operationMarkdown()
      mk.save({
        buffer: file,
        path,
        callBackSuccess: () => res.send({
          success: true,
          path
        }),
        callBackfail: () => res.send({
          success: false,
          path
        })
      })
    })
  }
},{
  path: 'markdown/pathList',
  isOnline: true,
  callback: (freq, res) => {
    const mk = new operationMarkdown()
    const fileList = mk.getFilePathList()
    res.send({
      success: true,
      path: fileList
    })
  }
},{
  path: 'markdown/getMD',
  isOnline: true,
  callback: (freq, res) => {
    const { path } = freq.query
    const mk = new operationMarkdown()
    const file = mk.getOneFile(path)
    res.send({
      success: true,
      result: file
    })
  }
}];