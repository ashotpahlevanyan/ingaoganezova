$(document).ready(function(){
    $("#address").on("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        window.open('https://www.google.com/maps/place/7,+1+Nikoghayos+Adonts+St,+Yerevan+0014,+%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F/@40.2098294,44.5263424,17z/data=!3m1!4b1!4m5!3m4!1s0x406aa2cbf31b85ad:0x77fbc66e3f6a4f82!8m2!3d40.2098294!4d44.5285311', '_blank');
        //$(".map").toggleClass("show");
    });

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
    var offsetValue = 0;
    $('body').scrollspy({ target: '#scrollspy', offset: offsetValue });



    // $(".nav-item .nav-link").on("click", function(event){
    //     event.preventDefault();
    //     var href = $(this).attr("href");
    //
    //
    //     var scrollTopValue = $(href).offset().top;
    //     $('.navbar-collapse').collapse('hide');
    //     window.scrollTo({
    //         top: scrollTopValue + 1,
    //         behavior: "smooth"
    //     });
    //     $("body").css({"padding-top": "96px"});
    //     $(".nav-item .nav-link").removeClass("active");
    //     $(this).addClass("active");
    // });


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

            $('.navbar-collapse').collapse('hide');
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
    });

});

$(window).on('load', function(){
    var scrollTopValue = $(window).scrollTop();
    if(scrollTopValue > 200) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }

    /*var $body   = $('body'),
        $header = $('.header'),
        offset  = $header.outerHeight();

    // fix body padding (in case navbar size is different than the padding)
    $body.css('padding-top', offset);
    // Enable scrollSpy with correct offset based on height of navbar
    $body.scrollspy({target: '#scrollspy', offset: offset });

    // function to do the tweaking
    function fixSpy() {
        // grab a copy the scrollspy data for the element
        var data = $body.data('activate.bs.scrollspy');
        // if there is data, lets fiddle with the offset value
        if (data) {
            // get the current height of the navbar
            offset = $navtop.outerHeight();
            // adjust the body's padding top to match
            $body.css('margin-top', offset);
            // change the data's offset option to match
            data.options.offset = offset;
            // now stick it back in the element
            $body.data('activate.bs.scrollspy', data);
            // and finally refresh scrollspy
            $body.scrollspy('refresh');
        }
    }

    // Now monitor the resize events and make the tweaks
    var resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(fixSpy, 200);
    });*/
});
