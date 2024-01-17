// 1.Create 2 objects: animal and cat, add move property to animal object, 
// 2.cat object must inherit move property from object animal


class Animal {
  constructor( move ) {
    this.move = move ;
  };
};

class Cat extends Animal {
  constructor(...args) {
    super(...args);
  };
};

serg = new Animal( 10 ) ;
serg1 = new Cat( 20 ) ;

console.log( serg.move );
console.log( serg1.move );

// 10
// 20
