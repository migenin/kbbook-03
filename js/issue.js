//issue mouseenter-leave
        $(function () {

            $("#hot_issue>.issue_title > ul > li").mouseenter(function () {
                $(".issue_box").stop().hide();
                $(".issue_box").eq($(this).index()).stop().show();

                $("#hot_issue>.issue_title > ul > li").css({
                    backgroundColor: "#fff",
                    color: "#000"
                })
                $(this).css({
                    backgroundColor: "#9cafe9",
                    color: "#fff"
                })
            }).mouseleave(function () {
                $("#hot_issue> .issue_title > ul > li").css({
                    backgroundColor: "#fff",
                    color: "#000"
                })
                $(this).css({
                    backgroundColor: "#9cafe9",
                    color: "#fff"
                })
            })



            // issue_prev
            var i = 0;
            $(".issue_prev").click(function () {
                i--;
                if (i < $(".issue_book:first").index()) {
                    i = $(".issue_book:last").index();
                };

                $(".issue_book").stop().hide();
                $(".issue_book").eq(i).stop().show();
            });

            // issue_next
            var i = 0;
            $(".issue_next").click(function () {
                i++;
                if (i > $(".issue_book:last").index()) {
                    i = 0;
                };
                $(".issue_book").stop().hide();
                $(".issue_book").eq(i).stop().show();

            });

            // issue_prev
            var i = 0;
            $(".issue_prev2").click(function () {
                i--;
                if (i < $(".issue_book2:first").index()) {
                    i = $(".issue_book2:last").index();
                };

                $(".issue_book2").stop().hide();
                $(".issue_book2").eq(i).stop().show();
            });

            // issue_next
            var i = 0;
            $(".issue_next2").click(function () {
                i++;
                if (i > $(".issue_book2:last").index()) {
                    i = 0;
                };
                $(".issue_book2").stop().hide();
                $(".issue_book2").eq(i).stop().show();

            });

            // issue_prev
            var i = 0;
            $(".issue_prev3").click(function () {
                i--;
                if (i < $(".issue_book3:first").index()) {
                    i = $(".issue_book3:last").index();
                };

                $(".issue_book3").stop().hide();
                $(".issue_book3").eq(i).stop().show();
            });

            // issue_next
            var i = 0;
            $(".issue_next3").click(function () {
                i++;
                if (i > $(".issue_book3:last").index()) {
                    i = 0;
                };
                $(".issue_book3").stop().hide();
                $(".issue_book3").eq(i).stop().show();

            });

            // issue_prev
            var i = 0;
            $(".issue_prev4").click(function () {
                i--;
                if (i < $(".issue_book4:first").index()) {
                    i = $(".issue_book4:last").index();
                };

                $(".issue_book4").stop().hide();
                $(".issue_book4").eq(i).stop().show();
            });

            // issue_next
            var i = 0;
            $(".issue_next4").click(function () {
                i++;
                if (i > $(".issue_book4:last").index()) {
                    i = 0;
                };
                $(".issue_book4").stop().hide();
                $(".issue_book4").eq(i).stop().show();

            });

            // issue_prev
            var i = 0;
            $(".issue_prev5").click(function () {
                i--;
                if (i < $(".issue_book5:first").index()) {
                    i = $(".issue_book5:last").index();
                };

                $(".issue_book5").stop().hide();
                $(".issue_book5").eq(i).stop().show();
            });

            // issue_next
            var i = 0;
            $(".issue_next5").click(function () {
                i++;
                if (i > $(".issue_book5:last").index()) {
                    i = 0;
                };
                $(".issue_book5").stop().hide();
                $(".issue_book5").eq(i).stop().show();

            });
        });