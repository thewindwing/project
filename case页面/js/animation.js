/**
 * Created by xiaoleixin on 2017/7/7.
 */

//获取ul
var ulObj = $id("row").children[0];
//获取li
var list = ulObj.children;
//循环遍历每个li,
for (var i = 0; i < list.length; i++) {
    //获取li中最里面的div（第一个）
    var insideDiv = list[i].children[0];
    //获取li中中间的div（第二个）
    var middleDiv = list[i].children[1];
    //获取li中最外面的div（第三个）
    var outsideDiv = list[i].children[2];
    //为当前li注册鼠标进入事件
    list[i].onmouseover = function () {
        //最外面的div隐藏，中间的div中的图片缓动放大，透明度变为0，
        //获取图片
        var imgObj = this.children[1].children[0].children[0];
        this.children[2].style.display = "none";
        animation(imgObj, {width: 756, height: 422, opacity: 0}, 50);
    };
    //为当前li注册鼠标离开事件
    list[i].onmouseout = function () {
        //最外面的div显示，中间的div缓动原来大小，透明度变为1，
        var imgObj = this.children[1].children[0].children[0];
        this.children[2].style.display = "block";
        animation(imgObj, {width: 378, height: 211, opacity: 1},30);
    };
}

//封装缓动动画函数，为元素添加任意多个样式及回调函数,加透明度和层级
function animation(element, json, time, fn) {
    //清除已有的定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //定义一个标志，用来解决所有属性不同步达到目标值的问题
        var flag = true;
        //遍历json中每个属性
        var ratio = 0;
        for (var attr in json) {
            if (attr == "opacity") {
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                var step = ( target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;//注意透明度不加单位
            } else if (attr == "zIndex") {
                //层级
                element.style[attr] = json[attr];
            } else {
                //正常属性值
                //获取现在的位置，字符串转为数值
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];
                //每次走的步数
                var step = (target - current) / 3;

                if (attr == "width") {
                    ratio = step * 211 / 378;
//                        console.log(ratio)
                }
                if (attr == "height") {
                    if (current == target) {
                        step = 0;//即使高度到达目标位置，但其他属性还没到达目标值，且如果width没有达到目标值，height的step还会改变，所以高度会比原来目标值小
                    } else {
                        step = ratio;
//                            console.log(step)
                    }

                }

                //小数时取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;

                //移动后的位置
                element.style[attr] = current + "px";
            }

            //若有一个未到达目标值的，就设为false，已经到达目标值的，因为步数为0，所以原封不动
            if (current != target) {//注意是现在值和目标值变量的比较，不用json[attr]，以为属性是透明度时，json是小数，而current是小数的一百倍
                flag = false;
            }
        }
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        element.style.left = 189 - width / 2 + "px";
        element.style.top = 105 - height / 2 + "px";
        /*console.log(element.style.left)
         console.log(element.style.top)*/
        console.log(element.style.width)
        console.log(element.style.height)
        //都到达目标值
        if (flag) {
            clearInterval(element.timeId);
            //调用下一个函数,若这个函数存在
            if (fn) {
                fn();
            }
        }
    }, time);
}

