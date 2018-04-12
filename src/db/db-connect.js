var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";
const dbName = 'ipUser'

let _DB = MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  _DB = db.db(dbName);
});

const setTable = (tName) => (dataObj) => {
  if(!!_DB){
    const _T = _DB.collection(tName)
    return _T.insert(dataObj, (err, result)=>{
        if (err) throw err;
        console.info('data set database success')
        _DB && _DB.close && _DB.close();
    })
  }
}
 
module.exports = setTable