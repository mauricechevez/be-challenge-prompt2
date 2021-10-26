const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI + '/movieReviewDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=>{
    console.log('Connected to the DB!')
  })
  .catch((error)=>{
    console.log('! ERROR ! ')
    console.log(error)
  })

  module.exports = {
    movieReview: require('./movieReview'),
  }