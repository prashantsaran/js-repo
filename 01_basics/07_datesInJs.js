//Dates :

let myDate = new Date()
console.log(myDate.toString()) //Wed Nov 08 2023 09:58:14 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Wed Nov 08 2023
console.log(myDate.toLocaleDateString()) //11/8/2023
console.log(typeof myDate); // object (always as it gets created with help of new keyword)

let myCreatedDate = new Date(2023, 0 ,23); // months start from 0 in javascript
console.log(myCreatedDate.toDateString());

let myCreatedDat = new Date(2023, 0 ,23,8,3);
console.log(myCreatedDat.toLocaleString());

let mmddyyFormat=new Date("06-09-2023")
console.log(mmddyyFormat.toLocaleDateString())

//Timestamps(exact milliseconds) for poll

let myTimeStamp=Date.now() //will print the value in milliseconds
console.log(myTimeStamp);
//to convert it into seconds
console.log(Math.floor(myTimeStamp/1000))
//to get the months
let newDate=new Date()
console.log(newDate.getMonth()+1); //as months start from 0

//formating the date
let x=newDate.toLocaleDateString('default',{
    dateStyle :"full"

})
console.log(x)

console.log(myCreatedDat.getTime())

