/**
 * Created by xiaoleixin on 2017/7/10.
 */
//var timeId2 = '';
$id("phone").onmouseover=function(){
        $id("phone2").style.display="block";
    $id("phone2").style.zIndex="999";
        animatef($id("phone2"),-180);
    animatef($id("phone1"),-90);
};
$id("phone").onmouseout=function(){
    $id("phone2").style.display="none";
    $id("phone2").style.zIndex="-999";
    animatef($id("phone2"),0);
    animatef($id("phone1"),0);
};

function animatef(element,target) {
    clearInterval(timeId2);
    var inttr = element.style.transform;
    var current = inttr == '' ? 0 : parseInt(inttr.replace('rotate(','').replace('deg)',''));
    console.log(element.style.transform);
   var timeId2 = setInterval(function () {

        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        console.log("step===="+step);
        current += step;
        element.style.transform = "rotate(" + current + "deg)";
        console.log(current);
        if (current == target) {
            clearInterval(timeId2);
        }
    }, 30);
}

