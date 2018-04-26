
const data_1 = require("./data");
const mailUtil = require("./mail-util")

const fileD = 'mail'
exports.default = [
  {
    title: 'Musical.ly - EMAIL',
    path: fileD,
    isOnline: false,
    data: data_1,
    cssSrc: `../${fileD}/css`,
    containerSrc: `../../${fileD}/index`,
    jsSrc: `.../../${fileD}/js`,
    authority: _ => true,
  },{
    path: 'sendToMail',
    isOnline: false,
    isApi: false,
    isRest: true,
    data: {},
    cssSrc: '',
    containerSrc: '',
    jsSrc: '',
    title: '',
    callback: mailUtil,
    authority: _ => true,
  }
];
