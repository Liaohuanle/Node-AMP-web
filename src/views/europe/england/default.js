const util = require('../../../util/util');
// const winnerTop100 = require('./component/winners/data')
const winnerTop = require('./component/winners/data2')
const navList = {
    home: 'Homepage',
    about: 'About',
    winners: 'Winners',
    media: 'Media',
    officalRules: 'Official Rules'
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

const aboutSubList = {
    cat: 'CATEGORIES',
    prizeWin: 'Win₹10,000,000',
    seeyou: ' <p>Event Address: Westin Garden City Mumbai</p> <p>Time: Start from 11:30 AM, 10th February 2018</p>',
    comesoon: 'Coming soon...',
    youcanmeetsub: '#1Millionmuser',
    abouttab1Image: '/act/assets/about_tab_1.png',
    abouttab1Phone: '/act/assets/phone.png'
};
const setIntervalTimeNode = util.countDown('en', '2018.5.11 12:00:00');

const bannerMobileVideoPoster = '/act/assets/banner-mobile-poster-europe.png'

const bannerVideoPoster = '/act/assets/europe-banner-image.jpg'

const bannerVideoUrl = '/act/assets/europe-banner-video-pc.mp4'

const bannerVideoMobile = `/act/assets/europe-banner-video-mobile.mp4`

const bannerImgPC = '/act/assets/europe/default_banner_text.png'

const bannerImgMobile = '/act/assets/europe/default_banner_text_mobile.png'

const aboutObject = [
  {
    src: '/act/assets/europe_about_comedy.svg',
    title: 'Comedy'
  },{
    src: '/act/assets/europe_about_fitness.svg',
    title: 'Sports'
  },{
    src: '/act/assets/europe_about_cooking.svg',
    title: 'Food'
  },{
    src: '/act/assets/europe_about_mascota.svg',
    title: 'Talent'
  },{
    src: '/act/assets/europe_about_style.svg',
    title: 'Fashion'
  }
]

const aboutContainerFile = {
  title: 'About',
  subDesc: '1 Million Audition',
  phone: '/act/assets/europe/default_about_phone.png',
  description: '/act/assets/europe/default_about_desc.png',
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
    title: 'Round 1 - Country level',
    subtitle: '11th May - 20th May ',
    desc: [
      '300 winners from Europe in total'
    ]
  },
  two: {
    title: 'Round 2 - EU Level',
    subtitle: '22nd May - 27th May',
    desc: [
      'Top100 from Top 300 Round 1 winners:',
      'Top 20,  €700 worth prize',
      'Top 21-50, €400 worth prize',
      'Top 51-100, €200 worth prize'
    ]
  },
  three: {
    title: "musical.ly's Choice",
    subtitle: 'Campeones por categoría (Top 1 Por Categoria)',
    desc: [
      `We will select Top 1 from each category as 1M Comedian, 1M SportsGuru, 1M Foodie, 1M Talent, 1M StyleGuru.`,
      `Prize: Become the next musical.ly Ambassador (including hashtag official video, crown, opening page, official account shout-out, in-app banner for one month), 
      and worth €2000 winner package including a professional studio video shooting in London (with a travel package) as future 1 Million
      Audition ad video, private party with top social influencers, ect.`
    ]
  }
}

const winnerObj = {
  hasWinnerList: true,
  title: 'Winners',
  desc: '',
  content: 'will be coming soon',
  top100: winnerTop
}

const country = 'english'

const bannerMobileVideoGif = '/act/assets/banner-mobile-europe.gif'

module.exports = {
  showLanguageBtn: true,
  country,
  langList: {
    curr: util.europeLanglist['en'].title,
    list: util.europeLanglist
  },
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
  noBannerVideo: false,
  YTvideoinfo: {
    videoUrl: 'https://www.youtube.com/embed/e0eKhLAtwzU?rel=0&amp;controls=0&amp;showinfo=0',
    proportion: 315 / 560
  }
}