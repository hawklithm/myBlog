/**
 * Created by bluehawky on 14-10-10.
 */

var articleContentManagerService    = require('../../biz/manager/articleContentManager').articleContentManagerService;

function invoke(req,res,feature) {
    var articleCode = req.query.code;
    if (articleCode == null) {
        res.render(feature.jadeDir+"articleEditor");
    } else {
        articleContentManagerService.selectArticleByCode(articleCode, function (articleContentDO) {
            res.render(feature.jadeDir+"articleEditor",{
                articleCode:articleCode,
                detail: articleContentDO.content,
                title : articleContentDO.info.title
            });
        });
    }

}
exports.invoke=invoke;
