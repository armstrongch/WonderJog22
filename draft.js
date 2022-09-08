var draft_manager = {
	available_athletes: [],
	setup: function()
	{
		utility.shuffle(athletes);
		this.new_draft_round();
	},
	new_draft_round: function()
	{
		this.available_athletes.push(athletes.pop());
		this.draw();
	},
	draft_athlete: function(player_index, athlete_index)
	{
		var athlete = this.available_athletes[athlete_index];
		players[player_index].athletes.push(athlete);
		this.available_athletes.splice(athlete_index, 1);
		players[player_index].cash -= (4-athlete_index);
		this.new_draft_round();
	},
	draw: function()
	{
		var new_html = "";
		new_html += `
		<p>Draft Your Team!</p>
		<p>You need to draft ${5-players[0].athletes.length} more athletes, and have $${players[0].cash} to spend</p>
			<p>
				Available Athletes:
				<ul>`;
		for (let i = 0; i < this.available_athletes.length; i += 1)
		{
			var affordable = players[0].cash >= 4-i;
			new_html += `<li>`;
			if (affordable)
			{
				new_html += `${<a onclick='draft_manager.draft_athlete(0, ${i})'>}`
			}
			new_html += `${this.available_athletes[i].get_text()} Costs $${4-i}`;
			if (affordable) { new_html += `</a>`; }
			new_html += `</li>`;
		}
		new_html += `
				</ul>
			<p>`;
		if (this.available_athletes.length < 5)
		{
			new_html += `<p><a onclick='draft_manager.new_draft_round()'>Draft None (Pass)</a></p>`;
		}
		new_html += `
			<table>
				<tr>
					<td>
						<p>Your Team</p>
						<ul>`
		for (let i = 0; i < players[0].athletes.length; i += 1)
		{
			new_html += `<li>${players[0].athletes[i].get_text()}</li>`;
		}
		new_html += `</ul></td>`;
		for (let i = 1; i < players.length; i += 1)
		{
			new_html += `<td><p>Enemy Team ${i}</p><ul>`;
			for (let j = 0; j < players[i].athletes.length; j += 1)
			{
				new_html += `<li>${players[i].athletes[j].get_text()}</li>`;
			}
			new_html += `</ul></td>`;
		}
		new_html += `</table>`;
		$('#DRAFT_DIV').html(new_html);
	}
};