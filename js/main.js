// Materialogue JS

function revealMenu () {
    var $menu = $('#menu'),
        $menuBurger = $('#menu-burger');
    
    $menu.toggleClass('active');
    $menuBurger.toggleClass('active');
    
    return $menu;
}

function menuHandler () {
    var $menu = $('#menu'),
        $menuBurger = $('#menu-burger');
    
    $(document).on('scroll', function () {
        var scrollTop = $('body').scrollTop(),
            windowHeight = $(window).innerHeight();
        
        if ( scrollTop >= 0.5 * 0.9167 * windowHeight && ! $menu.hasClass('margin') ) {
            $menu.addClass('margin');
        } else if ( scrollTop < 0.5 * 0.9167 * windowHeight && $menu.hasClass('margin') ) {
            $menu.removeClass('margin');
        }
    });
    
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
    
    var speed = speed;
    
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

function internalLinkHandler () {
    var $menuLink = $('#menu ul a');
    
    $menuLink.click(function (event) {
        var linkTarget = event.target.getAttribute('href'),
            linkTargetOffset = $(linkTarget).offset().top,
            currentScrollTop = $('body').scrollTop();
        
        console.log('Clicked ' + linkTarget + ', going to ' + linkTargetOffset);
        
        revealMenu();
        
        smoothScroll(currentScrollTop, linkTargetOffset, Math.abs(currentScrollTop - linkTargetOffset) / (24 * 1/2));
    });
}

function vidHandler () {
    var vid = document.getElementById('cover-vid'),
        $vid = $('#cover-vid');
    
    setTimeout(function () {
        if ( $(window).innerWidth() > 600 ) {
            vid.currentTime = 1000;
            if ( vid.readyState === 4 ) {
                vid.play();
                $vid.show();
            } else {
                vidHandler();
            }
        }
    }, 5000);
    
    vid.addEventListener('ended', function () {
        var viewportHeight = $(window).innerHeight(),
            $body = $('body');
        
        if ( $body.scrollTop() < 20 ) {
                smoothScroll($body.scrollTop(), viewportHeight, viewportHeight / (24 * 1.5));
        } else {
            //
        }
        
        $vid.addEventListener('click', function () {
            $vid.currentTime = 1000;
            $vid.play();
        });
    });
}

function navHighlighter () {
    var $menuItems = $('#menu ul li'),
        windowHeight = $(window).innerHeight();
    
    var lastVisibleId = 'cover-page',
        nextVisibleId = '';
    
    $(document).scroll(function () {
        
        $menuItems.each(function (n, o) {
            var menuTargetId = o.getAttribute('id').split('#a-')[1],
                $menuTarget = $('#' + menuTargetId),
                windowTop = $('body').scrollTop() - 0.3 * windowHeight,
                windowBottom = windowTop + 1.3 * windowHeight;
            
            if ( $menuTarget.offset().top > windowTop && $menuTarget.offset().top < windowBottom )  {
                nextVisibleId = menuTargetId;
            } else {
                //
            }            
        });
        
        if ( nextVisibleId != lastVisibleId ) {
            var itemToHideId = '#a-' + lastVisibleId,
                itemToShowId = '#a-' + nextVisibleId,
                $itemToHide = document.getElementById(itemToHideId),
                $itemToShow = document.getElementById(itemToShowId);
            
            console.log('Highlighting ' + itemToShowId + ' and lowlighting ' + itemToHideId);
            
            $('li.viewing').removeClass('viewing');
            $itemToShow.setAttribute('class', 'viewing');
            lastVisibleId = nextVisibleId;
        } else {
            console.log('No change in section: no change in menu highlighting.')
        }
    });
}

function main () {
//    setTimeout(function () {
//        $('body').fadeIn('slow');
//    }, 3000);
    logoShifter();
    menuHandler();
    vidHandler();
    internalLinkHandler();
    navHighlighter();
}

$(document).ready(function () {
    main();
});