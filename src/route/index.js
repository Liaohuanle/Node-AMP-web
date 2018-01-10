const enOBj = require('../util/index')('en')
const inOBj = require('../util/index')('in')
 inOBj.langText = 'English Vision'
 enOBj.langText = 'Hindi Vision'
 inOBj.ajaxUrl = '/act/India/Hindi/getRest'
 enOBj.ajaxUrl = '/act/India/English/getRest'
 inOBj.ruleAjaxUrl = '/act/India/Hindi/rule'
 enOBj.ruleAjaxUrl = '/act/India/English/rule'
module.exports = (app) => {
  app.get('/act/India', function(req, res) {
    res.render('../views/layout', inOBj)
  }),
  app.get(inOBj.ajaxUrl, function(req, res) {
    const yt = enOBj.YTvideoinfo
    inOBj.videoUrl = JSON.parse(yt).url
    res.render('../views/body-second', inOBj)
  }),
  app.get('/act/India/English', function(req, res) {
    res.render('../views/layout', enOBj)
  }),
  app.get(enOBj.ajaxUrl, function(req, res) {
    const yt = inOBj.YTvideoinfo
    enOBj.videoUrl = JSON.parse(yt).url
    res.render('../views/body-second', enOBj)
  }),
  app.get('/act/India/termofuse', function(req, res) {
    res.render('../views/component/termofuse-content')
  }),
  app.get(inOBj.ruleAjaxUrl, function(req, res) {
    res.render('../views/component/rule-hindi')
  })
  app.get(enOBj.ruleAjaxUrl, function(req, res) {
    res.render('../views/component/rule')
  })
}