const usRoute = require('./views/us/route')
const indiaRouteList = require('./views/india/route')
const pako = require('pako');

const routerList = [
  usRoute,
  ...indiaRouteList
]

module.exports = (app) => {
  routerList
  .filter(item => item.isOnline)
  .map(item => {
    app.get(`/act/${item.path}`, (req, res) => {
      console.info(pako.deflate(res.render('./components/layout/oneMilloneLayout.ejs', item), { to: 'string' }))
      if(item.isApi){
        res.render(item.containerSrc)
      }else{
        res.render('./components/layout/oneMilloneLayout.ejs', item)
      }
    })
  })

  app.get('/*', function(req, res, next){
    res.status(404);
    res.render('./components/common/notfound.ejs', { url: req.url });
  });
}