var game = {
	won: 0,
	lost: 0,
	tie: 0,
	pastResults: {
		paper: 0,
		rock: 0,
		scissors: 0
	},
	winRate: {
		paper: 0,
		rock: 0,
		scissors: 0
	},
	resultEl: document.getElementById('results')
};


// function to kick off a game
function playGame(choice) {

	var compChoice = getComputerChoice();
	
	var result = getWinner(choice, compChoice);

	processResults(choice, result);

}

// function to pick the computer choice
function getComputerChoice() {
	var options = [
		'paper', 'rock', 'scissors'
	];

	return options[ 
		Math.floor(Math.random() * options.length) 
	];
}

function getPaperLoverChoice() {
	var options = [ 
		'paper', 'rock'
	];

	return options[ 
		Math.floor(Math.random() * options.length) 
	];
}

// function to decide who won?
function getWinner(playerChoice, computerChoice) {
	var result = 0;

	if ( playerChoice == 'paper' ) {

		if ( computerChoice == 'scissors' ) {
			result = -1;
		} else if ( computerChoice == 'rock' ) {
			result = 1;
		}

	} else if ( playerChoice == 'rock' ) {

		if ( computerChoice == 'paper' ) {
			result = -1;
		} else if ( computerChoice == 'scissors' ) {
			result = 1;
		}

	} else if ( playerChoice == 'scissors' ) {

		if ( computerChoice == 'rock' ) {
			result = -1;
		} else if ( computerChoice == 'paper' ) {
			result = 1;
		}

	}
	
	// return the winner [-1/0/1]	
	return result;
}

// function to save results and display them
function processResults(playerChoice, result) {
	// paper // rock // scissors
	// store the choice in our game object pastResults
	game.pastResults[ playerChoice ]++;

	if ( result == -1 ) {
		game.lost++;
		game.resultEl.innerHTML = 'Lost';
	} else if ( result == 1 ) {
		game.won++;
		game.winRate[ playerChoice ]++;
		game.resultEl.innerHTML = 'Won';
	} else {
		game.tie++;
		game.resultEl.innerHTML = 'Tie';
	}

}

// TODO - consider splitting out the displayResults() 

