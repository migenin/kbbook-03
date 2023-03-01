$(function () {
            $('.main_nav>li').mouseover(function () {
                $(this).children('.main_nav_sub').stop().slideDown();
            }).mouseout(function () {
                $('.main_nav_sub').stop().slideUp();
            });
        });

        $(function () {
            $('.main_nav>li').mouseover(function () {
                $(this).children('#main_nav_sub').stop().slideDown();
            }).mouseout(function () {
                $('#main_nav_sub').stop().slideUp();
            });
        });