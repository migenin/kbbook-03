$(function () {
            $('#top_banner > .top_close').click(function () {
                $("#top_banner_wrap").stop().slideUp();
            });
        });

$(function () {
            $('.store').mouseover(function () {
                $('#header_box_store').stop().slideDown();
            }).mouseout(function () {
                $('#header_box_store').stop().slideUp();

            });
        });

        $(function () {
            $('.membership').mouseover(function () {
                $('.membership_club').stop().slideDown();
            }).mouseout(function () {
                $('.membership_club').stop().slideUp();

            });
        });

 $(function () {
            var i = 0;
            function text_next() {
                i++;
                if (i > 2) {
                    i = 0
                };
                $('#header_search>.wordlist').stop().hide();
                $('#header_search>.wordlist').eq(i).stop().show();
            };
            $("#header_search").find('.btn_next').click(function () {
                text_next();
            });
            var i = 0;
            function text_prev() {
                i--;
                if (i < 0) {
                    i = 2
                };
                $('#header_search>.wordlist').stop().hide();
                $('#header_search>.wordlist').eq(i).stop().show();
            };
            $("#header_search").find('.btn_prev').click(function () {
                text_prev();
            });
        });

$(function () {
            var i = 0;
            function btn_next() {
                i++;
                if (i > 4) {
                    i = 0
                };
                $("#header_banner > ul > li").stop().hide();
                $("#header_banner > ul > li").eq(i).stop().show();
                $("#header_banner").find(".page").text((i + 1) + "/5")
            };
            $("#header_banner").find(".btn_next").click(function () {
                btn_next();
            });
            var i = 0;
            function btn_prev() {
                i--;
                if (i < 0) {
                    i = 4
                };
                $("#header_banner > ul > li").stop().hide();
                $("#header_banner > ul > li").eq(i).stop().show();
                $("#header_banner").find(".page").text((i + 1) + "/5")
            };
            $("#header_banner").find(".btn_prev").click(function () {
                btn_prev();
            });
        });