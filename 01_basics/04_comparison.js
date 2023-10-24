/* Javascript allows compare two different datatype but Typescript does not
It will not give you expected results */

console.log(null>0) //false
console.log(null==0); //false
console.log(null>=0); //true
console.log(null==undefined) //true

/*
The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false. */
console.log(undefined>0) //false
console.log(undefined==0); //false
console.log(undefined<=0); //true
console.log(null==undefined) //true


/*
'===' operator : this not only checks for value but also it's datatype
*/