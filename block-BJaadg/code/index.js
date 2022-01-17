// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
       let indexofIs  = quote.indexOf('is'); //  6

/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
   quote.charAt(indexofIs); // 'i'
/*
3. Log the message saying `The index of first is in quote is 7`
*/
quote.charAt(7); // 's'
/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
quote.charAt(0); // 'T'
quote.charAt(1); // 'h'
quote.charAt(2); //  'e'
quote.charAt(3); //  'r' 
quote.charAt(4); // 'e'
quote.charAt(5); //  ' '



/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
from.concat(`${from} said  ${quote} to ${to}`); // 'Syrio ForelSyrio Forel said  There is only one thing we say to death: Not today to Arya Stark'
/*
6. Does from, to and quote ends with "rk". Check all three.
*/
from.endsWith("rk"); // false
to.endsWith("rk"); //  true 
quote.endsWith("rk"); // false
/*
7. Does quote includes the word "Only"
*/
 quote.includes("only"); // true
/*
8. Does quote includes the word " we"
*/
quote.includes("we") ; // true
/*
9. Find the index of the the word `we` in quote
*/
quote.indexOf('we'); // 24
/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted = quote.split(' '); // ['There', 'is', 'only', 'one', 'thing', 'we', 'say', 'to', 'death:', 'Not', 'today']
 

/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
quoteSplitted[quoteSplitted.length] = "tomorrow"; // ['There', 'is', 'only', 'one', 'thing', 'we', 'say', 'to', 'death:', 'Not', 'today', 'tomorrow']

  quoteSplitted.join(" "); // 'There is only one thing we say to death: Not today tomorrow'

/*
12. Find the index of second "o" in quote. Use indexOf
*/
 quote.indexOf("o"); // 9
 quote.indexOf("o", 10); // 14

/*
13. Find the last index of letter "a" in quote.
*/
quote.lastIndexOf("a"); // 48
/*
14. Find the second last index of letter "a" in quote.
*/
quote.lastIndexOf("a", 47); // 36
/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/
quote.padEnd(70 ,"."); // 'There is only one thing we say to death: Not today....................'
/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/

quote.padStart(15 ,".");
/*
17. Log the repeat of "Hello World!" 10 times.
*/
"Hello World!".repeat(10); // 'Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!'
/*
18. Replace today to tomorrow in quote.
*/
quote.replace("today" ,"tomorrow"); // 'There is only one thing we say to death: Not tomorrow'
/*
19. Replace Stark to Lannister in quoteTo
*/
to.replace("stark","Lannister" ); // Arya Lannister'
/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
quote.slice(0,30); // 'There is only one thing we say'
quote.slice(0 ,30).padEnd(34,"."); // 'There is only one thing we say...'
/*
21. Find out does quote, from, to starts with "A"
*/
quote.startsWith("A"); // false
from.startsWith("A"); // false
to.startsWith("A");// true