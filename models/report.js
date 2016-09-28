var mongoose = require('mongoose')
var Schema = mongoose.Schema

var reportSchema = new Schema({
  flagType: {
    // Abuse, Negative, Toxic / 1,2,3
    type: Number,
    required: true
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reportFor: {
    // Dare, Comment, Picture, User
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

var Report = mongoose.model('Report', reportSchema)

module.exports = Report
