/**
 * Created by xiaoleixin on 2017/7/7.
 */

//��ȡul
var ulObj = $id("row").children[0];
//��ȡli
var list = ulObj.children;
//ѭ������ÿ��li,
for (var i = 0; i < list.length; i++) {
    //��ȡli���������div����һ����
    var insideDiv = list[i].children[0];
    //��ȡli���м��div���ڶ�����
    var middleDiv = list[i].children[1];
    //��ȡli���������div����������
    var outsideDiv = list[i].children[2];
    //Ϊ��ǰliע���������¼�
    list[i].onmouseover = function () {
        //�������div���أ��м��div�е�ͼƬ�����Ŵ�͸���ȱ�Ϊ0��
        //��ȡͼƬ
        var imgObj = this.children[1].children[0].children[0];
        this.children[2].style.display = "none";
        animation(imgObj, {width: 756, height: 422, opacity: 0}, 50);
    };
    //Ϊ��ǰliע������뿪�¼�
    list[i].onmouseout = function () {
        //�������div��ʾ���м��div����ԭ����С��͸���ȱ�Ϊ1��
        var imgObj = this.children[1].children[0].children[0];
        this.children[2].style.display = "block";
        animation(imgObj, {width: 378, height: 211, opacity: 1},30);
    };
}

//��װ��������������ΪԪ�������������ʽ���ص�����,��͸���ȺͲ㼶
function animation(element, json, time, fn) {
    //������еĶ�ʱ��
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //����һ����־����������������Բ�ͬ���ﵽĿ��ֵ������
        var flag = true;
        //����json��ÿ������
        var ratio = 0;
        for (var attr in json) {
            if (attr == "opacity") {
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                var step = ( target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;//ע��͸���Ȳ��ӵ�λ
            } else if (attr == "zIndex") {
                //�㼶
                element.style[attr] = json[attr];
            } else {
                //��������ֵ
                //��ȡ���ڵ�λ�ã��ַ���תΪ��ֵ
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];
                //ÿ���ߵĲ���
                var step = (target - current) / 3;

                if (attr == "width") {
                    ratio = step * 211 / 378;
//                        console.log(ratio)
                }
                if (attr == "height") {
                    if (current == target) {
                        step = 0;//��ʹ�߶ȵ���Ŀ��λ�ã����������Ի�û����Ŀ��ֵ�������widthû�дﵽĿ��ֵ��height��step����ı䣬���Ը߶Ȼ��ԭ��Ŀ��ֵС
                    } else {
                        step = ratio;
//                            console.log(step)
                    }

                }

                //С��ʱȡ��
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;

                //�ƶ����λ��
                element.style[attr] = current + "px";
            }

            //����һ��δ����Ŀ��ֵ�ģ�����Ϊfalse���Ѿ�����Ŀ��ֵ�ģ���Ϊ����Ϊ0������ԭ�ⲻ��
            if (current != target) {//ע��������ֵ��Ŀ��ֵ�����ıȽϣ�����json[attr]����Ϊ������͸����ʱ��json��С������current��С����һ�ٱ�
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
        //������Ŀ��ֵ
        if (flag) {
            clearInterval(element.timeId);
            //������һ������,�������������
            if (fn) {
                fn();
            }
        }
    }, time);
}

