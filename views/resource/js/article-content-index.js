/**
 * Created by bluehawky on 14-9-27.
 */
function redirectToArticle(obj){
    console.log(obj.id);
    window.location.assign('/article_show?code='+obj.id);
}

