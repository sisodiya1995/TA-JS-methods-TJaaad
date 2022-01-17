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

// Create an array peopleName and store value of sex key from persons array
persons.map((obj) => obj.sex); // ['M', 'F', 'M', 'M', 'M', 'F', 'M', 'F', 'F', 'F', 'M', 'F']
// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((obj) => obj.grade); // [8, 12, 16, 2, 4, 18, 5, 13, 15, 9, 17, 14]
// Create an array peopleSex and store the value of sex key from persons array
persons.map((obj) => obj.sex); // ['M', 'F', 'M', 'M', 'M', 'F', 'M', 'F', 'F', 'F', 'M', 'F']
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
persons.reduce((acc ,cv) => {
        if(cv.name.startsWith("J") || cv.name.startsWith("P")){
           acc.push(cv.name);
        }  
        return acc;   
},[]);                //   ['John', 'Johnny', 'Paula', 'Jennifer', 'Jane', 'John']

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

persons.reduce((acc ,cv) => {
  if(cv.name.startsWith("A") || cv.name.startsWith("C")){
     acc.push(cv.name.length);
  }  
  return acc;   
},[]);     // ['Courtney', 'Arya'] [8, 4]

// Log all the filtered male ('M') in persons array
persons.reduce((acc ,  cv) =>{
  if(cv.sex === "M"){
     acc.push(cv.name);
}
return acc;
}
,[]); // ['John', 'Bob', 'Johnny', 'Ethan', 'Donald', 'John']

// Log all the filtered female ('F') in persons array

persons.reduce((acc ,  cv) =>{
  if(cv.sex === "F"){
     acc.push(cv.name);
}
return acc;
}
,[]); // ['Sarah', 'Paula', 'Jennifer', 'Courtney', 'Jane', 'Arya']

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
persons.reduce((acc ,  cv) =>{
  if(cv.sex === "F"){
     acc.push(cv.name);
}
return acc;
}
,[]).reduce((acc ,cv) =>{
  if(cv.startsWith("C") || cv.startsWith("J")){
       acc.push(cv);
  }
  return acc;
},[]); // ['Jennifer', 'Courtney', 'Jane']

// Log all the even numbers from peopleGrade array
peopleGrade.filter((num) => num % 2 === 0); // 

// Find the first name that starts with 'J' in persons array and log the object
persons.map((p) =>p.name).filter((n) => n.startsWith("J"))[0]; // 'John'

// Find the first name that starts with 'P' in persons array and log the object
persons.map((p) =>p.name).filter((n) => n.startsWith("P"))[0]; //  'Paula'

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.reduce((acc ,  cv) =>{
  if(cv.sex === "F"){
     acc.push(cv.name);
}
return acc;
}
,[]); // ['Sarah', 'Paula', 'Jennifer', 'Courtney', 'Jane', 'Arya']

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.reduce((acc ,  cv) =>{
  if(cv.sex === "M"){
     acc.push(cv.name);
}
return acc;
}
,[]); // ['John', 'Bob', 'Johnny', 'Ethan', 'Donald', 'John']

// Find the sum of all grades and store in gradeTotal
 let gradeTotal  = persons.map((obj) => obj.grade).reduce((acc ,cv) => {
   acc = acc +cv ;
   return acc;
 },0); // 133

// Find the average grade
let avgGrade = persons.map((obj) => obj.grade).reduce((acc ,cv) => {
  acc = (acc + cv);
  
  return acc/ persons.length;
},0);
// Find the average grade of male
let avgMale = persons.reduce((acc ,  cv) =>{
  if(cv.sex === "M"){
     acc.push(cv.grade);
}
return acc;
}
,[]);
// Find the average grade of female
let avgFemle = persons.reduce((acc ,  cv) =>{
  if(cv.sex === "F"){
     acc.push(cv.grade);
}
return acc;
}
,[]);
// Find the highest grade
function comparafun(a,b){
  return a-b;
}
let highestGrade = persons.map((obj) => obj.grade).sort(comparafun)[persons.length-1]; // 18
// Find the highest grade in male
function comparafun(a,b){
  return b-a;
}
let highestGradeMale =persons.reduce((acc ,  cv) =>{
  if(cv.sex === "M"){
     acc.push(cv.grade);
}
return acc;
}
,[]).sort(comparafun)[0]; // 17
// Find the highest grade in female
let highestGradeFemale =persons.reduce((acc ,  cv) =>{
  if(cv.sex === "F"){
     acc.push(cv.grade);
}
return acc;
}
,[]).sort(comparafun)[0]; // 18

// Find the highest grade for people whose name starts with 'J' or 'P'

let higestGradeJorP = persons.reduce((acc ,cv) => {
  if(cv.name.startsWith("J") || cv.name.startsWith("P")){
     acc.push(cv.grade);
  }  
  return acc;   
},[]).sort(comparafun)[0];   // 18

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
function comparafun1(a,b){
  return a-b;
}
let peopleGrades = persons.map((obj) => obj.grade).sort(comparafun1); // [2, 4, 5, 8, 9, 12, 13, 14, 15, 16, 17, 18] Yes mutaied

// Sort the peopleGrade in descending order
function comparafun(a,b){
  return b-a;
}
let peopleGradeDec = persons.map((obj) => obj.grade).sort(comparafun); // [18, 17, 16, 15, 14, 13, 12, 9, 8, 5, 4, 2]

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let peopleGradeDec = [persons].map((obj) => obj.grade).sort(comparafun);
// Sort the array peopelName in ascending `ABCD..Za....z`
let peopleNameAce = [...peopleName].sort(); //  ['Arya', 'Bob', 'Courtney', 'Donald', 'Ethan', 'Jane', 'Jennifer', 'John', 'John', 'Johnny', 'Paula', 'Sarah']
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let peopleName =  persons.map((obj) => obj.name); // ['John', 'Sarah', 'Bob', 'Johnny', 'Ethan', 'Paula', 'Donald', 'Jennifer', 'Courtney', 'Jane', 'John', 'Arya']














