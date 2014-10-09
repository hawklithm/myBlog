/**
 * Created by bluehawky on 14-10-10.
 */

function invoke(req,res,feature) {
        res.render(feature.jadeDir+"articleEditor");
}
exports.invoke=invoke;
