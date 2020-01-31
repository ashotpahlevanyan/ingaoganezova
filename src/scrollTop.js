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

    // $(".nav-item .nav-link").on("click", function(event){
    //     event.preventDefault();
    //     var href = $(this).attr("href");
    //     //console.log(href);
    //     var scrollTopValue = $(href).offset().top;
    //     //console.log(scrollTopValue);
    //     window.scrollTo({
    //         top: scrollTopValue + 1,
    //         behavior: "smooth"
    //     });
    //     $(".nav-item").removeClass("active");
    //     $(this).parent().addClass("active");
    // });
    var offsetValue = 0;
    $('body').scrollspy({ target: '#scrollspy', offset: offsetValue });

    $("#scrollspy a").on('click', function(event) {
        offsetValue = $('.header').outerHeight();

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
            });
        }  // End if
    });
    // var scrollPos = $('body').find($(this).attr('href')).offset().top;
    // console.log(scrollPos);
    // $('body,html').animate({ scrollTop: scrollTopValue}, 500, function () {});
    //$(window).resize(resizeFunction);
    $(window).on("click", function(event) {
        if(!event.target.closest(".navbar")) {
            $('.navbar-collapse').collapse('hide');
        }
    })
});

$(window).on('load', function(){
    var scrollTopValue = $(window).scrollTop();
    if(scrollTopValue > 200) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});
