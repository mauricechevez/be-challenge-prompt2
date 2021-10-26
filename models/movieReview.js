const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  name: String,
  comment: String
})

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  movietitle: {
    type: String,
    minlength: 0,
    maxlength: 200
  },
  description:String,
  image_url:String,
  score: {
    type: Number,
    min: 0,
    max: 10
  },
  comments: [commentSchema]
})

module.exports = mongoose.model('movieReview', reviewSchema)