// operators in JavaScript
// 1. Arithmetic operators
let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a*b);

// increment and decrement operators
// post increment -- first use the value then increment 
console.log(a++);
console.log(a--);
// pre increment -- first increment then use the value
console.log(++a);
console.log(--a);


// 2. Assignment operators
a=a+10;
// a+=10; shorthand notation
console.log(a);
b=b-10;
// b-=10; shorthand notation
console.log(b);
a=a*10;
// a*=10; shorthand notation
console.log(a);

// 3. Comparison operators
// answer either true or false
console.log(a==b); // loose equality operator(it compare value only)
console.log(a>=b);
console.log(a<=b);
console.log(a>b);
console.log(a<b);
console.log(a!=b);

// strict equality operator(===)
// value and type of data should be same
let c='5';
let d=5;
console.log(c===d);
console.log(c!==d);

// 4. ternary operators
// contion?true:false
console.log(a>b ? 'a is greater' : 'b is greater');


// 5. Logical operators
// AND-- &&
// OR-- ||
// NOT-- !

// working with non boolean values
// falsy 
// truthy
// falsy values: undefined,null,0,'',NaN,false
// truthy values: anything which is not falsy

console.log(false || 3);
console.log(false || 'hello');

// short circuiting

// 6. Bitwise operators
// AND-- &
// OR-- |
// XOR-- ^
// NOT-- ~
// left shift-- <<
// right shift-- >>

console.log(2&5);
console.log(2|5 ); 
console.log(2^2);

console.log(10>>1);
console.log(10<<1);