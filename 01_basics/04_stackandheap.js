//Stack(Primitive) , Heap(Non-Primitve)
let myName="Prashant Saran"
let anotherName=myName
anotherName="Ratnakar Valmiki" // this stores copy of the myName in stack memory
console.log(anotherName)
console.log(myName) // changes occurs in only anotherName as it stores the copy.


let userOne={
    email:"prashant.s@novelvox.com",
    name:"Prashant Saran Singh"
}
let userTwo=userOne; //this directly stores the refrence and start pointing to it's refrence in the heap memory
userTwo.name="RATNAKAR VALMIKI"
console.log(userTwo,userOne); //changes occurs in both