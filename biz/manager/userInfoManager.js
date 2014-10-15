/**
 * Created by bluehawky on 14-10-11.
 */
var userInfoDao = require('../dao/userInfoDAO').userInfoDAO;
var errorPageRoute = require('../../routes/errorPageRoutes').invoke;

var userInfoManager={};
userInfoManager.createNewUser = function(nickName,passwdMD5,callback){
    userInfoDao.selectUserByNickname(nickName,function(userInfo){
        if (userInfo!=null){
            callback('dulplicate_user_error');
        }
    });
};
