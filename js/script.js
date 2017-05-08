$(function(){
    //PAGINAS EM AJAX    
    
    var default_content="";

    $(document).ready(function(){

        var link = $("nav.menu-topo ul li a");

        checkURL();
        $(link).click(function (e){
                checkURL(this.hash);
        });

        //filling in the default content
        default_content = $('#pageContent').html();


        setInterval("checkURL()",250);

    });

    var lasturl="";

    function checkURL(hash)
    {
        if(!hash) hash=window.location.hash;

        if(hash != lasturl)
        {
            lasturl=hash;

            if(hash=="")
            $('#pageContent').html(default_content);

            else
            loadPage(hash);
        }
    }

    function loadPage(url)
    {
        url=url.replace('#page','');

        $('#loading').css('visibility','visible');

        $.ajax({
            type: "POST",
            url: "load_page.php",
            data: 'page='+url,
            dataType: "html",
            success: function(msg){

                if(parseInt(msg)!=0)
                {
                    $('#pageContent').html(msg);
                    $('#pageContent h1').fadeIn();
                    $('#loading').css('visibility','hidden');
                }
            }

        });

    }    
    
})