/**
 * Created by bluehawky on 14-9-14.
 */

var handle={};
handle["/"]=require("../views/index").invoke;
handle["/article_show"]=require("../views/article/article_show").invoke;


function route(pathname,request, response, feature) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](request,response, feature);
    } else {
        console.log("No request handler found for " + pathname);
        response.write("404 Not found");
    }
}

exports.routes=route;
