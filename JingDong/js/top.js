$(function(){
    var arr=["北京","上海","天津","重庆","河北","山西","河南","辽宁","吉林","黑龙江","内蒙古","江苏","山东","安徽","浙江","福建","湖北","湖南","广东","广西","江西","四川","海南","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","港澳","台湾","钓鱼岛","海外"];
//获取最外层div，添加鼠标离开和鼠标进入事件

    $("#shortcut div.fl").mouseenter(function(){
        $(this).css("background","#fff");
        //创建div，追加到大div中
        $("<div><ul></ul></div>").appendTo($(this)).css({"position":"absolute","width":"300px","zIndex":"999","background":"#fff","padding":"10px"});
        //循环创建li和a,追加到ul中
        for(var i=0;i<arr.length;i++) {
            $("<li><a href='#'>" + arr[i] + "</a></li>").appendTo($("#shortcut .fl div ul")).css({
                "float": "left",
                "width": "60px"
            }).children([0]).css({"float": "left", "padding": "5px"}).mouseenter(function () {

                $(this).css("background", "#f6f6f6");
            }).mouseleave(function () {

                $(this).css("background", "");
            });
        }

    }).mouseleave(function(){
        $(this).css("background","");
        $("#shortcut .fl div:last").hide();
    });
});


/**
 * Created by xiaoleixin on 2017/7/24.
 */
