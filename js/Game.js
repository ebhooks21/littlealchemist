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

		self.player = null;
		self.hud = null;

		//Setup a resize listener for the window
		$(window).on('resize', function()
		{
			self.windowResize();
		});

		$(window).trigger('resize');
	}

	/**
	 * Function to start the game.
	 */
	start()
	{
		let self = this;

		//Create a new player
		self.player = new Player();

		//Create a HUD
		self.hud = new HUD();

		(self.hud).draw(self.player);
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
