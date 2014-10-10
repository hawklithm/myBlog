/**
 * Created by bluehawky on 14-10-5.
 */
var articleContentManagerService = require('../../biz/manager/articleContentManager').articleContentManagerService;

function invoke(req,res,feature) {
    req.setEncoding('utf-8');
    console.log(JSON.stringify(req.body));
    console.log(req.body.title);
    console.log(req.body.detail);
    var title = req.body.title;
    var detail = req.body.content;
    var code = req.body.code;
    var type = req.body.type;
    articleContentManagerService.saveArticle(125125,title,code,type,detail,function(err,articleCode){
        if (err){
        }else{
            res.writeHead(302, {
                'Location': '/blog/article_show?code='+articleCode
            });
            res.end();
        }
    });
}
exports.invoke=invoke;
