// Required modules
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', require('./controllers/reviewsController'))

// Static Files Folder
app.use(express.static("public"))

// Template Engine
app.set('view engine', 'pug')


app.listen(PORT, (req,res)=>{
    console.log("listening on " + PORT)
})