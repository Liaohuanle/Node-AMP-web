var moment = require('moment') 
var winnerListUs = require('../views/us/component/winnerData/index')

var countDown = function(lang, finnalTime){
  let currentStep = 3
  var restTime = [0, 0, 0, 0]
  var duration = moment.duration(moment(finnalTime).subtract('hours').diff(moment.now()))
  var allTime = duration.asDays()
  var restD = Math.floor(allTime)
  var allHour = allTime % 1 * 24
  var restH = Math.floor(allHour)
  var allMinute = allHour % 1 * 60
  var restM = Math.floor(allMinute)
  var allSecounds = allMinute % 1 * 60
  var restS = Math.floor(allSecounds)
  var spanText = {
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
  var result = {
    restTime: [restD, restH, restM, restS],
    currentStep,
    spanText: JSON.stringify(spanText[lang])
  }
  return result
}

var europeLanglist = {
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

var solveWinnerData = function(source, length){
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