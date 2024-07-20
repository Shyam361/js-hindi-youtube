//array

const arr=[0,1,2,3,4,5];
arr.unshift(-1)
console.log(arr)
arr.shift()
// console.log(arr)
// const a=arr.slice(1,3)
// console.log(arr)
// console.log(a)

const b=arr.splice(1,1,6,7,8);
console.log(arr[3])

// console.log(b)

console.log(arr.indexOf(6))
