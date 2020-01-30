$(document).ready(function(){
    var upToTop = $('.upToTop');
    var scrollTopValue = $(window).scrollTop();
    $(window).scroll(function() {
        scrollTopValue = $(window).scrollTop();
        if(scrollTopValue > 200) {
            $(".header").addClass("fixed");
            if(!upToTop.hasClass("show")) {
                upToTop.addClass("show");
            }
        } else {
            if(upToTop.hasClass("show")) {
                upToTop.removeClass("show");
            }
            $(".header").removeClass("fixed");
        }
    });
    $(".upToTop .up").on("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    $(".nav-item .nav-link").on("click", function(event){
        event.preventDefault();
        var href = $(this).attr("href");
        //console.log(href);
        var scrollTopValue = $(href).offset().top;
        //console.log(scrollTopValue);
        window.scrollTo({
            top: scrollTopValue + 1,
            behavior: "smooth"
        });
        $(".nav-item").removeClass("active");
        $(this).parent().addClass("active");
    });
});

$(window).on('load', function(){
    var scrollTopValue = $(window).scrollTop();
    if(scrollTopValue > 200) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});
