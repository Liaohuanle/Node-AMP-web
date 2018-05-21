const util = require('../../../util/util');
const winnerTop100 = require('./component/winners/data')
const usBannerImgMobile = '/act/assets/banner-title-mobile-us.png';
const usBannerImgPC = '/act/assets/banner-title-pc-us.png';
const navList = {
    home: 'Startseite',
    about: 'Information',
    winners: 'Gewinner',
    media: 'Medien',
    officalRules: 'Offizielle Regeln'
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
const setIntervalTimeNode = util.countDown('spainish', '2018.5.03 23:59:59');

const bannerMobileVideoPoster = '/act/assets/banner-mobile-poster-europe.png'

const bannerVideoPoster = '/act/assets/europe-banner-image.jpg'

const bannerVideoUrl = '/act/assets/europe-banner-video-pc.mp4'

const bannerVideoMobile = `/act/assets/europe-banner-video-mobile.mp4`

const bannerImgPC = '/act/assets/europe/default_banner_text.svg'

const bannerImgMobile = '/act/assets/spain-mobile-banner-text.png'

const aboutObject = [
  {
    src: '/act/assets/europe_about_comedy.svg',
    title: 'Comedy'
  },{
    src: '/act/assets/europe_about_fitness.svg',
    title: 'Sport'
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
  title: 'Information',
  subDesc: '1 Million Audition',
  phone: '/act/assets/europe/default_about_phone.png',
  description: '/act/assets/europe/default_about_desc.png'
}

const prizeList = {
  one: {
    title: 'Round 1 - Landesebene',
    subtitle: '11.-20. Mai',
    desc: [
      'Insgesamt 300 Gewinner aus Europa '
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
  top100: winnerTop100,
}



const bannerMobileVideoGif = '/act/assets/banner-mobile-europe.gif'
module.exports = {
  showLanguageBtn: true,
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
