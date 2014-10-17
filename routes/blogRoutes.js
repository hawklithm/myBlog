/**
 * Created by bluehawky on 14-9-14.
 */

var handle={};
handle["/"] = require("../views/index").invoke;
handle["/article_show"] = require("../views/article/article_show").invoke;
handle["/article_editor"] = require("../views/article/article_editor").invoke;
handle["/login"] = require("../views/user/login").invoke;
handle["/newUser"] = require("../views/user/newUser").invoke;

var inputHandle={};
inputHandle["/article.input"] = require("../views/input/article_input").invoke;
inputHandle["/login.input"] = require("../views/user/login").inputInvoke;
inputHandle["/regist.input"] = require("../views/user/newUser").inputInvoke;


var errorPageRoute = require("./errorPageRoutes").invoke;
var errorConstants = require("./errorPageRoutes").error_constants;


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
    if(pathname=='/regist.input'){
        console.log("user regist start");
        inputHandle['/regist.input'](request,response,feature);
    }else {
        var userId = request.session.user_id;
        if (userId == null) {
            if (feature == null) {
                feature = {};
            }
            feature.error_code = errorConstants.LOGIN_ERROR;
            errorPageRoute(pathname, request, response, feature);
        }else
        if (typeof inputHandle[pathname] === 'function') {
            inputHandle[pathname](request, response, feature);
        } else {
            console.log("No request handler found for " + pathname);
            response.end("404 Not found");
        }
    }
}

exports.routes=route;
exports.inputRoute=inputRoute;
