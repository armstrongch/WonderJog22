var athletes = [];

var athlete_manager = {
	create_athlete: function(name, desc)
	{
		var athlete = {
			name: name,
			desc: desc
		};
		athletes.push(athlete);
	},
	create_all_athletes: function()
	{
		for (let i = 0; i < 25; i += 1)
		{
			this.create_athlete("Normal Guy #" + i.toString(), "Does normal stuff.");
		}
	},
};