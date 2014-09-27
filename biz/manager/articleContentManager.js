/**
 * Created by bluehawky on 14-9-27.
 */

var articleContentDAO=require('../dao/articleContentDAO').articleContentDAO;
var articleContentManagerService={};
articleContentManagerService.selectByCode=function(code,resultTrans){
    articleContentDAO.getArticleContentByCode(code,function(articleDetailDOs){
        resultTrans(articleDetailDOs);
    });
};
exports.articleContentManagerService=articleContentManagerService;