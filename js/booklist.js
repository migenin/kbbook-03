//booklist
        $(function () {

            var i = 0;
            $(".book_list_prev").click(function () {
                i--;
                if (i < $(".book_list_slide:first").index()) {
                    i = $(".book_list_slide:last").index();
                };

                $(".book_list_slide").stop().hide();
                $(".book_list_slide").eq(i).stop().show();
            });


            var i = 0;
            $(".book_list_next").click(function () {
                i++;
                if (i > $(".book_list_slide:last").index()) {
                    i = 0;
                };
                $(".book_list_slide").stop().hide();
                $(".book_list_slide").eq(i).stop().show();

            });
        });