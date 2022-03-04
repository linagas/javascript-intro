console.log("Hi");
const characters = ['Goku', 'Vegeta', 'Bulma', 'Tronx']

const [, , bulma, , other = "otro"] = characters

console.log(bulma, other)

const returnArray= ([letters, numbers]) => ([letters, numbers])

const [letters, numbers] = returnArray(["xyz", 9876])

console.log(letters, numbers);