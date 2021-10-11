
require('dotenv').config() // Required to know where the DB is located
const models = require("./models")

// Delete the entire collection
// models.movieReview.collection.drop().then((result)=>{console.log('dropped')})

models.movieReview.create({
    name:'Ignacio Varga',
    movietitle:'Death Wish 1',
    description:"First Charles Bronson Movie",
    image_url:"https://m.media-amazon.com/images/M/MV5BYWQ2ZjUxNWYtZDU5Ni00Y2MwLTg1YjktMjBhMmEyYjQ1MjUxL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX500_.jpg",
    score:5
})
.then(()=>{
    console.log("Added review")
    return;
})
.catch((error)=>{
    console.log(error)
})

// models.movieReview.update({
//     _id: "6163009df3554513563b689e",
// })