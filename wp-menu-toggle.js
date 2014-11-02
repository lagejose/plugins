/* 
Simple jQuery (no conflict mode) menu plugin for WordPress usage.
Can be used with Font Awesome for the icons
*/

jQuery(document).ready(function($) {
	// sets the icon to be used before the <ul> element
	// combine with CSS for positioning
	$('#menu-primary').before(
		'<a id="menu-icon" href="#">Menu <i class="fa fa-bars fa-times"></i></a>'
		);
	// toggles menu and icon class  
	$("#menu-icon").click(function() {
		$("#menu-primary").toggle(300);
		$("#menu-icon i").toggleClass('fa-bars');
		return false;
	});

	// resets style when screen size is above 480px
	// fixes stupid toggle hiding menu when resized
	$(window).resize(function(){
		if(window.innerWidth > 480) {
			$("#menu-primary").removeAttr('style');
		}
	});
	
});
