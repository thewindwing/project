//ͨ��id��ȡҳ���е�Ԫ��
function $id(id) {
    return document.getElementById(id);
}


//�������
//��������һ��Ԫ�ص��ı�����
function setInnerText(element, text) {
    //��������������в�֧��
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        //�����֧��
        element.textContent = text;
    }
}
//��ȡ����һ��Ԫ�ص��ı�����
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
//��ȡ��ǰԪ��ǰһ��Ԫ��
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var ele = element.previousSibling;
        while (ele && ele.nodeType !== 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}
//��ȡ��ǰԪ�صĺ�һ��Ԫ��
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var ele = element.nextSibling;
        while (ele && ele.nodeType !== 1) {
            ele = ele.nextSibling;
        }
        return ele;
    }
}

//��ȡ��Ԫ���еĵ�һ��Ԫ��
function getFirstElementByParent(parent) {
    if (parent.firstElementChild) {
        return parent.firstElementChild;
    } else {
        var ele = parent.firstChild;
        while (ele && ele.nodeType !== 1) {
            ele = ele.nextSibling;
        }
        return ele;
    }
}
//��ȡ��Ԫ���е����һ��Ԫ��
function getLastElementByParent(parent) {
    if (parent.lastElementChild) {
        return parent.lastElementChild;
    } else {
        var ele = parent.lastChild;
        while (ele && ele.nodeType !== 1) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}

//��ȡ�ֵ�Ԫ��
function getsiblings(ele) {
    if (!ele)return;//�жϵ�ǰ��ele���Ԫ���Ƿ����
    var elements = [];//���������Ŀ�ľ��Ǵ洢��ǰ���Ԫ�ص����е��ֵ�Ԫ��
    var el = ele.previousSibling;//��ǰԪ�ص�ǰһ���ڵ�
    while (el) {
        if (el.nodeType === 1) {//Ԫ��
            elements.push(el);//�ӵ�������
        }
        el = el.previousSibling;
    }
    el = ele.nextSibling;
    while (el) {
        if (el.nodeType === 1) {
            elements.push(el);
        }
        el = el.nextSibling;
    }
    return elements;
}

//��ȡ��һ��Ԫ�ص�Ŀ��λ�õ��ƶ�
function animate1(element, target) {
    //���ж���û�������ʱ��������о�������ٵ��ʱ�����´����Ķ�ʱ��
    clearInterval(element.timeId);
    //�ö�������ԣ�������ʱ����id������֤���id�������Զ����������Լ��ģ�������������������ͻ
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        var step = 10;
        step = target > current ? step : -step;
        current += step;
        element.style.left = current + "px";
        if (Math.abs(target - current) < Math.abs(step)) {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    }, 20);
}


//��װҳ���������ĺ���
function getScroll() {
    return {
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
    };
}


//��װ��һԪ�ػ�����Ŀ��ֵ�ö�������
function slowAnimate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        //����Ч��
        var step = (target - current) / 10;
        //��stepΪС��ʱ������ȡ��
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";
        if (current == target) {
            //��current�ӽ�targetʱ������stepС��10ʱ��step�ľ���ֵ�Ѿ���С��1 ��������������ȡ������1����󼸲�һֱ����1�����Բ������current������target�����
            clearInterval(element.timeId);
        }
        //���Դ���
        console.log("Ŀ��λ�ã�" + target + "������λ�ã�" + current + "������:" + step);
    }, 10);
}


//��ȡ��һԪ�ص�ĳһ����ʽ���Ե�ֵ�����������⣩
function getStyle(element, attr) {
    //�ȸ�֧��
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        //IE8֧��
        return element.currentStyle[attr];
    }
}//����ֵ��һ���ַ���

//��װ����Ч������Ԫ�ص���һ������
function slowAnimateAttr(element, attr, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //getStyle()���ص���һ���ַ�����תΪ�����ټ���
        var current = parseInt(getStyle(element, attr));
        //����Ч��
        var step = (target - current) / 10;
        //��stepΪС��ʱ������ȡ��
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current + "px";
        if (current == target) {
            //��current�ӽ�targetʱ������stepС��10ʱ��step�ľ���ֵ�Ѿ���С��1 ��������������ȡ������1����󼸲�һֱ����1�����Բ������current������target�����
            clearInterval(element.timeId);
        }
        //���Դ���
        console.log("Ŀ��λ�ã�" + target + "������λ�ã�" + current + "������:" + step);
    }, 10);
}

//��װ�����������������Ӷ����ʽ����
function jsonSlowAnimate(element, json) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //����һ����־����������������Բ�ͬ������Ŀ��ֵ������
        var flag = true;
        //����json�����ÿһ������
        for (var attr in json) {
            var current = parseInt(getStyle(element, attr));
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style[attr] = current + "px";
            //����һ�����ﵽĿ��ֵ������Ϊfalse���Ѿ��ﵽĿ���stepֵ��Ϊ0������ôǰ��Ҳ��ԭ�ⲻ��
            if (current != json[attr]) {
                flag = false;
            }
        }
        //���ﵽĿ��ֵ
        if (flag) {
            clearInterval(element.timeId);
        }

    }, 20);

}


//��װ��������������ΪԪ�������������ʽ���ص�����
function animateSlow(element, json, fn) {
    //������еĶ�ʱ��
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //����һ����־����������������Բ�ͬ���ﵽĿ��ֵ������
        var flag = true;
        //����json��ÿ������
        for (var attr in json) {
            //��ȡ���ڵ�λ�ã��ַ���תΪ��ֵ
            var current = parseInt(getStyle(element, attr));
            //ÿ���ߵĲ���
            var step = (json[attr] - current) / 10;
            //С��ʱȡ��
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            //�ƶ����λ��
            element.style[attr] = current + "px";
            //����һ��δ����Ŀ��ֵ�ģ�����Ϊfalse���Ѿ�����Ŀ��ֵ�ģ���Ϊ����Ϊ0������ԭ�ⲻ��
            if (current != json[attr]) {
                flag = false;
            }
        }
        //������Ŀ��ֵ
        if (flag) {
            clearInterval(element.timeId);
            //������һ������
            fn();
        }
    }, 20);
}


//��װ��������������ΪԪ�������������ʽ���ص�����,��͸���ȺͲ㼶
function animate(element, json,time,fn) {
    //������еĶ�ʱ��
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //����һ����־����������������Բ�ͬ���ﵽĿ��ֵ������
        var flag = true;
        //����json��ÿ������
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
                var step = (target - current) / 10;

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


//ͼƬ�������ɣ������ڴ�Ŷ��������
var evtTools = {
    //��1������һ���¼��������� ���������⣨ie8��֧��e)
    getEvent: function (e) {
        return window.event || e;
    },
    //��2����ȡ�����ҳ��Ŀ������ĺ�����
    getClinetX: function (e) {
        return this.getEvent(e).clientX;
    },
    //��3����ȡ�����ҳ��Ŀ�������������
    getClientY: function (e) {
        return this.getEvent(e).clientY;
    },
    //��4����ȡ���Ͼ����������꣬�����ҳ���
    getScrollTop: function () {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    },
    //��5����ȡ��������������꣬�����ҳ���
    getScrollLeft: function () {
        return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
    },
    //��6����ȡ�����ҳ��ĺ����꣨����������ȥ��+�������ĺ����꣩
    getPageX: function (e) {
        return this.getEvent(e).pageX ? this.getEvent(e).pageX : this.getScrollLeft() + this.getClientX(e);
    },
    //��7����ȡ�����ҳ��������꣨����������ȥ��+�������������꣩
    getPageY: function (e) {
        return this.getEvent(e).pageY ? this.getEvent(e).pageY : this.getScrollTop() + this.getClientY(e);
    }
};

//��ȡ�������Ŀ�ȣ����ݴ��룩
function getClientWidth() {
    return window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
}

//����ָ����ʽ�����ڣ��ַ�������
function getDatetoString(date) {
    var strDate;//�洢���ڵ��ַ���
    //��ȡ��
    var year = date.getFullYear();
    //��ȡ��
    var month = date.getMonth() + 1;
    //��ȡ��
    var day = date.getDate();
    //��ȡСʱ
    var hour = date.getHours();
    //��ȡ����
    var minute = date.getMinutes();
    //��ȡ��
    var second = date.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    //ƴ��
    strDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return strDate;
}


//Ϊһ��Ԫ��ע������ͬ�¼��ĺ�����ԭ��
function addEvent(element, type, fn) {
    var oldEvent = element["on" + type];
    //�ж���û�Ѿ�ע��
    if (typeof oldEvent != "function") {//ûע��
        element["on" + type] = fn;
    } else  {//ע����
        element["on" + type] = function () {
            oldEvent();//������ע����¼�//
            fn();//���д˼�����¼�
        };
    }
}


//Ϊ��һ��Ԫ��ע������ͬ���¼������ݴ��룩
function addEventListener(element, type, fn) {
    if (element.addEventListener) {//�ȸ衢�����Edge֧��
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        //IE8�����°汾֧�֣���������֧�֣����м��ݴ����У��ȸ�Ψ����֧�ֵ�һ����
        element.attachEvent("on" + type, fn);
    } else {//��֧�ְ󶨶���¼�
        element["on" + type] = fn;
    }
}
//Ϊ��һ��Ԫ�ؽ�����¼�����һ���¼������ݴ��룩
function removeEventListener(element, type, f1) {
    //����ÿ�����ʽ�Ͱ󶨷�ʽһһ��Ӧ
    //f1��������������
    if (element.removeEventListener) {
        element.removeEventListener(type, f1, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, f1);
    } else {//��֧�־ͽ��һ��
        element["on" + type] = null;
    }
}

//array.forEach(function(element,index,array),thisArg)�����ļ��ݻ���
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function(callback, thisArg) {

        var T, k;

        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }

        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If isCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = thisArg;
        }

        // 6. Let k be 0
        k = 0;

        // 7. Repeat, while k < len
        while (k < len) {

            var kValue;

            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];

                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined
    };
}

/*
 һ������Ԫ�ַ�
 .  ����\n��������ĵ����ַ�
 [] ��ʾ��һ����Χ��
 [0-9]��ʾ����0-9֮�������һ������
 [a-z] ��ʾa-z�е�����һ��
 [A-Z] ��ʾ�Ĵ�д��ĸ�е�����һ��
 () �������ȼ���ͷ������˼
 | ��ʾ����
 �����޶�����
 {0,}  ��ʾ���Ǹ��޶���ǰ��ı��ʽ���ֵ�����0�Σ�������޴�
 {0,1} ��ʾ���Ǹ��޶���ǰ��ı��ʽ������0�λ���1��
 {1,}  ��ʾ���Ǹ��޶���ǰ��ı��ʽ����������һ��
 {2,7} ��ʾ���Ǹ��޶���ǰ��ı��ʽ����������2�Σ����7��
 {,5}  ����д���Ǵ��
 *  ��ʾ�÷���ǰ���һ���ı��ʽ������0�ε����޴κ�{0,}һ��
 �� ��ʾ���Ǹ÷���ǰ��ı��ʽ������0�ε�1��
 +  ��ʾ���Ǹ÷���ǰ��ı��ʽ����������1��
 \d ��ʾ�����������ֵ��е�һ����[0-9]һ��
 \D ��ʾ���Ƿ�����[^0-9]
 \s �����һ���հ׷�
 \S �ǿհ׷�
 \w ��ʾ�ķ��������  ����_    [0-9a-zA-Z_]
 \W ��ʾ���������[^0-9a-zA-Z_]
 ^  ��ʾ������ʲô��ͷ��ȡ��
 $  ��ʾ������ʲô��β
 \b ��ʾ���ǵ��ʱ߽�

 */