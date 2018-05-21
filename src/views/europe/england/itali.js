const util = require('../../../util/util');
const winnerTop100 = require('./component/winners/data')
const usBannerImgMobile = '/act/assets/banner-title-mobile-us.png';
const usBannerImgPC = '/act/assets/banner-title-pc-us.png';
const navList = {
    home: 'Homepage',
    about: 'Informazioni',
    winners: 'Vincitori',
    media: 'Media',
    officalRules: 'Termini di Utilizzo'
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
const setIntervalTimeNode = util.countDown('italy', '2018.5.11 12:00:00');

const bannerMobileVideoPoster = '/act/assets/banner-mobile-poster-europe.png'

const bannerVideoPoster = '/act/assets/europe-banner-image.jpg'

const bannerVideoUrl = '/act/assets/europe-banner-video-pc.mp4'

const bannerVideoMobile = `/act/assets/europe-banner-video-mobile.mp4`

const bannerImgPC = '/act/assets/europe/italian_banner_text.png'

const bannerImgMobile = '/act/assets/europe/italian_banner_text_mobile.png'

const aboutObject = [
  {
    src: '/act/assets/europe_about_comedy.svg',
    title: 'Commedia'
  },{
    src: '/act/assets/europe_about_fitness.svg',
    title: 'Sport'
  },{
    src: '/act/assets/europe_about_cooking.svg',
    title: 'Cucina'
  },{
    src: '/act/assets/europe_about_mascota.svg',
    title: 'Talento'
  },{
    src: '/act/assets/europe_about_style.svg',
    title: 'Fashion'
  }
]

const aboutContainerFile = {
  title: 'Informazioni',
  subDesc: '1 Million Audition',
  phone: '/act/assets/europe/default_about_phone.png',
  description: '/act/assets/europe/default_about_desc.png',
  shareRuleClick: {
    content: 'Regole La selezione dei vincitori si basa sul punteggio creatività. ',
    clickHere: 'Per ulteriori dettagli, clicca qui.'
  },
  prizeRuleClick: {
    content: 'Regole La selezione dei vincitori si basa sul punteggio creatività. ',
    clickHere: 'Per ulteriori dettagli, clicca qui.'
  }
}

const prizeList = {
  one: {
    title: 'Round 1- Livello nazionale',
    subtitle: '11 - 20 maggio',
    desc: [
      '300 vincitori europei in totale'
    ]
  },
  two: {
    title: 'Round 2 - Livello euro22 - 27 maggio22nd May - 27th May',
    desc: [
      'I migliori 100 tra i 300 vincitori del Round 1:',
      'Top 20, premio dal valore di  €700',
      'Top 21 - 50, premio dal valore di €400',
      'Top 51 - 100, premio dal valore di €200'
    ]
  },
  three: {
    title: "Le Scelte di musical.ly",
    subtitle: 'Campeones por categoría (Top 1 Por Categoria)',
    desc: [
      `Selezioneremo il migliore da ogni categoria come 1M Comico, 1M Guru dello Sport, 1M Chef, 1M Talento, 1M Guru dello Stile.`,
      `Premio: diventa il prossimo musical.ly Ambassador (inclusa una campagna hashtag, video ufficiale, corona, pagina di apertura, shout out dall'account ufficiale, banner per un mese) e un pacchetto premi dal valore di €2000 che include un video shooting professionale a Londra (con pacchetto viaggio) come futuro 1 Million Audition video promozionale, party privati con i top influencers, ecc..`
    ]
  }
}

const winnerObj = {
  hasWinnerList: true,
  top100: winnerTop100,
  title: 'Vincitori',
  desc: '',
  content: 'will be coming soon'
}

const bannerMobileVideoGif = '/act/assets/banner-mobile-europe.gif'

const country = 'italy'

module.exports = {
  showLanguageBtn: true,
  country,
  langList: {
    curr: util.europeLanglist[country].title,
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
