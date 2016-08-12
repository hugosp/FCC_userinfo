var express = require('express');
var app = express();
var info = {};

app.get('/',function(req, res) {
    info.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    info.os = req.headers['user-agent'];
    info.language =  req.headers['accept-language'];
    res.send(info);
});

app.listen(process.env.PORT || 8080);
