$(document).ready(function () {
    $(window).on('load', function () {
        "use strict";
        $(".animation .parent").fadeOut(1000, function () {
            $(this).parent().animate({
                height: '0'
            }, 1000);
        });
    });
    $("article:first-of-type:first-of-type").height($(window).height());
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $("nav").css({
                "backgroundColor": "#efefef",
                "-webkit-box-shadow": "0px 2px 8px #5555552e",
                'padding': '8px 0',
                "transition": "all 0.5s linear"
            });
            $("nav ul li a").css({
                "color": "#676767",
                "font-weight": "bold"
            })
            $("nav img").css({
                "marginTop": "0"
            })
        } else if ($(document).scrollTop() == 0) {
            $("nav").css({
                "backgroundColor": "transparent",
                "-webkit-box-shadow": "none",
                'padding': '25px 0',
                "transition": "all 0.5s linear"
            });
            $("nav ul li a").css({
                "color": "#fff"
            })
            $("nav img").css({
                "marginTop": "10px"
            })
        }
    });

    $(".accordion header").each(function () {
        $(this).click(function () {
            if ($(this).next().css("display") == "none") {
                $(this).next().slideDown(1000);
                $(this).css({
                    "backgroundColor": "rgba(243, 156, 18, 1)",
                    "color": "#fff"
                })
                $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
                $(this).parent().siblings().find(".check").slideUp(1000);
                $(this).parent().siblings().find("header").css({
                    "backgroundColor": "#efefef",
                    "color": "black"
                });
                $(this).parent().siblings().find("i").removeClass("fa-minus").addClass("fa-plus");
            } else {
                $(this).next().slideUp(1000);
                $(this).css({
                    "backgroundColor": "#efefef",
                    "color": "black"
                });
                $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
            }
        });
    });

    $("body").scroll(function () {
        var x = $("body").offset();
    });


    $("nav .menu>ul>li>a").click(function (e) {
        e.preventDefault();

        $("html , body").animate({
                scrollTop: $("#" + $(this).data("s")).offset().top - 80
            },
            1000
        );
    });

    $(".portfolio .links button").click(function () {
        $(this).css("color", "#f39c12");
        $(this).siblings().css("color", "#272727")
        var p = $(this).data("p");
        for (var t = 0; t < $(".fillter").children().length; t++) {
            if ($(".fillter").children().eq(t).hasClass(p)) {
                $(".fillter").children().eq(t).css({
                    'max-width': '33.333333%',
                    'opacity': '1'
                })

                $(".fillter").children().eq(t).siblings().not('.' + p).css({
                    'opacity': 0
                }, ).css({
                    'max-width': '0px',
                }, );

            } else if (p === "all") {
                $(".fillter").children().css({
                    'max-width': '33.333333%',
                    'opacity': '1'
                })


            }
        }
    });


});
/*$(".accordion:first-of-type .check ").css("display", "block");*/

/*$(".accordion header").mouseover(function(){
    $(this).css({"backgroundColor":"rgba(243, 156, 18, 1)","color":"#fff"})
    $(this).parent().siblings().find("header").css({"backgroundColor":"#efefef","color":"black"});

})

$(".accordion header").mouseleave(function(){
    $(this).css({"backgroundColor":"rgba(243, 156, 18, 1)","color":"#fff"})
    

})*/
/*$("head").append($('<style>div:after { content: " World" }</style>')); */