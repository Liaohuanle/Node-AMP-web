const indCountry = 'india';
const usCountry = "us"
const appId = {
  [indCountry]: indCountry,
  [usCountry]: usCountry
}
module.exports = {
  appId,
  [`${usCountry}-less`]: {
    from: './us-views/main.less',
    dest: './assets/css/us/main.css',
    ejs: './assets/css/us/main.ejs'
  },
  [`${indCountry}-less`]: {
    from: './india-views/main.less',
    dest: './assets/css/india/main.css'
  },
}