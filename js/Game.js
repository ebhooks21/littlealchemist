/**
 * Game.js -- File to hold the functionailty for the game class.
 */
class Game
{
	/**
	 * Main constructor for the game class.
	 */
	constructor()
	{
		let self = this;

		//Setup a resize listener for the window
		$(window).on('resize', function()
		{
			self.windowResize();
		});

		$(window).trigger('resize');
	}

	/**
	 * Function for resizing the window.
	 */
	windowResize()
	{
		let self = this;

		$("#gamearea").css('height', (window.innerHeight - 30));
		$(".body").css('height', window.innerHeight);
		$("#gamearea").css('margin-top', 15);
		$("#gamearea").css('margin-left', 'auto');
		$("#gamearea").css('margin-right', 'auto');
	}
}
