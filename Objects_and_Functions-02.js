// 1.Create a car object, add a color property to it with the value equals 'black'
// 2.Change the color property of the car object to 'green'
// 3.Add the power property to the car object, which is a function and displays the engine power to the console
// 4.Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
// 5.Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
// 6.Write a function for calculating the type of argument and type output to the console
// 7.Write a function that determines whether a number is prime or not


//----1

const car = {
    color: "black",
};

car.color = "green";
car.power = console.log( 'Engine power: 100 kWt' );
car.power;

//----2

let  pears = 100;
let apples = 150;

function sum( pe , ap ) {
    return console.log( pe + ap );
};

sum( pears , apples );

//----3

//let arg = "txt";
//let arg = 0;
//let arg = false;
let arg = NaN;
console.log(typeof arg);

//----4

function prime( n ) {
  if( n < 2 ) { 
    return console.log( "Number is not prime" );
  };
  if( n == 2 || n == 3 ) { 
    return console.log( "Number is prime" ); 
  }else{
      if( n % 2 == 0 || n % 3 == 0 ) {
        return console.log( "Number is not prime" );
      }else{
        return console.log( "Number is prime" );
      };
  };
};

let num = 9;
prime( num );

