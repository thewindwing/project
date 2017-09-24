$(function () {
    //top
    scroll();

    //banner
    var banner = $('#banner');
    swiper(banner);

    //导航轮播
    nav_banner();

//    头条轮播
    headline_banner();

});

//顶部搜索
function scroll() {
    var height = $('#header').height();
    window.onscroll = function () {
        var scrollTop = document.body.scrollTop;
        if (scrollTop > height) {
            $('#header').css({'backgroundColor': 'rgba(255,255,255,.5)'}).find('a').css('color', '#333');
        } else {
            $('#header').css({'backgroundColor': 'rgba(255,255,255,0)'}).find('a').css('color', '#fff');
        }
    };
}

//轮播图手势切换----bootstrap
function swiper(banner) {

    var startX = 0;
    var distance = 0;
    var isMove = false;
    banner.on('touchstart', function (e) {
        startX = e.originalEvent.touches[0].clientX;
    });
    banner.on('touchmove', function (e) {
        distance = e.originalEvent.touches[0].clientX - startX;
        isMove = true;
    });
    banner.on('touchend', function () {
        if (isMove && Math.abs(distance) > 50) {
            if (distance > 0) {//右移 上一张
                banner.carousel('prev');
            } else {//左移 下一张
                banner.carousel('next');
            }

        }
    })
}


//导航轮播----jquery 
function nav_banner() {

    var width = $('#nav').width();
    var pic = 0;

    $("#nav ol>li").each(function (i, item) {
        $(item).attr('index', i).click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            pic = $(this).attr('index');
            var distance = -pic * width;
            $('.nav-banner').animate({"left": distance}, 500);
        })
    });
    //手势
    //往nav中再添加一个item
    $('.nav-banner').append($('.nav-banner .item:first').clone(true));
    var length = $('#nav .item').length;

    function sliding() {
        var startX = 0;
        var distanceX = 0;
        var isMove = false;
        $('#nav').on('touchstart', function (e) {
            startX = e.originalEvent.touches[0].clientX;
        }).on('touchmove', function (e) {
            distanceX = e.originalEvent.touches[0].clientX - startX;
            isMove = true;
        }).on('touchend', function () {
            if (isMove && Math.abs(distanceX) > width / 3) {
                if (distanceX > 0) {
                    //右移
                    if (pic == 0) {
                        pic = length - 1;
                        $('.nav-banner').css('left', -pic * width + 'px');
                    }
                    pic--;
                    $("#nav ol>li:eq(" + pic + ")").addClass('active').siblings().removeClass('active');
                } else {
                    //左移
                    if (pic == length - 1) {
                        pic = 0;
                        $('.nav-banner').css('left', 0);
                    }
                    pic++;
                    if (pic == length - 1) {
                        $("#nav ol>li:eq(0)").addClass('active').siblings().removeClass('active');
                    } else {
                        $("#nav ol>li:eq(" + pic + ")").addClass('active').siblings().removeClass('active');
                    }
                }
                $('.nav-banner').animate({"left": -pic * width}, 500);
            }
        })
    }

    sliding();
};

//头条轮播----css3
function headline_banner() {
    var ul=$('#headline ul');
    ul.append($('ul>li:first-child').clone(true));
    var step = $('#headline li').height();
    var num = 0;
    var max = $('#headline li').length;
    //ul的高度
    ul.css('height',step*max);
    setInterval(function () {
        num++;
        ul[0].style.transform='translateY('+(-num*step)+'px)';
        ul[0].style.transition='all 1s';

    }, 2000);
    ul.on('transitionend',function(){
        if(num>=max-1){
            num=0;
            ul[0].style.transition='none';
            ul[0].style.transform='translateY(0)';
        }
    })
}


