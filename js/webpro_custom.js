 
$(document).ready(function() {
	
	if ($(this).scrollTop() > 50)
	{   
      $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-brand").addClass("font-change");

	}
	else 
	{
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-brand").removeClass("font-change");
     }
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-brand").addClass("font-change");

        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-brand").removeClass("font-change");
        }
    });
});

//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function() {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function() {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});
 
// WOW ANIMATED 
$(function()
{
    new WOW().init();
});  
// preloader js
$(window).load(function(){
    $('.preloader').delay(1000) .fadeOut("slow"); // set duration in brackets    
});