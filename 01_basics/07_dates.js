// Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,23,5,3)
// let myCreatedDate = new Date(2024,0,23,5,3,11)
// let myCreatedDate = new Date("2024-01-26")
// let myCreatedDate = new Date("01-31-2024")
// console.log(myCreatedDate.toLocaleString());
// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date('2024,7,21');
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('defaulr',{
    weekday:"long",
}));
