
//��ȡ����������ul
var ulObj = $id("sideBar").children[0];
//��ȡ��߹̶����µ�qq�б�
var qqLiObj = ulObj.children[1];
//��ȡQQ�б��µ������div
var topQqObj = qqLiObj.children[0].children[0];
//��ȡQQ�б��µ������div
var bottomQqObj = qqLiObj.children[0].children[1];
//��ȡ��߹̶����µ���Ϣ�б�
var noteLiObj = ulObj.children[2];
//��ȡQQ�б��µ������div
var topNoteObj = noteLiObj.children[0].children[0];
//��ȡQQ�б��µ������div
var bottomNoteObj = noteLiObj.children[0].children[1];

//Ϊqqliע���������¼�
qqLiObj.onmouseover =function() {
    //�����div�����ƶ�����
    animate(topQqObj, {left: 42},10);
    //�����div�����ƶ���ʾ
    animate(bottomQqObj, {left:-121},15);
};
//Ϊqqli�����divע������뿪�¼�
bottomQqObj.onmouseout =  function() {
    //�����div�����ƶ���ʾ
    animate(topQqObj, {left: 0},10);
    //�����div�����ƶ�����
    animate( bottomQqObj, {left: 42},15);

};

//    Ϊnoteliע���������¼�
noteLiObj.onmouseover = function() {
    //�����div�����ƶ�����
    animate(topNoteObj, {left: 42},10);
    //�����div�����ƶ���ʾ
    animate(bottomNoteObj, {left:-121},15);
};
//    Ϊnoteli�����divע������뿪�¼�
bottomNoteObj.onmouseout =  function() {
    //�����div�����ƶ���ʾ
    animate(topNoteObj, {left: 0},10);
    //�����div�����ƶ�����
    animate( bottomNoteObj, {left: 42},15);

};


