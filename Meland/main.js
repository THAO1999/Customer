$(function() {
    let classList = document.getElementsByClassName("opacity-hover");
    for (let i = 0; i < classList.length; i++) {
        classList[i].classList.add("opacity-0");
    }


    $(".hover-one").hover(
        function() {
            let classList = document.getElementsByClassName("opacity-hover");
            for (let i = 0; i < classList.length; i++) {
                classList[i].classList.remove("opacity-0");
            }
            $(this).find(".opacity-hover").addClass("opacity-0")
            $(".play-now").css("opacity", "0");
            $(".meland__text").css("display", "none");
            $(".community__text").css("display", "block")
        },
        function() {
            let classList = document.getElementsByClassName("opacity-hover");
            for (let i = 0; i < classList.length; i++) {
                classList[i].classList.add("opacity-0");
            }
            $(".play-now").css("opacity", "1");
            $(".meland__text").css("display", "block");
            $(".community__text").css("display", "none")
        }
    );
    $(".hover-second").hover(
        function() {
            let classList = document.getElementsByClassName("opacity-hover");
            for (let i = 0; i < classList.length; i++) {
                classList[i].classList.remove("opacity-0");
            }
            $(this).find(".opacity-hover").addClass("opacity-0")
            $(".play-now").css("opacity", "0");
            $(".meland__text").css("display", "none");
            $(".create__text").css("display", "block")
        },
        function() {
            let classList = document.getElementsByClassName("opacity-hover");
            for (let i = 0; i < classList.length; i++) {
                classList[i].classList.add("opacity-0");
            }
            $(".play-now").css("opacity", "1");
            $(".meland__text").css("display", "block");
            $(".create__text").css("display", "none")
        }
    );
    $(".hover-third").hover(
        function() {
            let classList = document.getElementsByClassName("opacity-hover");
            for (let i = 0; i < classList.length; i++) {
                classList[i].classList.remove("opacity-0");
            }
            $(this).find(".opacity-hover").addClass("opacity-0")
            $(".play-now").css("opacity", "0");
            $(".learn__text").css("display", "block");
            $(".meland__text").css("display", "none")
        },
        function() {
            let classList = document.getElementsByClassName("opacity-hover");
            for (let i = 0; i < classList.length; i++) {
                classList[i].classList.add("opacity-0");
            }
            $(".play-now").css("opacity", "1");
            $(".meland__text").css("display", "block");
            $(".learn__text").css("display", "none")
        }
    );
    $(".hover-four").hover(
        function() {
            let classList = document.getElementsByClassName("opacity-hover");
            for (let i = 0; i < classList.length; i++) {
                classList[i].classList.remove("opacity-0");
            }
            $(this).find(".opacity-hover").addClass("opacity-0")
            $(".play-now").css("opacity", "0")
            $(".play__text").css("display", "block");
            $(".meland__text").css("display", "none")
        },
        function() {
            let classList = document.getElementsByClassName("opacity-hover");
            for (let i = 0; i < classList.length; i++) {
                classList[i].classList.add("opacity-0");
            }
            $(".play-now").css("opacity", "1")
            $(".meland__text").css("display", "block");
            $(".play__text").css("display", "none")
        }
    );

    $('.slick-track').slick({
        autoplay: true,
        dots: true,
        slidesToScroll: 1,
    })
    $(".menu-js").click(function() {
        $(".invisible-mobile").css("visibility", "unset")
        $(".item-menu ").removeClass("-right-full");
        $(".menu-js").css("display", "none")
        $(".close-js").css("display", "block")

    });
    $(".close-js").click(function() {

        $(".invisible-mobile").css("visibility", "hidden")
        $(".item-menu ").addClass("-right-full");
        $(".menu-js").css("display", "block");
        $(".close-js").css("display", "none")


    });
    // $(".item-menu ").addClass("")

});