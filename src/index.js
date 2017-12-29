const express = require('express')
const routes = require('./route')
// const compress = require('./compress')
const app = new express()
app.use(express.static(__dirname + '/assets'))

app.set('view engine', 'ejs')
routes(app)
// compress()
app.listen(3000, (err) => {
  console.info(err || 'success')
})
