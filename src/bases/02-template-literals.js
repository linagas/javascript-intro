const firstName= "Leila"
const lastName= "Inagas"
const fullName= `${firstName} ${lastName}`

function sayHello(name){
    return 'Hi, i am ' + name
}

console.log(`this it's an example of template literal: ${ sayHello(fullName)}`)