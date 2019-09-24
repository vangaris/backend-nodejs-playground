const express = require('express')

const app = express()

weather = {
    forcast: "Rain",
    location: {
        lon: 1,
        lat: 2
    }
}

app.get('', (req, res) => {
    res.send('<h1> Weather </h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Aris',
        lastName: 'Vangelis'
    }, {
        name: 'Giannis',
        lastName: 'Laz'
    }])
})

app.get('/about', (req, res) => {
    res.send(weather)
})

app.get('/weather', (req, res) => {
    res.send('Weather')
})



app.listen(3000, () => {
    console.log('Server is up on port 3000')
})