$(function () {
    //active botoes menu

    var botao = $("nav.menu-topo ul li");

    $(botao).click(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    });

});