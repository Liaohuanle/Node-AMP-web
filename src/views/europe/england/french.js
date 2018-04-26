const util = require('../../../util/util');
const usBannerImgMobile = '/act/assets/banner-title-mobile-us.png';
const usBannerImgPC = '/act/assets/banner-title-pc-us.png';
const aboutUsTagList = ['#ShareAndWin', 'Category', 'Prize', 'Rules'];
const navList = {
    home: 'Inicio',
    about: ' Acerca de',
    winners: 'Ganadores',
    media: 'Media',
    officalRules: 'Reglas Oficiales'
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

const bannerImgPC = '/act/assets/spain-pc-banner-text.png'

const bannerImgMobile = '/act/assets/spain-mobile-banner-text.png'

const aboutObject = [
  {
    src: '/act/assets/europe_about_comedy.svg',
    title: 'Comedia'
  },{
    src: '/act/assets/europe_about_fitness.svg',
    title: 'Deporte'
  },{
    src: '/act/assets/europe_about_cooking.svg',
    title: 'Cocina'
  },{
    src: '/act/assets/europe_about_mascota.svg',
    title: 'Mascotas'
  },{
    src: '/act/assets/europe_about_style.svg',
    title: 'Maquillaje'
  }
]

const aboutContainerFile = {
  phone: '/act/assets/phone.png',
  description: '/act/assets/spain_about_sharewith.png'
}

const prizeList = {
  one: {
    title: 'Round 1',
    subtitle: 'Del 20 al 27 de abril',
    src: '/act/assets/europe-prize-amazoncard.png',
    desc: [
      '400 Creadores pasarán a la segunda ronda. (México, Argentina, Colombia y España) '
    ]
  },
  two: {
    title: 'Round 2',
    subtitle: 'Del 29 de abril al 3 de mayo',
    src: '/act/assets/europe-prize-canna.png',
    desc: [
      'Los top 100 de los 400 ganadores de la primera ronda ganarán $200 USD'
    ]
  },
  three: {
    title: 'Favoritos de musical.ly',
    subtitle: 'Campeones por categoría (Top 1 Por Categoria)',
    src: '/act/assets/europe-prize-england.png',
    desc: [
      'Premio: Un iPhone X'
    ]
  }
}

const winnerObj = {
  hasWinnerList: false,
  title: 'Ganadores',
  desc: 'How do we determine the winners of the audition?',
  content: 'Creator Score. It is from an algorithm score combining video quality, engagement, creativity, originality and which more fits the proposed themes. The score is calculated by musical.ly data team. We will announce the winners list with score to everyone here.'
}



const bannerMobileVideoGif = '/act/assets/banner-mobile-europe.gif'
module.exports = {
  showLanguageBtn: false,
  langList: {
    curr: util.europeLanglist['french'].title,
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
    videoUrl: 'https://www.youtube.com/embed/wQDTAQXsJEY?rel=0&amp;showinfo=0',
    proportion: 315 / 560
  }
}