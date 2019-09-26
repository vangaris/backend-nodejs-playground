const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

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
    res.send('Weather')
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