const colors = require('colors');
const write = require('./wirte-file')

const wr = new write('./db/log.txt')

const con = (val, text) => {
  console.info(val)
  wr.write(text.toString())
}

module.exports = {
  info: (...arg) => con(colors.blue(arg), arg),
  warn: (...arg) => con(colors.yellow(arg), arg),
  fatal: (...arg) => con(colors.red(arg), arg),
  success: (...arg) =>con(colors.green(arg), arg)
}