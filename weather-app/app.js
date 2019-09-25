const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')
const readline = require('readline');

const address = process.argv[2]

if(!address){

    console.log('Please provide a location')
}else {
    
    geoCode(address, (error, {longitude, latitude, location})=>{

        if (error){
            return console.log(error)
        }
        forecast(longitude, latitude, (error, forecastData)=>{
            const {summary} = forecastData
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(summary)
        })
    })
  
}
 

