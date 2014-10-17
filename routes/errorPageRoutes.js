/**
 * Created by bluehawky on 14-10-11.
 */

var error_constants={LOGIN_ERROR:'login_error',ERROR:'error'};

var routeList={};
routeList['login_error'] = require('../views/user/login').invoke;
//routeList['error'] = require().invoke;

exports.invoke=function(pathName,req,res,feature){
    if (typeof routeList[feature.error_code] === 'function'){
        routeList[feature.error_code](req,res,feature);
    }else{
        if (feature==null){
            feature={};
        }
        feature.error_code='no_page_error';
        console.log("no page error");
//        routeList['error'](req,res,feature);
    }
};
exports.error_constants = error_constants;
