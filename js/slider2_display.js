$(document).ready(function() {
    $("#owl-display1").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            736: {
                items: 1,
                nav: false
            },
            1000: {
                items: 2,
                nav: false,
                loop: false
            }
        }
    })
})