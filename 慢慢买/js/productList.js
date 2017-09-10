$(function () {
    //获取分类名称的id,是个字符串
    var categoryid = getproductId().categoryid;
    var pageid = getproductId().pageid;

    //根据id，把获得的数据渲染到分类名称上
    getCategoryTitle(categoryid);

    //获取每一页的商品信息
    getRecommendList(categoryid, pageid);
});


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
    return obj;
}


//获取分类名称
function getCategoryTitle(categoryid) {
    $.ajax({
        url: url + 'api/getcategorybyid',
        data: {categoryid: categoryid},
        success: function (data) {
            $('#navContent .categoryTitle').html(data.result[0].category);
        }
    })
}


//获取商品列表
function getRecommendList(categoryid, pageid) {
    $.ajax({
        url: url + 'api/getproductlist',
        data: {categoryid: categoryid, pageid: pageid},
        success: function (data) {
            console.log(data);
// console.log(categoryid,pageid)
            // 渲染商品列表
          /*  template.helper('getjquery',function(){
                return {$:jQuery};
            })*/
            $('#recommend').html(template('productlist', data));

            // 总页数
            var pages = Math.ceil(data.totalCount / data.pagesize);


            //    根据当前类别的总页数渲染分页的数据1/3 2/3 3/3
            var options = '';
            for (var i = 0; i < pages; i++) {
                //当前页码被选中,pageid是个字符串
                if (i + 1 === (+pageid)) {
                    options += '<option selected value="' + (i + 1) + '">' + (i + 1) + '/' + pages + '</option>';
                } else {
                    options += '<option value="' + (i + 1) + '">' + (i + 1) + '/' + pages + '</option>';
                }
            }
            $('#page select').html(options);


            //点击页码时渲染对应的商品列表
            $('#page select').on('change', function () {
                //注意，点击下拉框选项 时触发onchange事件，并且this指向select，$(this).val(2)指的是第二项即option中value=2项
                // getRecommendList(categoryid, $(this).val());
                //    不可以再次调用这个函数，这里虽然改变了选中项，但并没有改变地址栏的pageid值,即还是在当前页面内渲染
                window.location.href = 'productList.html?categoryid=' + categoryid + '&pageid=' + $(this).val();//网址不用加
            });

            //    点击上一页下一页渲染对应的列表项
            var pre = 'productList.html?categoryid=' + categoryid + '&pageid=' + (+pageid === 1 ? 1 : pageid - 1);
            var next = 'productList.html?categoryid=' + categoryid + '&pageid=' + (+pageid === pages ? pages : +pageid + 1);
            $('#page .prePage').attr('href', pre);
            $('#page .nextPage').attr('href', next);
            /* $('#page .prePage').on('click',function(){
             pageid=pageid===1?1:pageid-1;
             // getRecommendList(categoryid,pageid);
             });
             $('#page .nextPage').on('click',function(){
             pageid=pageid===pages?pages:+pageid+1;
             // getRecommendList(categoryid,pageid);
             });*/
        }
    })
}