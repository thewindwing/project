$(function(){
    //代理
    $("#nav").on('click','.row>div:nth-child(8)',function(){
        $('#nav .row>div:nth-last-child(-n+4)').toggle();
    });
    getNav();
    getrecommend();
    console.log( $('#header>a:first').data('id'))
});
function getNav(){
    $.ajax({
        url:url+'api/getindexmenu',
        success:function(data){
           var html=template('nav-template',data);
            $('#nav .row').html(html);
        /*    $("#nav .row>div:nth-child(8)").on('click',function(){
                $('#nav .row>div:nth-last-child(-n+4)').toggle();

            });*/
        }
    })
}

function getrecommend(){
    $.ajax({
        url:url+'api/getmoneyctrl',
         success:function(data){
                // console.log(data)
            /* $('.recommend-list').html(template('recommend-template',data));*/

            // handlebars
             var template=Handlebars.compile($('#recommend-template').html());
             var html=template(data);
             $('.recommend-list').html(html);
            }
    })
}