const request = require('request')

const url = 'https://api.darksky.net/forecast/425b9ef867c11e3cfdd515aa3f414ceb/37.8267,-122.4233'

request({
    url: url,
    json: true
}, (error, response) => {
    const tempre = response.body.currently.temperature;
    const pricip = response.body.currently.precipProbability;
    if (tempre > 60.00 && pricip === 0) {
        console.log("No way")
    }
    //console.log(response.body.currently)
})