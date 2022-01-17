let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
 fruits.push("papaya");// ['Banana', 'Orange', 'Apple', 'Mango', 'papaya']

// Remove the last element from fruits array
 fruits.pop(); // 'papaya'

// Log the current length of fruits array
fruits.length // 4
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0]; // true [empty, 'Orange', 'Apple', 'Mango']
// Log the element on index 0 and 1
  fruits[0]    // undefined
  fruits[1]    // 'Orange'
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();            //  ['Orange', 'Apple', 'Mango']

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift('Guava');            // ['Guava', 'Orange', 'Apple', 'Mango']

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift('Dragon Fruit');      //  ['Dragon Fruit', 'Guava', 'Orange', 'Apple', 'Mango']

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
 fruits[0] === "Dragon Fruit" ; // true
 fruits[1] === "Guava"; //   true

// Update the value of index 1 to `Pears`
fruits.splice(1 ,0,"Pears"); // ['Dragon Fruit', 'Pears', 'Guava', 'Orange', 'Apple', 'Mango']

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)

fruits.splice(1 , 0 ,"Kiwi" ,"Lemon"); // ['Dragon Fruit', 'Kiwi', 'Lemon', 'Pears', 'Guava', 'Orange', 'Apple', 'Mango']
// Remove (slice) all the element from index 5
 fruits.splice(5,3); // ['Orange', 'Apple', 'Mango'] (remove element)
// Create another array named moreFruits with values ['Berries', 'Melons']
 let moreFruits = ['Berries', 'Melons'];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
let fruit = moreFruits.concat(fruits); // ['Berries', 'Melons', 'Banana', 'Orange', 'Apple', 'Mango']
// Log the name of all fruit in console
let allFruit = fruit.forEach((fruitName) => {
    console.log(fruitName)
});
// Output
 //  Berries
//   Melons
 //   Banana
 //   Orange
//   Apple
 //  Mango
// Convert each fruit name to lowercase and log it
let allFruitLower = fruit.forEach((fruitName) => {
    console.log(fruitName.toLocaleLowerCase());
});
/* 
Output -
         berries
         melons
         banana
         orange
         apple
         mango
*/

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = [];
let allFruitLower = fruit.forEach((fruitName) => {
    lowercaseFruits.push(fruitName.toLocaleLowerCase());
});

console.log(lowercaseFruits); // ['berries', 'melons', 'banana', 'orange', 'apple', 'mango']

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = [];
let allFruitLower = fruit.forEach((fruitName) => {
    uppercaseFruits.push(fruitName.toLocaleUpperCase());
});

console.log(uppercaseFruits); // ['BERRIES', 'MELONS', 'BANANA', 'ORANGE', 'APPLE', 'MANGO']


let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
    console.log(numbers.flat()); //  [1, 2, 3, 4]
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
 console.log(numbersTwo.flat(2)); // [1, 2, 3, 4, 5, 6]
// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
console.log(numbersThree.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Use forEach to log all the elements of numberThree array

numbersThree.flat(Infinity).forEach((num)=> {
    console.log(num);
}); // 1 2 3 4 5 6 7 8 9 10

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
    let doubleNumbers =(num) => num * 2 ;
numbersThree.flat(Infinity).map(doubleNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers =(num) => num * 3;
numbersThree.flat(Infinity).map(tripleNumbers); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers =(num) => num / 2;
numbersThree.flat(Infinity).map(halfNumbers); // [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
   function oddNum(num){
       return num % 2 !== 0;
   }
 let oddNumbers = numbersThree.flat(Infinity).filter(oddNum); // [1, 3, 5, 7, 9]

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
function evenNum(num){
    return num % 2 === 0;
}
let evenNumbers = numbersThree.flat(Infinity).filter(evenNum); //  [2, 4, 6, 8, 10]
// Find the index of 10 in numbersThree array
let index10Value = numbersThree.flat(Infinity).indexOf(10); // 9
// Reverse the values of numbersThree array
 let reverseNumberThree = numbersThree.flat(Infinity).reverse(); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Reverse the values of numbersTwo array

let reverseNumberTwo = numbersTwo.flat(Infinity).reverse(); // [6, 5, 4, 3, 2, 1]

// Join all fruits with '-', convert to uppercase and log it

console.log(uppercaseFruits.join('&')); // 'BERRIES-MELONS-BANANA-ORANGE-APPLE-MANGO'
// Join all fruits with '&', convert to lowercase and log it
console.log(lowercaseFruits.join('&')); // 'berries $ melons $ banana $ orange $ apple $ mango'
