/**
 * Created by bluehawky on 14-10-5.
 */

function invoke(req,res,feature) {
    res.render('screen/login', {
        errorCode : null
    });

}
function inputInvoke(req,res,feature){
    var userId = req.body.username;
    var passwdMD5 = req.body.password;
    console.log("body",JSON.stringify(req.body));
    console.log("userId: "+ userId);
    console.log("passwdMD5: "+ passwdMD5);
    var clientIp=getClientIp(req);
    if (clientIp == '127.0.0.1'){
        console.log('ok');
    }
//    console.log("client ip: "+ clientIp);
}
function getClientIp(req) {
    var ipAddress;
    var forwardedIpsStr = req.header('x-forwarded-for');
    if (forwardedIpsStr) {
        var forwardedIps = forwardedIpsStr.split(',');
        ipAddress = forwardedIps[0];
    }
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }
    return ipAddress;
}
exports.inputInvoke=inputInvoke;
exports.invoke=invoke;