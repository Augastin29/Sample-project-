require('./lib/mysqlCon.js');
const express = require('express');
console.log('app');

const body_parser = require('body-parser');
const path = require('path');
const app = express();



app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(body_parser.json({ type: "application/*+json" }));
app.use(express.static(path.join(__dirname, "pubic")));
app.set("views", path.join(__dirname, "views"));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Orgin', '*');
    res.setHeader('Access-Control-Allow-Methods', "get,post,put,patch,delete");
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content type');
    res.setHeader('Access-Control-Allow-crtential', true);
    res.setHeader('Content-Type', 'application/json');
    next()
});
const route = require('./src/router.js')
app.use('/', (req, res, next) => {
    next();
}, route)
module.exports = app