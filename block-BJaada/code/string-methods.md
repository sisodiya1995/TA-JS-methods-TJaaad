Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

- syntex : toUpperCase();
- return :  return new string converted into uppercase.
- Example :
```js

console.log('alphabet'.toUpperCase()); // 'ALPHABET'
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase()); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

`toUpperCase`  return  string data type to upper case.
```



3. `toLowerCase`

- syntex : toLowerCae();
- return :  return new string converted into lower case.
- Example :
```js
let name = "Akash";
console.log(name.toLowerCase); // "akash"
console.log('ALPHABET'.toLowerCase()); // 'alphabet'

`toLowerCase` A new string representing the calling string converted to lower case.

```

4. `trim`

- syntex : trim()
-return : return a new string remove all the white space both end.
-Example :
```js
let akash = '   akash  ';
console.log(akash); // '   akash  '

console.log(akash.trim());  // 'akash'

`trim ` -The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
```



5. `trimEnd`
  -syntex : trimEnd()
            trimRight()
  - return : A new string representing str stripped of whitespace from its end (right side).          
 -Example :
 ```js
  let name = '  akash   '
  console.log(name.trimEnd()); // '  akash'
const greeting = '   Hello world!   ';
console.log(greeting.trimEnd()); //  "   Hello world!"

`trimEnd` The trimEnd() method removes whitespace from the end of a string.
 ```


6. `trimStart`
- syntex : trimStart()
           trimLeft() 
- return : a new string and remove  the whitespace  from the beginning(left side)
-Example :
```js

let name = '  akash   '
  console.log(name.trimStart()); // 'akash  '

  const greeting = '   Hello world!   ';
console.log(greeting.trimStart()); //  "Hello world!"

`trimStart`  The trimStart() method removes whitespace from the beginning of a string.
```
                    
 
7. `concat`
- parameter : a accept one or more strings.
- return : A new string containing the combined text of the strings provided.
- Example
```js
let first = "akash"
let last = "singh "
console.log(first.concat(' ' , last)); // "akash singh "

`concat` The concat() method concatenates the string arguments to the calling string and returns a new string.
```

8. `endsWith`
- parameter : accept string data type character or word.
  optional : string.length
- return  :  true or false 
- Example :
```js
const username = "Akash"
 username.endsWith('h');  // true
  username.endsWith('H');  // false
 username.endsWith('sh'); // true

 let str = 'To be, or not to be, that is the question.'
 console.log(str.endsWith('to be', 19))  // true

`endsWith`  The endsWith() method determines whether a string ends with the characters.
```


9. `includes`
- parameter : character or word (string data type)
  optional : default 0
- return : true or false
- example :
```js
'Blue Whale'.includes('blue')  // returns false
'Blue Whale'.includes('Blue')  // returns true

`includes`  The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
```



10. `indexOf`
- parameter :  string data type
  optional : form index
- return :  string length , -1 string is not exists in the string. 
- Example :

```js
let name = "Akash"
name.indexof('k') //1
console.log(name.indexof("j")); // -1 (not exists)

`indexof` The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
```



11. `lastIndexOf`
- parameter : string (string data type)
- return : index (number data type)
- Example :

```js
let username = "Hello World !"
console.log(username.lastIndexof('o')); // 7
console.log(username.lastIndexOf('l')); // 9

`lastIndexof` The lastIndexOf() method returns the index within the calling String.
```
12. `padEnd`
- parameter : string.length (index)
  -optional - pad string
- return : a string (specified target length)
- Example :
```js
let name = "vikas";
 console.log(name.padEnd(10,"s"));// 'vikassssss'

 'abc'.padEnd(10);          // "abc       "

`padEnd` add the padding in the at the given length. at the end of string.
```

13. `padStart`
- parameter : string.length (index)
 optional -pad string
- return : a string (specified length)
- Example :
```js
"21".padStart(5 ,"o") // "ooo21"
const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

`padStart` add the padding in the at the given length.at the beganning of the string.
```

14. `repeat`
- parameter : index (number data type)
- return : string (A new string containing the specified number of copies of the given string.)
- Example :
```js
let name = "Akash"

name.repeat(5);  // 'AkashAkashAkashAkashAkash'

`repeat` The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
```

15. `replace`
- parameter : string data type(first , second)
- retun : new string
- Example :
```js
let user = "akash"
console.log(user.replace("akash" , "vikas"));  //  vikas
console.log(user.replaceAll("a" , "k")); // kkksh

`repeat` The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
```

16. `slice`
- parameter : 2- index (number data type)
- return : string (string data type)
- Example :
```js
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."
console.log(str.slice(0));// 'The quick brown fox jumps over the lazy dog.'
console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
```

17. `split`
- parameter : split()
              split(separator)
              split(separator, limit)
- return : new array (character or words)
- Example :
```js
let sentance = "this is the my campus"
   sentance.split(''); //  ['t', 'h', 'i', 's', ' ', 'i', 's', ' ', 't', 'h', 'e', ' ', 'm', 'y', ' ', 'c', 'a', 'm', 'p', 'u', 's']
   sentance.split(' '); // ['this', 'is', 'the', 'my', 'campus']

```
`split` This the string method it's convert string to character or words and return it new array.

18. `substring`

- parameter :startIndex optional endIndex 
- return : new string(part of the string between start and end index)
-Example :
```js
const str = 'Mozilla';
console.log(str.substring(1, 3)); // "oz"
console.log(str.substring(2)); //  "zilla"
let text = 'Mozilla'
console.log(text.substring(5, 2))  // => "zil"
console.log(text.slice(5, 2))      // => ""

```
`substring` swaps the start and end index.
