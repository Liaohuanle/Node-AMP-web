const nodeMailer = require('nodemailer')
const xoauth2 = require('xoauth2')

const host = 'smtp.qq.com'

const mailTransport = nodeMailer.createTransport({
  host,
  secureConnection: true,
  port: 25,
  auth: {
    type: "OAuth2",
    xoauth2: xoauth2.createXOAuth2Generator({
      user: '1192454566@qq.com'
  })
  }
})

const mailOption = {
  from: 'tea.liao@qq.com',
  to: 'tianli.zhao@bytedance.com',
  subject: 'test',
  html: '<h1>test</h1>'
}

mailTransport.sendMail(mailOption,(err, op) => {
  console.info(err, op)
  mailTransport.close()
})

// module.exports = (params) => {
//   console.info(params)

// }