const  person={
    name:"Tony Stark",
    age: 45,
    codeName: "Ironman"
}

const {name, age, codeName, power="No tiene poderes"} = person

console.log(name);
console.log(age);
console.log(codeName);
console.log(power);

const createHero = ({name, age, codeName, power="inteligencia"}) => ({
    uid: 123342,
    name,
    age,
    codeName,
    power
})

console.log(createHero(person))