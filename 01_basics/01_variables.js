const accountId=324423
let accountEmail="prasahant@gmail.com"
var accountPassword="password"
let accountCity="Jaipur"

accountEmail="saran@gmail.com"
accountPassword="saran" 
accountCity="Gorakhpur"
const obj=
{
    "name":"divya",
    "city":"pathna",
    "email":"divya@gmail.com"
}
const obj3=
{
    "name":"divya",
    "city":"pathna",
    "email":"divya@gmail.com"
}

console.log(accountEmail)
console.table([accountEmail,accountPassword, accountCity,obj,obj3])
/*
prefer not to use var : as it has global scope and it lead to many probem when there are two variables with same
name  and get overrided.
 */


