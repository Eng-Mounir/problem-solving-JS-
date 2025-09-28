//Question 1
var x = window.prompt("Please enter any Number");
console.log(x); 


//Question 2
var x = window.prompt("Please enter any Number that divided by both 3 and 4");
if (x % 3 == 0 && x % 4 == 0) {
    console.log("yes"); 
} else {
    console.log("no")
}


//Question 3
var x = Number(window.prompt("Please enter X"));
var y = Number(window.prompt("Please enter Y"));

if (x > y) {
    console.log(x);
} else {
    console.log(y);
}


//Question 4
var x = window.prompt("Please enter any Number");
if (x > 0) {
    console.log("Output positive")
}
else {
    console.log("Output negative")
}


//Question 5
var a = Number(window.prompt("Enter first number:"));
var b = Number(window.prompt("Enter second number:"));
var c = Number(window.prompt("Enter third number:"));

let max = a;
let min = a;

// check max
if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}

// check min
if (b < min) {
  min = b;
}
if (c < min) {
  min = c;
}

console.log("Max element = " + max);
console.log("Min element = " + min);

//Question 6
var a = Number(window.prompt("Enter first number to check for even or odd:"));
var b = Number(window.prompt("Enter second number to check for even or odd:"));
if (a % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

//Question 7
var a = window.prompt("Enter a character to check if it is a vowel:");
a = a.toLowerCase();

if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

//Question 8
var a = Number(window.prompt("Enter any number:"));
for (var i = 1; i <= a; i++){
    console.log(i);
}

//Question 9
var a = Number(window.prompt("Enter any number for multiplication table:"));
for (var i = 1; i <= 12; i++){
    console.log(a * i);
}

//Question 10
var a = Number(window.prompt("Enter any number to find there even:"));
for (var i = 1; i <= a; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Question 11
var a = Number(window.prompt("Enter first number:"));
var b = Number(window.prompt("Enter second number:"));
console.log(a ** b);

//Question 12
    var s1 = Number(window.prompt("Enter marks of subject 1:"));
    var s2 = Number(window.prompt("Enter marks of subject 2:"));
    var s3 = Number(window.prompt("Enter marks of subject 3:"));
    var s4 = Number(window.prompt("Enter marks of subject 4:"));
    var s5 = Number(window.prompt("Enter marks of subject 5:"));

    //Calculate total
    var total = s1 + s2 + s3 + s4 + s5;

    //Calculate average
    var average = total / 5;

    //Percentage
    var percentage = (total / 500) * 100;

    // Print results
    console.log("Total Marks = " + total);
    console.log("Average Marks = " + average);
    console.log("Percentage = " + percentage + "%");
