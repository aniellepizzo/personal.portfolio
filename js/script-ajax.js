var default_content = "";

$(document).ready(function(){
	
    var link = $("nav.menu-topo ul li a"); 
    
	checkURL();
	$(link).click(function (e){

			checkURL(this.hash);

	});
	
	//filling in the default content
    homePage = $("<div class='container index'><div class='container-cat'><div class='z um animated fadeInUpZ'><img src='images/z-01.png'/></div><div class='z dois animated fadeInUpZ'><img src='images/z-02.png'/></div><div class='z tres animated fadeInUpZ'><img src='images/z-03.png'/></div></div></div>");
    
	default_content = $('#pageContent').html(homePage);	
	
	setInterval("checkURL()",250);
	
});

var lasturl="";

function checkURL(hash)
{
	if(!hash) hash=window.location.hash;
	
	if(hash != lasturl)
	{
		lasturl=hash;
		
		// FIX - if we've used the history buttons to return to the homepage,
		// fill the pageContent with the default_content
		
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
                $("#pageContent .container").addClass("animated fadeIn");
				$('#loading').css('visibility','hidden');
			}
		}
		
	});

}
