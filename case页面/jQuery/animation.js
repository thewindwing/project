//ҳ������¼�
$(function () {
    //��ȡli,����������¼�
    $("#row>ul>li").mouseenter(function () {
        //�������div����
        $(this).find("div.info").hide();
        //�в���div���������������ʧ
        $(this).find("div.item").find("img").animate({
            "width": "1512px",
            "height": "844px",
            "left": "-567px",
            "top": "-316.5px",
            "opacity": "0"
        }, 500);
    }).mouseleave(function () {
        $(this).find("div.info").show();
        $(this).find("div.item").find("img").animate({
            "width": "378px",
            "height": "211px",
            "left": "0",
            "top": "0",
            "opacity": "1"
        }, 500);
    });
});
