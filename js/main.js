(function(){
    new WOW().init();

    // click nav 
    $('nav a').on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    })

    // humburger
    $('#humburger').on('click', function(){
        $('#humburger #humb-wrapper div').toggleClass('humburger-open');
        $('#header nav ul').toggleClass('humburger-menu');
    });
    $('#header nav ul a').on('click', function(){
        $('#humburger #humb-wrapper div').removeClass('humburger-open');
        $('#header nav ul').removeClass('humburger-menu');
    });

    // click dot
    $('#dots span').on('click', function(){
        $('.active-dot').removeClass('active-dot');
        $(this).addClass('active-dot');
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