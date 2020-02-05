$(document).ready(function(){
    $("#address").on("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        window.open('https://www.google.com/maps/place/7,+1+Nikoghayos+Adonts+St,+Yerevan+0014,+%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F/@40.2098294,44.5263424,17z/data=!3m1!4b1!4m5!3m4!1s0x406aa2cbf31b85ad:0x77fbc66e3f6a4f82!8m2!3d40.2098294!4d44.5285311', '_blank');
        //$(".map").toggleClass("show");
    });

    const upToTop = $('.upToTop');
    let scrollTopValue = $(window).scrollTop();

    let shift = $('.navbar').innerHeight();
    const arr = ['#header', '#expertise', '#approach', '#services', '#results', '#about', '#contacts'];
    const offsets = {};

    // var offsetValue = 0;
    $('body').scrollspy({ target: '#scrollspy', offset: 0 });


    function setOffsets() {
        for(let item of arr) {
            offsets[item] = $(item).position().top - shift;
        }
    }

    function setActiveNavLink(hash) {
        $('.nav-link').removeClass("active");
        $(".nav-link[href='" + hash + "']").addClass("active");
    }

    function getActiveNavLink(value) {
        for(let i = 0; i < arr.length - 1; i++) {
            if(value >= offsets[arr[i]] && value < offsets[arr[i+1]]) {
                return arr[i];
            }
        }
        return -1;
    }

    $(".upToTop .up").on("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    $("#scrollspy a").on('click', function(event) {
        // offsetValue = $('.header').outerHeight();
         shift = $('.navbar').innerHeight();
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;


            const offsetScrollTopValue = $(hash).offset().top - shift;

            $('html, body').animate({
                scrollTop: offsetScrollTopValue
            }, 800, function(){
                //window.location.hash = hash;
            });
            setActiveNavLink(this.hash);
            $('.navbar-collapse').collapse('hide');
        }  // End if
    });

    $(window).scroll(function() {
        scrollTopValue = $(window).scrollTop();
        shift = $('.navbar').innerHeight();
        setOffsets();
        const hash = getActiveNavLink(scrollTopValue + shift);
        setActiveNavLink(hash);


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




    $(window).on("click", function(event) {
        if(!event.target.closest(".navbar")) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    $(window).resize(function() {
        shift = $(".navbar").innerHeight();
    })
});

$(window).on('load', function(){
    const scrollTopValue = $(window).scrollTop();
    if(scrollTopValue > 200) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});
