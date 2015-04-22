/* Theme Name: The Exposed
 * Author: David Penuela
 * Author URI:http://www.davidpenuela.com
 * Version:1.0.0
 * Created: April 2015
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

var show_v = false;
var show_i = false;
(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// $(".banner-image").backstretch('http://the-exposed.com/wp-content/themes/html5blank-stable/img/img1.jpg');
		// DOM ready, take it away

		$(window).resize(function(event) {
			$('#main_logo').css('margin-top','-'+$('#main_logo').height()/2+'px');
		});
		$('#main_logon').css('margin-top','-'+$('#main_logo').height()/2+'px');
		
		var t_v = $('.toggle_vision');
		var t_i = $('.toggle_info');

		var info = $('#info');
		var vision = $('#vision');
		var home = $('#banner');

		$(t_v).click(function(event) {
			var pos_to_slide_v = 0;
			show_v=!show_v;
			if(show_v){
				pos_to_slide_v = '-100%';
				vision.css('display','block');
				vision.css('z-index','999999');
				info.css('z-index','99998');
				vision.animate({ top: pos_to_slide_v }, 1000, function(){
					show_i = false;
					info.hide("slide", { direction: "right" }, 100);
				});
				
			}else{
				pos_to_slide_v = '0';
				vision.animate({ top: pos_to_slide_v }, 1000 , function(){
					vision.css('z-index','99998');
					vision.css('display','none');			
				});
			}

			
			
		});

		$(t_i).click(function(event) {
			var pos_to_slide_v = 0;
			show_i=!show_i;
			if(show_i){
				// info.show('fast');
				info.css('z-index','999999');
				vision.css('z-index','99998');
				info.show("slide", { direction: "right" }, 1500, function(){
					show_v = false;
					pos_to_slide_v = '0';
					vision.animate({ top: pos_to_slide_v }, 100 , function(){
						vision.css('z-index','99998');
						vision.css('display','none');				
					});
				});
				// info.animate({ left: "100%" });
			}else{
				// info.show('fast');
				info.hide("slide", { direction: "right" }, 1500, function(){
					info.css('z-index','99998');
				});
				// info.animate({ left: "100%" });
			}
			
			
		});
	});
	
})(jQuery, this);
