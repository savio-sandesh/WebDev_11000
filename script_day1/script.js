// var age =25;
// global scope 

if(true){
    console.log(age);
}


function solve() {
    var age = 30;
    console.log(age)
}

console.log(age); //  it will throw an error "age is not defined".
// it means that var is function scoped.

solve();

{ let age = 20;
    console.log(age);
 }

 let num;
 let value=null;
 console.log(value); // null
 console.log(num); // undefined

 marks=false;
console.log(typeof marks); // boolean

