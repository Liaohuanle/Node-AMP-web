"use strict";

var express = require("express");
var router_1 = require("./router");
var requestIp = require('request-ip');

const logger = require('./util/logger')

var app = express();

app.use(requestIp.mw());
app.use('/act/assets/', express.static(__dirname + '/assets/'));
app.set('view engine', 'ejs');

router_1(app);

app.listen(process.env.PORT || 3000, function () {
  logger.success('**** node server for you ,lunch success !!! ****')
});
//# sourceMappingURL=index.js.map