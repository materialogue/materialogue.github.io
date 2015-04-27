//// Front cover reveal

// Cover callback
function coverCallback2(){
    var $cover = $('.cover');

    $cover.animate({
        'top': '100%',
        'opacity': 0
    }, 'slow');
    setTimeout(function () {
        $cover.hide();
    }, 1000);
}

function coverCallback1(){
    var $cover = $('.cover'),
        $titleBar = $('.page-title');

    var dropHeight = $titleBar.height() + 2;

    $cover.animate({
        'top': dropHeight
    }, 'fast');

    setTimeout(coverCallback2, 1000);
}

// Reveal page
function coverReveal() {
    var $cover = $('.cover'),
        titleHeight = $('.page-title').height();

    $cover.css('top', titleHeight);
    $cover.show();
    setTimeout(coverCallback1, 1000);
}

////Menu items

// Add hover callback
function menuHover(menuId) {

    var $menuItem = $('#' + menuId),
        $menuItems = $('.menu-item'),
        $menuTarget = $('#' + menuId.split('a-')[1]),
        $sections = $('.span-10'),
        $currentDisplay = $('.current-display');

    //console.log('#' + menuId.split('a-')[1])
    //console.log($currentDisplay);

    if ( $menuTarget ) {
        //console.log(menuTarget);
        $menuItems.css({
            'border-left': '4px solid transparent',
            'padding-left': '0px'
        });
        $menuItem.css({
            'border-left': '4px solid #000000',
            'padding-left': '2.1%'
        });

        if ( $menuTarget.hasClass('current-display') ) {
            //
        } else {
            $currentDisplay.removeClass('current-display');
            $sections.hide();
            $menuTarget.fadeIn('fast');
            $menuTarget.addClass('current-display');
        }
    } else {
        //
    }

}


//// Main function - stringing it all together!
function main() {
    coverReveal();
    menuHover('a-sci-stories');
    $('.menu-item').mouseenter( function () {
        menuHover(this.id);
    });
}

//// Make sure to wait for the page to load before executing
$(document).ready(main);
