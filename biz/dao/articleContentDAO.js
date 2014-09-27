/**
 * Created by bluehawky on 14-9-27.
 */
var articleContentDAO={};
articleContentDAO.getArticleContentByCode=function(articleCode,resultSupport){
    resultSupport("#这是h1\n##这是h2\n正文");
};
exports.articleContentDAO=articleContentDAO;