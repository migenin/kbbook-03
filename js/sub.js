//책 종류 mouseenter/leave
        $(function () {
            $('.book_type>li').mouseenter(function () {
                $(this).children('.book_type_sub').stop().show();
            }).mouseleave(function () {
                $('.book_type_sub').stop().hide();
            });
        });

        //주문수량 plus/mimus
        $(function () {
            var i = 1
            $(".plus_btn").click(function () {
                i++;
                $("#book_count").val(i);
            });
            $(".minus_btn").click(function () {
                i--;
                if (i < 1) {
                    alert("최소 주문수량은 1개입니다.");
                    i = 1;
                }
                $("#book_count").val(i);
            });
        });

        // #purchase 함께 구매한 도서목록 api
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "사람", size: 18 },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('purchase_book_img');

                for (var i = 0; i < box_img.length; i++) {
                    var str = msg.documents[i].title;
                    var str2 = str.substring(0, 23);

                    if (str2.split("").length > 20) {
                        str2 += "..."
                    }

                    $(".purchase_book_box > div").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".purchase_book_box > div").eq(i).append("<h5>" + '<a href="#">' + str2 + "</a>" + "</h5>");
                    $(".purchase_book_box > div").eq(i).append("<h6>" + msg.documents[i].sale_price + "원</h6>");
                }
            });

        $(function () {
            //purchase_prev show/hide
            var i = 0
            $(".purchase_prev").click(function () {
                i--;
                if (i < 0) {
                    i = 2
                };
                $(".purchase_book_wrap").stop().hide();
                $(".purchase_book_wrap").eq(i).stop().show();
            });

            //purchase_next show/hide
            var i = 0
            $(".purchase_next").click(function () {
                i++;
                if (i > 2) {
                    i = 0
                };
                $(".purchase_book_wrap").stop().hide();
                $(".purchase_book_wrap").eq(i).stop().show();
            });
        });

        // .side_product 베스트 도서 api
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "기분" },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('side_img');

                for (var i = 0; i < box_img.length; i++) {

                    $(".side_product_best > div > .side_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".side_product_best > div > .side_text").eq(i).append("<h5>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h5>");
                    $(".side_product_best > div > .side_text").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
                    $(".side_product_best > div > .side_text").eq(i).append("<h6>" + msg.documents[i].sale_price + "원</h6>");
                }
            });

        // .side_product 신간 도서 api    
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "오늘" },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('side_img');

                for (var i = 0; i < box_img.length; i++) {

                    $(".side_product_new > div > .side_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".side_product_new > div > .side_text").eq(i).append("<h5>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h5>");
                    $(".side_product_new > div > .side_text").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
                    $(".side_product_new > div > .side_text").eq(i).append("<h6>" + msg.documents[i].sale_price + "원</h6>");
                }
            });
            
        // 김다슬 작가 도서 api
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "김다슬" },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('list_img');

                for (var i = 0; i < box_img.length; i++) {
                    var str = msg.documents[i].title;
                    var str2 = str.substring(0, 20);

                    if (str2.split("").length > 17) {
                        str2 += "..."
                    }

                    $(".work_list > div > .list_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".work_list > div > .list_text").eq(i).append("<h5>" + '<a href="#">' + str2 + "</a>" + "</h5>");
                }
            });

        //목차 파일 연결
        $(function () {
            $.get("./txt/index_intro.txt", function (data) {
                $(".index_intro").html(data);
            })
        });
        //책 속으로 파일 연결
        $(function () {
            $.get("./txt/into_book.txt", function (data) {
                $(".into_book").html(data);
            })
        });
        //출판사 서평 연결
        $(function () {
            $.get("./txt/publisher.txt", function (data) {
                $(".publisher_review").html(data);
            })
        });


        //목차 show/hide
        $(function () {
            $(".index_btn").eq(0).click(function () {
                $(".index_intro").height("auto");
                $(".index_btn").eq(0).hide();
                $(".index").show();
                $(".index_btn").eq(1).show();
            });
        });

        $(function () {
            $(".index_btn").eq(1).click(function () {
                $(".index_intro").height("auto");
                $(".index_btn").eq(1).hide();
                $(".index").hide();
                $(".index_btn").eq(0).show();
            });
        });


        //책 속으로 show/hide
        $(function () {
            $(".index_btn2").eq(0).click(function () {
                $(".into_book").height("auto");
                $(".index_btn2").eq(0).hide();
                $(".index2").show();
                $(".index_btn2").eq(1).show();
            });
        });

        $(function () {
            $(".index_btn2").eq(1).click(function () {
                $(".into_book").height("auto");
                $(".index_btn2").eq(1).hide();
                $(".index2").hide();
                $(".index_btn2").eq(0).show();
            });
        });

        //출판사 서평 show/hide
        $(function () {
            $(".index_btn3").eq(0).click(function () {
                $(".publisher_review").height("auto");
                $(".index_btn3").eq(0).hide();
                $(".index3").show();
                $(".index_btn3").eq(1).show();
            });
        });

        $(function () {
            $(".index_btn3").eq(1).click(function () {
                $(".publisher_review").height("auto");
                $(".index_btn3").eq(1).hide();
                $(".index3").hide();
                $(".index_btn3").eq(0).show();
            });
        });