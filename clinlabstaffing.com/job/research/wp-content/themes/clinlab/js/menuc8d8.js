jQuery_3_3_1(document).ready( function() {
    jQuery_3_3_1('.hamburger-wrap').on('click', function(){
        jQuery_3_3_1(this).toggleClass("x");
        jQuery_3_3_1('.slide-out').toggleClass('open-menu');
    })
    jQuery_3_3_1('#menu-main .menu-item-has-children>a').on('click touchstart', function(event) {
        event.stopPropagation();
        event.preventDefault();
        if (jQuery_3_3_1(this.parentElement).hasClass("hover")) {
            jQuery_3_3_1(this.parentElement).toggleClass('hover');
        } else {
            jQuery_3_3_1('.menu-item-has-children').each( function() {
                jQuery_3_3_1(this).removeClass('hover');
            })
            jQuery_3_3_1(this.parentElement).toggleClass('hover');
        }
    })

    if (window.scrollY > 1) {
        jQuery_3_3_1('.static-header').addClass('fixed-header')
    } else {
        jQuery_3_3_1('.static-header').removeClass('fixed-header')
    }

    jQuery_3_3_1(window).scroll( function() {
        if (window.scrollY > 1 ) {
            jQuery_3_3_1('.static-header').addClass('fixed-header')
        } else {
            jQuery_3_3_1('.static-header').removeClass('fixed-header')
        }
    })
})