const util = require('../../util/util');
const moment = require('moment');
const navList = {
    home: 'Homepage',
    about: 'About',
    winners: 'Winners',
    media: 'Media',
    officalRules: 'Official Rules'
};
const rule = {
    titleText: 'Rules Winner selection is based on creator score. Rules check karein idhar.',
    round1: 'Round 1',
    round1Text: 'Pick 1000 from all participants',
    round2: 'Round 2',
    round2Text: 'Pick Top 200 from 1000 Round 1 winners',
    subText: 'Also, winners will be invited to musical.ly Celebration Party',
    click: 'Click here for more details'
};

const aboutSubList = {
    cat: 'CATEGORIES',
    prizeWin: 'Win₹10,000,000',
    seeyou: ' <p>Event Address: Westin Garden City Mumbai</p> <p>Time: Start from 11:30 AM, 10th February 2018</p>',
    comesoon: 'Coming soon...',
    youcanmeetsub: '#1Millionmuser',
    abouttab1Image: '/act/assets/about_tab_1.png',
    abouttab1Phone: '/act/assets/india/phone.png'
};

const setIntervalTimeNode = util.countDown('en', '2018.5.17 0:00:00');

const bannerMobileVideoPoster = '/act/assets/banner-mobile-poster-europe.png'

const bannerVideoPoster = '/act/assets/europe-banner-image.jpg'

const bannerVideoUrl = '/act/assets/europe-banner-video-pc.mp4'

const bannerVideoMobile = `/act/assets/europe-banner-video-mobile.mp4`

const bannerImgPC = '/act/assets/india/india-banner-text-pc.png'

const bannerImgMobile = '/act/assets/india/india-banner-text-mobile.png'

const aboutObject = [
  {
    src: '/act/assets/europe_about_comedy.svg',
    title: 'VINES'
  },{
    src: '/act/assets/europe_about_fitness.svg',
    title: 'SPORTS'
  },{
    src: '/act/assets/europe_about_cooking.svg',
    title: 'FOOD'
  },{
    src: '/act/assets/india/talent.png',
    title: 'SPECIAL SKILLS'
  },{
    src: '/act/assets/india/sing.png',
    title: 'SING'
  }
]

const aboutContainerFile = {
  title: 'About',
  subDesc: '1 Million Audition',
  phone: '/act/assets/india/phone.png',
  description: '/act/assets/india/imdia-share.png',
  shareRuleClick: {
    content: 'Rules Winner selection is based on creator score.',
    clickHere: 'Check out the rules here.'
  },
  prizeRuleClick: {
    content: 'Rules Winner selection is based on creator score.',
    clickHere: 'Check out the rules here.'
  }
}

const prizeList = {
  one: {
    title: 'Round 1',
    subtitle: '17th May - 24th May',
    desc: [
      'Top 1000 will enter the Round 2 Audition '
    ]
  },
  two: {
    title: 'Round 2',
    subtitle: '26th May - 31st May',
    desc: [
      'Top200 from Top1000 Round 1 winners:',
      'Top5, $500 worth prize',
      'Top6-20, $300 worth prize',
      'Top21-100, $200 worth prize',
      'Top101-200, $100 worth prize'
    ]
  },
  three: {
    title: "musical.ly's Choice",
    subtitle: 'Campeones por categoría (Top 1 Por Categoria)',
    desc: [
      `Har category se Ek Winner chuna jaayega. 1 Top winner from each category as 1M Comedian, 1M Sports Guru, 1M Singer, 1M SpecialSkills Guru, 1M Foodie.`,

      `Prize: Honor 10 Smartphone, $500 cash prize`
    ]
  }
}

const winnerObj = {
  hasWinnerList: false,
  title: 'Winners',
  desc: 'How do we determine the winners of the audition? Creator Score. It is from an algorithm score combining video quality, engagement, creativity, originality and which more fits the proposed themes. The score is calculated by musical.ly data team. We will announce the winners list with score to everyone here.',
  content: 'Jald aa raha hai!'
}

const country = 'india'

const bannerMobileVideoGif = '/act/assets/india/banner-mobile.png'

const mentorObject = date => {
  this.title = 'Mentor';
  this.subtitle = 'Jald aa raha hai!';
  this.mentorList = [
    {
      isShow: moment("2018.5.12").isBefore(moment(moment(), 'day')),
      head: '/act/assets/india/user/useer2.png',
      name: 'Mallika Dua',
      sub: 'Comedy',
      youtube: 'https://www.youtube.com/embed/UjRDJuCrF-g?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media'
    },{
      isShow: moment("2018.5.13").isBefore(moment(moment(), 'day')),
      head: '/act/assets/india/user/user1.png',
      name: 'Rakul Singh',
      sub: 'Food',
      youtube: 'https://www.youtube.com/embed/aHV9ZntjWB8?rel=0&amp;controls=0&amp;showinfo=0'
    },{
      isShow: moment("2018.5.14").isBefore(moment(moment(), 'day')),
      head: '/act/assets/india/user/user3.png',
      name: 'Shirley Setia',
      sub: 'Sing',
      youtube: 'https://www.youtube.com/embed/cB3VDvn8s_Y?rel=0&amp;controls=0&amp;showinfo=0'
    },{
      isShow: moment("2018.5.15").isBefore(moment(moment(), 'day')),
      head: '/act/assets/india/user/user5.png',
      name: 'Tiger Shroff',
      sub: 'Fitness',
      youtube: 'https://youtu.be/UjRDJuCrF-g'
    },{
      isShow: moment("2018.5.16").isBefore(moment(moment(), 'day')),
      head: '/act/assets/india/user/user4.png',
      name: 'Lauren Gottlieb',
      sub: 'Special Skills',
      youtube: 'https://youtu.be/UjRDJuCrF-g'
    }
  ];
  const canShowList = this.mentorList.filter(item => item.isShow)
  this.currentMentorVideo = canShowList[canShowList.length-1].youtube
  return this
}

module.exports = date => ({
  showLanguageBtn: true,
  country,
  langList: {
    curr: util.indiaLanglist['india'].title,
    list: util.indiaLanglist
  },
  mentorObject: mentorObject(date),
  prizeList,
  bannerMobileVideoGif,
  bannerMobileVideoPoster,
  aboutContainerFile,
  navList,
  bannerVideoPoster,
  bannerVideoUrl,
  bannerVideoMobile,
  setIntervalTimeNode,
  spanText: setIntervalTimeNode.spanText,
  bannerImgPC,
  bannerImgMobile,
  aboutObject,
  winnerObj,
  noBannerVideo: true,
  YTvideoinfo: {
    videoUrl: 'https://www.youtube.com/embed/aHV9ZntjWB8?rel=0&amp;controls=0&amp;showinfo=0',
    proportion: 315 / 560
  }
})