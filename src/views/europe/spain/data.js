const util = require('../../../util/util');
const usBannerImgMobile = '/act/assets/banner-title-mobile-us.png';
const usBannerImgPC = '/act/assets/banner-title-pc-us.png';
const aboutUsTagList = ['#ShareAndWin', 'Category', 'Prize', 'Rules'];
const navList = {
    home: 'Home',
    about: 'About',
    winners: 'Winners',
    media: 'Media',
    officalRules: 'Offical Rules'
};
const rule = {
    titleText: 'Winner selection is based on creator score which will be announced after the end of each round.',
    round1: 'Round 1',
    round1Text: 'Pick 1000 from all participants',
    round2: 'Round 2',
    round2Text: 'Pick Top 200 from 1000 Round 1 winners',
    subText: 'Also, winners will be invited to musical.ly Celebration Party',
    click: 'Click here for more details'
};
const usYT = {
    videoUrl: ' https://www.youtube.com/embed/zAtmXIfqeAs?rel=0&amp;controls=0&amp;showinfo=0',
    proportion: 315 / 560
};
const aboutSubList = {
    cat: 'CATEGORIES',
    prizeWin: 'Win₹10,000,000',
    seeyou: ' <p>Event Address: Westin Garden City Mumbai</p> <p>Time: Start from 11:30 AM, 10th February 2018</p>',
    comesoon: 'Coming soon...',
    youcanmeetsub: '#1Millionmuser',
    abouttab1Image: '/act/assets/about_tab_1.png',
    abouttab1Phone: '/act/assets/phone.png'
};
const setIntervalTimeNode = util.countDown('en', '2018.3.30 23:59:59');

const bannerVideoPoster = '/act/assets/bg-banner-pc-us.jpeg'

const bannerVideoUrl = '/act/assets/test_no_audio.mp4'

const bannerVideoMobile = `/act/assets/mobile-banner-video.mp4`

const bannerBgUrl = '/act/assets/banner-pc-us.gif'

const bannerImgPC = '/act/assets/spain-pc-banner-text.png'

const bannerImgMobile = '/act/assets/spain-mobile-banner-text.png'

const aboutObject = [
  {
    src: '/act/assets/europe_about_comedy.svg',
    title: 'comedy'
  },{
    src: '/act/assets/europe_about_fitness.svg',
    title: 'fitness'
  },{
    src: '/act/assets/europe_about_cooking.svg',
    title: 'cooking'
  },{
    src: '/act/assets/europe_about_talent.svg',
    title: 'talent'
  },{
    src: '/act/assets/europe_about_creative.svg',
    title: 'creative'
  }
]

const aboutContainerFile = {
  phone: '/act/assets/phone.png',
  description: '/act/assets/spain_about_sharewith.png'
}

module.exports = {
  showLanguageBtn: true,
  langList: {
    curr: util.europeLanglist['spain'].title,
    list: util.europeLanglist
  },
  aboutContainerFile,
  navList,
  bannerVideoPoster,
  bannerVideoUrl,
  bannerVideoMobile,
  bannerBgUrl,
  setIntervalTimeNode,
  spanText: setIntervalTimeNode.spanText,
  bannerImgPC,
  bannerImgMobile,
  aboutObject,
  noBannerVideo: false,
  YTvideoinfo: {
    videoUrl: ' https://www.youtube.com/embed/zAtmXIfqeAs?rel=0&amp;controls=0&amp;showinfo=0',
    proportion: 315 / 560
  }
}