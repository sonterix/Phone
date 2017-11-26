(function(){

    // click nav 
    $('nav a').on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    })
    
    // animate scroll
    $('body').on('click', 'a[href^="#"]', function() {
        var clicked = $(this).attr("href"),
        destination = $(clicked).offset().top;            

        $("html,body").animate({
            scrollTop: destination
        }, 1200);

        return false;
    });
})(jQuery);