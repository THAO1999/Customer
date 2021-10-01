import $ from 'jquery';

const chart = () => {
    const charts = $('.c-chart__item .chart-slider__wrap');

    if (charts.length > 0) {
        let chartAnimated = false;

        function chartAnimation() {
            charts.each(function() {
                const el = $(this),
                    size = el.data('size'),
                    percent = el.data('percent'),
                    line = el.data('line');

                let index = 0;

                const timer = setInterval(function() {
                    if (index >= percent) {
                        clearInterval(timer);
                    } else {
                        el.attr('style', '--size: ' + size + '; --percent: ' + index + '; --line: ' + line + ';');
                        index++;
                    }
                }, 30);
            });
        }

        function onScroll() {
            if (!chartAnimated) {
                if ($(window).scrollTop() > $('.b-distribution').offset().top - $(window).height() + 600) {
                    chartAnimation();
                    chartAnimated = true;
                }
            }
        }

        $(window).on('scroll', onScroll);

        onScroll();
    }

}

export default chart;