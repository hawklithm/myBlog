/**
 * Created by bluehawky on 14-9-21.
 */

articleDetailDefine=require('../../sql/sequelize-mapping').articleDetailDefine;
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
selectArticleDetailByCondition=function(condition,resultSupport){
    articleDetailDefine.define.findAll(condition)
        .complete(function(err,resultDO){
            if (!!err) {
                console.log('An error occurred while searching for John:', err)
            } else if (!resultDO) {
                console.log('No user with the username "john-doe" has been found.')
            } else {
                var resultList=[];
                for (var index in resultDO){
                    resultList[index]=resultDO[index].dataValues;
                }
                resultSupport(resultList);
            }
        });
};

exports.selectArticleDetailByArticleCode=function(articleCode,resultSupport){
    selectArticleDetailByCondition({where:{article_code:articleCode},attributes:articleDetailDefine.attr},resultSupport);
};
exports.selectArticleDetailByUserId=function(userId,resultSupport){
    selectArticleDetailByCondition({where:{user_id:userId},attributes:articleDetailDefine.attr},resultSupport);
};
