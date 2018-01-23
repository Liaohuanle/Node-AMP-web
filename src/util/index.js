const moment = require('moment')

const setIntervalTimeNode = ['2018.1.10 00:00:00', '2018.1.18 00:00:00', '2018.1.17 00:00:00', '2018.02.05 00:00:00']

const YTvideoinfo = {
  url: 'https://www.youtube.com/embed/ezSlUSmXecM?rel=0&amp;controls=0&amp;showinfo=0',
  proportion: 315 / 560
}

const finnalTime = setIntervalTimeNode && setIntervalTimeNode[ setIntervalTimeNode.length -1 ]

const aboutFinalTime = '2018.2.10 12:00:00'

const countDown = (lang, finnalTime) => {
  let currentStep = 1
  const restTime = [0, 0, 0, 0]
  const duration = moment.duration(moment(finnalTime).subtract(2.5, 'hours').diff(moment.now()))
  const allTime = duration.asDays()
  const restD = Math.floor(allTime)
  const allHour = allTime % 1 * 24
  const restH = Math.floor(allHour)
  const allMinute = allHour % 1 * 60
  const restM = Math.floor(allMinute)
  const allSecounds = allMinute % 1 * 60
  const restS = Math.floor(allSecounds)
  const spanText = {
    en: {
      day: 'Days',
      hour: 'Hours',
      minute: 'Minutes',
      second: 'Seconds'
    },
    in: {
      day: 'दिन',
      hour: 'घंटे',
      minute: 'मिनट',
      second: 'सेकंड'
    }
  }
  const result = {
    restTime: [restD, restH, restM, restS],
    currentStep,
    spanText: JSON.stringify(spanText[lang])
  }
  return JSON.stringify(result)
}

const bannerImgPC = {
  en: '/act/assets/pc-banner-title-en.png',
  in: '/act/assets/pc-banner-title-hindi.png',
}

const bannerImgMobile = {
  en: '/act/assets/mobile-banner-title.png',
  in: '/act/assets/mobile-banner-title-hindi.png',
}

const langTransfor = {
  in: '/act/India/English',
  en: '/act/India',
}

const winners = {
  '#15sVinesAudition': [1,2,3,5],
  '#DuetAudition': [1,2,3,5,5],
  '#SpecialSkillsAudition': [1,2,3,5,7],
  '#DanceIndiaAudition': [1,2,3,5],
  '#SexyMovesAudition': [1,2,3,2,5],
}

const winnerNameList = [ 'liaohuanle', 'nic', 'hhah', 'liaohuanle', 'nic', 'hhah','liaohuanle', 'nic', 'hhah' ]

const aboutTagList = {
  en: ['#ShareAndWin ', 'Category', 'Prize', 'Rules', 'Celebration Party'],
  in: ['#ShareAndWin ', 'वर्ग', 'इनाम', 'नियम', 'उत्सव पार्टी']
}

const aboutSubList = {
  en: {
    cat: 'CATEGORIES',
    prize: 'PRIZE',
    prizeWin: 'Win₹10,000,000',
    seeyou: 'see you in Mumbai',
    comesoon: 'Coming soon...',
    youcanmeetsub: 'at Celebration Party',
    abouttab1Image: '/act/assets/about_tab_1.png',
    abouttab1Phone: '/act/assets/phone.png'
  },
  in: {
    cat: 'वर्ग',
    prize: 'इनाम',
    prizeWin: 'जीत₹10,000,000',
    seeyou: 'Mumbai मे मिलते हैं।',
    comesoon: 'जBदआरहाहै',
    youcanmeetsub: 'उत्सव पार्टी में',
    abouttab1Image: '/act/assets/about_tab_1_hindi.png',
    abouttab1Phone: '/act/assets/phone_hindi.png'
  }
}

const meetUserList = {
  en: [
    {
      icon: 'person_icon.png',
      title: 'Special Guest'
    },
    {
      icon: 'person_icon.png',
      title: 'Special Guest'
    },
    {
      icon: 'person_icon.png',
      title: 'Special Guest'
    },
    {
      icon: 'person_icon.png',
      title: 'Special Guest'
    },
    {
      icon: 'person_icon.png',
      title: 'Special Guest'
    },
  ],
  in: [
    {
      icon: 'person_icon.png',
      title: 'वशषे अ,त-थ'
    },
    {
      icon: 'person_icon.png',
      title: 'वशषे अ,त-थ'
    },
    {
      icon: 'person_icon.png',
      title: 'वशषे अ,त-थ'
    },
    {
      icon: 'person_icon.png',
      title: 'वशषे अ,त-थ'
    },
    {
      icon: 'person_icon.png',
      title: 'वशषे अ,त-थ'
    },
  ]
}

const navList = {
  en: {
    home: 'Home',
    about: 'About',
    media: 'Media',
    video: 'Video',
    youcanmeet: 'You Can Meet'
  },
  in: {
    home: 'होम',
    about: 'के बारे में',
    media: 'मीडिया',
    video: '1 मिलियन ऑडिशन प्रतिभा से मिलें',
    youcanmeet: 'तुम मिल सकते हो'
  }
}

const titleList = {
  en: {
    about: 'ABOUT',
    youcanmeet: 'YOU CAN MEET',
    outpartener: 'OUR PARTNERS',
    winner: 'WINNERS'
  },
  in: {
    about: 'के बारे में',
    youcanmeet: 'तुम मिल सकते हो',
    outpartener: 'हमारे सहयोगी',
    winner: 'वजेताओं'
  }
}

const rule = {
  en: {
    titleText: 'Winner selection is based on creator score which will be announced after the end of each round.',
    round1: 'Round 1',
    round1Text: 'Pick 1000 from all participants',
    round2: 'Round 2',
    round2Text: 'Pick Top 200 from 1000 Round 1 winners',
    subText: 'Also, winners will be invited to musical.ly Celebration Party',
    click: 'Click here for more details'
  },
  in: {
    titleText: 'विजेता चयन निर्माता स्कोर पर आधारित होता है जो प्रत्येक दौर के अंत के बाद घोषित किया जाएगा।',
    round1: 'राउंड 1',
    round1Text: 'सभी प्रतियोगियों मे से 1000 चुने जाएँगे।',
    round2: 'राउंड 2',
    round2Text: 'राउंड 1 के 1000 प्रतियोगियों मे से 200 चुने जाएँगे।',
    subText: 'इसके अलावा, विजेताओं को musical.ly Celebration Party के लिए आमंत्रित किया जाएगा',
    click: 'अधिक जानकारी के लिए यहां क्लिक करें'
  }
}

module.exports =  (lang) => (
  {
    winners,
    winnerNameList,
    aboutTagList: aboutTagList[lang],
    YTvideoinfo: JSON.stringify(YTvideoinfo),
    setIntervalTimeNode: `${countDown(lang, finnalTime)}`,
    aboutPanelTimeNode: `${countDown(lang, aboutFinalTime)}`,
    bannerImgPC: bannerImgPC[lang],
    bannerImgMobile: bannerImgMobile[lang],
    langTransfor: langTransfor[lang],
    meetUserList: meetUserList[lang],
    navList: navList[lang],
    rule: rule[lang],
    aboutSubList: aboutSubList[lang],
    titleList: JSON.stringify(titleList[lang])
  }
)

//hide winner
//<-<%- include('./component/winners/winners', { winners, winnerNameList, titleList, aboutSubList }) %>->