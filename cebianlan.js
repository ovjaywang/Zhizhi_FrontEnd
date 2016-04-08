$(function(){
	  $("#panel").hover(function() {
		  $(this).stop().animate({height : "310",width : "340"} , 200 );
	  },function() {
		  $(this).stop().animate({height : "310",width : "30"  } , 300 );
			
	  });
});