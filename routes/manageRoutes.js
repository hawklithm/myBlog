/**
 * Created by bluehawky on 14-10-9.
 */

var handle={};
var _managerBaseDir = "../views/manager/";
var _jadeBaseDir = "includes/backend/screen/";
handle["/"] = require(_managerBaseDir+"index").invoke;
handle["/index"] = require(_managerBaseDir+"index").invoke;
handle["/edit"] = require(_managerBaseDir+"articleEditor").invoke;


function route(pathname,request, response, feature) {
    console.log("manage: About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        feature.jadeDir = _jadeBaseDir;
        handle[pathname](request,response, feature);
    } else {
        console.log("No request handler found for " + pathname);
        response.end("404 Not found");
    }
}

exports.routes=route;
