var express = require('express')
var app = express()

app.use(express.static('public'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/hi', function (req, res) {
    res.json({time:new Date(),message:"What is the purpose of your visit?"})
})

app.listen(8080)
