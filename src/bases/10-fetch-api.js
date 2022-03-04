
console.log('index')

const GIPHY_API_KEY = 'N0bINsAm2prBrJapSZWig9hmp0OFscYo'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`)
    .then( response =>  response.json())
    .then(({data}) => { 
        const { url } = data.images.original
        console.log(url);
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })