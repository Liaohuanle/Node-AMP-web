const winnerList = require('./winner-list')

const moment = require('moment')

const setIntervalTimeNode = ['2018.1.10 00:00:00', '2018.1.18 00:00:00', '2018.1.17 00:00:00', '2018.02.05 00:00:00']

const YTvideoinfo = {
  url: 'https://www.youtube.com/embed/ezSlUSmXecM?rel=0&amp;controls=0&amp;showinfo=0',
  proportion: 315 / 560
}

const finnalTime = setIntervalTimeNode && setIntervalTimeNode[ setIntervalTimeNode.length -1 ]

const aboutFinalTime = '2018.2.10 12:00:00'

const countDown = (lang, finnalTime) => {
  let currentStep = 3
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

const aboutTagList = {
  en: ['#ShareAndWin ', 'Category', 'Rules', 'Celebration Party'],
  in: ['#ShareAndWin ', 'वर्ग', 'इनाम', 'उत्सव पार्टी']
}

const aboutUsTagList = ['#ShareAndWin ', 'Category', 'Prize', 'Rules']

const aboutSubList = {
  en: {
    cat: 'CATEGORIES',
    prizeWin: 'Win₹10,000,000',
    seeyou: ' <p>Event Address: Westin Garden City Mumbai</p> <p>Time: Start from 11:30 AM, 10th February 2018</p>',
    comesoon: 'Coming soon...',
    youcanmeetsub: '#1Millionmuser',
    abouttab1Image: '/act/assets/about_tab_1.png',
    abouttab1Phone: '/act/assets/phone.png'
  },
  in: {
    cat: 'वर्ग',
    prizeWin: 'जीत₹10,000,000',
    seeyou: '<p>Event Address: Westin Garden City Mumbai</p> <p>Time: Start from 11:30 AM, 10th February 2018</p>',
    comesoon: 'जBदआरहाहै',
    youcanmeetsub: '#1Millionmuser',
    abouttab1Image: '/act/assets/about_tab_1_hindi.png',
    abouttab1Phone: '/act/assets/phone_hindi.png'
  }
}

const meetUserList = {
  en: [
    {
      icon: '/million/nagmaa.jpg',
      title: '@nagmaa'
    },
    {
      icon: '/million/heer.naik.jpg',
      title: '@heer.naik'
    },
    {
      icon: '/million/aashikabhatia.jpg',
      title: '@aashikabhatia'
    }
  ],
  in: [
    {
      icon: '/million/nagmaa.jpg',
      title: '@nagmaa'
    },
    {
      icon: '/million/heer.naik.jpg',
      title: '@heer.naik'
    },
    {
      icon: '/million/aashikabhatia.jpg',
      title: '@aashikabhatia'
    }
  ]
}

const navList = {
  en: {
    home: 'Home',
    winners: 'Winners',
    about: 'About',
    media: 'Media',
    video: 'Video',
    youcanmeet: 'You Can Meet'
  },
  in: {
    home: 'होम',
    winners: 'विजेताओं',
    about: 'के बारे में',
    media: 'मीडिया',
    video: '1 मिलियन ऑडिशन प्रतिभा से मिलें',
    youcanmeet: 'तुम मिल सकते हो'
  }
}

const usBannerImgMobile = '//musically.muscdn.com/ops/upload/default/2018/03/23/11/0581274d-a564-4ed2-a270-23528d362c4a.png'

const usBannerImgPC = '//musically.muscdn.com/ops/upload/default/2018/03/23/11/cc9517a0-d06e-4df6-81b1-b91ab040247d.png'

const usNavList = {
  home: 'Home',
  about: 'About',
  winners: 'Winners',
  media: 'Media',
  meetGreet: 'Meet & Greet'
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

const prizeArticle = {
  en: `
    <p>Round 1 winners can receive daily Diamonds according to previous day video performance on participating 1 Million Audition Round 2.  </p>
    <p>On 7th, we will issue the Final Diamond Prize for winners which are based on the general performance during 1 Million Audition. </p>
    
    <p>How can I withdraw my Diamonds? </p>
    <p>Step 1. Download Live.ly App (Android or IOS): Download and log in with your musical.ly account. </p>
    <p>Step 2. Check your balance: Go to Profile page, press “My Wallet”, and then “My Rewards” and check your Diamonds Balance. </p>
    <p>Step 3. Withdraw Diamonds: Agreed cash-out instruction and link your Paypal account with musical.ly account </p>
    <p>  Step 4. Withdraw Successfully! </p>
    <p>Step 5. You will receive the respective withdraw amount in your Paypal account within 15 days. </p>
  `,
  in: `
    <p>एक  मिलियन ऑडिशन के प्रथम चरण के विजेता जो दूसरे चरण में प्रवेश करेंगे उन्हें हर दिन अपने पिछले दिन के वीडियो प्रदर्शन के अनुसार हीरे प्राप्त होंगे. </p>
    <p>7 फरवरी को, हम 1 लाख ऑडिशन के दौरान सामान्य प्रदर्शन पर प्रत्येक विजेता के लिए अंतिम डायमंड पुरस्कार जारी करेंगे।</p>
    
    <p>चरण 1। लाइवली ऐप (एंड्रॉइड या आईओएस) डाउनलोड करें. अपने म्युज़िकली खाते से डाउनलोड और लॉगिन करें।</p>
    <p>चरण 2. अपनी बैलेंस जांचें: प्रोफ़ाइल पृष्ठ पर जाएं, "मेरा वॉलेट" बटन दबाएं, और फिर "मेरा पुरस्कार" दबाएं और अपने हीरे के शेष राशि की जांच करें।</p>
    <p>चरण 3. हीरे की निकासी : नकद आहरण की अनुज्ञा दें और म्युज़िकली खाते के साथ अपने पेपैल खाते को लिंक करें</p>
    <p>चरण 4. सफलतापूर्वक वापस आएं. </p>
    <p>चरण 5. आपको 15 दिनों के भीतर अपने पेपैल खाते में संबंधित निकासी राशि प्राप्त होगी।</p>
  `
}

const  topFiveWinners = [
  {
    name: 'mr_kalakaar',
    dimonds: 83644
  },
  {
    name: 'itx_kunwar',
    dimonds: 82487
  },
  {
    name: 'raksha.m.s',
    dimonds: 82168
  },
  {
    name: 'anamdarbar1',
    dimonds: 81847
  },
  {
    name: 'sameeksha_sud',
    dimonds: 81730
  }
]

const usTopFiveWinners = new Array(18).fill({
  name: 'undifined',
  dimonds: 0.00
})

const india = (lang) => ({
  title: 'Musical.ly - India',
  noBannerVideo: false,
  bannerBgUrl: '//mpaw-sinc1.muscdn.com/ops/upload/default/2018/01/10/13/050e882e-f102-4862-80ab-ae933d5ae50d.png',
  cssUrl: `/act/assets/css/india/main.css`,
  bannerVideoUrl: '//mpaw-sinc1.muscdn.com/ops/upload/default/2018/01/10/13/3ff7bedf-db8e-4b13-875a-f210cf205c55.mp4',
  bannerVideoPoster: '/act/assets/poster.jpeg',
  topFiveWinners,
  prizeArticle: prizeArticle[lang],
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
  winnerList: winnerList,
  titleList: JSON.stringify(titleList[lang])
})

let usSetIntervalTimeNode = JSON.parse(countDown('en', '2018.3.30'))
usSetIntervalTimeNode['currentStep'] = 0
const us = (lang) => ({
  title: 'Musical.ly - Unitd State',
  noBannerVideo: false,
  bannerBgUrl: '//musically.muscdn.com/ops/upload/default/2018/03/23/10/4b6b5a27-bb40-4b1c-8ef5-6dc9aed867c2.gif',
  cssUrl: `../assets/css/us/main`,
  bannerVideoUrl: '//musically.muscdn.com/ops/upload/musical/2018/03/23/10/4108dd1b-cfcf-42ff-a920-bfd28a7170b1.mp4',
  bannerVideoPoster: '/act/assets/bg-banner-pc-us.jpeg',
  topFiveWinners: usTopFiveWinners,
  prizeArticle: prizeArticle[lang],
  aboutTagList: aboutUsTagList,
  YTvideoinfo: JSON.stringify(YTvideoinfo),
  setIntervalTimeNode: `${JSON.stringify(usSetIntervalTimeNode)}`,
  aboutPanelTimeNode: `${countDown(lang, aboutFinalTime)}`,
  bannerImgPC: usBannerImgPC,
  bannerImgMobile: usBannerImgMobile,
  langTransfor: langTransfor[lang],
  meetUserList: meetUserList[lang],
  navList: usNavList,
  rule: rule[lang],
  aboutSubList: aboutSubList[lang],
  winnerList: winnerList,
  titleList: JSON.stringify(titleList[lang])
})

module.exports =  (lang) => {
  return {
    india: india(lang),
    us: us(lang)
  }
}