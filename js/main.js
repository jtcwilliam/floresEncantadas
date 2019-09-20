(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 owl active
------------------------------ */  
  $(".total-program-area").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });

/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
    
    /*jquery Fancy box activation code
    -------------------------------------*/
      $('.fancybox').fancybox();
      /*----------------------------

       Blog Section active

      ------------------------------ */  

        $(".blog-area").owlCarousel({

            autoPlay: false, 

          slideSpeed:2000,

          pagination:false,

          navigation:true,  

            items : 3,

          /* transitionStyle : "fade", */    /* [This code for animation ] */

          navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

            itemsDesktop : [1199,3],

          itemsDesktopSmall : [980,3],

          itemsTablet: [768,1],

          itemsMobile : [479,1],

        });	   
 
 /*----------------------------
  Partner Logo
 ------------------------------ */
   $(".client-logo").owlCarousel({

     autoPlay: true,

     slideSpeed:500,

     pagination:false,

     navigation:false,

       items : 5,

     /* transitionStyle : "fade", */    /* [This code for animation ] */

     navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

       itemsDesktop : [1199,5],

     itemsDesktopSmall : [980,3],

     itemsTablet: [768,2],

     itemsMobile : [479,1],

   });

})(jQuery); 

function galleryMasonaryLayout() {

    if ($('.masonary-layout').length) {

        $('.masonary-layout').isotope({

            layoutMode: 'masonry'

        });

    }



    if ($('.post-filter').length) {

        $('.post-filter li').children('span').on('click', function() {

            var Self = $(this);

            var selector = Self.parent().attr('data-filter');

            $('.post-filter li').children('span').parent().removeClass('active');

            Self.parent().addClass('active');

            $('.filter-layout').isotope({

                filter: selector,

                stagger: 30,

                transitionDuration: 400,

                hiddenStyle: {

                    opacity: 0

                },

                visibleStyle: {

                    opacity: 1

                }

            });

            return false;

        });

    }



}

function galleryMasonaryLayout() {

    if ($('.masonary-layout').length) {

        $('.masonary-layout').isotope({

            layoutMode: 'masonry'

        });

    }



    if ($('.post-filter').length) {

        $('.post-filter li').children('span').on('click', function() {

            var Self = $(this);

            var selector = Self.parent().attr('data-filter');

            $('.post-filter li').children('span').parent().removeClass('active');

            Self.parent().addClass('active');

            $('.filter-layout').isotope({

                filter: selector,

                stagger: 30,

                transitionDuration: 400,

                hiddenStyle: {

                    opacity: 0

                },

                visibleStyle: {

                    opacity: 1

                }

            });

            return false;

        });

    }


}

// window load function

jQuery(window).on('load', function() {

    (function($) {

        // add your functions

        galleryMasonaryLayout();

 

    })(jQuery);

});
