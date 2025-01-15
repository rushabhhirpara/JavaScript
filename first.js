//**********************  IF-ELSE  *************************

// let age = prompt("Enter Your Age");

// if ( age >= 18) {
// console.log(" You can vote");
// } else {
//     console.log("You CanNot Vote")
// }

// let num = 7;

// if ( num % 2 === 0) {
//     console.log("num is even");
// } else {
//     console.log("num is odd");
// }

// turnury operator*****************************************
// let age  = 9
// let result = age >= 18 ? "adult" : "not Adult"
// console.log(result);

/* its chack that a 5 is a multiple of 5 or not, also we can put the number insted of 5 */

// let num = prompt("enter a number");

// if (num % 5 === 0 ) {
//     console.log(num, "its a multiple of 5");
// } else {
//     console.log(num, "its not a multiple of 5");
// }

/* GIVE A GRADE ON ACHIVED MARKS 

let score = prompt("Enter Your Marks (0 - 100)");
let grade

if (score >= 90 && score <= 100){
        grade = "A";
} else if (score >= 70 && score <= 89) {
        grade = "B";
} else if (score >= 60 && score <= 69) {
        grade = "c"
} else if (score >= 50 && score <= 59) {
        grade = "D"
} else if (score >= 40 && score <= 49) {
        grade = "E"
} else if (score >=0 && score <= 39) {
        grade = "F " + "(Try on Next Attempt)"
}

console.log("According to Your Marks , Your Grad Is : ", grade);
*/

// ***********************  LOOPS  ************************

//  1. FOR LOOPS*************************

/* print 5 times 

     for (let i=1; i<=5; i++) {         * (if we write i>=5;
    console.log("RJ Hirpara", i);         its a infinite loop
     }                                    never use this.)
*/

// calculate sum of 1 to 5 using for loop 1

/*
    let sum = 0;
    let n = prompt("Enter a Number to sum ")

    for (let i = 1; i<=n; i++){
        sum = sum + i;
    }
    console.log("sum = ", sum);
    console.log("Loop has Ended");
*/

// 2. WHILE LOOP  (same as for loop)**********************

/*     let i = 1;
        while (i <= 5) {
                console.log("RJ");
                i++;
        }
    */

// 3. DO-While LOOP ***************************************

/*     let i = 1;
        do {
              console.log("i=", i);
              i++;
        } while (i <= 5);
*/

// 4. FOR-OF LOOP (its use in String and Arrey ) ************

/*      let str = "Rushabh";
        let length = 0;
        for (let value of str) {
                console.log("value=", value);
                length++;
        }
                console.log("string Size", length);
*/

// 5. FOR-IN LOOP (its use in array) *************
//      IN OBJECT WE CAN FIND KEY AND KEY'S VALUE

/*       let student = {
                fullName: "Rushabh",
                age: 23,
                cgpa: 8.7,
                isPass: true,
        };
        
        for (let key in student ){
             console.log("key=", key, "value=", student[key]);
        }
*/

//  ****************Q-1 print even number 0 to 100************

/*

for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    //its logic of even number, for odd we use !==
    console.log("num", num);
  }
}

*/

// Q-2 guess the number and win the game *********************

/*

let gameNum = 25;
 
let userNum = prompt("Guess the Game Number : ");

while(userNum != gameNum) {
       userNum = prompt("You Enterd Wrong Number, Guess the number Again: ");
}
console.log("Congratulations, You Entered the right Number");

*/

//*************************STRING*****************************

// Templet Literals (special string)                          `this is a template litral` if we add placeholder in templet literals ${obj.price} is known as a string interpolation

/*
let obj = {
        item: "pen",
        price: 10,
};
 let output = `the cost of ${obj.item} is ${obj.price} ruppes, ${1+2+3}`  // FIRSTLY IS CALCULATE THE VALUE THAN IT WILL BECOME A PART OF STRING.
 console.log(output); // THIS IS A STRING INTERPOLATION

 console.log("the cost of",obj.item, "is", obj.price, "rs");
 
*/

// ESCAPE CHARACTER  ()

/*
 console.log("Rushabh\nHirpara"); // its give next line
 console.log("Rushabh\tHirpara"); // its give tab space
 let str = "Rushabh\nHirpara";
 let str2 = "Rj\tHirpara";
 console.log(str.length); // its give number six of character
 console.log(str2.length);
 */

// ***********************String Methods********************

// 1. for upper case *****************************************

/*
 let str = "Rushabh";
 newString = str.toUpperCase(); // or we can add on old variable (str = str.toUperCase(); insted of declare a new variable)
 console.log(str);
 console.log(newString);
*/

// 2. for lower case *****************************************

/*
 let str2 = "RUSHABH";
 str2 = str2.toLowerCase();  // its is for lower case
 console.log(str2);
*/

// 3. for remove whitespace **********************************

/*
 let str3 = "      i love surat  ";
 console.log(str3.trim());   // its remove whitespce from starting and ending 
*/

// 4. for a slice of string **********************************

/*
 let str = "0123456789";
 console.log(str.slice(1, 6));
 console.log(str.slice(5)); // its give remain index of string
*/

// 5. for joint 2 string *************************************

/*
 let str = "rushabh";
 let str2 = "hirpara";
 
 let result = str.concat(str2); // let result = str + str2;
 console.log(result);
*/

/* there are many methods for concat such as 
  
 let result = "My Name Is" + str + str2;
 let result = "hello" + 123;
*/

// 6. for replace the index of the sting *********************

/*
 let str = "hello";
 console.log(str.replace("lo", "p")); 

 // By using replaceAll its replace all matching index

 let str2 = "hellololo"; 
 console.log(str2.replaceAll("lo", "p"));
 */

// 7. for find index value **********************************

/*
  let str = "ilovesurat";
  console.log(str.charAt(5)); //5
*/

// for more search string methods in MDN ---------------------

//                                                            *** Q.1 Generate user name by starting (@_fullname_length)****

/*
let fullName = prompt("Enter Your Full Name Without Space");

let nameWithoutSpace = fullName.replaceAll(" ","");
let userName = "@" + nameWithoutSpace + nameWithoutSpace.length;
console.log(userName);
*/

// ************************Arrays********************************

// arrays is a collection of items.....

// how to creat Arrays (linear method)
// in the array the position of index is matter

/*

let heros = ["ironman", "hulk", "thor", "spider-man"];        let marks = [95, 76, 26, 45, 67];                             let info = ["Rushbh", 23, "Amreli"]; -- insted of this, use object for good practise to store the diffrent type of DataType.

*/

/*
let marks = [95, 76, 26, 45, 67];
console.log(marks); 
console.log(marks.length); // length is a property not a methos

let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
console.log(heroes);
*/

//  ********************Array indices*************************

/*
[97, 82, 64, 86, 36] list of array
arr[0], arr[1] arr[2]... // for access the value using index base
*/

// to change the value of array arr[0] = 90

/*
let marks = [95, 76, 26, 45, 67];
console.log(marks);
marks[0] = 87;   // we cannot change the value in string like this array bcz String -> Immutable & Array -> Mutable
console.log(marks)
*/

//  *****************looping over an Array******************* (print all elements of an array)

// loops include -> iterable(string, object, arrays)

/*
// print using a for loop 

let heroes = ["ironman", "thor", "hulk", "shaktiman","batman"];
 for ( let i = 0; i < heroes.length; i++) {
        console.log(heroes[i]);
}
*/

/*
// print using a for-of

let heroes2 = ["ironman", "shaktiman","batman"];
for (let hero of heroes2) {
        console.log(hero)
}
*/

/* ANOTHER EXAMPLE
let cities = ["Ahmedabad", "Surat", "Amreli", "Baroda"];

for (let city of cities) {
        console.log(city.toUpperCase());
}
*/

//  **********************PQ-1********************************
// for a given array with marks of student and find average marks of entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of marks) {
//         sum += val;
// }
// let avg = sum / marks.length
// console.log(`avg marks of the class = ${avg}` );

/*
************************ Method 1 ****************************
let price = [250, 645, 300, 900, 50];
 let i = 0;
for ( let val of price){
        let offer = val / 10;
        price[i] = price[i] - offer;
        console.log(`price after offer = ${price[i]}`);
        i++;
}

*/
//********************** Method 2 ****************************
/*
let price = [250, 645, 300, 900, 50];
 
 for ( let i = 0; i < price.length; i++){
        let offer = price[i] / 10;
        price[i] -= offer;
 }
  console.log(price);
  */

//***********************Arrays Methods***********************

// push method************************************************

/*
let foodItems = ["poteto", "apple", "litchi", "tomato"];
foodItems.push("chips", "vadapav"); // push method add items at the last index
console.log(foodItems);
*/

// pop method ************************************************

/*
// pop method delete items from last index
let foodItems = ["poteto", "apple", "litchi", "tomato"];

console.log(foodItems);
let deletedItems = foodItems.pop();
console.log(foodItems);
console.log("deleted items:", deletedItems);
*/

// tostring***************************************************

/*
// its convert array in string formet 
let foodItems = ["poteto", "apple", "litchi", "tomato"];
let marks = [45, 57, 45, 72, 97, 17];

console.log(foodItems);
console.log(foodItems.toString());

console.log(marks);
console.log(marks.toString());
*/

// concat method in Arrays ***********************************

/*
// its joins multiple array and return result

let marvelHeroes = ["thor", "thenos"];
let dcHeroes = ["superman", "Batman"];
let indianHeroes = ["shaktiman", "Krish"];

let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);
*/

// unshift ***************************************************

/*
// its add the index in starting of array

let foodItems = ["poteto", "apple", "litchi", "tomato"];

foodItems.unshift("pavbhaji");
console.log(foodItems);
*/

// shift method **********************************************

/*
// its delete the index in starting of array

let foodItems = ["poteto", "apple", "litchi", "tomato"];

let val = foodItems.shift();
console.log(foodItems);
console.log("deleted items:", val);
*/

// slice() method ********************************************

/*
// its give a piace of array, but its not change in original array

let foodItems = ["poteto", "apple", "litchi", "tomato", "dhokla"];

console.log(foodItems.slice(1, 3));
console.log(foodItems);
*/

// splice() method *******************************************

// its change in original array, it can add, remove and replace

/*
// 1 is for starting 2 is delete two index and 3,4 is replace at deleted index at splice method

 let arr = [1, 2, 3, 4, 5, 6, 7];
 arr.splice(2, 2, 333, 444);  
 console.log(arr);
 */

/*
 // if Add one Element
 let arr = [1, 2, 3, 4, 5, 6, 7];
 arr.splice(2, 0, 101);
 console.log(arr);
 */

/*
 // if Delete one Element 
 let arr = [1, 2, 3, 4, 5, 6, 7];
 arr.splice(3, 1);
 console.log(arr);
 */

/*
 // if Replace one Element
 let arr = [1, 2, 3, 4, 5, 6, 7];
 arr.splice(3, 1, 444);
 console.log(arr);
 */

// *********************** PQ-1 *****************************

// creat an array to store companies, 1.remove the first company from the array, 2.remove 3rd element and replace other 3.add one element in the last.

/*
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.shift(); // its delete first index.
console.log(companies);

companies.splice(1, 1, "ola"); // its replace ola from uber.
console.log(companies);

companies.push("Amazon"); // its add Amazon at the last console.log(companies);
*/

//  ********************** Function **************************
// Block of code that perform a specific task, can be invoked(call) whenever needded

/*

// creat a function****************************************** 

function firstFunction() {
        console.log("Hello");
        console.log("Fafda jalebi gathiya");
        console.log("chakabhai ni bhel");
        console.log("khaman");
}

// invoke(call) the function, we can invoke the function many times

// firstFunction is a refrence and () is a execution.
firstFunction(); // first time invoked
firstFunction(); // second time invoked

*/

// creat a function which is sum of two numbers***************
/*
function addTwoNumbers(number1, number2){  // its a paramiters
        console.log("The sum of two Numbers: ",number1 + number2);
}
 addTwoNumbers(2, 3); // its a argument as a value
 */

// Example with return***************************************

/*
 function sum(x, y) { // x and y is a local variable = scope(block of code{}.)
        s = x + y;
        return s;            // its return the value
 }
   let val = sum(3, 4);
   console.log(val);
*/

//*****Arrow Functions(compact way of writing a function)*****

// sum function with modern js using arrow

/*
const arrowsum = (a, b) => {
        console.log(a + b);
};

// multiplication function using Arrow

const arrowMult = (a, b) => {
        return a*b;
};
*/

//************************* PQ-1 *****************************

// Q-1 creat a function using the function keyword that takes a string as an argument & return the number of vowels in the sting.

/*
function countVowels(str){
        let count = 0;
        for (const char of str){
                if (
                        char === "a" ||
                        char === "e" ||
                        char === "i" ||
                        char === "o" ||
                        char === "u" 
                ){
                        count++;
                }
        }
        return count;
}
*/

// Q-2 Create a same function using Arrow function.***********

/*
const countvow = (str) => {
        let count = 0;
        for (const char of str){
                if (
                        char === "a" ||
                        char === "e" ||
                        char === "i" ||
                        char === "o" ||
                        char === "u" 
                ){
                        count++;
                }
        }
        return count;
}
*/

//********************** for each loop ***********************
// higher order function

/*
// using a normal function
const coding = ["js", "py", "java", "cpp"]
coding.forEach( function (items) {
        console.log(items);
} )
*/

/*
// using Arrow function

coding.forEach( (items) => {
        console.log(items);
})
*/

/*
// call back funtion using for each loop 

function printMe(items){
        console.log(items);
}
coding.forEach(printMe) 
*/

// for each has total 3 paramiters

/*
function printMe(items, index, arr){
        console.log(items, index, arr);
}
coding.forEach(printMe) 
*/

/*

// if there are same name in language name it will give you a only one item name.

const myCoding = [
        {
                lanuageName: "javascript",
                fileName: "js"
        },
        {
                lanuageName: "python",
                fileName: "py"
        },
        {
                lanuageName: "rubby",
                fileName: "rb"
        },
]

myCoding.forEach( (items) => {
        console.log(items.fileName);
})
*/

//*********************** PQ-1 *******************************

// PQ- for a given array of numbers, print the square of each value using the forEach loop.

/*
const num = [2, 3, 4, 5, 6];
     
let calSquare = (num) => {
  console.log(num*num);
};
num.forEach(calSquare); // callback
*/

//********************* Some Array Method ********************

// Map Array Method*******************************************

/*
let nums = [2, 3, 4];

let newArr = nums.map((val) =>{
        return val*val;
});
console.log(newArr);
*/

// Filter Array Method **************************************

// create a new array of elements that give true for a condition/filter. e.g: all even elements.

/*
let arr = [1, 2, 3, 4, 5, 6];

let evenArr = arr.filter((val) => {
        return val % 2 == 0;
});

console.log(evenArr);
*/

// ***************************************** compact array and loop operations with their outputs **********************************************

/*

// 1. Basic Array Operations
let nums = [1, 2, 3, 4, 5];

// Map: Double each number
console.log(nums.map((n) => n * 2));
// Output: [2, 4, 6, 8, 10]

// Filter: Get even numbers
console.log(nums.filter((n) => n % 2 === 0));
// Output: [2, 4]

// Find: Get first number > 3
console.log(nums.find((n) => n > 3));
// Output: 4

// 2. Working with Objects
let users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
];

// Get all names
console.log(users.map((u) => u.name));
// Output: ['John', 'Jane', 'Bob']

// Get users over 25
console.log(users.filter((u) => u.age > 25));
// Output: [{ name: 'Jane', age: 30 }]

// 3. Chaining Methods
let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers
  .filter((n) => n % 2 === 0) // get evens
  .map((n) => n * 2) // double them
  .reduce((sum, n) => sum + n); // sum them

console.log(result);
// Output: 24 (2*2 + 4*2 + 6*2)

// 4. Quick Array Transformations
// Remove duplicates
console.log([...new Set([1, 1, 2, 2, 3])]);
// Output: [1, 2, 3]

// Flatten array
console.log([1, [2, 3], [4]].flat());
// Output: [1, 2, 3, 4]

// 5. Practical Example: Todo List
let todos = [
  { id: 1, text: "Learn JS", done: false },
  { id: 2, text: "Build app", done: true },
  { id: 3, text: "Write docs", done: false },
];

// Get active todos
console.log(todos.filter((t) => !t.done));
// Output: [
//   { id: 1, text: 'Learn JS', done: false },
//   { id: 3, text: 'Write docs', done: false }
// ]

// Count completed todos
console.log(todos.filter((t) => t.done).length);
// Output: 1

// Get all todo texts
console.log(todos.map((t) => t.text));
// Output: ['Learn JS', 'Build app', 'Write docs']

// 6. Advanced Array Operations
// Sort by property
let sortedTodos = todos.sort((a, b) => a.text.localeCompare(b.text));
console.log(sortedTodos.map((t) => t.text));
// Output: ['Build app', 'Learn JS', 'Write docs']

// Find index
console.log(todos.findIndex((t) => t.id === 2));
// Output: 1

// Check if any todo is done
console.log(todos.some((t) => t.done));
// Output: true

// Check if all todos are done
console.log(todos.every((t) => t.done));
// Output: false

*/      

//********************************************** most useful array methods in JavaScript *******************************************************

/*

// Starting with this array
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];
let items = [
    { id: 1, name: 'Phone', price: 500 },
    { id: 2, name: 'Laptop', price: 1000 },
    { id: 3, name: 'Tablet', price: 300 }
];

// 1. push() - Add to end
fruits.push('grape');
console.log(fruits);
// Output: ['apple', 'banana', 'orange', 'grape']

// 2. pop() - Remove from end
let lastFruit = fruits.pop();
console.log(lastFruit, fruits);
// Output: 'grape' ['apple', 'banana', 'orange']

// 3. unshift() - Add to start
fruits.unshift('mango');
console.log(fruits);
// Output: ['mango', 'apple', 'banana', 'orange']

// 4. shift() - Remove from start
let firstFruit = fruits.shift();
console.log(firstFruit, fruits);
// Output: 'mango' ['apple', 'banana', 'orange']

// 5. map() - Transform elements
let doubled = numbers.map(num => num * 2);
console.log(doubled);
// Output: [2, 4, 6, 8, 10]

// 6. filter() - Get elements that match condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4]

// 7. reduce() - Accumulate values
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
// Output: 15

// 8. find() - Get first matching element
let expensive = items.find(item => item.price > 800);
console.log(expensive);
// Output: { id: 2, name: 'Laptop', price: 1000 }

// 9. findIndex() - Get index of first match
let index = items.findIndex(item => item.name === 'Tablet');
console.log(index);
// Output: 2

// 10. includes() - Check if element exists
console.log(fruits.includes('apple'));
// Output: true

// 11. slice() - Get portion of array
let sliced = fruits.slice(1, 3);
console.log(sliced);
// Output: ['banana', 'orange']

// 12. splice() - Remove/replace elements
fruits.splice(1, 1, 'kiwi');
console.log(fruits);
// Output: ['apple', 'kiwi', 'orange']

// 13. sort() - Sort array
let nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b);
console.log(nums);
// Output: [1, 1, 3, 4, 5]

// 14. join() - Convert array to string
console.log(fruits.join(', '));
// Output: "apple, kiwi, orange"

// 15. some() - Check if any element matches
let hasExpensive = items.some(item => item.price > 800);
console.log(hasExpensive);
// Output: true

// 16. every() - Check if all elements match
let allExpensive = items.every(item => item.price > 200);
console.log(allExpensive);
// Output: true

// 17. concat() - Combine arrays
let more = fruits.concat(['grape', 'melon']);
console.log(more);
// Output: ['apple', 'kiwi', 'orange', 'grape', 'melon']

// Practical Example - Data Processing
const orders = [
    { id: 1, items: ['book', 'pen'], total: 25 },
    { id: 2, items: ['laptop'], total: 1000 },
    { id: 3, items: ['phone', 'case'], total: 550 }
];

// Get all items bought
const allItems = orders
    .map(order => order.items)
    .flat();
console.log(allItems);
// Output: ['book', 'pen', 'laptop', 'phone', 'case']

// Get total revenue
const revenue = orders
    .map(order => order.total)
    .reduce((sum, total) => sum + total, 0);
console.log(revenue);
// Output: 1575

*/ 

// change mode using event************************************

/*
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
      if(currMode === "light"){
        currMode = "dark";
       body.classList.add("dark");
       body.classList.remove("light");
      } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
      }
});

*/
//************************************************************


// class *****************************************************

/*
class Toyotacar {
        start(){
                console.log("start");
        }
        stop(){
                console.log("stop");
        }
}
 
let fortuner = new Toyotacar();  // o/p: fortuner.start();
let lexus = new Toyotacar();     // o/p: laxus.start();
*/