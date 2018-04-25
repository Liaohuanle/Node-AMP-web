
var mongoose = require('mongoose');
var url = "mongodb://127.0.0.1:27017/IPDataBase";

mongoose.connect(url);

let _DB = mongoose.connection

_DB.on("error", err => console.info('failed', err))

_DB.on("open", _ => console.info('success connected'))

const ipSchema = mongoose.Schema({
  range: Array,
  country: String,
  region: String,
  city: String,
  ll: Array,
  metro: Number,
  zip: Number
})

const IP = mongoose.model('IP', ipSchema)

const setTable = (data) => {
  const ipInfo = new IP(data)
  ipInfo.save(function(err, obj){
    !!!err && console.success('insert success')
  })
}

const queryAllIP = (obj) => {
 return new Promise((resolve, reject) => {
    IP.find(obj, function(err, result){
      if (err) {
        reject(err)
      }
      resolve(result)
    })
  })

}

module.exports =  {
  setTable,
  queryAllIP
}