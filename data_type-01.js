/*
1.Perform addition of various types (string + boolean, string + number, number + boolean)
2.Perform multiplication of various types (string * boolean, string * number, number * boolean)
3.Divide different types (string / boolean, string / number, number / Boolean)
4.Perform explicit conversion (number, string, boolean)
*/

//------1

console.log("1" + false);
//"1false" 
console.log("1" + 1);
//"11" 
console.log(1 + true);
//2

//-----2
console.log("1" * false);
//0
console.log("1" * 1);
//1
console.log(1 * true);
//1 

//-----3
console.log("1" / false);
//Infinity
console.log("1" / 1);
//1
console.log(1 / true)
//1

//-----4
console.log(Number( '100' ))
//100
console.log(Number(  true ));
//1
console.log(String( 1 ));
//'1'
console.log(String( false ));
//'false'
console.log((1).toString())
//'1'
console.log((false).toString());
//'false'
console.log(Boolean( 1 ))
//true
console.log(Boolean( "1" ))
//true

