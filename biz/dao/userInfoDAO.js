/**
 * Created by bluehawky on 14-9-23.
 */
userDefine=require('../../config/sql/sequelize-mapping').userDefine;
selectByConditionBase=require('./daoBaseUtils').selectByConditionBase;

var userInfoDAO={};
userInfoDAO.selectUserById=function(userId,resultSupport){
    selectByConditionBase(userDefine.define,{where:{user_id:userId},attributes:userDefine.attr},function(err,userInfoList) {
        if (err) {
            if (err == 'no_data') {
                resultSupport(null,null);
            }else{
                resultSupport('select User by id Error');
            }
        } else {
            resultSupport(null,userInfoList[0]);
        }
    });
};
userInfoDAO.selectUserByNickname=function(nickname,resultSupport){
    selectByConditionBase(userDefine.define,{where:{nick_name:nickname},attributes:userDefine.attr},function(err,userInfoList){
        if (err){
            if(err == 'no_data'){
                resultSupport(null,null);
            }else{
                resultSupport('select user by nickname error');
            }
        }else {
            resultSupport(null,userInfoList[0]);
        }
    });
};
userInfoDAO.saveUserInfo=function(userInfoDO){
    userDefine.define.create({
//        user_id: userInfoDO.userId,
        nick_name: userInfoDO.username,
        option: userInfoDO.option,
        feature: userInfoDO.feature,
        gmt_create: new Date(),
        gmt_modified: new Date(),
        password: userInfoDO.password
    });
};

exports.userInfoDAO=userInfoDAO;