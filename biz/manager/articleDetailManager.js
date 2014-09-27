var selectArticleDetailByArticleCode=require('../dao/articleDetailDAO').selectArticleDetailByArticleCode;
var selectArticleDetailByUserId=require('../dao/articleDetailDAO').selectArticleDetailByUserId;
var userInfoDao=require('../dao/userInfoDAO').userInfoDAO;
var articleDetailManagerService={};
articleDetailManagerService.selectByCode=function(code,resultTrans){
    selectArticleDetailByArticleCode(code,function(articleDetailDOs){
        resultTrans(convertFromArticleDetailDOToBriefViewsVO(articleDetailDOs));
    });
};
function convertFromArticleDetailDOToBriefViewsVO(articleDetailDOs){
    var briefViewsVO=[];
    for (var index in articleDetailDOs){
        briefViewsVO[index]={};
        briefViewsVO[index].title=articleDetailDOs[index].title;
        briefViewsVO[index].articleCode=articleDetailDOs[index].articleCode;
        briefViewsVO[index].text=articleDetailDOs[index].briefView;
    }
    return briefViewsVO;
}
articleDetailManagerService.selectByUser=function(nickName,resultTrans){
    userInfoDao.selectUserByNickname(nickName,function(userInfoDO){
//        console.log(userInfoDO);
        var id=userInfoDO.userId;
        selectArticleDetailByUserId(id,function(articleDetailDOs){
            resultTrans(convertFromArticleDetailDOToBriefViewsVO(articleDetailDOs));
        });
    });
};
exports.articleDetailManagerService=articleDetailManagerService;