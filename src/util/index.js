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
  let currentStep = 2
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
    <p> चरण 5. आपको 15 दिनों के भीतर अपने पेपैल खाते में संबंधित निकासी राशि प्राप्त होगी।</p>
  `
}

module.exports =  (lang) => (
  {
    winners,
    prizeArticle: prizeArticle[lang],
    winnerNameList: winnerList.part1,
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
