/**
 * Created by xiaoleixin on 2017/7/30.
 */
window.onload = function () {
    //左侧分类滑动
    leftScroll();
    //右侧分类滑动
    rightScroll();
};
//左侧分类
function leftScroll(){
    //获取左侧盒子
    var leftBox=document.querySelector(".jd_cate_left");
//获取左侧列表
    var leftCategory=leftBox.querySelector("ul");
//定位的最小和最大位置
    var maxPosition=0;
    var minPosition=leftBox.offsetHeight-leftCategory.offsetHeight;
//可可移动的最大距离和最小距离(滑动区间)
    var distance=100; //缓动距离
    var maxDistance=maxPosition+distance;
    var minDistance=minPosition-distance;
//移动的距离
    var setTranslateY=function(translateY){
        leftCategory.style.transform="translateY("+translateY+"px)";
        leftCategory.style.webkitTransform="translateY("+translateY+"px)";
    };
//添加过渡
    var addTransition=function(){
        leftCategory.style.transition="all .2s";
        leftCategory.style.webkitTransition="all .2s";
    };
//移除过渡
    var removeTransition=function(){
        leftCategory.style.transition="none";
        leftCategory.style.webkitTransition="none";
    };
    var startY=0;
    var isMove=false;
    var currentY=0;
    var distanceY=0;
    leftCategory.addEventListener("touchstart",function(e){
        startY=e.touches[0].clientY;
    });
    leftCategory.addEventListener("touchmove",function(e){
        distanceY=e.touches[0].clientY-startY;
        if((distanceY+currentY)>minDistance&&(distanceY+currentY)<maxDistance){
            removeTransition();
            setTranslateY(distanceY+currentY);
        }
        isMove=true;
    });
    leftCategory.addEventListener("touchend",function(e){
        if(isMove){
            if((distanceY+currentY)>maxPosition){
                currentY=maxPosition;
                addTransition();
                setTranslateY(currentY);
            }else if((distanceY+currentY)<minPosition){
                currentY=minPosition;
                addTransition();
                setTranslateY(currentY);
            }else{
                currentY=distanceY+currentY;
            }

        }

    });
}

//右侧盒子
function rightScroll(){
//    获取右侧盒子
    var rightBox=document.querySelector(".jd_cate_right");
//    初始化
new IScroll(rightBox,{
    scrollY: true,
    scrollX:false
});
}