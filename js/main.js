// Materialogue JS

function revealMenu () {
    var $menu = $('#menu'),
        $menuBurger = $('#menu-burger');
    
    $menu.toggleClass('active');
    $menuBurger.toggleClass('active');
    
    return $menu;
}

function menuHandler () {
    var $menuBurger = $('#menu-burger');
    
    $menuBurger.click(revealMenu);
}

function logoShifter () {
    var $logo = $('#logo'),
        $menuBurger = $('#menu-burger');
    
    $(document).on('scroll', function () {
        var scrollTop = $('body').scrollTop(),
            viewPortHeight = $(window).innerHeight();
        
        //console.log('Detected scroll: scrollTop is ' + scrollTop + ' and viewport height is ' + viewPortHeight);
        
        if ( scrollTop > 0.5 * 0.9167 * viewPortHeight ) {
            $logo.addClass('top');
            $menuBurger.addClass('visible');
        } else {
            $logo.removeClass('top');
            $menuBurger.removeClass('visible');
        }
    });
}

function smoothScroll (current, target, speed) {
    //console.log('Current scrolltop is ' + current + ' and target is ' + target);
    
    if ( current + speed < target ) {
        $('body').scrollTop(current + speed);
    } else if ( current - speed > target ) {
        $('body').scrollTop(current - speed);
    } else {
         $('body').scrollTop(target);
        return null;
    }
    window.requestAnimationFrame( function () {
        smoothScroll($('body').scrollTop(), target, speed);
    });
}


function main () {
    logoShifter();
    menuHandler();
    
    var $vid = document.getElementById('cover-vid');
    
    setTimeout(function () {
        $vid.play();
    }, 3000);
    
    $vid.addEventListener('ended', function () {
        setTimeout(function () {
            window.requestAnimationFrame( function () {
                smoothScroll($('body').scrollTop(), $(window).innerHeight(), $(window).innerHeight() / (24 * 1.5));
            });
        }, 1000);
    });
}

$(document).ready(function () {
    main();
});