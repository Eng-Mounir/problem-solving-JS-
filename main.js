//Question 1 Write a program that allow to user enter number then print it
var x = window.prompt("Please enter any Number");
console.log(x); 


//Question 2 Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
var x = window.prompt("Please enter any Number that divided by both 3 and 4");
if (x % 3 == 0 && x % 4 == 0) {
    console.log("yes"); 
} else {
    console.log("no")
}


//Question 3 Write a program that allows the user to insert 2 integers then print the max
var x = Number(window.prompt("Please enter X"));
var y = Number(window.prompt("Please enter Y"));

if (x > y) {
    console.log(x);
} else {
    console.log(y);
}


//Question 4 Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
var x = window.prompt("Please enter any Number");
if (x > 0) {
    console.log("Output positive")
}
else {
    console.log("Output negative")
}


//Question 5 Write a program that take 3 integers from user then print the max element and the min element.
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

//Question 6 Write a program that allows the user to insert integer number then check If a number is oven or odd
var a = Number(window.prompt("Enter first number to check for even or odd:"));
if (a % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

//Question 7 Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
var a = window.prompt("Enter a character to check if it is a vowel:");
a = a.toLowerCase();

if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

//Question 8 Write a program that allows user to insert integer then print all numbers between 1 to that’s number
var a = Number(window.prompt("Enter any number:"));
for (var i = 1; i <= a; i++){
    console.log(i);
}

//Question 9 Write a program that allows user to insert integer then print a multiplication table up to 12.
var a = Number(window.prompt("Enter any number for multiplication table:"));
for (var i = 1; i <= 12; i++){
    console.log(a * i);
}

//Question 10 Write a program that allows to user to insert number then print all even numbers between 1 to this number
var a = Number(window.prompt("Enter any number to find there even:"));
for (var i = 1; i <= a; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Question 11 Write a program that take two integers then print the power
var a = Number(window.prompt("Enter first number:"));
var b = Number(window.prompt("Enter second number:"));
console.log(a ** b);

//Question 12 Write a program to enter marks of five subjects and calculate total, average and percentage.
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


//Question 13 Write a program to input month number and print number of days in that month.(Switch case)

var month = Number(window.prompt("Please enter a month number: "));
var days;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        console.log(days);
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        console.log(days);
        break;
    case 2:
        days = 28;
        console.log(days);
        break;
    default:
        console.log("Not a valid month number");
}
//Question 13 Write a program to input month number and print number of days in that month.(if condition)

var month = Number(window.prompt("Please enter a month number: "));
var days;
if (month == 1 && month == 3 && month == 5 && month == 7 && month == 8 && month == 10 && month == 12) {
    days = 31;
    console.log(days);
} else if (month == 4 && month == 6 && month == 9 && month == 11) {
        days = 30;
        console.log(days);
}
else if (month == 28) {
        days = 28;
        console.log(days);
}
else {
    console.log("Not a valid month number");
    }


//Question 14 Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer  Find percentage and grade
var m1 = Number(window.prompt("Please enter Physics grade : "));
var m2 = Number(window.prompt("Please enter Chemistry grade: "));
var m3 = Number(window.prompt("Please enter Biology grade : "));
var m4 = Number(window.prompt("Please enter Mathematics grade : "));
var m5 = Number(window.prompt("Please enter Computer grade : "));

var sum = m1 + m2 + m3 + m4 + m5;
var percentage = (sum / 500) * 100;
switch (true) {
    case percentage >= 90:
        console.log("Grad A");
        break;
    
    case percentage >= 80:
        console.log("Grad B");
        break;
    
    case percentage >= 70:
        console.log("Grad C");
        break;
    
    case percentage >= 60:
        console.log("Grad D");
        break;
    
    case percentage >= 40:
        console.log("Grad E");
        break;
    case percentage < 40:
        console.log("Grad F");
        break;
    default:
        console.log("Not a valid grade")
}

//Question 15 Write a program to print total number of days in month

var month = Number(window.prompt("Enter month number (1-12):"));
var days;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;

    case 4: case 6: case 9: case 11:
        days = 30;
        break;

    case 2:
        days = 28; 
        break;

    default:
        console.log("Invalid month number! Please enter 1–12.");
}

if (days) {
    console.log(`Month ${month} has ${days} days.`);
}

//Question 16 Write a program to check whether an alphabet is vowel or consonant
var a = window.prompt("Enter a character to check if it is a vowel:");
a = a.toLowerCase();

switch (a) {
    case "a": case "e": case "i": case "o": case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

//Question 17 Write a program to find maximum between two numbers
var a = window.prompt("Enter a first number:");
var b = window.prompt("Enter a second number:");
var maxNum = a;
switch (true) {
    case maxNum < b:
        maxNum = b;
        console.log(`the max number is ${maxNum}`);
        break;
    default:
        console.log(`the max number is ${maxNum}`);
}

//Question 17 Write a program to check whether a number is even or odd
var a = Number(window.prompt("Enter first number to check for even or odd:"));
switch (true) {
    case a % 2 == 0:
        console.log(`even number`);
        break;
    default:
        console.log(`odd number`);
}

//Question 18 Write a program to check whether a number is positive or negative or zero
var a = Number(window.prompt("Enter first number to check for even or odd:"));
switch (true) {
    case a >=0:
        console.log(`positive number`);
        break;
    default:
        console.log(`negative number`);
}