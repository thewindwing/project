/**
 * Created by xiaoleixin on 2017/7/7.
 */
//��ҳ     APP   ΢��
//��ȡul
var ulObj = $id("types").children[0];
//��ȡli
var list = ulObj.children;
//ѭ������ÿ��li,
for (var i = 0; i < list.length; i++) {
    //Ϊÿ��li,ע���������¼�
    list[i].onmouseover = function () {
        /*  //�������е�li,�ָ�Ĭ������ʽ
         for(var j=0;j<list.length;j++){
         list[j].style.background="";
         list[j].children[0].style.textDecoration="none";
         list[j].children[0].style.color="";
         }*/
        //��ǰli,��������ʽ
        this.style.background = "#75a7c4";
        this.children[0].style.textDecoration = "underline";
        this.children[0].style.color = "#fff";
    };
    //Ϊÿ��li,ע������뿪�¼�
    list[i].onmouseout = function () {
        this.style.background = "";
        this.children[0].style.color = "";
        this.children[0].style.textDecoration = "none";
    };
}
