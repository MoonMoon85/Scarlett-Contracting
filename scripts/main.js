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
    var scene3 = new ScrollMagic.Scene({ triggerElement: '#projects' })
                                    .setClassToggle('#anchor2', 'active')
                                    .addTo(navController);
    var scene4 = new ScrollMagic.Scene({ triggerElement: '#contact' })
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
        .add(TweenMax.to("nav", .5, {className: "nav-reverse"}))
        .add(TweenMax.to(".sub-nav", .5, {className: "sub-nav sub-nav-reverse"}));

    new ScrollMagic.Scene({
        triggerElement: "body",
        duration: '100%'
    })
    .setTween(pinani)
    .setPin("nav")
    .addTo(controller);

    $('.icon-nav').on('click', function() {
        $('nav').addClass('nav-ham-active');
        console.log('adcadc');
    });

});