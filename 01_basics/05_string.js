const name="prashant"
const repoCount=50

//using string interpolation with help of backtick ``
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//another way of declaring string 

const gameName=new String('Prashant')
console.log(gameName);
console.log(typeof gameName) //objects
/*
String {'Prashant'}
0: "P"  -> on browser it is stored as key value pairs
1: "r"
2: "a"
3: "s"
4: "h"
5: "a"
6: "n"
7: "t"

we also get many methods with this string objects
*/

//functions in string objects 

console.log(gameName.length) //8
console.log(gameName.toUpperCase()) //PRASHANT