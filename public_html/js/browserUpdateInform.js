/* https://browser-update.org */

function $onshowHandler(){

};

function $onclickHandler(){
    
};

function $oncloseHandler(){
    
};


var $buoop = {
    vs:{i:12,f:35,o:25,s:7},// browser versions to notify
    c:2,
    //reminder : 24,// atfer how many hours should the message reappear,0 = show all the time
    //reminderClosed : 150,// if the user closes message it reappears after x hours
    onshow : $onshowHandler,
    onclick : $onclickHandler,
    onclose: $oncloseHandler,
    //l : false,// set a language for the message, e.g. "en",overrides the default detection
    test : false,// true = always show the bar (for testing)
    text: "Your current browser (%s) can not make the normal operation of this page (eg not support HTML5, CSS3 and Javascript partial function), <a%s>Recommend Click here to  update or use a supported browser</ a >.", // custom html text,Optionally include up to two placeholders "%s" which will be replaced with the browser version and contents of the link tag. Example: "Your browser (%s) is old.  Please <a%s>update</a>"
    text_zh: "您目前的瀏覽器(%s)無法讓此網頁正常運作(如不支援HTML5、CSS3及Javascript部分函式)，<a%s>建議點此更新版本或使用支援度高的瀏覽器</a>。",// custom notification text for language "xx",e.g. text_de for german and text_it for italian
    newwindow: false,// open link in new window/tab
    //url: null// the url to go to after clicking the notification
};

function $buo_f(){ 
 var e1 = document.createElement("script"); 
 e1.src = "//browser-update.org/update.min.js"; 
 document.body.appendChild(e1);
 var e2 = document.createElement("link");
 e2.rel = "stylesheet";
 e2.href = "css/browserUpdateInform.css";
 document.body.appendChild(e2);
};

try {
    document.addEventListener("DOMContentLoaded", $buo_f,false);
}catch(e){
    window.attachEvent("onload", $buo_f);
    console.log("aaaaaaa");
}

