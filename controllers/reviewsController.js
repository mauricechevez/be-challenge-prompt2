const router = require('express').Router()

// this allows you to call on other files within this directory. Access them through dot notation
// could also be written as: const reviews = require('../models/movieReview')
// You would then refer to this as reviews.find(), reviews.findOne(), etc.
const models = require('../models')

// Routes
router.get('/', (req, res) => {
    models.movieReview.find().then((foundReviews) => {
      console.log(foundReviews)
      // res.status(200).json({ reviews: foundReviews })
      res.render('../views/homepage.pug')
    })
    .catch((error) => res.send({ error }))
  })

  router.get('/create', (req, res) => {
    models.movieReview.find().then((foundReviews) => {
      console.log(foundReviews)
      res.render('../views/create.pug')
      
    })
    .catch((error) => res.send({ error }))
  })

  router.get('/:id', (req, res) => {
    models.movieReview.findOne({_id: req.params.id}).then((review) => {
      res.status(200).json({ review })
    })
    .catch((error) => res.send({ error }))
  })

router.post('/create', (req,res)=>{
    const post = req.body
    models.movieReview.create(post)
    .then((review)=>{
        console.log(review)
        // res.status(201).json({review})
        res.render("../views/create")
    })
    .catch((error)=> console.log(error))
})


module.exports = router