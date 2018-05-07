const util = require('../../util/util');
const usBannerImgMobile = '/act/assets/banner-title-mobile-us.png';
const usBannerImgPC = '/act/assets/banner-title-pc-us.png';
const aboutUsTagList = ['#ShareAndWin', 'Category', 'Prize', 'Rules'];
const navList = {
    home: 'Início',
    about: ' Sobre',
    winners: 'Ganhadores',
    media: 'Mídia',
    officalRules: 'Regras Oficiais'
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
const setIntervalTimeNode = util.countDown('spainish', '2018.5.17 23:59:59');

const bannerMobileVideoPoster = '/act/assets/banner-mobile-poster-europe.png'

const bannerVideoPoster = '/act/assets/europe-banner-image.jpg'

const bannerVideoUrl = '/act/assets/europe-banner-video-pc.mp4'

const bannerVideoMobile = `/act/assets/europe-banner-video-mobile.mp4`

const bannerImgPC = '/act/assets/brazil_banner_text.svg'

const bannerImgMobile = '/act/assets/brazil_banner_text_mobile.svg'

const aboutObject = [
  {
    src: '/act/assets/europe_about_comedy.svg',
    title: 'Comedia'
  },{
    src: '/act/assets/europe_about_fitness.svg',
    title: 'Esportes'
  },{
    src: '/act/assets/dancer.png',
    title: 'Beleza'
  },{
    src: '/act/assets/europe_about_style.svg',
    title: 'Fashion'
  }
]

const aboutContainerFile = {
  phone: '/act/assets/phone.png',
  description: '/act/assets/spain_about_sharewith.png'
}

const prizeList = {
  one: {
    title: 'Primeira fase',
    subtitle: '18 de Maio até 23 de Maio',
    desc: [
      '150 criadores serão selecionados e receberão um steadycam com microfone'
    ]
  },
  two: {
    title: 'Segunda fase',
    subtitle: '24 de Maio até 29 de Maio',
    desc: [
      'Dos 150, os 12 melhores irão a final '
    ]
  },
  three: {
    title: 'Bootcamp',
    subtitle: '2 e 3 de Junho:',
    src: '',
    desc: [,
      'Os 12 melhores serão destribuidos em 4 grupos.',
      '4 grupos irão participar do 1 Million Audition Brazil bootcamp, no Rio de Janeiro. Cada grupo produzirá um video em colab.' 
    ]
  },
  four: {
    title: 'Votação e Ganhadores',
    subtitle: '5 a 7 de Junho',
    src: '',
    desc: [
      '4 vídeos finais serão postados em contas distintas no aplicativo, e todos os usuários vão poder votar por curtidas. O grupo (3 pessoas) que o vídeo tiver o maior número de curtidas ganhará o 1 Million Audition Brasil. ' 
    ]
  }
}

const winnerObj = {
  hasWinnerList: false,
  title: 'Ganhadores',
  desc: 'How do we determine the winners of the audition?',
  content: 'Creator Score. It is from an algorithm score combining video quality, engagement, creativity, originality and which more fits the proposed themes. The score is calculated by musical.ly data team. We will announce the winners list with score to everyone here.'
}

const bannerMobileVideoGif = '/act/assets/banner-mobile-europe.gif'
module.exports = {
  showLanguageBtn: false,
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
    videoUrl: 'https://www.youtube.com/embed/pY-TVEowkT0?rel=0&amp;controls=0&amp;showinfo=0',
    proportion: 315 / 560
  }
}