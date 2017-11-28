(function(){

    // click nav 
    $('nav a').on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    })

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

    // slick
    $('#clients-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });

})(jQuery);