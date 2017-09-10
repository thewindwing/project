/**
 * Created by xiaoleixin on 2017/8/1.
 */
$(function () {
//    轮播图
    banner();
    initTabs();
//    初始化工具提示
    $('[data-toggle="tooltip"]').tooltip();
});
//轮播图
function banner() {
//    创建一个数组用来存放图片的路径
    var data = [{url: 'images/slide_01_2000x410.jpg', src: 'images/slide_01_640x340.jpg'},
        {url: 'images/slide_02_2000x410.jpg', src: 'images/slide_02_640x340.jpg'},
        {url: 'images/slide_03_2000x410.jpg', src: 'images/slide_03_640x340.jpg'},
        {url: 'images/slide_04_2000x410.jpg', src: 'images/slide_04_640x340.jpg'}
    ];
    var render = function () {
        //获取当前设备的尺寸
        var width = $(window).width();
//当设备是超小屏幕时（<768px）,创建显示的是图片自适应，当不是时创建显示的是背景图片自适应
//循环创建多个div和对应显示的图片 动态渲染
        var imgHtml = "";
        var pointHtml = "";
        $.each(data, function (i, item) {
            imgHtml += '<div class="' + (i == 0 ? ' active ' : '') + 'item">';
            pointHtml += ' <li data-target="#carousel-example-generic" data-slide-to="' + i + '" class="' + (i == 0 ? 'active' : '') + '"></li>';
            if (width > 768) {
                imgHtml += ' <a href="#" class="pc_imgBox" style="background-image:url(' + item.url + ')"></a>';
            } else {
                imgHtml += '<a class="m_imgBox" href="#"><img src="' + item.src + '" alt=""></a>';
            }
            imgHtml += '</div>';
        });
        $(".carousel-inner").html(imgHtml);
        $(".carousel-indicators").html(pointHtml);
    };
    // render();
    //当窗口尺寸改变时 ---为了测试
    $(window).on("resize", function () {
        render();
    }).trigger("resize");

//  移动端手势切换
    var startX = 0;
    var distance = 0;
    var isMove = false;

    $(".wjs_banner").on("touchstart", function (e) {
        // console.log(e);
        startX = e.originalEvent.touches[0].clientX;
    }).on("touchmove", function (e) {
        distance = e.originalEvent.touches[0].clientX - startX;
        isMove = true;
    }).on("touchend", function (e) {
        if (isMove && Math.abs(distance) > 50) {
            if (distance > 0) {
                //    右移 上一张
                $(".carousel").carousel('prev');
            } else {
                //    左移 上一张
                $(".carousel").carousel('next');
            }
        }
    });
}

//产品
function initTabs() {
    var $parent = $(".nav-tabs-parent");
    var $child = $parent.children("ul");
    var $lis = $child.children("li");
    var width = 0;
    $lis.each(function (i, item) {
        width += $(item).outerWidth(true);
    });
    $child.width(width);
//    使用iscroll插件
    new IScroll('.nav-tabs-parent', {
        scrollX: true,
        scrollY: false
    });
}
