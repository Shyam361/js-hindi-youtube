// objects
// singleton

// object literals

const mySym =Symbol("key1")

const JsUser={
    name:"Shyam", 
    age : 18,
    [mySym]:"mykey1",  // notation to add symbol as a key in object
    location:"vzm",
    email:"123@.Com ",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// console.log(JsUser.lastLoginDays)
// console.log(JsUser["email"]);
console.log(typeof JsUser[mySym]); //notation to access a symbol key in object

JsUser.email="4566@erfe";
console.log(JsUser.email)
// Object.freeze(JsUser)  // 
JsUser.email="4@erfe";
console.log(JsUser)

JsUser.greeting = function (){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function (){
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())