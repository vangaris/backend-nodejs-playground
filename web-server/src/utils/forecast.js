const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/425b9ef867c11e3cfdd515aa3f414ceb/'+ latitude +','+ longitude +'?lang=en'

    request ({
        url:url, json:true
    }, (error, response)=>{

        const {error2, code, longitude, latitude} = response.body

        if (error){
            callback('Unable to connect', undefined)
        } else if (error2){
            callback(`${code} and ${error2}`, undefined)
        } else {
            callback(undefined, {
                longitude,
                latitude,
                summary : response.body.daily.data[0].summary
            })
        }
    })

}

module.exports= forecast;