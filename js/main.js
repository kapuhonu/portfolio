$('#header a').smoothScroll();
new WOW().init();

$(function() {
	$('.cd-nav-trigger').click(function(e) {
		e.preventDefault();
		$('#cd-main-nav').toggleClass('expanded');
		$('#cd-nav').toggleClass('expanded');
		return false;
	});
});