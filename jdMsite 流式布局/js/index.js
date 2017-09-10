/**
 * Created by xiaoleixin on 2017/7/27.
 */
/*
 window.onload = function () {
 //搜索栏
 search();
 //    banner轮播图
 banner();
 //    秒杀
 seckill();
 };
 //搜索栏

 function search() {
 //获取元素
 var search = document.querySelector(".jd_search_box");
 var height = document.querySelector(".jd_banner").offsetHeight;
 window.onscroll = function () {
 var opacity = 0;
 var scrollTop = document.body.scrollTop;
 //滚动的距离小于轮播图的高度时，透明度成比例变化
 if (scrollTop <= height) {
 opacity = 0.85 * scrollTop / height;
 } else {//滚动的距离大于轮播图的高度时，透明度不变
 opacity = 0.85;
 }
 search.style.backgroundColor = "rgba(201, 21, 35," + opacity + ")";
 }
 }


 //轮播图
 function banner() {
 var banner = document.querySelector(".jd_banner");
 //获取图片盒子
 var imgBox = banner.querySelector("ul:first-child");
 var width = banner.offsetWidth;
 //获取点ul
 var pointBox = banner.querySelector("ul:last-child");
 //获取所有的点
 var points = pointBox.querySelectorAll("li");


 //设置过渡
 var setTransateX = function (translateX) {
 imgBox.style.transform = "translateX(" + translateX + "px)";
 imgBox.style.webkitTransform = "translateX(" + translateX + "px)";
 };
 //添加过渡
 var addTransition = function () {
 imgBox.style.transition = "all .2s";
 imgBox.style.webkitTransition = "all .2s"
 };
 //去除过渡
 var removeTransition = function () {
 imgBox.style.transition = "none";
 imgBox.style.webkitTransition = "none";
 };
 //改变点
 var setPoint = function () {
 for (var i = 0; i < points.length; i++) {
 var li = points[i];
 li.classList.remove("now");
 }
 points[index - 1].classList.add("now");
 };

 //1.无缝滑动
 var index = 1;
 var timer = setInterval(function () {
 index++;
 setTransateX(-index * width);
 addTransition();
 }, 3000);
 //当是最后一张图片时 动画过渡完后，跳到第一张
 imgBox.addEventListener("transitionend", function () {
 if (index >= 9) {
 index = 1;
 //去除过渡
 removeTransition();
 setTransateX(-index * width);
 } else if (index <= 0) {
 index = 8;
 removeTransition();
 setTransateX(-index * width);
 }
 //    2. 点对应改变 根据索引值
 setPoint();
 });
 //    3.滑动功能
 var startX = 0;
 var distance = 0;
 var isMove = false;
 imgBox.addEventListener('touchstart', function (e) {
 //清除定时器
 clearInterval(timer);
 startX = e.touches[0].clientX;
 });
 imgBox.addEventListener('touchmove', function (e) {
 distance = e.touches[0].clientX - startX;
 isMove = true;
 removeTransition();
 setTransateX(-index * width + distance);
 });
 imgBox.addEventListener('touchend', function (e) {
 //滑动结束 确定一定滑动果
 if (isMove) {
 if (Math.abs(distance) <= width / 3) {
 //    吸附 恢复原位置
 addTransition();
 setTransateX(-index * width);
 } else {
 if (distance > 0) {
 //    右滑 显示上一张
 index--;

 } else {
 //    左滑 显示下一张
 index++;
 }
 addTransition();
 setTransateX(-index * width);
 }
 }
 //    重置参数
 startX = 0;
 distance = 0;
 isMove = false;
 //    加定时器
 clearInterval(timer);
 timer = setInterval(function () {
 index++;
 addTransition();
 setTransateX(-index * width);
 }, 3000);
 });
 }

 //秒杀
 function seckill() {
 //获取时间div盒子
 var timeBox = document.querySelector(".seckill_timer");
 var hourBox = timeBox.querySelector(".h");
 var mBox = timeBox.querySelector(".m");
 var sBox = timeBox.querySelector(".s");
 //    设置终止时间
 var timeEnd = +new Date("2017-07-31T00:00:00");
 //    获取当前时间
 var nowTime = Date.now();
 var time = parseInt((timeEnd - nowTime) / 1000);
 // console.log(time, timeEnd);
 //    计时器
 var timer = setInterval(function () {
 time--;
 //    获取小时
 var h = Math.floor(time / 3600);
 var m = Math.floor(time % 3600 / 60);
 var s = Math.floor(time % 60);
 //    将小时放进盒子
 hourBox.querySelector("span:first-child").innerHTML = Math.floor(h / 10);
 hourBox.querySelector("span:last-child").innerHTML = h % 10;
 mBox.querySelector("span:first-child").innerHTML = Math.floor(m / 10);
 mBox.querySelector("span:last-child").innerHTML = m % 10;
 sBox.querySelector("span:first-child").innerHTML = Math.floor(s / 10);
 sBox.querySelector("span:last-child").innerHTML = s % 10;
 //    到点
 if (time <= 0) {
 clearInterval(timer);
 }
 }, 1000);


 }
 */

window.onload = function () {
//    顶部搜索
    search();
//    轮播图
    banner();
//    秒杀
    seckill();
};

//顶部搜索
function search() {
//    获取搜索框
    var search = document.querySelector(".jd_search_box");
    //获取轮播图的高度
    var height = document.querySelector(".jd_banner").offsetHeight;
    var opacity = 0;
    window.onscroll = function () {
        //页面向上卷曲出去的距离
        var scrollTop = document.body.scrollTop;
        //    向上卷曲出去的距离小于轮播图的高度时，背景色正比增高
        if (scrollTop <= height) {
            opacity = scrollTop / height * 0.85;
        } else {
            //    向上卷曲出去的距离大于轮播图的高度时，背景色不变
            opacity = 0.85;
        }
        search.style.backgroundColor = " rgba(201, 21, 35," + opacity + ")";
    };

}

//    轮播图
function banner() {
//    获取banner
    var bannerBox = document.querySelector(".jd_banner");
//    获取图片盒子
    var imgBox = bannerBox.querySelector("ul:first-child");
//    获取banner的宽度
    var width = bannerBox.offsetWidth;
//    获取点盒子
    var pointBox = bannerBox.querySelector("ul:last-child");
//获取所有的点
    var points = pointBox.querySelectorAll("li");

    //  移动图片
    var setTranslateX = function (translateX) {
        imgBox.style.transform = "translateX(" + translateX + "px)";
        imgBox.style.webkitTransform = "translateX(" + translateX + "px)";
    };
    //  添加过渡
    var addTransition = function () {
        imgBox.style.transition = "all .2s";
        imgBox.style.webkitTransition = "all .2s";
    };
    //  删除过渡
    var removeTransition = function () {
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    };
    var index = 1;
//无缝滚动
    var timer = setInterval(function () {
        index++;
        setTranslateX(-index * width);
        addTransition();
    }, 3000);
//    过渡完成事件
    imgBox.addEventListener("transitionend", function () {
        if (index >= 9) {
            index = 1;
            removeTransition();
            setTranslateX(-index * width);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTranslateX(-index * width);
        }
        //    点移动
        for (var i = 0; i < points.length; i++) {
            points[i].classList.remove("now");
        }
        points[index - 1].classList.add("now");
    });

//  拖动
    var startX = 0;
    var distance = 0;
    var isMove = false;
    imgBox.addEventListener("touchstart", function (e) {
        clearInterval(timer);
        startX = e.touches[0].clientX;
    });
    imgBox.addEventListener("touchmove", function (e) {
        var moveX = e.touches[0].clientX;
        distance = moveX - startX;
        isMove = true;
        removeTransition();
        setTranslateX(-index * width + distance);
    });
    imgBox.addEventListener("touchend", function (e) {

        if (isMove) {
            //吸附效果
            if (Math.abs(distance) < width / 3) {
                addTransition();
                setTranslateX(-index * width);
            } else {
                //    滑动效果
                if (distance > 0) {
                    //    左滑 上一张
                    index--;
                } else {
                    //    右滑 下一张
                    index++;
                }
                addTransition();
                setTranslateX(-index * width);
            }
        }
        startX = 0;
        distance = 0;
        isMove = false;
        //    添加定时器
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            addTransition();
            setTranslateX(-index * width);
        }, 3000);
    });

}
//    秒杀
function seckill() {
//获取时间盒子
    var seckill = document.querySelector(".seckill_timer");
//    获取小时盒子
    var hBox = seckill.querySelector(".h");
    //    获取分钟盒子
    var mBox = seckill.querySelector(".m");
    //    获取秒盒子
    var sBox = seckill.querySelector(".s");
//    设置截止时间
    var date = new Date("2017-7-31 12:00:00");
    var overTime = date.getTime();
    timer = setInterval(function () {
        var nowTime = Date.now();
//    时间差
        var time = parseInt((overTime - nowTime) / 1000);
        if (time <= 0) {
            clearInterval(timer);
            return;
        }
//    格式化
        var h = Math.floor(time / 3600);
        var m = Math.floor(time % 3600 / 60);
        var s = time % 60;
//    设置时间到span
        hBox.querySelector("span:first-child").innerHTML = parseInt(h / 10);
        hBox.querySelector("span:last-child").innerHTML = h % 10;
        mBox.querySelector("span:first-child").innerHTML = parseInt(m / 10);
        mBox.querySelector("span:last-child").innerHTML = m % 10;
        sBox.querySelector("span:first-child").innerHTML = parseInt(s / 10);
        sBox.querySelector("span:last-child").innerHTML = s % 10;
    }, 1000);

}