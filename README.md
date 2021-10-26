<<<<<<< HEAD
# be-challenge-prompt2

# Required Packages
* "axios": "^0.22.0",
* "dotenv": "^10.0.0", For `process.env` to work. This allows my API Key to be hidden in the `.env` file
* "express": "^4.17.1",
* "nodemon": "^2.0.13",
* "pug": "^3.0.2"
=======
# Movie Review site
Attempting a movie review site that doesn't require a login, which means anyone can post a review. 

# CRUD Functionality
**Create** a post
**Read** a post
**Update** a post
**Delete** a post

## Models
Review model which needs.
* an ID (by default, auto increment)
* Review Title
* Review Description
* Review Img URL
  
A comment model for each review..
* Comment ID (auto increment)
* Review ID number (based on Review model's ID)
* Comment description (the content itself)

## Routes

**DELETE** and **PUT** routes currently not working

| Verb | URL | Action | Description
| ----------- | ----------- | ----------- | ----------- |
| GET  | / | Index (Read) | The Homepage | 
| POST  | /create | Create (Create) | Form to Create an entry in the API | 
| GET | /all | Show (Read) | View all entries from the Server | 
| DELETE | /post/:id | Delete (Delete ) | Delete a post, based on ID | 
| PUT | / post/:id/edit | Edit (Put) | Edit a post, based on ID | 
| ------- | ------- | ------- | ------- |



## 3rd party API to use
I did not have time to implement this function, not only due to family obligations, but due to not having the knowledge of getting this done on time. I know how to pull data from an API, but I don't know how to integrate this into my own database. 

~~I would likely use the OMDB API, but need to figure out how to add it to a "favorites" model. This favorites model will not be tied to a specific user, instead, anyone can add movie found from the API to the DB. How to integrate this?....~~

## Link to finished product
Was not able to complete this on time. 
>>>>>>> 8d90cf9bec983f4071cd9bb1cbcd6f70015e9497
