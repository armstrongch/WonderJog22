var players = [];

var player_manager = {
	
	create_player: function()
	{
		var player = {
			cash: 12,
			athletes: [],
			score: 0,
			human: false
		};
		players.push(player);
	},
	
	create_all_players: function()
	{
		for (let i = 0; i < 4; i += 1)
		{
			this.create_player();
		}
		players[0].human = true;
	}
};