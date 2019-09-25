const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../Public')
app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title:'Weather app',
        name: 'Aris Vangelis'
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        title:'About me',
        name:'Aris vangelis'
    })
})

app.get('/help', (req,res)=>{
    res.render('help', {
        message :'Hello world'
    })
})

app.get('/weather', (req, res) => {
    res.send('Weather')
})



app.listen(3000, () => {
    console.log('Server is up on port 3000')
})