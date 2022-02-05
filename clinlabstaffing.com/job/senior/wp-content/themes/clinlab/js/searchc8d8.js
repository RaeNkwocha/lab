jQuery_3_3_1(document).ready( function() {
    var $ = jQuery;
    var search_btn = $('header .search-wrap i');
    var mobile_search_btn = $( 'header #mobile-search-button')
    var search_modal = $('#nav-search-modal-wrap');
    var close_btn = $('#nav-search-modal-wrap .close-btn');

    function show_search() {
        search_modal.stop().fadeToggle();
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    }

    function hide_search() {
        search_modal.stop().fadeToggle();
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    }

    search_btn.click( show_search);
    mobile_search_btn.click( show_search);
    close_btn.click( hide_search);

});