const path = require('path');
const indCountry = 'india';
const usCountry = "us"
const appId = {
  [indCountry]: indCountry,
  [usCountry]: usCountry
}
const rootDir = path.join(__dirname + '/views')
module.exports = {
  rootDir,
  appId
}