/**
 * Created by bluehawky on 14-9-27.
 */

var domain = require('../../config/fs/mogilefs-config').domains['articles'];
var logger = require('../../config/log4j/log4j-config').logger;

var articleContentDAO={};
articleContentDAO.getArticleContentByCode=function(articleCode, callback){
    domain.getDataFromMogile(articleCode,function(err,data){
        if (err){
            logger.error("read data from fs error"+err);
        }else{
            callback(data);
        }
    });
};
articleContentDAO.storeArticleContent=function(articleCode,className,msg, callback){
    domain.storeDataToMogile(articleCode,className,msg,function(err , length){
        if (err){
            logger.error("store data to fs error"+err);
        }else{
            callback(err,length);
        }
    });
};
exports.articleContentDAO = articleContentDAO;