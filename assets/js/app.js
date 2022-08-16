$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();




    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else { 
            header.removeClass("fixed");
        }
    }


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;


        $("#nav a").removeClass("active");
        $this.addClass("active");
        $("nav").removeClass("active");
        $("#nav_toogle").removeClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });


    /* Menu nav toogle */
    $("#nav_toogle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* Collapse Accorion */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        if (!$this.hasClass("active"))    {
            $("[data-collapse]").removeClass("active");
            $this.addClass("active");  
        }
        
    });



    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});