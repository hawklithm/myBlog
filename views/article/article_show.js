/**
 * Created by bluehawky on 14-9-27.
 */
var md      = require('markdown').markdown;
var articleContentManagerService    = require('../../biz/manager/articleContentManager').articleContentManagerService;

function invoke(req,res,feature) {
    var articleCode = req.query.code;
    if (articleCode == null) {
        res.end("no article");
    } else {
        articleContentManagerService.selectArticleByCode(articleCode, function (articleContentDO) {
            console.log(md.toHTML(articleContentDO));
            res.render('screen/article_show', {
                detail: md.toHTML(articleContentDO.content)
            });
        });
    }

}
exports.invoke=invoke;
