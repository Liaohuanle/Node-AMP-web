"use strict";

const operationMarkdown = require('../../util/markdown-model')
const querystring = require('querystring')
const util = require('../../util/util');
const config = require('../../_config')
const DB = require('../../db/db-connect');

module.exports = [{
  path: 'fetchWinnerList',
  isOnline: true,
  isApi: false,
  isRest: true,
  data: './util/util',
  cssSrc: '',
  containerSrc: '',
  jsSrc: '',
  title: '',
  callback: res => {
    var source = res.query.source,
        length = res.query.length;

    return new Promise( (resolve, reject) => {
      resolve(util.solveWinnerData(source, length));
    });
  }
}, {
  path: 'fetchIpAddressList',
  isOnline: true,
  isApi: false,
  isRest: true,
  data: [],
  cssSrc: '',
  containerSrc: '',
  jsSrc: '',
  title: '',
  callback: function callback(res) {
    return DB.queryAllIP(res.query);
  }
},{
  path: 'markdown/submit',
  isOnline: true,
  isApi: false,
  isRest: true,
  method: 'post',
  authority: freq => true,
  callback: freq => {
    return new Promise((resolve, reject) => {
      freq.on('data', function(params) {
        params = Buffer.from(params, 'utf-8').toLocaleString()
        params = querystring.parse(params)
        const { path, file, authority } = params
        if(authority != config.authority){
          resolve({
            success: false,
            path,
            msg: 'authority failed...'
          })
        }
        const mk = new operationMarkdown()
        mk.save({
          buffer: file,
          path,
          callBackSuccess: () => resolve({
            success: true,
            path
          }),
          callBackfail: () => reject({
            success: false,
            path
          })
        })
      })
    })
  }
},{
  path: 'markdown/pathList',
  isOnline: true,
  isApi: false,
  isRest: true,
  authority: _ => true,
  callback: freq => {
    return new Promise((resolve, reject) => {
      const mk = new operationMarkdown()
      const fileList = mk.getFilePathList()
      resolve({
        success: true,
        path: fileList
      })
    })
  }
},{
  path: 'markdown/getMD',
  isOnline: true,
  isApi: false,
  isRest: true,
  authority: _ => true,
  callback: freq => {
    const { path } = freq.query
    return new Promise((resolve, reject) => {
      const mk = new operationMarkdown()
      const file = mk.getOneFile(path)
      resolve({
        success: true,
        result: file
      })
    })
  }
}];