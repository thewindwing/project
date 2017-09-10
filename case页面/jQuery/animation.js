//页面加载事件
$(function () {
    //获取li,添加鼠标进入事件
    $("#row>ul>li").mouseenter(function () {
        //最上面的div隐藏
        $(this).find("div.info").hide();
        //中部的div缓动变大并且慢慢消失
        $(this).find("div.item").find("img").animate({
            "width": "1512px",
            "height": "844px",
            "left": "-567px",
            "top": "-316.5px",
            "opacity": "0"
        }, 500);
    }).mouseleave(function () {
        $(this).find("div.info").show();
        $(this).find("div.item").find("img").animate({
            "width": "378px",
            "height": "211px",
            "left": "0",
            "top": "0",
            "opacity": "1"
        }, 500);
    });
});
