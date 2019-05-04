$(window).load(function() {
    $('.preloader').fadeOut(1000);     
});
 
 $(document).ready(function() {
    $(".navbar a, footer a[href='#top']").on('click', function(event) {
     if (this.hash !== "") {
       event.preventDefault();
    var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    } 
  });
      $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-brand").addClass("font-change");

        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-brand").removeClass("font-change");
        }
    });
  $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false,
    });
    if ($('.iso-box-wrapper').length > 0) {

        var $container = $('.iso-box-wrapper'),
            $imgs = $('.iso-box img');

        $container.imagesLoaded(function() {

            $container.isotope({
                layoutMode: 'fitRows',
                itemSelector: '.iso-box'
            });

            $imgs.load(function() {
                $container.isotope('reLayout');
            })

        });
       $('.filter-wrapper li a').click(function() {

            var $this = $(this),
                filterValue = $this.attr('data-filter');

            $container.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

             if ($this.hasClass('selected')) {
                return false;
            }

            var filter_wrapper = $this.closest('.filter-wrapper');
            filter_wrapper.find('.selected').removeClass('selected');
            $this.addClass('selected');

            return false;
        });
    }
  new WOW().init();
});
 var fixed = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
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

$(document).ready(function() {
 
    var tou;
    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
			else{
			  $(this).removeClass("slide");
            }
        });
        $(".slideanimr").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slider");
            }
			else{
			  $(this).removeClass("slider");
            }
        });

		   $(".slideanimz").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slidez");
            }
			else{
			  $(this).removeClass("slidez");
            }
        });
    });
})