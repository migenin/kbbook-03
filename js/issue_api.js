$.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "변호사", size: 12 },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('issue_book_img');

                for (var i = 0; i < box_img.length; i++) {
                    $(".issue_book > .issue_book_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".issue_book > .issue_book_img").eq(i).append("<h4>" + '<a href="#">' + msg.documents[i].authors + "</a>" + "</h4>");
                    $(".issue_book > .issue_book_img").eq(i).append("<h2>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h2>");
                    var str = msg.documents[i].contents;
                    var str2 = str.substring(0, 30);
                }
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "joy", size: 12 },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('issue_book_img');

                for (var i = 0; i < box_img.length; i++) {
                    $(".issue_book2 > .issue_book_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".issue_book2 > .issue_book_img").eq(i).append("<h4>" + '<a href="#">' + msg.documents[i].authors + "</a>" + "</h4>");
                    $(".issue_book2 > .issue_book_img").eq(i).append("<h2>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h2>");
                    var str = msg.documents[i].contents;
                    var str2 = str.substring(0, 30);
                }
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "이슈", size: 12 },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('issue_book_img');

                for (var i = 0; i < box_img.length; i++) {
                    $(".issue_book3 > .issue_book_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".issue_book3 > .issue_book_img").eq(i).append("<h4>" + '<a href="#">' + msg.documents[i].authors + "</a>" + "</h4>");
                    $(".issue_book3 > .issue_book_img").eq(i).append("<h2>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h2>");
                    var str = msg.documents[i].contents;
                    var str2 = str.substring(0, 30);
                }
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "투자", size: 12 },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('issue_book_img');

                for (var i = 0; i < box_img.length; i++) {
                    $(".issue_book4 > .issue_book_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".issue_book4 > .issue_book_img").eq(i).append("<h4>" + '<a href="#">' + msg.documents[i].authors + "</a>" + "</h4>");
                    $(".issue_book4 > .issue_book_img").eq(i).append("<h2>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h2>");
                    var str = msg.documents[i].contents;
                    var str2 = str.substring(0, 30);
                }
            });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "음반", size: 12 },
            headers: { Authorization: "KakaoAK 5190f3abb2a47921b8639c26635927af" }
        })
            .done(function (msg) {
                console.log(msg);
                var box_img = document.getElementsByClassName('issue_book_img');

                for (var i = 0; i < box_img.length; i++) {
                    $(".issue_book5 > .issue_book_img").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "' />" + "</a>");
                    $(".issue_book5 > .issue_book_img").eq(i).append("<h4>" + '<a href="#">' + msg.documents[i].authors + "</a>" + "</h4>");
                    $(".issue_book5 > .issue_book_img").eq(i).append("<h2>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h2>");
                    var str = msg.documents[i].contents;
                    var str2 = str.substring(0, 30);
                }
            });