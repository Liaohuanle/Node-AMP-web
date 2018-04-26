"use strict";

const _promise = require('babel-runtime/core-js/promise');
const operationMarkdown = require('../../util/markdown-model')
const querystring = require('querystring')

const _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const util = require('../../util/util');
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
  callback: function callback(res) {
    var source = res.query.source,
        length = res.query.length;

    return new _promise2.default(function (resolve, reject) {
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
  authority: _ => true,
  callback: freq => {
    return new Promise((resolve, reject) => {
      freq.on('data', function(params) {
        params = Buffer.from(params, 'utf-8').toLocaleString()
        params = querystring.parse(params)
        const { path, file } = params
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
      mk.getFilePathList({
        callBackSuccess: (res) => resolve({
          success: true,
          path: res
        }),
        callBackfail: () => reject(false)
      })
    })
  }
}];