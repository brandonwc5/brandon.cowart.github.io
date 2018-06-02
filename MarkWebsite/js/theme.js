;(function($) {
    "use strict";
  
    /*----------------------------------------------------*/
    /*  Home Slider js
    /*----------------------------------------------------*/
    function home_slider(){
        if ( $('#home-slider').length ){
            $("#home-slider").revolution({
                sliderType:"fullscreen",
                sliderLayout:"false",
                delay:9000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style: "Gyges",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: false,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 10,
                            v_offset: 30
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 10,
                            v_offset: 30
                        }
                    },
                },			
                responsiveLevels:[4096,1200,992,768,480,380],
                gridwidth:[1140,940,720,450,450,290],
                gridheight:[900,900,800,700,500,480],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50],
                },
            })
        }
    }
    home_slider();
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* Optional js */
    
   
    
    /*----------------------------------------------------*/
    /*  Chef Slider
    /*----------------------------------------------------*/
    function chefs_slider(){
        if ( $('.chefs_slider_active').length ){
            $('.chefs_slider_active').owlCarousel({
                loop:true,
                margin:30,
                items: 4,
                nav:true,
                autoplay: false,
                smartSpeed: 1800,
                navContainer: '.chefs_slider_active',
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    550:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                }
            })
        }
    }
    chefs_slider(); 
    
    
    /*----------------------------------------------------*/
    /*  Date Active function
    /*----------------------------------------------------*/
    $(".form_datetime").datetimepicker({
        format: "dd MM yyyy",
        fontAwesome: true,
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-right"
    });
    
    /*----------------------------------------------------*/
    /*  Time Active function
    /*----------------------------------------------------*/
    $(".form_time").datetimepicker({
        format: "hh:ii",
        fontAwesome: true,
        autoclose: true,
        showMeridian: true,
        todayBtn: true,
        startView: 2,
        pickerPosition: "bottom-right"
    });    
    
    $('.event_shedule time').countDown();
    
    
    /*----------------------------------------------------*/
    /*  Images grid Filter
    /*----------------------------------------------------*/   
    function ImagesgridFilter(){
        if( $('.about_right_ms, .our_gallery_ms_inner').length ){
            $('.about_right_ms, .our_gallery_ms_inner').imagesLoaded(function(){
                $('.about_right_ms, .our_gallery_ms_inner').isotope({
                    itemSelector: '.about_ms_item, .col-md-4, .col-sm-4',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: 1,
                    }
                })
            });
        }
    }
    ImagesgridFilter();
    
    $("#my-calendar").zabuto_calendar({
        today: true,
    });
    
    /*----------------------------------------------------*/
    /*Loading function*/
    /*----------------------------------------------------*/
    
    $(window).load(function() { // makes sure the whole site is loaded
		 $('.loader').fadeOut(); // will first fade out the loading animation
		 $('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		 $('body').delay(150).css({'overflow':'visible'})
     })
    
})(jQuery)