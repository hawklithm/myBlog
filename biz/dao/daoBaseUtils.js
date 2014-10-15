/**
 * Created by bluehawky on 14-9-23.
 */
exports.selectByConditionBase=function(define,condition,resultSupport){
    define.findAll(condition)
        .complete(function(err,resultDO){
            if (!!err) {
                console.log('An error occurred while searching ', err);
                resultSupport(err);
            } else if (!resultDO) {
                console.log('No data has been found.');
                resultSupport('no_data');
            } else {
                var resultList=[];
                for (var index in resultDO){
                    resultList[index]=resultDO[index].dataValues;
                }
//                console.log(resultList);
                resultSupport(null,resultList);
            }
        });
};
