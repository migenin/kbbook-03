$.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "소설", size: 3 },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('sample_book_img');

                for (var i = 0; i < box_img.length; i++) {
                    $(".sample_book > .sample_book_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".sample_book > .sample_book_img").eq(i).append("<h4>" + '<a href="#">' + msg.documents[i].authors + "</a>" + "</h4>");
                    $(".sample_book > .sample_book_img").eq(i).append("<h2>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h2>");
                    var str = msg.documents[i].contents;
                    var str2 = str.substring(0, 30);
                }
            });