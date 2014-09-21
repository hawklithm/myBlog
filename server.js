// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    = 	process.env.PORT || 8080;
var routes  = require('./routes/blogRoutes').routes;
var path    = require('path');
var url    = require('url');





//设置Jade相关环境变量
app.set('views', path.join(__dirname, './views/jade'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/views/resource'));
// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
//app.all("*", function(request, response, next) {
//    response.writeHead(200, { "Content-Type": "text/plain" });
//    console.log("enter");
//    next();
//});
app.route('/').get(function(req, res) {
    console.log("/");
    var pathname = url.parse(req.url).pathname;
    console.log("url is "+ pathname);
    routes(pathname,req,res,null);
});

app.all("*", function(request, response) {
    response.end("404");
    console.log(request.url+"404");
});

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);