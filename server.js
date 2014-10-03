// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    = 	process.env.PORT || 8080;
var routes  = require('./routes/blogRoutes').routes;
var path    = require('path');
var url     = require('url');
var logger  = require('./config/log4j/log4j-config');
var querystring = require('querystring');





//设置Jade相关环境变量
app.set('views', path.join(__dirname, './views/jade'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/views/resource'));
logger.use(app);
// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
//app.all("*", function(request, response, next) {
//    response.writeHead(200, { "Content-Type": "text/plain" });
//    console.log("enter");
//    next();
//});
app.route('/*.input').post(function(req,res){
    var postData = '';
    req.setEncoding('utf-8');
    req.addListener('data',function(postDataChunk){
        postData += postDataChunk;
    }).addListener('end',function(){
        info = querystring.parse(postData);
        console.log(info);
    });
});
app.route('/*').get(function(req, res) {
    console.log("/");
    var pathname = url.parse(req.url).pathname;
    console.log("url is "+ pathname);
    routes(pathname,req,res,null);
});

//app.all("*", function(request, response) {
//    response.end("404");
//    console.log(request.url+"404");
//});

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
