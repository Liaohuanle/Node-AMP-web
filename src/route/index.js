const enOBj = require('../util/index')('en')
const inOBj = require('../util/index')('in')
 inOBj.langText = 'English Vision'
 enOBj.langText = 'Hindi Vision'
module.exports = (app) => {
  app.get('/act/India', function(req, res) {
    enOBj.ajaxUrl = '/act/India/getRest'
    res.render('../views/layout', enOBj)
  }),
  app.get('/act/India/getRest', function(req, res) {
    const yt = enOBj.YTvideoinfo
    enOBj.videoUrl = JSON.parse(yt).url
    res.render('../views/body-second', enOBj)
  }),
  app.get('/act/India/Hindi', function(req, res) {
    inOBj.ajaxUrl = '/act/India/Hindi/getRest'
    res.render('../views/layout', inOBj)
  }),
  app.get('/act/India/Hindi/getRest', function(req, res) {
    const yt = inOBj.YTvideoinfo
    inOBj.videoUrl = JSON.parse(yt).url
    res.render('../views/body-second', inOBj)
  }),
  app.get('/act/India/termofuse', function(req, res) {
    res.render('../views/component/termofuse-content')
  })
}