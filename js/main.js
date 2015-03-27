$('#header a').smoothScroll();
new WOW({mobile: false}).init();

$(function() {
	$('.cd-nav-trigger').click(function(e) {
		$('#cd-main-nav').toggleClass('expanded');
		$('#cd-nav').toggleClass('expanded');
		return false;
	});

	$('#cd-nav li a').click(function(e) {
		$('#cd-main-nav').toggleClass('expanded');
		$('#cd-nav').toggleClass('expanded');
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('#cd-main-nav').removeClass('expanded');
			$('#cd-nav').removeClass('expanded');
		}
	});
});