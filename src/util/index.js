const isPro = false
const dir = isPro ? 'act/assets/' : '/assets/'
const moment = require('moment')

const setIntervalTimeNode = ['2018.1.1', '2018.1.4', '2018.1.7', '2018.1.10 07:00:00']

const countDown = () => {
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
  const result = {
    restTime: [restD, restH, restM, restS],
    currentStep 
  }
  return JSON.stringify(result)
}
module.exports =  {
  dir,
  winners: {
    '#15sVinesAudition': [1,2,3,5],
    '#SpecialSkillsAudition ': [1,2,3,5,5],
    '#IndianDancerAudition': [1,2,3,5,7],
    '#CreativeDuetAudition ': [1,2,3,5],
    '#SexyMomentAudition': [1,2,3,2,5],
  },
  winnerNameList: [ 'liaohuanle', 'nic', 'hhah', 'liaohuanle', 'nic', 'hhah','liaohuanle', 'nic', 'hhah' ],
  aboutTagList: ['ShareAndWin ', 'Category', 'Prize', 'Rules', 'musical.ly Fest'],
  videoid: 'ftfJRzW',
  setIntervalTimeNode: `${countDown()}`,
  meetUserList: [
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
}
