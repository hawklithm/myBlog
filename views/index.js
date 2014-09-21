/**
 * Created by bluehawky on 14-9-14.
 */
var selectArticleDetailByArticleCode=require('../biz/dao/articleDetailDAO').selectArticleDetailByArticleCode;

function invoke(req,res,feature){
    selectArticleDetailByArticleCode("fe2dsa",function(articleDetailDO){
//        console.log("articleDetailDO: "+JSON.stringify(articleDetailDO));
        res.render('index',{
            articleBriefViewsVO:
                [
                    {
                        title:articleDetailDO.title,
                        articleCode: articleDetailDO.articleCode,
                        text: articleDetailDO.briefView
                    },
                    {
                        title:'测试标题',
                        articleCode: 'testStr',
                        text: '这是第二个测试样例'
                    }
                ]
            , message: articleDetailDO});
    });

}
exports.invoke=invoke;
