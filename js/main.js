// Materialogue JS

function revealMenu () {
    var $menu = $('#menu'),
        $menuBurger = $('#menu-burger');
    
    $menu.toggleClass('active');
    $menuBurger.toggleClass('active');
    
    return $menu;
}

function menuHandler () {
    var $menuBurger = $('#menu-burger'),
        $menuTitle = $('#menu h1');
    
    $menuBurger.click(revealMenu);
    $menuTitle.click(revealMenu);
}

function logoShifter () {
    var $logo = $('#logo'),
        $menuBurger = $('#menu-burger');
    
    $(document).on('scroll', function () {
        var scrollTop = $('body').scrollTop(),
            viewPortHeight = $(window).innerHeight();
        
        console.log('Detected scroll: scrollTop is ' + scrollTop + ' and viewport height is ' + viewPortHeight);
        
        if ( scrollTop > 0.5 * 0.9167 * viewPortHeight ) {
            $logo.addClass('top');
            $menuBurger.addClass('visible');
        } else {
            $logo.removeClass('top');
            $menuBurger.removeClass('visible');
        }
    });
}


function main () {
    logoShifter();
    menuHandler();
}

$(document).ready(function () {
    main();
});