/* 
1.Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
2.Given an array of car manufacturers, convert the array to a string and back to an array
3.Given an array of the names of your friends, add the words hello to each element of the array
4.Convert numeric array to Boolean
5.Sort the array [1,6,7,8,3,4,5,6] in descending order
6.Filter array [1,6,7,8,3,4,5,6] by value> 3
7.Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
8.Implement a loop that will print the number 'a' until it is less than 10
9.Implement a loop that prints prime numbers to the console
10.Implement a loop that prints odd numbers to the console 
*/

//------1

let arr = [ "Titanic" , "XXX" , "Hitman"];
arr.forEach( item => console.log( item ) );

// Titanic
// XXX
// Hitman

//------2

let arr2 = [ "FORD" , "OPEL" , "SEAT" ];
let arr2ToString = arr2.toString();
console.log( arr2ToString );  
let arr3 = arr2ToString.split( "," );
console.log( arr3 );

// FORD,OPEL,SEAT
// ['FORD', 'OPEL', 'SEAT']

//------3

let arr4 = [ "Serg" , "Pol" , "Zheka" ];
let arr5 = arr4.map( item => `Hello ${item}`);
console.log( arr5 );

// ['Hello Serg', 'Hello Pol', 'Hello Zheka']

//------4

let arr6 = [ 1 , 3 , 5 , 0 ];
let arr7 = arr6.map(  item => Boolean( item ) );
console.log( arr7 );

//[true, true, true, false]

//------5

let arr8 = [1,6,7,8,3,4,5,6];
let arr9 = arr8.sort( ( a, b ) => b - a );
console.log( arr9 );

//[8, 7, 6, 6, 5, 4, 3, 1]

//------6

let arr10 = [1,6,7,8,3,4,5,6];
let arr11 = arr10.filter ( item => item !== 3 );
console.log( arr11 );

//[1, 6, 7, 8, 4, 5, 6]

//------7

let num = 11;
let arr12 = [ 5 , 6 , 7 , 11 , 8 ];
function se( n , a ) {
  for( let i = 0 ; i < a.length ; i++ ) {
    if( n == a[ i ] ) { return console.log( `Index ${i}`) };
  };
  return console.log( "The number is absent in array." );
};

se( num , arr12 );

//Index 3

//------8

let a = 13;
while ( a >= 10 ) {
  console.log( a ) ;
  a--;
}

// 13
// 12
// 11
// 10

//------9

function primeGen( nc ) {
  if( nc <= 2 ) return console.log( 2 );
  if( nc > 2 && nc <= 3 ) {
    console.log( 2 ) ;
    return  console.log( 3 ) ;
  }else{
    console.log( 2 ) ;
    console.log( 3 ) ;
    for( let j = 4 ; j <= nc ; j++ ) {
      prime( j );
    };
  };
};

function prime( n ) {
  if( !( n % 2 == 0 || n % 3 == 0 ) ) {
    return console.log( n );
  };
};


let maxNum = 13;
primeGen( maxNum );

// 2
// 3
// 5
// 7
// 11
// 13

//------10

function oddGen( np ) {
  for( let k = 1 ; k <= np ; k++ ) {
    if( k % 2 !== 0 ) {
      console.log( k );
    };
  };
};

let maxNum1 = 13;
oddGen( maxNum1 );

// 1
// 3
// 5
// 7
// 9
// 11
// 13

