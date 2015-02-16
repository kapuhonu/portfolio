$('#header a').smoothScroll();
new WOW().init();

$(function() {
	$('.cd-nav-trigger').click(function() {
		$('#cd-main-nav').toggleClass('expanded');
		$('#cd-nav').toggleClass('expanded');
	});
});