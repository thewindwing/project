/**
 * Created by xiaoleixin on 2017/7/8.
 */

//获取导航栏中的li
var list=$id("nav").children[0].children;
//循环遍历每个li
for(var i=0;i<list.length-2;i++){
    //鼠标进入
    list[i].onmouseover=function(){
        //获取下面的a
        var aObj= this.children[0];
        aObj.children[0].style.backgroundPositionY=-90+"px";
        this.style.background="#75a7c4";
        this.children[0].style.color="#fff";
        //获取a,下面的p
        var pObj= aObj.children[1].children[0];
        animate(pObj,{top:-37},20);
    };
    //鼠标离开
    list[i].onmouseout=function(){
        //获取下面的a
        var aObj= this.children[0];
        aObj.children[0].style.backgroundPositionY=0;
        this.style.background="";
        this.children[0].style.color="";
        //获取a,下面的p
        var pObj= aObj.children[1].children[0];
        animate(pObj,{top:0},20);
    };
}

//为头部注册鼠标进入事件
$id("header").onmouseover = mouseoverHadle;
//为头部注册鼠标离开事件
$id("header").onmouseout = mouseoutHandle;

//    为导航栏注册鼠标进入事件
$id("nav").onmouseover = function () {
    mouseoverHadle();
    animate($id("menu"), {height: 200}, 50);

};
//    为导航栏注册鼠标离开事件
$id("nav").onmouseout = function () {
    animate($id("menu"), {height: 0}, 10);
};

function mouseoverHadle() {
    $id("space").style.background = "#fff";
    animate($id("space"), {height: 200}, 30);
}
function mouseoutHandle() {
    animate($id("space"), {height: 0}, 30);
}
