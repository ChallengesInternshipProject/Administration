var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Report = require('../models/report')

mongoose.connect('mongodb://serverConnection:dare!not@ds021016.mlab.com:21016/dareornot2')

var db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:')
db.once('open', () => {
  // Show message when connected to the db
  console.log('connected to db !')
})

/* GET users listing. */
router.get('/', (req, res, next) => {
  Report.find((err, reports) => {
    if (err) {
      return console.log(err)
    }
    res.send(reports)
  })
})

// Route for adding a report

router.post('/add', (req, res, next) => {
  // Get all the query params from the request
  var data = req.query

  // Set the query from the aprams
  var report = new Report({
    flagType: data.flagType,
    userID: data.userID,
    reportFor: data.reportFor,
    // Get server date
    date: Date.now()
  })

  report.save((err) => {
    if (err) {
      return res.send(err)
    }
    res.send('Report saved !')
  })
})

// Route for removign a report

router.delete('/remove', (req, res, next) => {
  var reportID = req.query.reportID


  // Find the report and then execute remove
  Report.find({
    _id: reportID
  }).remove().exec(function (err) {
    if (err) {
      return res.send(err)
    }
    res.send('Report removed')
  })
})

module.exports = router
