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
I did not have time to implement this function, not only due to family obligations, but due to not having the knowledge of getting this done on time. 
~~I would likely use the OMDB API, but need to figure out how to add it to a "favorites" model. This favorites model will not be tied to a specific user, instead, anyone can add movie found from the API to the DB. How to integrate this?....~~