/**
 * Created by bluehawky on 14-9-14.
 */

var handle={};
handle["/"] = require("../views/index").invoke;
handle["/article_show"] = require("../views/article/article_show").invoke;
handle["/article_editor"] = require("../views/article/article_editor").invoke;
handle["/login"] = require("../views/user/login").invoke;

var inputHandle={};
inputHandle["/article.input"] = require("../views/input/article_input").invoke;
inputHandle["/login.input"] = require("../views/user/login").inputInvoke;


function route(pathname,request, response, feature) {
    console.log("blog get: About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](request,response, feature);
    } else {
        console.log("No request handler found for " + pathname);
        response.end("404 Not found");
    }
}

function inputRoute(pathname,request, response, feature) {
    console.log("blog post: About to route a post request for " + pathname);
    if (typeof inputHandle[pathname] === 'function') {
        inputHandle[pathname](request,response, feature);
    } else {
        console.log("No request handler found for " + pathname);
        response.end("404 Not found");
    }
}

exports.routes=route;
exports.inputRoute=inputRoute;
