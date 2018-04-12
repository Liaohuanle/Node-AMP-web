"use strict";
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
    title: ''
  }
];
