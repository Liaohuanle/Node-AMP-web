const UTIL = require('../util/index')

const englishOBJ = UTIL('en')
const indiaOBJ = UTIL('in')

const usOBj = englishOBJ.us

const enOBj = englishOBJ.india
const inOBj = indiaOBJ.india

const winnerList = require('../util/winner-list')
 inOBj.langText = 'English Version'
 enOBj.langText = 'Hindi Version'
 inOBj.ajaxUrl = '/act/India/Hindi/getRest'
 enOBj.ajaxUrl = '/act/India/English/getRest'
 inOBj.ruleAjaxUrl = '/act/India/Hindi/rule'
 enOBj.ruleAjaxUrl = '/act/India/English/rule'
 usOBj.ruleAjaxUrl = enOBj.ruleAjaxUrl
 usOBj.ajaxUrl = enOBj.ajaxUrl


module.exports = (app) => {
  app.get('/act/US', function(req, res) {
    console.log('====> /act/us, render')
    const yt = usOBj.YTvideoinfo
    usOBj.videoUrl = JSON.parse(yt).url
    res.render('../us-views/layout', usOBj)
  }),
  app.get('/act/India', function(req, res) {
    const yt = enOBj.YTvideoinfo
    inOBj.videoUrl = JSON.parse(yt).url
    res.render('../india-views/layout', inOBj)
  }),
  app.get('/act/India/English', function(req, res) {
    const yt = inOBj.YTvideoinfo
    enOBj.videoUrl = JSON.parse(yt).url
    res.render('../india-views/layout', enOBj)
  }),
  app.get('/act/India/termofuse', function(req, res) {
    res.render('../components/termofuser/termofuse-content')
  }),
  app.get(inOBj.ruleAjaxUrl, function(req, res) {
    res.render('../india-views/component/rule/rule-hindi')
  }),
  app.get(enOBj.ruleAjaxUrl, function(req, res) {
    res.render('../india-views/component/rule/rule')
  }),
  app.get('/act/India/fetchWinnerList', function(req, res) {
    res.send(winnerList)
  }),
}