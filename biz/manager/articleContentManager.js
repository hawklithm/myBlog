/**
 * Created by bluehawky on 14-9-27.
 */

var articleContentDAO=require('../dao/articleContentDAO').articleContentDAO;
var articleDetailDAO = require('../dao/articleDetailDAO');

var articleContentManagerService={};

var briefViewLength = 30;

getArticleBriefView = function (content){
    if (content.length > briefViewLength){
        return content.substring(0,briefViewLength);
    }else {
        return content;
    }
};

articleContentManagerService.selectArticleByCode=function(code,resultTrans){
    articleContentDAO.getArticleContentByCode(code,function(data){
        articleDetailDAO.selectArticleDetailByArticleCode(code,function(articleDetailDO){
            resultTrans({
                content:data,
                info:articleDetailDO
            });
        });
    });
};
articleContentManagerService.saveArticle = function(userId,title,code,type,data,resultTrans){
    articleContentDAO.storeArticleContent(code,'level1',data,function(length){
        articleDetailDAO.saveArticleDetail({
            userId:userId,
            articleCode:code,
            type:type,
            title:title,
            briefView : getArticleBriefView(data)
        });
    })
};
exports.articleContentManagerService=articleContentManagerService;