"use strict";
var util = require('../../util/util')
var DB = require('../../db/db-connect')

module.exports = [
  {
    path: 'prize/rules',
    isOnline: true,
    isApi: true,
    data: {},
    cssSrc: '',
    containerSrc: './europe/component/rule/index',
    jsSrc: '',
    title: ''
  },{
    path: 'fetchWinnerList',
    isOnline: true,
    isApi: false,
    isRest: true,
    data: './util/util',
    cssSrc: '',
    containerSrc: '',
    jsSrc: '',
    title: '',
    callback: (query) => {
      var { source, length } = query
      return new Promise((resolve, reject) => {
        resolve(util.solveWinnerData(source, length))
      })
    }
  },{
    path: 'fetchIpAddressList',
    isOnline: true,
    isApi: false,
    isRest: true,
    data: [],
    cssSrc: '',
    containerSrc: '',
    jsSrc: '',
    title: '',
    callback: (query) => {
      return DB.queryAllIP(query)
    }
  }, {
    path: 'es/termofuse',
    isOnline: true,
    isApi: true,
    data: {},
    cssSrc: '',
    containerSrc: './components/termofuser/es-termofus',
    jsSrc: '',
    title: ''
  }
];
