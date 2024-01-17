/*
In a try catch construction, wrap the code: 
console.log (a), let a = 3. 
And display an error - ‘let must be declared’ before use.
When running 1/0, the error 'cannot be divided by zero'
*/

//------1

function test1() {
try {
  console.log(a);
  let a = 3;
}
catch {
  console.log("'let must be declared' before use");
}
};

test1();

//-----2

function test2() {
try {
  let b = 3;
  let c = 0;
  let d = b / c;
  ( c !== 0 ) ? console.log(d): pppp ;
}
catch {
  console.log("cannot be divided by zero");
}
};
    
test2();




