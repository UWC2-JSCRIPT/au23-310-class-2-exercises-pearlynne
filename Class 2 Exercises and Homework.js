// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

// Create object representation of self without bestFriend object
const pearlC = {
	firstName: 'Pearl',
	lastName: 'C',
	'favorite food': 'sushi',
	bestFriend: {
		firstName: 'Janie',
		lastName: 'Doe',
		'favorite food': 'salami',
	},
};


// 2. console.log best friend's firstName and your favorite food

console.log(`My best friend's first name is ${pearlC.bestFriend['firstName']} and my favorite food is ${pearlC['favorite food']}.`);


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const ticTacToe =
	[['-', 'O', '-'],
	['-', 'X', 'O'],
	['X', '-', 'X']];


// 4. After the array is created, 'O' claims the top right square.
// Update that value.

ticTacToe[0][2] = 'O'


// 5. Log the grid to the console.

console.log(`
${ticTacToe[0]},
${ticTacToe[1]},
${ticTacToe[2]}`)

console.table(ticTacToe)



// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

let emailStrings = [
	'foo@bar.baz',			// True
	'fo_o@bar.baz',			// True
	'foo123@bar.baz',		// True
	'foo.foo@bar.baz', 	// False; Periods not allowed either
	'fo o@bar.baz',			// False
	'fo!o@bar.baz',			// False
	'foo@bar.ba z',			// False
	'foo@bar.b!az',			// False
	'foo@bar.baz!',			// False
	'foo@bar!baz',			// False
];

// For letters and digits only 
const regexEmail = /(^\w+)(@)(\w+)(\.)(\w+$)/;
// To allow periods
const regexAllChar = /(^\w.+)(@)(\w+)(\.)(\w+$)/;


function emailTest(email) {
	for (i = 0; i < email.length; i++) {
		if (regexEmail.test(email[i])) {
			console.log(email[i], "is correct.");
		} else {
			console.log(email[i], "is incorrect.");
		}
	}
};

emailTest(emailStrings)



// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

const regexDate = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;

const newDate = new Date(regexDate.test(assignmentDate))

console.log(newDate)


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.




// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];


// 10. log this value using console.log
