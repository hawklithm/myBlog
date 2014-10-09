/**
 * Created by bluehawky on 14-10-9.
 */

function invoke(req,res,feature) {
    res.render(feature.jadeDir+'index');
}
exports.invoke=invoke;