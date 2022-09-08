var draft_manager = {
	current_player: -1,
	available_athletes: [],
	setup: function()
	{
		utility.shuffle(athletes);
		this.new_draft_round();
	},
	new_draft_round: function()
	{
		this.available_athletes.push(athletes.pop());
		this.current_player += 1;
		if (this.current_player >= 4) { this.current_player = 0; }
		this.draw();
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
			new_html += `<li><a onclick='draft_manager.draft_athlete(0, ${i})'>${this.available_athletes[i].name}: ${this.available_athletes[i].desc} Costs ${4-i}</a></li>`;
		}
		new_html += `
				</ul>
			<p>`;/*
			<p><a onclick='draft_manager.new_draft_round'>Draft None (Pass)</a></p>
			<table>
				<tr>
					<td>
						<p>Your Team</p>
						<ul>
							<li>Guy 6</li>
							<li>Guy 7</li>
						</ul>
					</td>
					<td>
						<p>Enemy Team 1</p>
						<ul>
							<li>Guy 1</li>
							<li>Guy 2</li>
						</ul>
					</td>
					<td>
						<p>Enemy Team 2</p>
						<ul>
							<li>Guy 1</li>
							<li>Guy 2</li>
						</ul>
					</td>
					<td>
						<p>Enemy Team 3</p>
						<ul>
							<li>Guy 1</li>
							<li>Guy 2</li>
						</ul>
					</td>
				</tr>
			</table>*/
		$('#DRAFT_DIV').html(new_html);
	}
};