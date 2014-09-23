/**
 * Created by bluehawky on 14-9-23.
 */
exports.selectByConditionBase=function(define,condition,resultSupport){
    define.findAll(condition)
        .complete(function(err,resultDO){
            if (!!err) {
                console.log('An error occurred while searching for John:', err)
            } else if (!resultDO) {
                console.log('No user with the username "john-doe" has been found.')
            } else {
                var resultList=[];
                for (var index in resultDO){
                    resultList[index]=resultDO[index].dataValues;
                }
//                console.log(resultList);
                resultSupport(resultList);
            }
        });
};
