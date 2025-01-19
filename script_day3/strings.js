// strings => sequence of characters 
// "sandesh" or 'sandesh'

let firstname="sandesh";
let lastname="yadav";
let name=`sandesh
yadav`; // backtick method to create string 


console.log(typeof(firstname));
console.log(typeof(lastname));
console.log(name);
console.log(typeof(firstname)==typeof(lastname));

// operations on string :-

// concatenation
let a="hindi-";
let b ="english";

let ans =a+b; 
console.log(ans);

let final=`${a}${b}`; // another method of concatenation
console.log(final);

// substring
let s="India"
console.log(s.substring(2,4)) // ending character(4) not included

// length
console.log(a.length);
console.log(b.length);

// uppercase
console.log(a.toUpperCase());

// lowercase
console.log(b.toLowerCase());

// charAt
// indexof -- to determine the position of a particular character or substring within a string
let x="sandesh"
console.log(x.indexOf('n'));


// split method
let l="hello world , i am \"Sandesh\" new to this world";
console.log(l); // using \(backslash) we can print double quote(" ") inside a string 
let w=l.split(' ');
console.log(w); // return array 

let q="hello \\ji \\how \\are \\you"; // for using backslash inside a string we should use another backslash before it 
console.log(q);
console.log(q.split('\\'));

// string behave as an array in javascript 

// join method 
console.log(w.join(','))






