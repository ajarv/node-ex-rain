var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.json({time:new Date(),message:"What is the purpose of your visit?"})
})

app.listen(8080)
