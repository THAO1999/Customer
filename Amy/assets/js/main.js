var trade = document.getElementById("trade__text-js")
var topTrade = trade.offsetTop;
var assembly = document.getElementById("assembly-js").offsetTop;
var leverage = document.getElementById("leverage-js").offsetTop;
var golden = document.getElementById("golden-js").offsetTop;
var mining = document.getElementById("mining-js").offsetTop;
// content
document.getElementById("hero-logo").classList.add("svg-js");
document.getElementById("header-hide-js").classList.add("header-hide-js");
document.getElementById("trade__text-js").classList.add("trade__txt-js");
document.getElementById("trade__btn-js").classList.add("trade__btn-js");
document.getElementById("trade__title-js").classList.add("trade__title-js");

window.addEventListener("scroll", function() {
    var x = pageYOffset;
    // header
    if (x >= topTrade) {

        document.getElementById("header-hide-js").classList.add("header-show");
        document.getElementById("header-hide-js").classList.remove("header-hide");
        // content
        document.getElementById("hero-logo").classList.remove("svg-js");
        document.getElementById("header-hide-js").classList.remove("header-hide-js");
        document.getElementById("trade__text-js").classList.remove("trade__txt-js");
        document.getElementById("trade__btn-js").classList.remove("trade__btn-js");
        document.getElementById("trade__title-js").classList.remove("trade__title-js");



    } else {
        document.getElementById("header-hide-js").classList.add("header-hide");
        document.getElementById("header-hide-js").classList.remove("header-show");
        // content
        document.getElementById("hero-logo").classList.add("svg-js");
        document.getElementById("header-hide-js").classList.add("header-hide-js");
        document.getElementById("trade__text-js").classList.add("trade__txt-js");
        document.getElementById("trade__btn-js").classList.add("trade__btn-js");
        document.getElementById("trade__title-js").classList.add("trade__title-js");

    }
    if (x >= assembly) {
        document.getElementById("mining__img-js").classList.add("mining__img-js");
        document.getElementById("assembly__img-js").classList.add("assembly__img-js");
        document.getElementById("leverage__img-js").classList.remove("leverage__img-js");
    }
    if (x >= leverage) {

        document.getElementById("leverage__img-js").classList.add("leverage__img-js");
        document.getElementById("assembly__img-js").classList.remove("assembly__img-js");
        document.getElementById("golden-no--wrap-js").classList.remove("golden-no--wrap-js");
        document.getElementById("golden-iq--wrap-js").classList.remove("golden-iq--wrap-js");
        document.getElementById("golden-generation--wrap-js").classList.remove("golden-generation--wrap-js");
        document.getElementById("golden-type--wrap-js").classList.remove("golden-type--wrap-js");
        document.getElementById("golden__img-js").classList.remove("golden__img-js");
    }
    if (x >= golden) {
        document.getElementById("leverage__img-js").classList.remove("leverage__img-js");
        document.getElementById("golden-no--wrap-js").classList.add("golden-no--wrap-js");
        document.getElementById("golden-iq--wrap-js").classList.add("golden-iq--wrap-js");
        document.getElementById("golden-generation--wrap-js").classList.add("golden-generation--wrap-js");
        document.getElementById("golden-type--wrap-js").classList.add("golden-type--wrap-js");
        document.getElementById("golden__img-js").classList.add("golden__img-js");
        document.getElementById("mining__img-js").classList.remove("mining__img-js");
    }
    if (x > mining) {
        document.getElementById("golden-no--wrap-js").classList.remove("golden-no--wrap-js");
        document.getElementById("golden-iq--wrap-js").classList.remove("golden-iq--wrap-js");
        document.getElementById("golden-generation--wrap-js").classList.remove("golden-generation--wrap-js");
        document.getElementById("golden-type--wrap-js").classList.remove("golden-type--wrap-js");
        document.getElementById("golden__img-js").classList.remove("golden__img-js");
        document.getElementById("mining__img-js").classList.add("mining__img-js");

    }

    // mobile munu

    document.getElementById("open-icon").addEventListener("click", openMenu);
    document.getElementById("close-icon").addEventListener("click", closeMenu);

    function openMenu() {
        document.getElementById("menu-mobile-js").style.display = "block";
        document.getElementById("open-icon").style.display = "none";
        document.getElementById("close-icon").style.display = "block"
    }

    function closeMenu() {
        document.getElementById("menu-mobile-js").style.display = "none";
        document.getElementById("close-icon").style.display = "none"
        document.getElementById("open-icon").style.display = "block";

    }
})