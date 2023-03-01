//brand
        $(function () {
            $(".book_brand_title > ul > li").mouseenter(function () {
                $(".book_brand_box_wrap").stop().hide();
                $(".book_brand_box_wrap").eq($(this).index()).stop().show();

                $(".book_brand_title > ul > li").removeClass();
                $(this).addClass("dot_hover");
            }).mouseleave(function () {
                $(".book_brand_title > ul > li").removeClass();
                $(this).addClass("dot_hover");
            });
        });