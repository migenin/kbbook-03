//today mouseenter-leave
        $(function () {

            $("#today_books>.today_title > ul > li").mouseenter(function () {
                $(".today_book").stop().hide();
                $(".today_book").eq($(this).index()).stop().show();

                $("#today_books>.today_title > ul > li").css({
                    backgroundColor: "#fff",
                    color: "#000"
                })
                $(this).css({
                    backgroundColor: "#9cafe9",
                    color: "#fff"
                })
            }).mouseleave(function () {
                $("#today_books>.today_title > ul > li").css({
                    backgroundColor: "#fff",
                    color: "#000"
                })
                $(this).css({
                    backgroundColor: "#9cafe9",
                    color: "#fff"
                })
            })

            // today_prev
            var i = 0;
            $(".today_prev").click(function () {
                i--;
                if (i < $(this).parent().children("img:first").index()) {
                    i = $(this).parent().children("img:last").index();
                };

                $(this).parent().children("img").stop().hide();
                $(this).parent().children("img").eq(i).stop().show();

                $
            });

            // today_next
            var i = 0;
            $(".today_next").click(function () {
                i++;
                if (i > $(this).parent().children("img:last").index()) {
                    i = 0;
                };
                $(this).parent().children("img").stop().hide();
                $(this).parent().children("img").eq(i).stop().show();

            });
    });
      