// const tinderUser=new Object()
const tinderUser={}

tinderUser.id="12312"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log( tinderUser)

const regularUser={
    email:"123@fasdf",
    fullName:{
        userFullName:{
            firstName:"Shyam",
            lastName:"Nimma",
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// console.log(obj3)

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
// console.log(obj1)

// const obj3={...obj1,...obj2}
// console.log(obj3);

let keys=Object.keys(tinderUser)
let values=Object.values(tinderUser)
let entries=Object.entries(tinderUser)
// console.log(entries)

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course={
    courseName:"Js in Hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//  destructuring

const {courseInstructor:instructor,courseName:cname} = course

console.log(instructor,cname)