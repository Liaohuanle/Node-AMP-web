const { winners, winnerNameList, meetUserList, videoid, setIntervalTimeNode, aboutTagList  } = require('../util/index')
module.exports = (app) => {
  app.get('/', function(req, res) {
    res.render('../views/layout', { winners, videoid, setIntervalTimeNode, aboutTagList, winnerNameList, meetUserList })
  })
}