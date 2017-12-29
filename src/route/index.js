const {
  winners,
  winnerNameList,
  meetUserList,
  videoid,
  setIntervalTimeNode,
  aboutTagList
} = require('../util/index')
module.exports = (app) => {
  app.get('/act/India', function(req, res) {
    res.render('../views/layout', {
      winners,
      videoid,
      setIntervalTimeNode,
      aboutTagList,
      winnerNameList,
      meetUserList
    })
  })
}