$(document).ready(function () {

    // ------ Paralax Controller
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // get all slides
    var slides = $("section.stick");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i])
            .addTo(controller);
    }

    // ------ Navigation Controller
    var navController = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: $('section').height(),
            triggerHook: .025,
            reverse: true
        }
    });

    var scene1 = new ScrollMagic.Scene({ triggerElement: '#hero' })
                                    .setClassToggle('#intro-anchor', 'active')
                                    .addTo(navController);
    var scene2 = new ScrollMagic.Scene({ triggerElement: '#intro' })
                                    .setClassToggle('#anchor1', 'active')
                                    .addTo(navController);
    var scene3 = new ScrollMagic.Scene({ triggerElement: '#about' })
                                    .setClassToggle('#anchor2', 'active')
                                    .addTo(navController);
    var scene4 = new ScrollMagic.Scene({ triggerElement: '#work' })
                                    .setClassToggle('#anchor3', 'active')
                                    .addTo(navController);

    navController.scrollTo(function(target) {

        TweenMax.to(window, 0.5, {
            scrollTo : {
                y : target,
                autoKill : true // Allow scroll position to change outside itself
            },
            ease : Cubic.easeInOut
        });

    });

    //  Bind scroll to anchor links
    $(document).on("click", "a[href^=#]", function(e) {
        var id = $(this).attr("href");

        if($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            navController.scrollTo(id);

            // If supported by the browser we can also update the URL
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }

    });

    // ------ Navigation Controller
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave"
        }
    });


    var pinani = new TimelineMax()
        .add(TweenMax.to("#intro", 1, {top: "0%", ease: Bounce.easeOut, delay: 1}))
        .add(TweenMax.to("#intro", 2, {backgroundColor: "#e85a71"}))
        .add(TweenMax.to("#intro", 2, {backgroundColor: "#d8e9ef"}))
        .add(TweenMax.to("#intro", 2, {backgroundColor: "#4ea1d3"}))
        .add(TweenMax.from("#unpin", 1, {top: "100%"}));

    new ScrollMagic.Scene({
        triggerElement: "#intro",
        duration: '100%'
    })
    .setTween(pinani)
    .setPin("#intro")
    .addTo(controller);



    var path = document.querySelector('.path');
    var length = path.getTotalLength();
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    $(".path").attr("class", "path path-active");
    // Go!
    path.style.strokeDashoffset = '0';


    $('.path-active').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
    function(){
        $(".loader").fadeOut("slow");
        console.log('Test');
    });

    // if (path.style.strokeDasharray == length.toFixed(3) + 'px' + ', ' + length.toFixed(3) + 'px') {
    //     $(window).load(function() {
    //         $(".loader").fadeOut("slow");
    //     })

    // } else {

    // }

});