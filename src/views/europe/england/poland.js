const util = require('../../../util/util');
const usBannerImgMobile = '/act/assets/banner-title-mobile-us.png';
const usBannerImgPC = '/act/assets/banner-title-pc-us.png';
const navList = {
    home: 'Strona główna',
    about: 'Informacje',
    winners: 'Media',
    media: 'Laureaci',
    officalRules: 'Zasady'
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
const setIntervalTimeNode = util.countDown('poland', '2018.5.11 12:00:00');

const bannerMobileVideoPoster = '/act/assets/banner-mobile-poster-europe.png'

const bannerVideoPoster = '/act/assets/europe-banner-image.jpg'

const bannerVideoUrl = '/act/assets/europe-banner-video-pc.mp4'

const bannerVideoMobile = `/act/assets/europe-banner-video-mobile.mp4`

const bannerImgPC = '/act/assets/europe/polish_banner_text.png'

const bannerImgMobile = '/act/assets/europe/polish_banner_text_mobile.png'

const aboutObject = [
  {
    src: '/act/assets/europe_about_comedy.svg',
    title: 'komedia'
  },{
    src: '/act/assets/europe_about_fitness.svg',
    title: 'sport'
  },{
    src: '/act/assets/europe_about_cooking.svg',
    title: 'jedzenie'
  },{
    src: '/act/assets/europe_about_mascota.svg',
    title: 'talent'
  },{
    src: '/act/assets/europe_about_style.svg',
    title: 'moda'
  }
]

const aboutContainerFile = {
  title: 'Informacje',
  subDesc: '1 Million Audition',
  phone: '/act/assets/europe/default_about_phone.png',
  description: '/act/assets/europe/default_about_desc.png',
  shareRuleClick: {
    content: 'Zasady Wybór laureatów odbywa się w oparciu o ocenę twórców.',
    clickHere: 'Aby dowiedzieć się więcej, kliknij tutaj.'
  },
  prizeRuleClick: {
    content: 'Zasady Wybór laureatów odbywa się w oparciu o ocenę twórców.',
    clickHere: 'Aby dowiedzieć się więcej, kliknij tutaj.'
  }
}

const prizeList = {
  one: {
    title: 'Runda 1 – Poziom krajowy',
    subtitle: '11 - 20 maja',
    desc: [
      '300 zwycięzców z całej Europy'
    ]
  },
  two: {
    title: 'Runda 2 – Poziom europejski',
    subtitle: '22 - 27 maja',
    desc: [
      'Top100 z Top 300 Pierwsza runda zwycięzców: ',
      'Top 20,  nagroda pieniężna €700 ',
      'Top 21-50,  nagroda pieniężna  €400', 
      'Top 51-100,  nagroda pieniężna  €200 '
    ]
  },
  three: {
    title: "Wybór musical.ly",
    subtitle: 'Campeones por categoría (Top 1 Por Categoria)',
    desc: [
      `Wybierzemy Top1 z każdej kategorii 1M Comedian, 1M SportsGuru, 1M Foodie, 1M Talent, 1M StyleGuru.
      Nagrody: Zostań ambasadorem musical.ly (w tym oficjalne wideo dla hashtagu, koronę, `,
      `stronę otwierającą, oficjalne zgłoszenie konta, baner w aplikacji przez jeden miesiąc)`,
      `i wygraj pakiet nagród o wartości 2000 €, w tym profesjonalne nagranie studyjne w Londynie (z pakietem podróżnym) jako  przyszłe 1 Million
      Audition ad video, prywatna impreza z najlepszymi wpływowymi social influencers, itd.`
    ]
  }
}

const winnerObj = {
  hasWinnerList: false,
  title: 'Laureaci',
  desc: '',
  content: 'will be coming soon'
}

const country = 'poland'

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
    videoUrl: 'https://www.youtube.com/embed/e0eKhLAtwzU?rel=0&amp;controls=0&amp;showinfo=0',
    proportion: 315 / 560
  }
}
