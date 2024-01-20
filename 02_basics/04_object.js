const jsUser=new Object();

const pythonUser = {}



pythonUser.id=1
pythonUser.name="Prashant"
pythonUser.isLoggedIn=false
pythonUser.newObject ={
    email : "prashant.s@novelvox.com",
    neighour:{
        name:"devang mani tripathi",
        rollNumber:34,
        degree:"b-tech"
    }
}
console.log('python user :',pythonUser)

console.log('js user :',jsUser)

console.log('accessing object using []',pythonUser["newObject"])

//now this can also be written as :  

//this can be also written using

const obj1={1:"a",2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={...obj1,...obj2}  //using spread operators
console.log("final output",obj3);



const course={
    coursename: "javascript",
    price: "999",
    courseInstructor:"prashant"
}


//  destructoring 
const {courseInstructor}=course // now we can use courseInstructor directly
//but if we want to a assign a name to it it won't be accessed directly it will be accessed using it's name
//this can also be written as , the difference is here we are changing name
const {courseInstructor : instructor}=course; 

console.log('final output : ',instructor);



//we can access objects keys and values objectName.keys and objectName.values : it returns array of objects of keys and values

