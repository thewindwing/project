
//获取侧边栏下面的ul
var ulObj = $id("sideBar").children[0];
//获取侧边固定栏下的qq列表
var qqLiObj = ulObj.children[1];
//获取QQ列表下的上面的div
var topQqObj = qqLiObj.children[0].children[0];
//获取QQ列表下的下面的div
var bottomQqObj = qqLiObj.children[0].children[1];
//获取侧边固定栏下的信息列表
var noteLiObj = ulObj.children[2];
//获取QQ列表下的上面的div
var topNoteObj = noteLiObj.children[0].children[0];
//获取QQ列表下的下面的div
var bottomNoteObj = noteLiObj.children[0].children[1];

//为qqli注册鼠标进入事件
qqLiObj.onmouseover =function() {
    //上面的div往右移动隐藏
    animate(topQqObj, {left: 42},10);
    //下面的div往左移动显示
    animate(bottomQqObj, {left:-121},15);
};
//为qqli下面的div注册鼠标离开事件
bottomQqObj.onmouseout =  function() {
    //上面的div往左移动显示
    animate(topQqObj, {left: 0},10);
    //下面的div往右移动隐藏
    animate( bottomQqObj, {left: 42},15);

};

//    为noteli注册鼠标进入事件
noteLiObj.onmouseover = function() {
    //上面的div往右移动隐藏
    animate(topNoteObj, {left: 42},10);
    //下面的div往左移动显示
    animate(bottomNoteObj, {left:-121},15);
};
//    为noteli下面的div注册鼠标离开事件
bottomNoteObj.onmouseout =  function() {
    //上面的div往左移动显示
    animate(topNoteObj, {left: 0},10);
    //下面的div往右移动隐藏
    animate( bottomNoteObj, {left: 42},15);

};


