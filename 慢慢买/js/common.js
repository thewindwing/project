//通过地址栏传递参数，在productId页面获取全部分类页面的分类名称的id
function getproductId() {
    var url = window.location.href;// categoryid=11&page=2&name=6
    //找到？位置
    var index = url.indexOf('?');
    var url = url.substring(index + 1);//categoryid=11&page=2&name=6
    var arr = url.split('&');
    var obj = {};//用来存储每个键值
    $.each(arr, function (i, item) {
        obj[item.split('=')[0]] = item.split('=')[1];
        // console.log(obj);//{categoryid: "11"}
    });
    console.log(obj)
    return obj;

}

