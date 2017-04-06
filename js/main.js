// 1) Make a div and give it an ID.
// Using Javascript, put some text into that element.

function myMessage() {
	document.getElementById("text").innerHTML = "Hello planet earth!";	
};

myMessage();

// 2) Make a string variable and use that to put
// some text into an H1 using Javascript.

var string = "this is a string";

document.getElementById("title").innerHTML = string;

// 3) Make a function that takes a user’s input (value)
// and then console.logs the value. Initialize the function
// (make it start) when you click a button.

function myInput() {
	var personInput = prompt("What is your name?");
	console.log(personInput);
}

myInput();

// 4) Make an array with five entries. Using a loop,
// console.log each entry.

var myArray = [0,1,2,3,4];

for (i = 0; i < myArray.length; i++) {
	console.log(i)
}

// 5) Create an object with at least three properties.
// Console.log each property.

var myObject = {
	name: "Richard",
	position: "Developer",
	company: "ABC Company"
}

// dot notation
console.log(myObject.name + " " + myObject.position + " " + myObject.company);
// console.log(myObject.position);
// console.log(myObject.company);

// bracket notation
// console.log(myObject[name]);
// console.log(myObject[position]);
// console.log(myObject[company]);

// For loop console log
// for (i = 0; i < myObject; i++) {
// 	console.log(i);
// }

// 6) Create an array with multiple objects, each with
// multiple properties. Use a for loop to console.log
// the various properties.

var multipleObject = [
	{
		name: "Adam",
		lastName: "Doo",
		position: "Full Developer"
	},
	{
		name: "Kathie",
		lastName: "McManus",
		position: "Back-end Developer"
	},
	{
		name: "Michael",
		lastName: "Jose",
		position: "Web Developer"
	}
]



for (i = 0; i < multipleObject.length; i++) {
	console.log(multipleObject[i].name + " " + multipleObject[i].lastName + " " + multipleObject[i].position);
}










