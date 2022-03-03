
console.log("Hi");

const arrayTest = [1,2,3,4] //new Array(7)
arrayTest.push(5)
//spread operator
const arrayTwo =[ ...arrayTest]
arrayTwo.push(6)

//map
const otherArray = arrayTest.map((n) => n*2)

console.log(arrayTest)
console.log(arrayTwo)
console.log(otherArray)