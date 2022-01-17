let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:
let female = persons.filter((l) => l.sex === "F");
let male = persons.filter((l) => l.sex === "M");
// Find the average grade
let avgGrade = persons.reduce((acc , cv) =>{
  let grades = cv.grade;
  acc.push(grades);
  return acc;
}, []).reduce((acc , cv) => {
   acc = acc + cv;
   return acc;
},0) / persons.length; // 11.083333333333334

// Find the average grade of male
let avgFemale = persons.reduce((acc , cv) => {
  if(cv.sex === "M"){
      acc.push(cv.grade);
  }
  return acc;
},[]).reduce((acc , cv) => {
  acc = acc +cv;
  return acc;
},0)/female.lastIndexOf; 
// Find the average grade of female

let avgmale = persons.reduce((acc , cv) => {
  if(cv.sex === "F"){
      acc.push(cv.grade);
  }
  return acc;
},[]).reduce((acc , cv) => {
  acc = acc +cv;
  return acc;
},0) / male.length;
// Find the highest grade

let highestGrade = persons.reduce((acc , cv) =>{
      acc.push(cv.grade);
      return acc;
},[]).sort((a ,b) => b-a )[0]; // 18
// Find the highest grade in male
let higestGradeMale =persons.reduce((acc , cv) => {
  if(cv.sex === "M"){
      acc.push(cv.grade);
  }
  return acc;
},[]).sort((a , b) => b-a)[0] // 17
// Find the highest grade in female
let higestGradeFemale =persons.reduce((acc , cv) => {
  if(cv.sex === "F"){
      acc.push(cv.grade);
  }
  return acc;
},[]).sort((a , b) => b-a)[0] // 18
// Find the highest grade for people whose name starts with 'J' or 'P'
let higestGrade = persons.reduce((acc ,cv) =>{
      if(cv.name.startsWith('J') || cv.name.startsWith('p')){
         acc.push(cv.grade);
      }
      return acc;
},[]).sort((a,b) => b-a)[0];

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = fruitBasket.reduce((acc , cv) => {
    if(acc[cv]) {
      acc[cv] = ++acc[cv];
    }else{
      acc[cv] = 1;
    }
},{})

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

data.reduce((acc ,cv) =>{
   acc.push(cv.flat(Infinity))
   return acc ;
},[]);
// Using reduce flat data array

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
