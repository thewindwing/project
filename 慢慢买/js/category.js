$(function () {
    $('#category').on('click', '.category li>a', function () {
        $(this).siblings().toggle();
        var titleId = $(this).data('title-id');
        getCategoryList(titleId, $(this));
        $(this).parent().siblings('li').children('ul').slideUp();
    });
    getCategoryTitle();
});
function getCategoryTitle() {
    $.ajax({
        url: url + 'api/getcategorytitle',
        success: function (data) {
            // console.log(data);
            $('#category>ul').html(template('templateTitle', data));
        }
    })
}
function getCategoryList(titleId, ele) {
    //当ul的子元素为0时，点击a则动态创建，否则什么也不做
    if (ele.siblings('ul').children().length === 0) {
        $.ajax({
            url: url + 'api/getcategory',
            data: {titleid: titleId},
            success: function (data) {
                ele.siblings('ul').html(template('categoryList', data));
                //    最后一行无下边框
                var num = ele.siblings('ul').children().length % 3 || 3;
                ele.siblings('ul').children('li:nth-last-child(-n+' + num + ')').css('border-bottom', 'none');
            }
        })
    }
}