var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

mongoose.connect('mongodb://192.168.137.89:27017/dareornot')
  /* GET home page. */
router.get('/', function (req, res, next) {
  res.send('ok')
})

module.exports = router
