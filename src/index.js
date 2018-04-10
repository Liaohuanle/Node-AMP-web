"use strict";
const express = require("express");
const router_1 = require("./router");
const requestIp = require('request-ip');

const app = express();

app.use(requestIp.mw())
app.use('/act/assets/', express.static(__dirname + '/assets/'));
app.set('view engine', 'ejs');

router_1(app);
app.listen(8009, '127.0.0.1');
