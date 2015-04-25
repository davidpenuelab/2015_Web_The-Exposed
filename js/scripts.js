/* Theme Name: The Exposed
 * Author: David Penuela
 * Author URI:http://www.davidpenuela.com
 * Version:1.0.0
 * Created: April 2015
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function ($, root, undefined) {
	
	$(function () {
		var show_v = false;
		var show_i = false;

		var t_v = $('.toggle_vision');
		var t_i = $('.toggle_info');

		var info = $('#info');
		var vision = $('#vision');
		var home = $('#banner');

		'use strict';
		
		// $(".banner-image").backstretch('http://the-exposed.com/wp-content/themes/html5blank-stable/img/img1.jpg');
		// DOM ready, take it away

		$(window).resize(function(event) {
			$('#main_logo').css('margin-top','-'+$('#main_logo').height()/2+'px');
		});
		$('#main_logon').css('margin-top','-'+$('#main_logo').height()/2+'px');
		

		setupVandI();
		$(t_v).click(function(event) {
			var pos_to_slide_v = 0;
			show_v=!show_v;
			console.log("Pressed Vision");
			console.log("Show-V->"+show_v);
			console.log("Show-I->"+show_i);
			console.log("-------------------");
			if(show_v){
				vision.css('display','block');
				if(show_i){
					show_i=!show_i
					//slide  left to right
					vision.animate({ top: '0%', right: '0%' }, 1000, function(){});		
					info.animate({ top: '0%', right: '-100%'}, 1000, function(){});	
				}else{
					//go to top
					vision.animate({ top: '100%',right: '0%' }, 0, function(){	
						vision.animate({ top: '0%',right: '0%' }, 1000, function(){});		
					});		
					info.animate({ top: '0%', right: '-100%'}, 0, function(){});						
				}

			}else{
				if(show_i){
					//slide  left to right
					vision.animate({ top: '0%', right: '0%' }, 1000, function(){});		
					info.animate({ top: '0%', right: '-100%'}, 1000, function(){});	
				}else{
					console.log("hey");
					vision.animate({ top: '100%',right: '0%' }, 1000, function(){});	
					info.animate({ top: '100%', right: '0%' }, 0, function(){});
					show_i = false;						
				}
				
			}
		});

		$(t_i).click(function(event) {
			var pos_to_slide_i = 0;
			show_i=!show_i;
			console.log("Pressed Info");
			console.log("Show-V->"+show_v);
			console.log("Show-I->"+show_i);
			console.log("-------------------");
			if(show_i){
				if (show_v) {
					show_v=!show_v
					//slide right to left
					info.animate({ top: '0%',right: '0%'  }, 1000, function(){});		
					vision.animate({ top: '0%', right: '100%'}, 1000, function(){});	
				}else{
					//go to top
					info.animate({ top: '100%',right: '0%' }, 0, function(){
						info.animate({ top: '0%',right: '0%'  }, 1000, function(){});		
					});	
					vision.animate({ top: '0%', right: '100%'}, 0, function(){});	
				}
								
			}else{
				if (show_v) {
					//slide right to left
					info.animate({ top: '0%',right: '0%'  }, 1000, function(){});		
					vision.animate({ top: '0%', right: '100%'}, 1000, function(){});	
				}else{
					console.log("hoy");
					info.animate({ top: '100%',right: '0%' }, 1000, function(){});	
					vision.animate({ top: '100%', right: '0%' }, 0, function(){});
					show_v = false;
				}
			}
		});


		// $(t_v).click(function(event) {
		// 	var pos_to_slide_v = 0;
		// 	show_v=!show_v;
		// 	if(show_v){
		// 		if(show_i){
		// 			vision.css('z-index','999999');
		// 			info.css('z-index','99998');
		// 			vision.animate({ top: '100%'}, 10, function(){
		// 				vision.css('display','block');
		// 				vision.animate({ top: '0%' }, 1000, function(){
		// 					// show_i = false;
		// 					// info.animate({ top: 0 }, 10, function(){info.css('display','none');});
		// 				});					
		// 			});
		// 		}else{
		// 			vision.css('z-index','999999');
		// 			info.css('z-index','99998');
		// 			vision.animate({ top: '100%'}, 10, function(){
		// 				vision.css('display','block');
		// 				vision.animate({ top: '0%' }, 1000, function(){
		// 					// show_i = false;
		// 					// info.animate({ top: 0 }, 10, function(){info.css('display','none');});
		// 				});					
		// 			});
		// 		}
				
		// 	}else{
		// 		vision.hide("slide", { direction: "left" }, 1000, function(){
		// 			vision.css('display','none');
		// 			pos_to_slide_v = '0';
		// 			// vision.animate({ top: pos_to_slide_v }, 10, function(){});		
		// 		});
		// 	}
		// });

		// $(t_i).click(function(event) {
		// 	var pos_to_slide_i = 0;
		// 	show_i=!show_i;
		// 	if(show_i){
		// 		if(show_v){
		// 			info.css('z-index','999999');
		// 			vision.css('z-index','99998');
		// 			info.animate({ top: '100%' }, 10, function(){
		// 				info.css('display','block');
		// 				// show_v = false;
		// 				info.animate({ top: '0%' }, 1000, function(){

		// 				});		
		// 			});	
		// 		}else{
		// 			info.css('z-index','999999');
		// 			vision.css('z-index','99998');
		// 			info.animate({ top: '100%' }, 10, function(){
		// 				info.css('display','block');
		// 				// show_v = false;
		// 				info.animate({ top: '0%' }, 1000, function(){

		// 				});		
		// 			});		
		// 		}
				
		// 	}else{
				
		// 		info.hide("slide", { direction: "right" }, 1000, function(){
		// 			info.css('display','none');	
		// 			pos_to_slide_i = '0';		
		// 			// info.animate({ top: pos_to_slide_i }, 10, function(){});
		// 		});
		// 	}
		// });
	function setupVandI(){
		vision.css('display','block');
		info.css('display','block');
		info.animate({ top: '100%',right: '0%' }, 0, function(){});	
		vision.animate({ top: '100%', right: '0%' }, 0, function(){});
	}
		
	});

	
})(jQuery, this);

