/**
 * Created by bluehawky on 14-9-27.
 */
function redirectToArticle(obj){
    console.log(obj.id);
    window.location.assign('/article_show?code='+obj.id);
}
//function postData(form , url ) {
//    var XHR = new XMLHttpRequest();
//
//    // We bind the FormData object and the form element
//    var FD  = new FormData(form);
//
//    // We define what will happen if the data are successfully sent
//    XHR.addEventListener("load", function(event) {
//        alert(event.target.responseText);
//    });
//
//    // We define what will happen if case of error
//    XHR.addEventListener("error", function(event) {
//        alert('Oups! Something goes wrong.');
//    });
//
//    // We setup our request
//    XHR.open("POST", url);
//
//    // The data send are the one the user provide in the form
//    XHR.send(FD);
//}
//
