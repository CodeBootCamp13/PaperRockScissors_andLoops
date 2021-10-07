var game = {
	win: 0,
	loss: 0,
	pastResults: []
};

function playGame(choice) {

	var choices = [ 'paper', 'rock', 'scissors' ];

	var random2 = Math.floor(Math.random() * 3);

	var bot1 = choice;
	var bot2 = choices[random2];

	console.log(choice);

	if ( bot1 == 'paper' ) {

		if ( bot2 == 'scissors' ) {
			game.loss = 1;
		} else if ( bot2 == 'rock' ) {
			game.win = 1;
		}

	} else if ( bot1 == 'rock' ) {

		if ( bot2 == 'paper' ) {
			game.loss = 1;
		} else if ( bot2 == 'scissors' ) {
			game.win = 1;
		}

	} else if ( bot1 == 'scissors' ) {

		if ( bot2 == 'rock' ) {
			game.loss = 1;
		} else if ( bot2 == 'paper' ) {
			game.win = 1;
		}

	}

	var results = '';

	if ( game.win ) {
		results = bot1 + ' beats ' + bot2 + ' - YOU WIN!';
	} else if ( game.loss ) {
		results = bot2 + ' beats ' + bot1 + ' - You lose. :(';
	} else {
		results = 'Tie game';
	}

	game.win = 0;
	game.loss = 0;

	var pastResult = document.getElementById('results').innerHTML;

	document.getElementById('pastResults').innerHTML = '<li>' + results + '</li>' + document.getElementById('pastResults').innerHTML;

	document.getElementById('results').innerHTML = results;
}