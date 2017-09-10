$(function () {
    /*获取元素*/
    var $banner = $('.sn_banner');
    var width = $banner.width();
    /*图片盒子*/
    var $imageBox = $banner.find('ul:first');
    /*点盒子*/
    var $pointBox = $banner.find('ul:eq(1)');
    /*这些选择器不是css选择器  jquery扩展的*/
    /*Failed to execute 'querySelectorAll' on 'Element': 'ul:first' is not a valid selector.*/
    /*querySelectorAll H5 API 只支持css原生选择器*/
    var animateFuc = function () {
        /*1.需要做动画的属性  对象*/
        /*2.动画时间  毫秒*/
        /*3.动画速度  swing  linear*/
        /*4.动画执行完成回调*/
        $imageBox.animate({
            'transform':'translateX('+(-index*width)+'px)'
        },200,'swing',function () {
            /*回调函数*/
            if(index >= 9){
                index = 1;
                /*瞬间*/
                $imageBox.css({
                    'transform':'translateX('+(-index*width)+'px)'
                });
            }else if(index <= 0){
                index = 8;
                /*瞬间*/
                $imageBox.css({
                    'transform':'translateX('+(-index*width)+'px)'
                });
            }
            /*2.点容器对应改变*/
            /*index 1-8*/
            $pointBox.find('li').removeClass('now').eq(index-1).addClass('now');
        });
    }
    /*1.自动轮播  无缝的（滚动滑动）*/
    var index = 1;
    var timer = setInterval(function () {
        index ++;
        animateFuc();
    },5000);
    /*3.手势切换*/
    $imageBox.on('swipeLeft',function () {
        /*下一张*/
        index ++;
        animateFuc();
    }).on('swipeRight',function () {
        /*上一张*/
        index --;
        animateFuc();
    });
});