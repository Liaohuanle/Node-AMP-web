"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
exports.default = {
    title: 'Musical.ly - Unitd State',
    path: 'us',
    isOnline: false,
    data: () => data_1.default,
    authority: _ => true,
    cssSrc: '../us/css',
    containerSrc: '../../us/index',
    jsSrc: '../../us/js'
};
