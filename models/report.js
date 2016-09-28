var mongoose = require('mongoose')
var Schema = mongoose.Schema

var reportSchema = new Schema({

  // Type of the report
  flagType: {
    // Abuse, Negative, Toxic / 1,2,3
    type: Number,
    required: true
  },
  // ID of the user who makes the report
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // What is the report for
  reportFor: {
    // Dare, Comment, Picture, User
    type: Number,
    required: true
  },
  // Id of the thing that the report is made for Example : Report for Comment with ID(57eb9f2641b0de35e0f08ce5)
  reportTargetID: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

var Report = mongoose.model('Report', reportSchema)

module.exports = Report
