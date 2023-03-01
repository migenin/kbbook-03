$(function () {

            var bgc = ["#e6e9f6", "#a8daff", "#e4f1d3", "#daecf0", "#f8f4d8", "#def3e4", "#fbeaef"]
            var change_box = $(".slider_main_box > div");

            $("#slider_main_btn > li").mouseover(function () {
                $("#slider_wrap").css("background-color", bgc[$(this).index()]);
                change_box.stop().hide();
                change_box.eq($(this).index()).stop().show();

                $("#slider_main_btn > li").removeClass("s_btn");
                $(this).addClass("s_btn");
            }).mouseleave(function () {
                $("#slider_main_btn > li").removeClass("s_btn");
                $(this).addClass("s_btn");
            });

            var i = 0

            function auto_slider() {
                i++;

                if (i > $(".slider_main_box > div:last").index()) {
                    i = 0;
                };

                $("#slider_wrap").css("background-color", bgc[i]);
                change_box.stop().hide();
                change_box.eq(i).stop().show();
                $("#slider_main_btn > li").removeClass("s_btn");
                $("#slider_main_btn > li").eq(i).addClass("s_btn");
            }

            setInterval(auto_slider, 3000)
        });

$(function () {
            $('.slider_sub_mini2 .close').click(function () {
                $(".slider_sub_mini2").stop().hide();
            });
        });

        $(function () {
            $('.slider_sub_mini3 .close').click(function () {
                $(".slider_sub_mini3").stop().hide();
            });
        });