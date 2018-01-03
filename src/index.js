const express = require('express')
const routes = require('./route')
const { dir } = require('./util/index')
const app = new express()
app.use( dir, express.static(__dirname + dir))

app.set('view engine', 'ejs')
routes(app)
app.listen(3000, (err) => {
  console.info(err || 'success')
})
