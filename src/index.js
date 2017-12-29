const express = require('express')
const routes = require('./route')
// const compress = require('./compress')
const app = new express()
app.use( '/act/assets', express.static(__dirname + '/assets'))
// app.use( express.static(__dirname + '/'))

app.set('view engine', 'ejs')
routes(app)
// compress()
app.listen(3000, (err) => {
  console.info(err || 'success')
})
