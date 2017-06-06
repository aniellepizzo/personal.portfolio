$(function () {
    //active botoes menu

    var botao = $("nav.menu-topo ul li a");

    $(botao).click(function(e) {
        var $this = $(this);
        $this.parent().siblings().removeClass('active').end().addClass('active');
        //e.preventDefault();
    }); 
    
$(botao).filter(function() {
    return this.href.pathname === window.location.pathname;
).addClass("teste"); 
    
});