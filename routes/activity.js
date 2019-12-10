var express = require('express')
var Activity = require('../models').Activity_Tracker

var router = express.Router()

// '/activity' is for after the port number example:localhost:port#/activity
//'activities' is made up the same as '/activity'
router.get('/activity', function(req, res, next){
    Activity.findAll({order: ['date']})
        .then( activities => {
                return res.json(activities)
        })
        .catch( err => next.err() )
})

module.exports = router