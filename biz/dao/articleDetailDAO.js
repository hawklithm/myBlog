/**
 * Created by bluehawky on 14-9-21.
 */

articleDetailDefine=require('../../config/sql/sequelize-mapping').articleDetailDefine;
selectByConditionBase=require('./daoBaseUtils').selectByConditionBase;
exports.saveArticleDetail=function(articleDetailDO){
    articleDetailDefine.define.create({
        article_code: articleDetailDO.articleCode,
        article_file_url: null,
        type: articleDetailDO.type,
        status:1,
        title: articleDetailDO.title,
        brief_view: articleDetailDO.briefView,
        option: 0,
        gmt_create: new Date(),
        gmt_modified: new Date(),
        user_id: articleDetailDO.userId
    });
};


exports.selectArticleDetailByArticleCode=function(articleCode,resultSupport){
    selectByConditionBase(articleDetailDefine.define,{where:{article_code:articleCode},attributes:articleDetailDefine.attr},function(err,resultList){
        if (err) {
            if (err == 'no_data') {
                resultSupport(null,null);
            }else{
                resultSupport('select article by code Error');
            }
        } else {
            resultSupport(null,resultList[0]);
        }
        resultSupport(resultList[0]);
    });
};
exports.selectArticleDetailByUserId=function(userId,resultSupport){
    selectByConditionBase(articleDetailDefine.define,{where:{user_id:userId},attributes:articleDetailDefine.attr},function(err,resultList){
        if (err) {
            if (err == 'no_data') {
                resultSupport(null,null);
            }else{
                resultSupport('select article by user_id Error');
            }
        } else {
            resultSupport(null,userInfoList);
        }
    });

};
