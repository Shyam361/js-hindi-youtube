function sayMyName(){
    console.log("shyam Kiran")
}
sayMyName()

function addTwoNumbers(number1,number2=2){
    return number1+number2;
}

let sum=addTwoNumbers(5,'a');
console.log(sum);

function loginUserMessage(userName="user1"){
    if(userName==undefined){
        console.log("please enter a user name")
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("shyam"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("shyam"));

function calculateCartPrice(val1,val2,...number1){  // spread operator
    return number1;
}
// console.log(calculateCartPrice(200,300,400,34,34345));

const user={
    userName:"Shyam",
    prices:199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    userName:"kiran",
    price:400
})

const newArray=[1,2,4,5,4]
function secondValue(getArray){
    console.log(getArray[1])
}
secondValue(newArray);
secondValue([12,4234,4542])