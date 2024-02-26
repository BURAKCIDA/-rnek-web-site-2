$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            720: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    })
})
/********OWL CARUSEL END****** */
jQuery(document).ready(($) => {
    $('.quantity').on('click', '.plus', function (e) {
        let $input = $(this).prev('input.qty');
        let val = parseInt($input.val());
        $input.val(val + 1).change();
    });

    $('.quantity').on('click', '.minus',
        function (e) {
            let $input = $(this).next('input.qty');
            let val = parseInt($input.val());
            if (val > 0) {
                $input.val(val - 1).change();
            }
        });
});

(function () {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();