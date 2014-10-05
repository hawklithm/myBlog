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
}
exports.inputInvoke=inputInvoke;
exports.invoke=invoke;