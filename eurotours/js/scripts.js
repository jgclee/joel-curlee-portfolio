/* ================================================
 TABLE OF CONTENTS
 ------------------------------------------------
     1. Preloader
     2. Video background
     3. mixITUp init
     4. Magnific popup call
     5. ANIMATION
     6. Menu button
     7. Destinations popup content
     8. slide toggle read more
     9. Counter


 ================================================  */

$(document).ready(function() {

	"use strict";
		$(".loader_inner").fadeOut();
		$(".loader").delay(600).fadeOut(200);

// ######### video background #########
$('.video').YTPlayer({
  videoId: 'z-m5CROSNZE', // id from youtube link example: https://www.youtube.com/watch?v=z-m5CROSNZE
  callback: function() {
    //console.log("playerFinshed");
  }
});
// ############# mixITUp init ######################
	$("#destinations_grid").mixItUp();

	$(".s_destinations li").on("click",function() {
		$(this).removeClass("active");
		$(this).addClass("active");
	});
//########### POPUP Plugin magnificPopup ###########
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	// ################ ANIMATION ##############

	$(".top_text h1").addClass("fadeInDown animated");
	$(".top_text p").addClass("fadeInUp animated");
	$('.animation1').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '100%' });



	function heightDetect() {
		$(".top").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	//########### Menu button ####################
	$(".toggle_mnu").on("click",function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").on("click",function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").on("click",function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
//########### Destinations popup content ####################
	$(".destinations_item").each(function(i) {
		$(this).find("a.link").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a, .top_text a.btn").mPageScroll2id();


	//########### slide toggle read more ####################
	$(".stoggle").on("click",function() {
  $(".hide_more").animate({ opacity: 1.0 },200).slideToggle(500, function() {
    $(".stoggle").text($(this).is(':visible') ? "Show less" : "Read more");
  });
});
//########### Counter ####################
$('.counter_number').counterUp({
                delay: 10,
                time: 1000
            });
});







/////############### GOOGLE MAP #################
var amsterdam=new google.maps.LatLng(-12.097136,-77.033213);
function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: amsterdam, //// Location
          zoom: 14,
		  scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP

        }

        var map = new google.maps.Map(mapCanvas, mapOptions)
		map.set('styles', [
  {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
]);
var marker=new google.maps.Marker({
  position:amsterdam,
  icon:'images/location_icon.png'
  });

marker.setMap(map);
      }

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", function() {
 google.maps.event.trigger(map, "resize");
 map.setCenter(amsterdam);
});
