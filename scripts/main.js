$(document).ready(function () {
    $(document).ready(function(){
         $(".owl-carousel").owlCarousel({
            nav:true,
            loop:true,
            margin:30,
            autoplay:true,
            autoplayTimeout:6000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                561:{
                    items:2,
                    nav:false
                },
                769:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
         });
    });

});