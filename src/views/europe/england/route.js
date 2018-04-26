"use strict";
const engilsh = require("./default");
const german = require("./german");
const itali = require("./itali");
const french = require("./french");
const poland = require("./poland");

const dataList = {
  default: engilsh,
  german,
  itali,
  french,
  poland
}

module.exports  = {
    title: 'Musical.ly - English',
    path: '1m',
    isOnline: false,
    data: lang => dataList[lang || 'default'],
    cssSrc: '../europe/england/css',
    containerSrc: '../../europe/england/index',
    jsSrc: '../../europe/js',
    authority: _ => true
};
