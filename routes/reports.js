var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

mongoose.connect('mongodb://serverConnection:dare!not@ds021016.mlab.com:21016/dareornot2')

var db = mongoose.connection

// db.on('error', console.error.bind(console, 'connection error:')
db.once('open', function () {
  // we're connected!
  console.log('connected to db !')
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
