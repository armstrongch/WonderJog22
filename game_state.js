var game_states = {
	TITLE: "TITLE",
	DRAFT: "DRAFT",
	ATHLETE_SELECT: "ATHLETE_SELECT",
	PRE_RACE: "PRE_RACE",
	RACE: "RACE",
	POST_RACE: "POST_RACE",
	END: "END"
};

var game_state_manager = {
	current_state: game_states.TITLE,
	setup: function()
	{
		this.change_state(game_states.TITLE);
		player_manager.create_all_players();
		athlete_manager.create_all_athletes();
	},
	change_state: function(new_state)
	{
		$('div').css('display', 'none');
		$('#' + new_state + "_DIV").css('display', 'block');
		switch(new_state)
		{
			case game_states.DRAFT:
				draft_manager.setup();
				break;
			default:
				break;
		}
	}
};

