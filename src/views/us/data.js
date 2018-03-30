const util = require('../../util/util')

const usBannerImgMobile = '/act/assets/banner-title-mobile-us.png'

const usBannerImgPC = '/act/assets/banner-title-pc-us.png'

const aboutUsTagList = ['#ShareAndWin ', 'Category', 'Prize', 'Rules']

const usNavList = {
  home: 'Home',
  about: 'About',
  winners: 'Winners',
  media: 'Media'
}

const rule = {
  titleText: 'Winner selection is based on creator score which will be announced after the end of each round.',
  round1: 'Round 1',
  round1Text: 'Pick 1000 from all participants',
  round2: 'Round 2',
  round2Text: 'Pick Top 200 from 1000 Round 1 winners',
  subText: 'Also, winners will be invited to musical.ly Celebration Party',
  click: 'Click here for more details'
}

const usYT = {
  videoUrl: ' https://www.youtube.com/embed/zAtmXIfqeAs?rel=0&amp;controls=0&amp;showinfo=0',
  proportion: 315 / 560
}


const aboutSubList = {
  cat: 'CATEGORIES',
  prizeWin: 'Win₹10,000,000',
  seeyou: ' <p>Event Address: Westin Garden City Mumbai</p> <p>Time: Start from 11:30 AM, 10th February 2018</p>',
  comesoon: 'Coming soon...',
  youcanmeetsub: '#1Millionmuser',
  abouttab1Image: '/act/assets/about_tab_1.png',
  abouttab1Phone: '/act/assets/phone.png'
}

const setIntervalTimeNode = util.countDown('en', '2018.3.30 23:59:59')
const data = {
  noBannerVideo: false,
  bannerBgUrl: '//musically.muscdn.com/ops/upload/default/2018/03/23/10/4b6b5a27-bb40-4b1c-8ef5-6dc9aed867c2.gif',
  bannerVideoUrl: '/act/assets/banner-pc-us.mp4',
  bannerVideoPoster: '/act/assets/bg-banner-pc-us.jpeg',
  aboutTagList: aboutUsTagList,
  YTvideoinfo: usYT,
  setIntervalTimeNode,
  bannerImgPC: usBannerImgPC,
  bannerImgMobile: usBannerImgMobile,
  navList: usNavList,
  rule,
  aboutSubList
}

module.exports = data