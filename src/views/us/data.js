"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var util = require('../../util/util');
var usBannerImgMobile = '/act/assets/banner-title-mobile-us.png';
var usBannerImgPC = '/act/assets/banner-title-pc-us.png';
var aboutUsTagList = ['#ShareAndWin', 'Category', 'Prize', 'Rules'];
var usNavList = {
    home: 'Home',
    about: 'About',
    winners: 'Winners',
    media: 'Media',
    officalRules: 'Offical Rules'
};

var rule = {
    titleText: 'Winner selection is based on creator score which will be announced after the end of each round.',
    round1: 'Round 1',
    round1Text: 'Pick 1000 from all participants',
    round2: 'Round 2',
    round2Text: 'Pick Top 200 from 1000 Round 1 winners',
    subText: 'Also, winners will be invited to musical.ly Celebration Party',
    click: 'Click here for more details'
};

var usYT = {
    videoUrl: ' https://www.youtube.com/embed/zAtmXIfqeAs?rel=0&amp;controls=0&amp;showinfo=0',
    proportion: 315 / 560
};

var aboutSubList = {
    cat: 'CATEGORIES',
    prizeWin: 'Win₹10,000,000',
    seeyou: ' <p>Event Address: Westin Garden City Mumbai</p> <p>Time: Start from 11:30 AM, 10th February 2018</p>',
    comesoon: 'Coming soon...',
    youcanmeetsub: '#1Millionmuser',
    abouttab1Image: '/act/assets/about_tab_1.png',
    abouttab1Phone: '/act/assets/phone.png'
};

var setIntervalTimeNode = util.countDown('en', '2018.3.30 23:59:59');

var winnerObj = {
  hasWinnerList: true,
  title: 'Winners',
  desc: 'How do we determine the winners of the audition?',
  content: 'Creator Score. It is from an algorithm score combining video quality, engagement, creativity, originality and which more fits the proposed themes. The score is calculated by musical.ly data team. We will announce the winners list with score to everyone here.'
}

var bannerVideoMobile = '/act/assets/banner-video-mobile-us.mp4'

var bannerMobileVideoPoster = '/act/assets/banner-mobile-poster-us.png'

var bannerMobileVideoGif = '/act/assets/banner-mobile-us.gif'

var data = {
    noBannerVideo: false,
    bannerMobileVideoPoster,
    bannerMobileVideoGif,
    bannerVideoUrl: '/act/assets/banner-pc-us.mp4',
    bannerVideoPoster: '/act/assets/bg-banner-pc-us.jpeg',
    aboutTagList: aboutUsTagList,
    YTvideoinfo: usYT,
    setIntervalTimeNode,
    bannerImgPC: usBannerImgPC,
    bannerVideoMobile,
    bannerImgMobile: usBannerImgMobile,
    navList: usNavList,
    rule,
    winnerObj,
    aboutSubList,
    showLanguageBtn: false
};
exports.default = data;
