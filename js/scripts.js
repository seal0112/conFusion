$(document).ready(function() {
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function() {
        if ($("#carousel-button").children("i").hasClass('fa-pause')) {
            $("#mycarousel").carousel("pause");
            $("#carousel-button").children('i').removeClass("fa-pause");
            $("#carousel-button").children('i').addClass("fa-play");
        }else if ($("#carousel-button").children('i').hasClass("fa-play")) {
            $("#mycarousel").carousel("cycle");
            $("#carousel-button").children('i').removeClass("fa-play");
            $("#carousel-button").children('i').addClass("fa-pause");
        }
    });
});