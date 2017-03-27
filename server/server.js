/**
 * Created by dell on 2017/3/7.
 */
var express = require('express');
var app = express();
let path = require('path');
const ROOT_PATH = path.resolve(__dirname, '../');

app.use(express.static(ROOT_PATH + '/dist'));

app.get('*', function (req, res) {
  res.sendFile(ROOT_PATH+'/dist/index.html');
});

app.listen(3000);