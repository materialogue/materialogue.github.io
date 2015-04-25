////Menu items

// Add hover callback
function menuHover(menuId) {

    var $menuItem = $('#' + menuId),
        $menuItems = $('.menu-item'),
        $menuTarget = $('#' + menuId.split('a-')[1]),
        $sections = $('.span-10');

    //console.log('#' + menuId.split('a-')[1])

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
        $sections.hide();
        $menuTarget.fadeIn('fast');
    } else {
        //
    }

}


//// Main function - stringing it all together!
function main() {
    menuHover('a-sci-stories');
    $('.menu-item').mouseenter( function () {
        menuHover(this.id);
    });
}

//// Make sure to wait for the page to load before executing
$(document).ready(main);
