const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

const forcast = require('./utils/forecast')
const geoCode = require('./utils/geoCode')

//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Created by Aris Vangelis'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Created by Aris vangelis'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Hello world',
        title: 'Help',
        name: 'Created by Aris vang'
    })
})

app.get('/weather', (req, res) => {

    if (!req.query.address){
        return res.send({
            error:'You must provide a search term'
        })
    }

    geoCode(req.query.address, (error, {longitude, latitude, location} = {} )=>{

        if (error){
           return res.send({ error })}

        forcast(longitude, latitude, (error, forcastData)=>{
            const {summary} = forcastData

            if (error){
                return res.send({ error })}

            return res.send({ 
                location, 
                summary,
                forcastData
            })
        })
    })
})

app.get('/products', (req, res)=>{
    if (!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404page', {
        message: 'Page not found'
    })
})

app.get('/about/*', (req, res) => {
    res.render('404page', {
        message: 'Page not found',
        name: 'Created by Aris vangelis'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})