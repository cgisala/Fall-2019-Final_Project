var express = require('express')
var bodyParser = require('body-parser')
var activity_api = require('./routes/activity.js')
var path = require('path')

var app = express()

//Serves the Vue app
app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use(bodyParser.json())

app.use('/api', activity_api)

//Error handlers - for not found, and app errors
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.statck)
    res.status(500).send('Server error')
})

//Start server running
var server = app.listen(process.env.PORT || 4000, function() {
    console.log('app running on port', server.address().port)
})