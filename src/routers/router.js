"use strict";
const logger = require('../util/logger')
const europeRouter = require('../views/europe/router');
const usRouter = require('../views/us/route');
const api = require('./rule-api');
const markdown = require('../views/markdown/route')
const brazil = require('../views/brazil/route');
const markDownAPI = require('./index')
const config = require("../_config");
const geoip = require('geoip-lite');

const routerList =[ usRouter, ...europeRouter, ...api, markDownAPI, markdown, brazil ]

const distuributePath = item => item.callback

module.exports = function (app) {
  routerList
  .filter( item => item.isOnline)
  .forEach(item => app[item.method || 'get']("/act/" + item.path, distuributePath(item)));

  app.get('/*', function (req, res, next) {
    logger.warn('get request 404 :', req.url)
    res.status(404);
    res.render(config.notFoundDir, { url: req.url });
  });
};