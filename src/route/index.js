const enOBj = require('../util/index')('en')
const inOBj = require('../util/index')('in')
module.exports = (app) => {
  app.get('/act/India', function(req, res) {
    const {
      winners,
      winnerNameList,
      meetUserList,
      YTvideoinfo,
      setIntervalTimeNode,
      aboutTagList,
      bannerImgPC,
      bannerImgMobile,
      langTransfor
    }  = enOBj
    res.render('../views/layout', {
      setIntervalTimeNode,
      aboutTagList,
      YTvideoinfo,
      bannerImgPC,
      langTransfor,
      bannerImgMobile,
      langText: 'Hindi Version'
    })
  }),
  app.get('/act/India/getRest', function(req, res) {
    const {
      winners,
      winnerNameList,
      meetUserList,
      YTvideoinfo,
      setIntervalTimeNode,
      aboutTagList,
      bannerImgPC,
      bannerImgMobile,
      langTransfor
    }  = enOBj
    const videoUrl = JSON.parse(YTvideoinfo).url
    res.render('../views/body-second', {
      winners,
      videoUrl,
      winnerNameList,
      meetUserList
    })
  }),
  app.get('/act/India/Hindi', function(req, res) {
    const {
      winners,
      winnerNameList,
      meetUserList,
      YTvideoinfo,
      setIntervalTimeNode,
      aboutTagList,
      bannerImgPC,
      bannerImgMobile,
      langTransfor
    }  = inOBj
    res.render('../views/layout', {
      setIntervalTimeNode,
      aboutTagList,
      YTvideoinfo,
      bannerImgPC,
      langTransfor,
      bannerImgMobile,
      langText: 'English Version'
    })
  })
}