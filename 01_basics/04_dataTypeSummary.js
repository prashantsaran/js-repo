/* datatypes in javascripts are of two types : Primitive and Non-Primitive 
Primitive Types : They are of seven types : string , number , boolean , null , undefined , symbol , BigInt
They are all call by value i.e., you don't get reference of memories rather a copy of it

Non-Primitive Type or Reference Type :  Array , Object , Functions

Javascript is dynamically typed , unlike typescript which is statically typed but also support type inference

*/


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */
let a=null;
a="Prashant";
let symb=Symbol(132); //symbol is defined like this
let xyz=Symbol(132); // this xyz will have different value
console.log(symb===xyz); // false

let bigInt=59380349540n; // bigInt is defined like this with n as suffix
const heroes=["Shaktiman","Hatim","Jumanji"];
let myObj={
    name:"Prashant",
    age:29
}
let myFunc=function(){
    console.log("Hello World!")
    return "this is data type summary file"
}
console.log(typeof(heroes),typeof(myObj),typeof(myFunc))