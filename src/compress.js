const compressor = require('node-minify')
const run = () => compressor.minify({
  compressor: 'uglifyjs',
  input: './views/run.ejs',
  output: './assets/run.js',
  callback: function (err, min) {
    console.info(err, min)
  }
})
module.exports = run