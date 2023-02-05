"use stricts";

// Task 1
let firstNum = prompt("Enter a first number:");
let secondNum = prompt("Enter a second number:");

if(Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
    console.log("Sorry, we accept only numbers!");
} else {
    if (firstNum > secondNum) {
        console.log("First number is bigger then second");
    } else if (firstNum < secondNum) {
        console.log("Secound number is bigger then first");
    } else {
        console.log("Numbers are equal")
    }
}

// Task 2
let admin;
let userName = "Oksana";

admin = userName;
console.log(admin);

// Task 3
console.log("оливье" > "ананас"); //true because "o" stays further in the alphabet and has bigger number as "a"
console.log("кодировка" > "котировка"); //false because first 2 lettera are the same and "т" stays futher in the alhabet and has bigger number then "д"
console.log("22" > "222"); //false because number 222 is bigger then 22, and even we got 2 stings, JS understands that they are numeric and can compare them

// Task 4
let userInput = prompt("Give a value to convert into a number:");
if (!Number.isNaN(userInput)) {
    console.log("This value can be converted in to a number");
} else {
    console.log("This value cannot be convertted in to a number. We will get a NaN!");
}

// Task 5
let myArray = [3, 2, 6, 0, 1, 15, 35, 66, 91, 100];
let evenArray = [];

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 == 0) {
        evenArray.push(myArray[i]);
    } 
}
console.log(evenArray);

// Task 6
let reverseArray = [];
for (let i = myArray.length - 1; i >= 0; i -= 2) {
    reverseArray.push(myArray[i]);
}
console.log(reverseArray);

// Task 7
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray % 2 == 1) {
        sumOdd += myArray[i];
    } else {
        sumEven += myArray[i];
    }
}

if (sumOdd >= sumEven) {
    console.log(sumOdd - sumEven);
} else {
    console.log(sumEven - sumOdd);
}

// Task 8
let randomArray = [23, 27, 43, 15, 20, 35, 27, 11, 21, 1, 17, 3, 6, 13, 25, 22, 18, 9, 14, 12, 36, 29, 22, 40, 32, 8, 10];
let temp;
for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[0] < 10) {
        break;
    } else {
        temp = randomArray.shift() * 2;
        randomArray.push(temp);
    }
}
for (let i = randomArray.length - 1; i >= 0; i--) {
    if (randomArray[randomArray.length - 1] < 25) {
        break;
    } else {
        temp = randomArray.pop() - 25;
        randomArray.unshift(temp);
    }
}
console.log(randomArray);

// Task 9
let newArray = [23, 7, 43, 5, 2, 35, 27, 11, 21, 1, 17, 3, 6, 13, 25, 22, 18, 9, 14, 12, 36, 29, 22, 40, 32, 8, 10];
let max = 0;
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) {
        max = newArray[i];
    }
}
console.log(`Maximal number in array is ${max}`);