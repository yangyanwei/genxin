$(function(){

    var index = 0;
    var lunbo  =  function(){
        $('.banner img').hide();
        var el = $('.banner img')[index];
        $(el).show();

        $('.dians').removeClass('dians-s');
        $($('.dians')[index]).addClass('dians-s');

        index += 1;
        if( index === $('.dians').length ){
            index = 0;
        }
    };
    $('.dians').each(function(i){
        $(this).data('index',i)
    });

    $('.dians').hover(function(){
        clearInterval(timerId);
        $('.dians').removeClass('dians-s');
        $(this).addClass('dians-s');
        var i = $(this).data('index');
        $('.banner img').hide();

        $( $('.banner img')[i] ).show();

        index = i;
    },function(){
        clearInterval(timerId);
        timerId = setInterval(lunbo,2000);
    });
    var timerId = setInterval(lunbo,2000);


});