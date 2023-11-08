const score=400
console.log(score); //400
const balance=new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString()); //100
console.log(balance.toString().length); //3
console.log(balance.toFixed(2))  //100.00 used in application like e-commerce

const otherNumber=123.8966
console.log(otherNumber.toPrecision(3));


//to convert number according to standards
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))
// ++++++++++++++++++++++ Maths +++++++++++++++++++++++++++
console.log(Math.PI)
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.floor(Math.random()*100)+1); //this is used in application
//generating number within limit
const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)+min));
