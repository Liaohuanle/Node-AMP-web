const util = require('../../../util/util');
const navList = {
    home: 'Accueil',
    about: 'À propos',
    winners: 'Vainqueurs',
    media: 'Média',
    officalRules: 'Règles Officielles'
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

const bannerImgPC = '/act/assets/europe/french_banner_text.svg'

const bannerImgMobile = '/act/assets/europe/french_banner_text_mobile.svg'

const aboutObject = [
  {
    src: '/act/assets/europe_about_comedy.svg',
    title: 'Comédie'
  },{
    src: '/act/assets/europe_about_fitness.svg',
    title: 'Sport'
  },{
    src: '/act/assets/europe_about_cooking.svg',
    title: 'Cuisine'
  },{
    src: '/act/assets/europe_about_mascota.svg',
    title: 'Talent'
  },{
    src: '/act/assets/europe_about_style.svg',
    title: 'Fashion'
  }
]

const aboutContainerFile = {
  title: 'À propos',
  subDesc: '1 Million Audition',
  phone: '/act/assets/europe/default_about_phone.png',
  description: '/act/assets/europe/default_about_desc.png',
  shareRuleClick: {
    content: '',
    clickHere: ''
  },
  prizeRuleClick: {
    content: 'Règles Les vainqueurs sont sélectionnés en fonction du score de création. ',
    clickHere: "Merci de cliquer ici pour plus d'informations."
  }
}

const prizeList = {
  one: {
    title: 'Étape 1 - Niveau national',
    subtitle: '11 - 20 mai',
    desc: [
      '300 vainqueurs au total en Europe'
    ]
  },
  two: {
    title: 'Étape 2 - Niveau européen',
    subtitle: '22 - 27 mai',
    desc: [
      "Top 100 du Top 300 des vainqueurs de l'étape 1",
      "Top 20, prix d'une valeur de 700€",
      "Top 21-50, prix d'une valeur de 400€",
      "Top 51-100, prix d'une valeur de 200€"
    ]
  },
  three: {
    title: "Choix musical.ly",
    subtitle: 'Campeones por categoría (Top 1 Por Categoria)',
    desc: [
      `Nous sélectionnerons le Top1 de chaque catégorie en tant que 1M Comédien, 1M Guru du Sport, 1M Cuisinier, 1M Talent, 1M Guru du Style`,
      `Prix : Deviens le futur Ambassadeur musical.ly (incluant une vidéo officielle de hashtag, la couronne, un page d'ouverture, une mise en avant sur le compte officiel, une bannière pendant 1 mois), et gagne un package gagnant d'une valeur de 2000€, incluant un shooting vidéo dans un studio professionnel de Londres (avec un pack voyage) qui servira de futur publicité pour la 1 Million Audition, une fête privée avec la crème des influenceurs, etc. .`
    ]
  }
}

const winnerObj = {
  hasWinnerList: false,
  title: 'Vainqueurs',
  desc: '',
  content: 'will be coming soon'
}

const country = 'french'

const bannerMobileVideoGif = '/act/assets/banner-mobile-europe.gif'
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
    videoUrl: 'https://www.youtube.com/embed/wQDTAQXsJEY?rel=0&amp;showinfo=0',
    proportion: 315 / 560
  }
}
