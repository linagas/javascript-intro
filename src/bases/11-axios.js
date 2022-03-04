import axios from 'axios'

const GIPHY_API_KEY = 'N0bINsAm2prBrJapSZWig9hmp0OFscYo'
export const giphyApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params: {
        api_key: GIPHY_API_KEY
    }
})

// `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`

/*giphyApi.get(`/random`).then(response =>{
    const { data } = response.data
    const { url } = data.images.original
        console.log(url);
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
})*/
