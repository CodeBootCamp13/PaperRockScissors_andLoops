

// for loop
// for ( DECLARATION; EXIT CONDITION; INCREMENTOR )
for ( var i = 0; i < 10; i++ ) { 
	//console.log(i);
}

// for loops over arrays
var fruits = ['apple', 'banana', 'grape', 'strawberry'];
for ( var i = 0; i < fruits.length; i++ ) {
	//console.log( fruits[i] );
}

// for loops over multi-dim arrays
var students = [
	[ 'eric', 'ryan', 'harrison', 'the', 'instructor' ],
	[ 'meg', 'harrison' ],
	[ 'isla', 'harrison' ],
	[ 'dexter', 'harrison' ],
]

for ( var i = 0; i < students.length; i++ ) {
	//console.log('i = ' + i);
	//console.log(students[i]);

	for ( var j = 0; j < students[i].length; j++ ) {
		//console.log('j = ' + j);
		//console.log(students[i][j]);
	}

	//console.log('restarting next loop');
}

// WHILE loop
var age = 37;
while (age > 0) {
	// do something here
	//console.log(age);

	age = age - 1;
}

// for loop version
for ( var age = 37; age > 0; age-- ) {
	//console.log(age);
}


// while loop real example
var runWhileTrue = true;
while ( runWhileTrue ) {
	//console.log('Inside the while loop');
	// some complicated code
	//calculatePhysics();

	//updateTimer();

	//runAILoop();

	//renderGame();
	// until user pushes a button
	// until one hour passes

	runWhileTrue = false;
}

// DO WHILE loop
do {
	//console.log('inside a do/while loop');
} while( runWhileTrue );

var doCounter = 0;
do {
	//console.log('inside the second do/while loop');
	doCounter = doCounter + 1;
	//console.log(doCounter);
} while ( doCounter < 1 );

// continue
// continue will immediately jump to the start of the next iteration
var n = 0;
while ( n <= 10 ) {
	n = n + 1;

	if ( n % 3 ) {
		console.log('skipped');
		continue;
	}

	//console.log(n);
}

// break
// break immediately LEAVES the loop
var n = 0;
while ( n <= 10 ) {
	n = n + 1;

	if ( n == 5 ) {
		break;
	}

	//console.log(n);
}

// how do we loop through objects?
var students = {
	firstName: 'Eric',
	lastName: 'Harrison',
	age: 37
};

for ( var i = 0; i < Object.keys(students).length; i++ ) {
	console.log(Object.keys(students)[i]);

	console.log(students[ Object.keys(students)[i] ]);
}

// for .. in
// for looping through objects
for ( var key in students ) {
	console.log(' key ' + key + ' --> ' + students[key]);
}

// Array.forEach()
var fruits = ['apple', 'banana', 'grape', 'strawberry'];
fruits.forEach(function(element) {
	console.log(element);
});

