// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the header
var nav__bar = document.getElementById("accordionSidebar").offsetTop;
var content_wrap = document.getElementById("content__wrap");
var windowWidth = screen.width;
var windowSm = 1023;
window.addEventListener('resize', function(event) {
    location.reload();
}, true);

// Get the offset position of the navbar

// console.log(header__search)
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > nav__bar) {
        // nav__bar.style.display = "block";
        console.log(222)
            // document.getElementsByClassName("sidebar").style.position = "initial"
        document.getElementById("accordionSidebar").classList.add("navbar-nav-fix");

        document.getElementById("accordionSidebar").firstElementChild.style.marginTop = "0";
        if (windowWidth > windowSm)
            content_wrap.style.marginLeft = "225px";


    } else {
        document.getElementById("accordionSidebar").classList.remove("navbar-nav-fix");
        content_wrap.style.marginLeft = "0";

    }
}


// test


let content = document.getElementById('content-total');
// console.log(content.firstElementChild);
console.log(document.querySelector(".content-total>li"));