// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    = 	process.env.PORT || 8080;
var blogRoute = require('./routes/blogRoutes');
var routes  = blogRoute.routes;
var manageRoute = require('./routes/manageRoutes');
var inputRoutes = blogRoute.inputRoute;
var path    = require('path');
var url     = require('url');
var logger  = require('./config/log4j/log4j-config');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');





//设置Jade相关环境变量
app.set('views', path.join(__dirname, './views/jade'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/views/resource/img/favicon.png'));
app.use(express.static(__dirname + '/views/resource'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({secret: 'woshipmx1991@sina.comheheheh'}));

logger.use(app);


// ROUTES
// ==============================================


var routeList={'blog':routes,'manage':manageRoute.routes};


// sample route with a route the way we're used to seeing it
//app.all("*", function(request, response, next) {
//    response.writeHead(200, { "Content-Type": "text/plain" });
//    console.log("enter");
//    next();
//});
app.route('/*.input').post(function(req,res){
    console.log("/*.input");
    var pathname = url.parse(req.url).pathname;
    console.log("url is "+ pathname);
    var feature = {};
    inputRoutes(pathname,req,res,feature);
});
app.route('/:route/:subpage').get(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("url is "+ pathname);
    var mainpage = req.params.route;
    var subpage = req.params.subpage;
    console.log("mainpage: "+mainpage);
    console.log("subpage: "+subpage);
    if (typeof routeList[mainpage] === 'function') {
        var feature = {};
        routeList[mainpage]('/'+subpage,req,res, feature);
    } else {
        console.log("No request handler found for " + pathname);
        res.end("404 Not found");
    }

//    routes(pathname,req,res,null);
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
