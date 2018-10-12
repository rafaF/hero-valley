(function () {
    "use strict";

    const COMPONENT_ID = 'scrollButton'; 

    var scrollButton = document.getElementById(COMPONENT_ID);

    $(scrollButton).on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
})()