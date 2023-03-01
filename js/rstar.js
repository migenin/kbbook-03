$(function () {
            $('.rstar_prev').click(function () {
                $('.rstar_slide li:last').prependTo('.rstar_slide');
                $('.rstar_slide').css('margin-left', -817);
                $('.rstar_slide').stop().animate({ marginLeft: 0 }, 0)
            });

            $('.rstar_next').click(function () {
                $('.rstar_slide').stop().animate({ marginLeft: -817 }, 0, function () {
                    $('.rstar_slide li:first').appendTo('.rstar_slide');
                    $('.rstar_slide').css({ marginLeft: 0 });
                });
            });
        });