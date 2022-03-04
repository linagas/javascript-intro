import { giphyApi } from "./bases/11-axios"
console.log('index')

const getImage = async() =>{
    try {
        const { data } = (await giphyApi.get('/random')).data
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.log('Error en la petición');
        throw error
    }
}
getImage()

