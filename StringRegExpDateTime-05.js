/*
Given the string 'ahb acb aeb aeeb adcb axeb'. 
Write a regular expression that matches 
1.the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
2.Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 
without capturing the rest
3.Get the day, month and year of the current date and output it to the console separately
*/

//------1

let str1="ahb acb aeb aeeb adcb axeb";
let reg1=/a.b/g;
let str2=str1.match(reg1);
console.log(str2);

// ['ahb', 'acb', 'aeb']

//------2

let str3="2 + 3 223 2223";
let reg2=/\d\s\+\s\d/g;
let str4=str3.match(reg2);
console.log(str4);

// ['2 + 3']

//-----3

let curDate = new Date();
let month = ["January", "February", 
"March", "April" , "May" , 
"June", "July", "August", 
"September", "October", "November", 
"December"];
console.log(`Day: ${curDate.getDay()}`);
console.log(`Month: ${month[curDate.getMonth()]}`);
console.log(`Year: ${curDate.getFullYear()}`);

/*
Day: 4
Month: January
Year: 2024
*/
