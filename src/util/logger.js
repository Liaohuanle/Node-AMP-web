const colors = require('colors');

module.exports = {
  info: (...arg) => console.info(colors.blue(arg)),
  warn: (...arg) => console.info(colors.yellow(arg)),
  fatal: (...arg) => console.info(colors.red(arg)),
  success: (...arg) => console.info(colors.green(arg))
}