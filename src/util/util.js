const moment = require('moment') 
const winnerListUs = require('../views/us/component/winnerData/index')

const countDown = (lang, finnalTime) => {
  let currentStep = 3
  const restTime = [0, 0, 0, 0]
  const duration = moment.duration(moment(finnalTime).subtract('hours').diff(moment.now()))
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
    },
    spainish: {
      day: 'Días',
      hour: 'Horas',
      minute: 'Minutos',
      second: 'Segundos'
    }
  }
  const result = {
    restTime: [restD, restH, restM, restS],
    currentStep,
    spanText: JSON.stringify(spanText[lang])
  }
  return result
}

const europeLanglist = {
  en: {
    title: 'English',
    link: '/England'
  },
  german: {
    title: 'German',
    link: '/German'
  },
  spain:{
    title: 'Spanish',
    link: '/Spain'
  },
  french: {
    title: 'French',
    link: '/French'
  },
  italy: {
    title: 'Italian',
    link: '/Italy'
  },
  poland: {
    title: 'Polish',
    link: '/Poland'
  }
}

const solveWinnerData = function(source, length){
  let result = []
  switch (source) {
    case 'us':
    result =  winnerListUs.slice(0, length)
      break;
  
    default:
      break;
  }
  return result
}

module.exports = {
  countDown,
  europeLanglist,
  solveWinnerData
}