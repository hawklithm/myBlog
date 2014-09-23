/**
 * Created by bluehawky on 14-9-14.
 */
var articleDetailManager=require('../biz/manager/articleDetailManager').articleDetailManagerService;

function invoke(req,res,feature){
    articleDetailManager.selectByUser(125423,function(briefViewsVO){
        res.render('index',{
            articleBriefViewsVO:briefViewsVO
        });
    });

}
exports.invoke=invoke;
