"use strict";
const path = require('path');
const indCountry = 'india';
const usCountry = "us";
const appId = {
    [indCountry]: indCountry,
    [usCountry]: usCountry
};
const layoutDir = './components/layout/oneMilloneLayout';
const notFoundDir = './components/common/notfound';
const rootDir = path.join(__dirname + '/views');
module.exports = {
    rootDir,
    appId,
    layoutDir,
    notFoundDir
};
