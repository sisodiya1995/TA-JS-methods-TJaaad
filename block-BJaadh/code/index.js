// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

numbers.indexOf(101); // 8

// - Find the last index of `9` in numbers

numbers.lastIndexOf(9); // 11

// - Convert value of strings array into a sentance like "This is a collection of words"

strings.join(" "); // 'This is a collection of words'

// - Add two new words in the strings array "called" and "sentance"

 let newSting = strings.concat("called" ,"sentance"); // ['This', 'is', 'a', 'collection', 'of', 'words', 'called', 'sentance']

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

let sentance = newSting.join(" "); // 'This is a collection of words called sentance'

// - Remove the first word in the array (strings)
let clonedStings = [...strings] ;
let RemoveIndex0 = clonedStings.shift(); // ['is', 'a', 'collection', 'of', 'words']

// - Find all the words that contain 'is' use string method 'includes'
sentance.includes('is'); // true
sentance.indexOf("is"); //  2
// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
     function divBY3(num) {
         return num % 3 === 0; 
     }
numbers.every(divBY3); // false
// -  Sort Array from smallest to largest
 function compareFun(a, b){
   // negative < 0 a
   // positive > 0 b
     return a-b ;
 }
 let clonedNumber = [...numbers];
 let accendingNuber =  clonedNumber.sort(compareFun); // [1, 3, 4, 5, 6, 7, 9, 9, 11, 12, 18, 101]

// - Remove the last word in strings
   clonedStings.pop(); // ['This', 'is', 'a', 'collection', 'of']
// - Find largest number in numbers
let largestNumber  = accendingNuber[accendingNuber.length -1];  // 101

// - Find longest string in strings

// - Find all the even numbers
    function evenNum(num){
      return num % 2 === 0;
    }    
let evenNumber = numbers.filter(evenNum); // [12, 4, 18, 6]
// - Find all the odd numbers

function oddNum(num){
  return num % 2 !== 0;
}  
let oddNumber = numbers.filter(oddNum);  // [1, 9, 7, 11, 3, 101, 5, 9]

// - Place a new word at the start of the array use (unshift)
 clonedStings.unshift("Akash"); // ['Akash', 'This', 'is', 'a', 'collection', 'of']

// - Make a subset of numbers array [18,9,7,11]

numbers.slice(3 ,7); // [18, 9, 7, 11]
// - Make a subset of strings array ['a','collection']

strings.slice(2,3); // ['a', 'collection']
// - Replace 12 & 18 with 1221 and 1881
 let add = numbers.slice(3,7).splice(0,3,12,18,1221,1881); //
// - Replace words in strings array with the length of the word
 let strLength =  strings.map((l) => l.length); // [4, 2, 1, 10, 2, 5]
// - Find the sum of the length of words using above question
   strLength.reduce((acc , num) => {
       return acc + num;
   }, 0);  // 24

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
  function jName(obj){
      return obj.firstname[0] ==='J';
  }
let jCustomerName = customers.filter(jName);
let jCustomerName = customers.filter((obj) => obj.firstname[0] === "J");
/* 

*/
// - Create new array with only first name

let firstName = customers.map((obj) => obj.firstname );  //   ['Joe', 'John', 'Dave', 'Jack']
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = customers.map((obj => `${obj.firstname} ${obj.lastname}`)); // ['Joe Blogs', 'John Smith', 'Dave Jones', 'Jack White']
// - Sort the array created above alphabetically
  fullName.sort(); // ['Dave Jones', 'Jack White', 'Joe Blogs', 'John Smith']

// - Create a new array that contains only user who has at least one vowel in the firstname.
      function vowel(str){
         if(str.includes('a') ||str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u')){
           return str;
         }
      }
firstName.filter(vowel); // ['Joe', 'John', 'Dave', 'Jack']
