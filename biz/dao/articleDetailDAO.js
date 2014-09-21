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
        gmt_modified: new Date()
    });
};
exports.selectArticleDetailByArticleCode=function(articleCode,resultSupport){
    articleDetailDefine.define.find({where:{article_code:articleCode},attributes:articleDetailDefine.attr})
        .complete(function(err,articleDetailDO){
            if (!!err) {
                console.log('An error occurred while searching for John:', err)
            } else if (!articleDetailDO) {
                console.log('No user with the username "john-doe" has been found.')
            } else {
                var data=articleDetailDO.dataValues;
//                console.log(JSON.stringify(data));
//                console.log(data);
//                console.log('title is ' + data.title );
//                console.log('view is ' + data.briefView );
//                console.log('article code is ', data.articleCode );
                resultSupport(data);
            }
        });
};