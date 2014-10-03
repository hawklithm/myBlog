/**
 * Created by bluehawky on 14-9-23.
 */
userDefine=require('../../config/sql/sequelize-mapping').userDefine;
selectByConditionBase=require('./daoBaseUtils').selectByConditionBase;
exports.saveUserInfo=function(userInfoDO){
    userDefine.define.create({
        user_id: userInfoDO.userId,
        nick_name: userInfoDO.nickname,
        option: userInfoDO.option,
        feature: userInfoDO.feature,
        gmt_create: new Date(),
        gmt_modified: new Date()
    });
};

var userInfoDAO={};
userInfoDAO.selectUserById=function(userId,resultSupport){
    selectByConditionBase(userDefine.define,{where:{user_id:userId},attributes:userDefine.attr},function(userInfoList){
        resultSupport(userInfoList[0]);
    });
};
userInfoDAO.selectUserByNickname=function(nickname,resultSupport){
    selectByConditionBase(userDefine.define,{where:{nick_name:nickname},attributes:userDefine.attr},function(userInfoList){
        resultSupport(userInfoList[0]);
    });
};
exports.userInfoDAO=userInfoDAO;