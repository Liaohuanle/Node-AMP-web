const moment = require('moment')

const setIntervalTimeNode = ['2018.1.10', '2018.1.4', '2018.1.7', '2018.1.15 00:00:00']

const YTvideoinfo = {
  url: 'https://www.youtube.com/embed/Yy8SpbrK_jc',
  proportion: 315 / 560
}

const countDown = (lang) => {
  let currentStep = 1
  const restTime = [0, 0, 0, 0]
  const finnalTime = setIntervalTimeNode && setIntervalTimeNode[ setIntervalTimeNode.length -1 ]
  const duration = moment.duration(moment(finnalTime).diff(moment.now()))
  const allTime = duration.asDays()
  const restD = Math.floor(allTime)
  const allHour = allTime % 1 * 24
  const restH = Math.floor(allHour)
  const allMinute = allHour % 1 * 60
  const restM = Math.floor(allMinute)
  const allSecounds = allMinute % 1 * 60
  const restS = Math.floor(allSecounds)
  setIntervalTimeNode && setIntervalTimeNode.forEach((item, index ) => {
   if(moment().isSame(item, 'day')){
    currentStep = index + 1
   } 
  }) 
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
    currentStep: 0,
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
  en: '/act/India/Hindi',
  in: '/act/India',
}

const winners = {
  '#15s Vines Audition': [1,2,3,5],
  '#Duet Audition': [1,2,3,5,5],
  '#Special Skills Audition': [1,2,3,5,7],
  '#Dance India Audition ': [1,2,3,5],
  '#Sexy Moves Audition': [1,2,3,2,5],
}

const winnerNameList = [ 'liaohuanle', 'nic', 'hhah', 'liaohuanle', 'nic', 'hhah','liaohuanle', 'nic', 'hhah' ]

const aboutTagList = {
  en: ['ShareAndWin ', 'Category', 'Prize', 'Rules', 'Celebration Party'],
  in: ['ShareAndWin ', 'वर्ग', 'इनाम', 'नियम', 'उत्सव पार्टी']
}

const meetUserList = [
  {
    icon: 'person_icon.png',
    title: 'Mysterious surprise'
  },
  {
    icon: 'person_icon.png',
    title: 'Mysterious surprise'
  },
  {
    icon: 'person_icon.png',
    title: 'Mysterious surprise'
  },
  {
    icon: 'person_icon.png',
    title: 'Mysterious surprise'
  },
  {
    icon: 'person_icon.png',
    title: 'Mysterious surprise'
  },
]

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
    winner: 'चौंका 1 विजेताओं'
  }
}

module.exports =  (lang) => (
  {
    winners,
    winnerNameList,
    aboutTagList: aboutTagList[lang],
    YTvideoinfo: JSON.stringify(YTvideoinfo),
    setIntervalTimeNode: `${countDown(lang)}`,
    bannerImgPC: bannerImgPC[lang],
    bannerImgMobile: bannerImgMobile[lang],
    langTransfor: langTransfor[lang],
    meetUserList,
    titleList: JSON.stringify(titleList[lang])
  }
)
