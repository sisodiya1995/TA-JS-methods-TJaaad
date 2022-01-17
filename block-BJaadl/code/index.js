let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
    
// - Convert the above array "words" into an array of length of word instead of word.
words.map((l) => l.length); // [7, 7, 7, 9, 5, 7, 8, 6]
// - Create a new array that only contains word with atleast one vowel.
words.filter((l) =>{
  if(l.includes("a") || l.includes("e") || l.includes("i") || l.includes("o") ||l.includes("u")) {
     return l;
  }
} )
// Ans ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']

// - Find the index of the word "rhythm"
 words.indexOf("rhythm"); // 7
// - Create a new array that contians words not starting with vowel.
words.filter((l) =>{
  if( ! l.startsWith("a") && ! l.startsWith("e") && ! l.startsWith("i") &&! l.startsWith("o") && !l.startsWith("u")){
    return l;
  }
})
// ['mystery', 'brother', 'crocodile', 'pearl', 'crackpot', 'rhythm']

// - Create a new array that contianse words not ending with vowel
words.filter((l) =>{
  if( ! l.endsWith("a") && ! l.endsWith("e") && ! l.endsWith("i") &&! l.endsWith("o") && !l.endsWith("u")){
    return l;
  }
})

// ['mystery', 'brother', 'aviator', 'pearl', 'orchard', 'crackpot', 'rhythm']

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
numbers.reduce((acc ,cv) =>{
  acc = acc +cv;
  return acc;
},0)
// Ans- 87

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

numbers.map((n) => n*3); //  [18, 36, 3, 54, 39, 48, 6, 3, 24, 30]

// - Create a new array that contains only even numbers
numbers.filter((n) => n % 2 === 0); //  [6, 12, 18, 16, 2, 8, 10]

// - Create  a new array that contains only odd numbers.
numbers.filter((n) => n % 2 !== 0); //  [1, 13, 1]

// - Create a new array that should have true for even number and false for odd numbers.
numbers.map((n) =>{
      if(n % 2 === 0){
         return true;
      }else{
        return false;
      }
})
//Ans   [true, true, false, true, false, true, true, false, true, true]

// - Sort the above number in assending order.
    function comparafun(a,b){
      return a-b;
    }
    numbers.sort(comparafun); // [1, 1, 2, 6, 8, 10, 12, 13, 16, 18]
// - Does sort mutate the original array?
 // Ans- yes
// - Find the sum of the numbers in the array.
numbers.reduce((acc ,cv) =>{
     acc = acc + cv ;
      return acc ;

},0)  //  Sum - 87
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arry){
let avg   = arry.reduce((acc ,cv) =>{
     acc = acc + cv;
     return acc / arry.length;
   },0)

  return avg; 
}

let strings = [
  'seat', 
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(ary){
  let stringLength  = ary.map((str) => str.length).reduce((acc, cv) =>{
     acc = acc + cv;
     return acc / ary.length;

  },0);
    return stringLength;

}