console.log('index')

const myPromise = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(`Promise value`)
        },1000)
    })
}

const asyncPromise = async() =>{
    try {
        console.log('Inicio')
        const response = await myPromise()
        console.log(response);
        console.log('Fin')
        return response
    } catch (error) {
        return `catch error`
    }

}
asyncPromise()
.then(value => console.log('success promise: ', value))
.catch(error => console.log('Error:', error))




