var mongoose = require('mongoose')
var Schema = mongoose.Schema

var reportSchema = new Schema({
  flagType: {
    // Abuse, Negative, Toxic
    type: String,
    require: true
  },
  userID: {
    type: Schema.Tyoes.ObjectId,
    required: true
  },
  reportFor: {
    // Dare, Comment, Picture, User
    type: Schema.Types.ObjectId,
    required: true
  },
  date: {
    type: Date,
    required: true
  }

})
