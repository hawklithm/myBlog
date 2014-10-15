/**
 * Created by bluehawky on 14-10-11.
 */

var userInfoDao = require('../../biz/dao/userInfoDAO').userInfoDAO;
function invoke(req,res,feature) {
    res.render('screen/register', {
        errorCode : feature.error_code
    });

}
function inputInvoke(req,res,feature){
    var username = req.body.username;
    var passwdMD5 = req.body.password;
    console.log("body",JSON.stringify(req.body));
    console.log("user name: "+ username);
    console.log("passwdMD5: "+ passwdMD5);
    userInfoDao.selectUserByNickname(username,function(err,userInfo){
        if (err){
            console.log('select user error when check user exist');
        }else if (userInfo==null){
            userInfoDao.saveUserInfo({username:username,option:0,feature:""})
        }else{
            console.log('username has exist');
        }
    });
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
