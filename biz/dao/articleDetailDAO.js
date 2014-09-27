/**
 * Created by bluehawky on 14-9-21.
 */

articleDetailDefine=require('../../sql/sequelize-mapping').articleDetailDefine;
selectByConditionBase=require('./daoBaseUtils').selectByConditionBase;
exports.saveArticleDetail=function(articleDetailDO){
    articleDetailDefine.define.create({
        article_code: articleDetailDO.articleCode,
        article_file_url: articleDetailDO.articleFileUrl,
        type: articleDetailDO.type,
        status:articleDetailDO.status,
        title: articleDetailDO.title,
        brief_view: articleDetailDO.briefView,
        option: articleDetailDO.option,
        gmt_create: new Date(),
        gmt_modified: new Date(),
        user_id: articleDetailDO.userId
    });
};


exports.selectArticleDetailByArticleCode=function(articleCode,resultSupport){
    selectByConditionBase(articleDetailDefine.define,{where:{article_code:articleCode},attributes:articleDetailDefine.attr},resultSupport);
};
exports.selectArticleDetailByUserId=function(userId,resultSupport){
    selectByConditionBase(articleDetailDefine.define,{where:{user_id:userId},attributes:articleDetailDefine.attr},resultSupport);
};
