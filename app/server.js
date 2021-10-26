const express = require('express')
const axios = require('axios')
const app = express();
require('dotenv').config();
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
const PORT = 3000;

// Middleware

// Required for POST route
// app.use(express.urlencoded({extended:false})) 

/* Variables */
let movieData = '';


/* ~~~~~ ROUTES ~~~~~~ */

app.get('/',(req,res)=>{
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${MOVIE_API_KEY}`)
    .then(function(response){
        // console.log(response.data)
        movieData = response.data
        console.log(movieData.Title)
    })
    .catch(err =>console.log('ERROR'))
})



// POST Route
app.post('/', (req,res)=>{
    console.log(req.body)
    res.end();
})


// Listen to Server
app.listen(PORT,(err)=>{
    if(!err){
        console.log('Listening on ' +PORT)
    } else {
        console.log(err)
    }    
})

