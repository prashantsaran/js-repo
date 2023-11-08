// array

const myArr=[0,1,2,3,4,5] //can have data of different type in the same array at the same time
console.log(myArr[5]);

//array methods

myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()

myArr.unshift(9)// add element at the beginning
myArr.shift() // remove first element from the array
console.log(myArr)
const newArr=myArr.join() //converts it into string
console.log(typeof newArr)
//slice , splice 
console.log("A ",myArr)
const myn1=myArr.slice(1,3) // make no changes in the original array and returns a part of array leaving the last element of the array
console.log(myn1);
console.log("B ",myArr)
const myn2=myArr.splice(1,3) // also make changes in the original array and removes the array from index 1 to 3 and returns the element from one index to another including last index
console.log(myn2)
console.log("C ",myArr)

