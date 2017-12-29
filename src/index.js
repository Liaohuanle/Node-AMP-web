const express = require('express')
const routes = require('./route')
const app = new express()
app.use(express.static(__dirname + '/assets'))

app.set('view engine', 'ejs')
routes(app)
app.listen(3000, (err) => {
  console.info(err || 'success')
})
