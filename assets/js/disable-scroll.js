

function disableScroll(){
    // Get the current page scroll position
    scrollY = document.documentElement.scrollTop;
    scrollX = document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function(){
        window.scrollTo(scrollX, scrollY);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}