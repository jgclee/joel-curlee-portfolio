$(document).ready(function(){
    
  $('#panelHandle').click(function() {
    rightMargin = parseInt($(".sidePanel").css('left'));
	
    if(rightMargin < -1)
    {
       $(".sidePanel").animate({'left': '0px'});
	   $(this).find('.fa-cog').removeClass('fa fa-cog fa-spin').addClass('fa fa-cog fa-spin');
       $(".pointer").remove();
    }
    else
    {
      $(".sidePanel").animate({'left': '-160px'});
	  $(this).find('.fa-cog').removeClass('fa fa-cog fa-spin').addClass('fa fa-cog');
    }
  });

 $('.color-changer a').on("click", function() {
    var color = $(this).attr('data-color');
    $('#theme').attr('href', 'css/themes/' + color + '.css');
  });
  
 

});

