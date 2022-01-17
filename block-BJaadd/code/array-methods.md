Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
- parameter : join(separator) , accepts (,) ,(-) 
- return : new string (concatinating all the array element);
- example :
```js
let ary = ["akash" , "singh" , "sisodiya"];
  ary.join(); // 'akash,singh,sisodiya'
  ary.join(''); // 'akash singh sisodiya'
  ary.join("-"); //  'akash-singh-sisodiya'
```
`join`  join method apply on array , it's return new string  by concatanating by each element of array.
  - no mutation

3. `flat`
- parameter : depth(number data type)
- return : new array (by concatnating all array) default -1
```js
let array = [1, 2, [3, 4, [5, 6]]];
 array.flat(); // [1, 2, 3, 4, Array(2)]
 array.flat(2); //  [1, 2, 3, 4, 5, 6]
 array.flat(Infinity); // [1, 2, 3, 4, 5, 6]
```
`flat` flat method of array ,it's accepts number data type and return new array by concatended sub arrays.
       No it does not mutate the original array

4. `push`
- parameter : push(element0, element1, /* ... ,*/ elementN) accept multiple parameter.(number , string , boolean, NaN)
- return : new array (new length)
- example :
```js
let user = ["akash","singh"];
user.push(45); // ['akash', 'singh', 45]
user.push("sisodiya"); // ['akash', 'singh', 45, 'sisodiya']

```
`push` push method of array , it add one or more element last of array.
    yes it is mutate the original array




5. `indexOf`
- parameter : array element (search element) 
- return : index of the element , -1 element not present in array.
- example :
```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('bison', 2));// 4 start from 2
console.log(beasts.indexOf('giraffe')); // -1 not exixts
```
`indexof`  this method return the index of the given element.
 - no mutation
6. `lastIndexOf`
- parameter : search element
- return : index , -1 if not found
- example :
```js
let num = [1,2,3,4,1];
num.indexof(1); // 0
num.lastIndexof(1) // 4
```
`lastIndexof` this method give last index of the given element.
7. `includes`
- parameter : searchElement
 optional - formIndex
- return : true or false
- Example :
```js
let colors = ['red' , 'orange','pink'];
colors.includes('red'); // true
colors.includes('black'); // false

```
`includes` this method return true or false based element exist in array or not.
 - no mutation

8. `reverse`
- parameter : reverse()
- return: reversed array
- Example :
```js
let number = [1,2,3,4];
number.reverse(); // [4, 3, 2, 1]
```
`reverse` This method return reversed array ,first element became last and last became first elemets of array.
          yes it is mutate the original array


9. `every`
- parameter : callback function , index , array
- return : true or false (Boolean value)
- Example :
```js
let numbers = [4, 5 ,6 ,7 ,8];
let ret = numbers.every(function(number){
   return number > 0 ;
});

console.log(ret); // true
```
`every` This method return true if callback function return thuthy value for each elements of the array else return false.
10. `shift`
- parameter :shift()
- return : remove the element from the start
- Example :
```js
let num = [3,5,6,8];
num.shift(); // [5, 6, 8]

```
`shift` This method remove the array element from the start.
    yes it is mutate the original array

11. `splice`
- parameter :splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

- return :  Array (remaining element)
- Example :
```js
let num = [2,6,8,5,7];
num.splice(6); // [2,8,5,7]
num.splice(); // []
```
`splice` This method return new array after add or removing the element ,if no element are remove it's give empty array.
- mutates
12. `find`
- parameter :callback function , optional(index , array)
- return : value or undefined (if callback function return not true)
- Example :
```js
let numbers = [12,45,23,46,76];
function isTwelve(num){
    return num === 12;
}
let findreturn = numbers.find(isTwelve);
console.log(findreturn); // 12
```
`find`  This method return a value if callback function return true else  return `undefined`.
13. `unshift`
- parameter : elements
- return :new array
- Example :
```js
let number = [2,4,5,6];
number.unshift(3);// [3, 2, 4, 5, 6]
number.unshift(3,9);  [3, 9, 3, 2, 4, 5, 6]
```
`unshift` This method return new array , add one or more element at the beginning of the array.
 - mutates

14. `findIndex`
- parameter : callback function , optional (index ,array)
- return : The index of the first element in the array that passes the test. Otherwise, -1.
- Example:
```js
let numbers = [12,45,23,46,76];
function isTwelve(num){
    return num === 12;
}
let findreturn = numbers.findIndex(isTwelve);
console.log(findreturn); // 0
```
`findIndex` this method return the index number first element match the condition , otherwise return -1


15. `filter`
- parameter :callback function ,optional(index ,array)
- return :new array or same size array , empty array (return false)
- Example :
```js
let numbers = [6,9,4,5];
function isEven(num){
  return num % 2 === 0;
}
let evenNumber =numbers.filter(isEven); // [6, 4]

```
`filter` This method accepts the callback function if that callback function return true, value passed inside the array.
    if   false return empty array. 
   - no mutation 

17. `forEach`
- parameter :callback function ,optional(index ,array)
- return : `undefined`
- Example :
```js
let colors = ["red" , "pink" , "orange"];
 function log(color){
   console.log(color);
 };
 colors.forEach(log); // red
                      //  pink
                      // orange
```
`forEach` forEach an Array method that accepts a callback function and apply callback function each element of the array 
      and donot return any thing that's why undefined.
18. `map`
- parameter :callback function ,optional(index ,array)
- return : Same size of Array
- Example :
```js
let numbers = [3,7,8,5];
function double (number){
    return number *2;
}
let doubleNumber = numbers.map(double);
```
`map` map accepts thecall back function and map is calling double function for each element of the array and it return same 
     size of the array(new array)
    - no mutation
19. `pop`
- parameter :pop()
- return :The removed element from the array; undefined if the array is empty.
- Example :
```js
let numbers = [5,7,4,8];
numbers.pop(); // [5,7,4]
```
`pop` This method remove the array element from the last and return that element.
         yes it is mutate the original array
20. `reduce`
- parameter :callback function , callback function(accumulator , currentvalue ,Index ,array )
- return :(number ,string , array ,object) deepend on the initial value of the (accumulator)
- Example :
```js
let numbers = [1,5,8,6,9,4];
let sum =numbers.reduce((acc ,num) =>{
     return acc + num ;

} ,0 );

console.log(sum) // 33
acc =0;
num =1;
return 0 + 1 // 1
```
`reduce` reduce function accept two parameter callback function and initial value , that's callback function access to
      four element , accumulator , current value , index , array and it's return (number , string , object , array) depends upon
        the initial value (acc)
        - no mutation
21. `slice`
- parameter : slice()
              slice(start)
              slice(start, end)
- return :new array(extracted element);
- Example :
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
onsole.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]
```
`slice` This method return new array it,s accepts two parameter (start ,end) and return the extracted elements array. 
22. `some`
- parameter :callback function , index , array
- return : true or false (Boolean value)
- Example :
```js
let numbers = [5,8,,6,8]
let ret = numbers.some(function(number)){
    return number > 6;
}); 
```
`some` This method return true if at least one of callback function return true.
- no mutation 