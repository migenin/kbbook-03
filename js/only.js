        $(function () {
            $('.only_prev').click(function () {
                $('.only_b:last').prependTo('.only_b_wrap');
                $('.only_b_wrap').css('margin-left', -802);
                $('.only_b_wrap').stop().animate({ marginLeft: 0 }, 800);
            });

            $('.only_next').click(function () {
                $('.only_b_wrap').stop().animate({ marginLeft: -802 },
                    function () {
                        $('.only_b:first').appendTo('.only_b_wrap');
                        $('.only_b_wrap').css({ marginLeft: 0 });
                    });
            });
        });

        /*function slide() {
            $('.only_b_wrap').stop().animate({ marginLeft: -802 }, function () {
                $('.only_b:first').appendTo('.only_b_wrap');
                $('.only_b_wrap').css({ marginLeft: 0 });
            });
        }
        setInterval(slide, 3000);*/
