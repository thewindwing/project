/**
 * Created by xiaoleixin on 2017/7/7.
 */
//网页     APP   微信
//获取ul
var ulObj = $id("types").children[0];
//获取li
var list = ulObj.children;
//循环遍历每个li,
for (var i = 0; i < list.length; i++) {
    //为每个li,注册鼠标进入事件
    list[i].onmouseover = function () {
        /*  //其他所有的li,恢复默认类样式
         for(var j=0;j<list.length;j++){
         list[j].style.background="";
         list[j].children[0].style.textDecoration="none";
         list[j].children[0].style.color="";
         }*/
        //当前li,设置类样式
        this.style.background = "#75a7c4";
        this.children[0].style.textDecoration = "underline";
        this.children[0].style.color = "#fff";
    };
    //为每个li,注册鼠标离开事件
    list[i].onmouseout = function () {
        this.style.background = "";
        this.children[0].style.color = "";
        this.children[0].style.textDecoration = "none";
    };
}
