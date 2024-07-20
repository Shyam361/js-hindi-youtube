const name="shyam"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String('GameofThrones')

console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));


// slicing
const newString=gameName.substring(0,4);
console.log(newString)

const anotherString=gameName.slice(-6,10)
console.log(anotherString)
const newStringOne="     Shyam.   "
console.log(newStringOne)
console.log(newStringOne.trim())


const url="a man is man who beats a man"
console.log(url.replace("man","women"))
console.log(url.includes("man"))

const words=url.split("man");
console.log(words)