const score=400
 
// console.log(score);

const balance=new Number(100)
// console.log(balance)

console.log(balance.toString().length);
// console.log(typeof balance.toFixed(2));

const otherNumber=23.8766
// console.log(otherNumber.toFixed(3));
// console.log(typeof otherNumber.toPrecision(2));

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

///+++++++++Math+++++++++++++++

console.log(Math);
console.log(Math.abs(-34));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(1,4,3,12,45));
console.log(Math.ceil(Math.random()*12))

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)