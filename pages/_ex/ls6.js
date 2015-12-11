// // Exercise 1:
// //
// // From the console, calculate how many seconds old you are. Approximate by rounding to the nearest year or month.
// //
// //

age = 28;
daysinyears = 365;
hoursInDay = 24;
minutesInDay = hoursInDay * 60;
secondsInDay = minutesInDay * 60;

console.log(secondsInYears = secondsInDay * minutesInDay * hoursInDay * daysinyears);

// // Exercise 2
//
// Ask the user what their favorite sports team is. Secretly log a message trash-talking their team in the console.
//


var team = prompt("What is your favorite sports team?");

alert("The " + team + " SUCK!");

//
// Exercise 3:
//
// Declare variables a, b and c. Assign a number to each.
// Declare variable d and assign it the value of a, b, and c added together.
// Re-assign the value of b to a. Then change the value of b. What is the value of a?


var a = 5;
var b = 6;
var c = 9;

var d = a + b + c;

b = a;
b = 2;


console.log(a);
//
// Exercise 4:
//
// Create variables "hour" and "minute" to reflect the current time.
// Write an expression to calculate how many seconds until midnight.
// Change "minute" to be accurate again as time has probably passed.
// Run the same calculation again (press the up key in the console to scroll back to it).

var hour = 22;
var minute = 40;

var timeRightNow = hour + ":" + minute;

var HoursUntilMidnight = 24 - hour;
var MinUntilHour = 60 - minute;

var timeUntilMidnight = HoursUntilMidnight + ":" + MinUntilHour;


console.log("The time right now is "+ timeRightNow + "!");
console.log("The time until midnight is " + timeUntilMidnight + "!");


// Exercise 5:
//
// Declare at least 10 variables such as 'name', 'age', 'birthday', 'hometown', 'occupation', 'favoriteFood', 'bestFriend', etc, and set their values equal to strings containing the appropriate information about yourself.
// console.log a paragraph about yourself using the appropriate variables to insert the relevant information in the appropriate places. Hint: Remember, we can concatenate strings using +
// Create a new HTML document and re-write the variables and the console.log in a <script> tag so that you'll have it for later.

var name = "Eric";
var age = "28";
var hometown = "Fullerton";
var occupation = "Sound Designer";
var favoriteFood = "Spaghetti";
var girlfriend = "Patty";
var favoriteTv = "'Game of Thrones'";
var favoriteFruit = "strawberries";
var favTeam = "Lakers";
var petName = "DaeBak";


console.log("Hello! My name is " + name + "! I am " + age + " years young. I am orginally from " + hometown + ", California. I am currently " + occupation + " working freelance on TV Shows and commercials. My favorite food is " + favoriteFood + ", especially the kind with meatballs and my favorite fruit is " + favoriteFruit + ". I have a beautiful girlfriend whose name is " + girlfriend + "! We like to watch " + favoriteTv + " together. I rep for my basketball team, the LA " + favTeam + ". And I also have a good buddy who's name is " + petName + "!" );

//
// Exercise 6:
//
// Open up one of your previous HTML projects
// Use the console to retrieve the first element that matches a particular CSS selector.
// View that element's current textContent from the console.
// Set that element's textContent to a new string.
