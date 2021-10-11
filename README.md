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

## 3rd party API to use
I would likely use the OMDB API, but need to figure out how to add it to a "favorites" model. This favorites model will not be tied to a specific user, instead, anyone can add movie found from the API to the DB. How to integrate this?....