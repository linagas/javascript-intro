
console.log("Hi");
//old syntax
function hello(name){
    return `hello ${ name }`
}

//new syntax implicit return
const sayHello = (name = 'Tony') => `Hello ${name}`

const name = "Nombre test"

const getUser = () => ({uid: 'ABCD1234', name: 'Barbara'})

const heroes = [{id: 1, name:'Batman'}, {id: 2, name:'Superman'}]
const exists = heroes.some((hero) => hero.id ==1)

console.log( hello(name), sayHello(), getUser(), exists )