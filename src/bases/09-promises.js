import { getHeroById} from './bases/08-example-import-export'
console.log('index')

console.log('inicio')
new Promise((resolve,reject) =>{
    console.log('cuerpo')
    resolve('promesa resuelta')
    //  reject('promesa resuelta con error')
}).then(  console.log)
.catch( console.log)
console.log('fin')


const getHeroByidAsync=(id)=>{ return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const hero = getHeroById(id)
        if (hero){
            resolve(hero)
        }else{
            reject(`El heroe id ${id} no existe`)
        }

    },1000)
})}

getHeroByidAsync(30).then( h => console.log(`El heroe es ${h.name}`)).catch( console.log)
