$(function(){
    var productid=getproductId().productid;
    var brandName=getproductId().brandName;//获取的是通过encodeURI()进行编码过得（浏览器默认的对汉字编码的）%E8%A5%BF%E9%97%A8%E5%AD%90
    console.log(brandName);
    // console.log(productid)
    getProductContent(productid,brandName);
    getEvaluate(productid);
});


function getProductContent(productid,brandName){
    $.ajax({
        url:url+'api/getproduct',
        data:{productid:productid},
        success:function(data){
            $(".info").html(template('info',data));
            $('.parentName').attr('href','productList.html?categoryid='+data.result[0].categoryId);
            //需要通过decodeURI()对获取的URL中的汉字进行解码
            $('.categoryTitle').html(decodeURI(brandName));
        }
    })
}


function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
function getEvaluate(productid){
    $.ajax({
        url:url+'api/getproductcom',
        data:{productid:productid},
        success:function(data){
            console.log(data);
            $('#evaluate .evaluate-content').html(template('user-evaluate',data));
        }
    })
}