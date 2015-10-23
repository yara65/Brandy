

$(document).ready(function(){

// scroll
$(window).scroll(function(){

$("div").removeClass("header1");
// $("div").addClass("menu1");

});


// circle


function myf(){
    var con=document.getElementById("content");
    var bgr=document.getElementById("content");
con.style.color="red";
bgr.style.backgroundColor="green";

}

$(".circle").click(function(event){
      $(".circle").css("backgroundColor", "black");
      $(".circle1").css("backgroundColor", "white");
      $(".circle2").css("backgroundColor", "white");

      $(".colum").fadeIn(1000);
       $(".colum").css("display","none");

   });

$(".circle1").click(function(event){
      $(".circle1").css("backgroundColor", "black");
      $(".circle").css("backgroundColor", "white");
      $(".circle2").css("backgroundColor", "white");

      $(".colum").css("display","inline-block");
   });

$(".circle2").click(function(event){
      $(".circle2").css("backgroundColor", "black");
      $(".circle1").css("backgroundColor", "white");
      $(".circle").css("backgroundColor", "white");

      $(".colum").css("display","block");
      
   });

// slayder





// menu

$(".table-one").click(function(event){

     // if($(".table-row1").click(function(event)){
     	// $(".any-photo1,.any-photo2,.any-photo3,.any-photo5,.any-photo6,.any-photo7").slideDown(300);}
     	 $(".any-photo,.any-photo1,.any-photo2,.any-photo3,.any-photo4,.any-photo5,.any-photo6,.any-photo7").slideDown(300);
 	  // $(".any-photo,.any-photo1,.any-photo2,.any-photo3,.any-photo4,.any-photo5,.any-photo6,.any-photo7").css("display","inline-table");
	  $(".table-one").css("backgroundColor", "green");
	  $(".table-one").css("color", "white");
	  $(".table-row1,.table-row2,.table-row3,.table-row4").css("backgroundColor", "white");
	  $(".table-row1,.table-row2,.table-row3,.table-row4").css("color", "black");
	  
});

$(".table-row1").click(function(event){
	
	  // $(".any-photo,.any-photo4").fadeIn(1000);
	  $(".any-photo1,.any-photo2,.any-photo3,.any-photo5,.any-photo6,.any-photo7").slideUp(500);
	$(".any-photo,.any-photo4").slideDown(1000);
	  // $(".any-photo1,.any-photo2,.any-photo3,.any-photo5,.any-photo6,.any-photo7").css("display","none");
	  // $(".any-photo,.any-photo4").css("display","inline-table");
	  $(".table-row1").css("backgroundColor", "green");
	  $(".table-row1").css("color", "white");
	  $(".table-one,.table-row4,.table-row2,.table-row3").css("backgroundColor", "white");
	  $(".table-one,.table-row4,.table-row2,.table-row3").css("color", "black");



});

$(".table-row2").click(function(event){

		$(".any-photo1,.any-photo5").fadeIn(1000);

		$(".any-photo,.any-photo2,.any-photo3,.any-photo4,.any-photo6,.any-photo7").slideUp(500);
	$(".any-photo1,.any-photo5").slideDown(1000);
	   // $(".any-photo,.any-photo2,.any-photo3,.any-photo4,.any-photo6,.any-photo7").css("display","none");
	   // $(".any-photo1,.any-photo5").css("display","inline-table");
	  $(".table-row2").css("backgroundColor", "green");
	  $(".table-row2").css("color", "white");
	  $(".table-one,.table-row1,.table-row4,.table-row3").css("backgroundColor", "white");
	  $(".table-one,.table-row1,.table-row4,.table-row3").css("color", "black");
});

$(".table-row3").click(function(event){

	  $(".any-photo2,.any-photo6").fadeIn(1000);

	  $(".any-photo,.any-photo1,.any-photo3,.any-photo4,.any-photo5,.any-photo7").slideUp(500);
	$(".any-photo2,.any-photo6").slideDown(1000);
	  // $(".any-photo,.any-photo1,.any-photo3,.any-photo4,.any-photo5,.any-photo7").css("display","none");
	  // $(".any-photo2,.any-photo6").css("display","inline-table");
	  $(".table-row3").css("backgroundColor", "green");
	  $(".table-row3").css("color", "white");
	  $(".table-one,.table-row1,.table-row2,.table-row4").css("backgroundColor", "white");
	  $(".table-one,.table-row1,.table-row2,.table-row4").css("color", "black");
});

$(".table-row4").click(function(event){
	  $(".any-photo3,.any-photo7").fadeIn(1000);

	  $(".any-photo,.any-photo2,.any-photo3,.any-photo4,.any-photo5,.any-photo6").slideUp(500);
	$(".any-photo3,.any-photo7").slideDown(1000);
	  // $(".any-photo,.any-photo1,.any-photo2,.any-photo4,.any-photo5,.any-photo6").css("display","none");
	  // $(".any-photo3,.any-photo7").css("display","inline-table");
	  $(".table-row4").css("backgroundColor", "green");
	  $(".table-row4").css("color", "white");
	  $(".table-one,.table-row1,.table-row2,.table-row3").css("backgroundColor", "white");
	  $(".table-one,.table-row1,.table-row2,.table-row3").css("color", "black");
	  
});


// Team


});