/**
 * Created by bluehawky on 14-9-27.
 */

var articleContentDAO=require('../dao/articleContentDAO').articleContentDAO;
var articleDetailDAO = require('../dao/articleDetailDAO');
var md5 = require('MD5');

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
    if (code==null){
        code = md5(userId+title+type+data);
    }
    articleContentDAO.storeArticleContent(code,'level1',data,function(err,length){
        if (err){
            console.log('something error where save the data to mogilefs');
        }else {
            if (type == null) {
                type = 0;
            }
            articleDetailDAO.saveArticleDetail({
                userId: userId,
                articleCode: code,
                type: type,
                title: title,
                briefView: getArticleBriefView(data)
            });
        }
        resultTrans(err, code);
    })
};
exports.articleContentManagerService=articleContentManagerService;