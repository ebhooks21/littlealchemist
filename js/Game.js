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
		window.onresize = function()
		{
			self.windowResize();
		};
	}

	/**
	 * Function for resizing the window.
	 */
	windowResize()
	{
		let self = this;

		alert("HERE");
	}
}
