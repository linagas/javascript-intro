const person = {
    name: "leila",
    lastName: "inagas",
    age: 29,
    address: {
        city: "Algun lugar de la mancha",
        zip: 8239392
    }

}

const personCopy = { ...person}
personCopy.lastName = "Cualquier apellido"

//PD no confundir con un set que es algo similar a un diccionario
const personSet = new Set()

console.log(person);
console.log(personCopy);