const request = require('request')

const geoCode = (address, callback) => {

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXJpc3ZhbmciLCJhIjoiY2swbGVjYXJyMHN2NDNuc3ZmdG95b2ExMiJ9.j9BP_2QxKOYklEh4YMFf3Q&limit=1`

    request ({url:url, json: true}, (error, {body}) => {

        const {length} = body.features
        
        if (error){
            callback('Unable to connect', undefined)
        } else if (length === 0 ){
            callback('Unable to connect to location services', undefined)
        } else {
            callback(undefined,{
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1],
                location : body.features[0].place_name,
            })
        }   

    })
}

module.exports = geoCode