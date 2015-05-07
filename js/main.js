(function($) {
	$(document).ready(function() {

		// fullscreener plugin
		$('.bg img').fullscreener()

		// tabs
		var $tabs = $('.tab'),
			$tabsNav = $('.tabs-nav');

		$tabs.not(':first-child').hide();
		$tabsNav.find('li:first-child').addClass('current');

		$tabsNav.on('click', 'a', function(event){
			var $this = $(this),
				$parent = $this.parent(),
				href = $this.attr('href');

			if (!$parent.hasClass('current')) {
				$parent.addClass('current');
				$parent.siblings().removeClass('current');
				$tabs.filter(href).show().siblings().hide();
			}

			event.preventDefault();

		});
	});
})(jQuery);