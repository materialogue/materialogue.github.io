////Menu items

// Add hover callback
function menuHover(menuId) {

    var $menuItem = $('#' + menuId),
        $menuItems = $('.menu-item'),
        $menuTarget = $('#' + menuId.split('a-')[1]),
        $sections = $('.col2');

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
    $('.menu-item').mouseenter( function () {
        menuHover(this.id);
    });
}

//// Make sure to wait for the page to load before executing
$(document).ready(main);
