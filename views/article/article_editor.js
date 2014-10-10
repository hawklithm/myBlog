/**
 * Created by bluehawky on 14-10-3.
 */
var articleContentManagerService    = require('../../biz/manager/articleContentManager').articleContentManagerService;

function invoke(req,res,feature) {
    var articleCode = req.query.code;
    if (articleCode == null) {
        res.render("screen/article_editor");
    } else {
        articleContentManagerService.selectArticleByCode(articleCode, function (articleContentDO) {
            res.render('screen/article_editor', {
                detail: articleContentDO.content,
                title : articleContentDO.info.title
            });
        });
    }

}
exports.invoke=invoke;
