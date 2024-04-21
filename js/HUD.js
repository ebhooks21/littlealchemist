/**
 * HUD.js -- File to contain the HUD class.
 */
class HUD
{
	/**
	 * Main constructor for the HUD class.
	 */
	constructor()
	{

	}

	/**
	 * Function to render the HUD.
	 */
	draw(player)
	{
		let self = this;

		//Draw the player info
		$("#playerportraitarea").html("<img src='" + player.characterPortrait + "' alt='character portrait' id='characterportrait-img' class='characterportrait-img'/>");
		$("#playernamearea").html(player.name);
		$("#playerlevelarea").html("LV: " + (player.levels).gameLvl);
	}
}
