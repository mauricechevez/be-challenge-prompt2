# 

# BACKEND CHALLENGE

You will be building a JSON API using Mongoose/Express, Flask, or Django RESTful Framework. In addition, you will find a dataset/third-party API to pull data into your API. You will have to be creative.

There are many outstanding APIs you can use. In addition to building your API, you must document every route. You can do this in the Readme file of the project or using a tool like Swagger or apidoc (see below). Every great API has great documentation to go with it! You can use the docs from other APIs as examples for how to write your own.

## Requirements

Your project must satisfy the following requirements:

- Be built using Express and Mongoose, Flask, or Django RESTful Framework.
- Have at least two models and have accessed a third-party API.
- Have FULL CRUD (CREATE, READ, UPDATE, **AND** **DELETE**) functionality implemented with RESTful routes. You may distribute CRUD across models should you decide to implement more than one. If the third-party API has full CRUD functionality, you still must be able to do **FULL CRUD** on your API, meaning CREATE, READ, UPDATE, DELETE on your **OWN** database.
- Have a repository under your GitHub account (do not fork this repo).
- Be deployed to Heroku (we will have a lesson on this later this week). (**THIS IS REQUIRED**)
- Have good, clean Javascript/Python code with comments on what is happening throughout your code. Use the auto-formatter regularly!
- Demonstrate a good commit history. The more commits you make, the better it is for you when something goes wrong.
- Have well-documented API routes
- Must have a well-document README (**THIS IS REQUIRED**)
  - A description of your API. Basically, what is it, and what does it do.
  - A README must have instructions on how to install and run your API locally.
  - List of the routes
  - A sample of what the response will be from the routes
  - A list of technology used in your API

**Sample of a README:**

https://github.com/WhiteHouse/api-standards/blob/master/README.md

https://github.com/bbc/REST-API-example/blob/master/README.md

> If you have issues with writing, use google docs and the grammarly extension:
> https://www.grammarly.com. 
> Also you can use Typora to help with markdown formatting: https://typora.io



## BONUS:

The above are minimum requirements. If you want some extra challenges, try one of these ideas:

- [Swagger](https://swagger.io/tools/swagger-inspector/) - Swagger is a fantastic tool that helps you build new APIs or document existing ones. It plays nicely with node and express.
- [apidoc](https://github.com/apidoc/apidoc) - apidoc is a tool that lets you describe existing APIs using inline comments in your code and generate documentation for them.
- [Artillery](https://artillery.io/) - Artillery is a load-testing toolkit, which is a lot of fun to use.
- Authentication w/ JSON web tokens or Oauth (https://jwt.io/introduction)
- Have your server require an auth token to accept requests.
- http://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api



## FAQ

**What data should I use?**

 There is a listing below to look at and view.

**Why is it hard to find data?** 

You are having this moment because you don't have a solid plan, or the plan you have isn't going the way you wanted it to, which is okay.  Just find some functioning data and make it work. Don't spend the majority of time searching for data. If you can't pull data within 24 hours, then find something easier. You got this!

**If I find some data, now what?**

When choosing datasets or data, make sure to look through it and check to see if you can access it and show it in your console.log 

**What if I don't want people to delete or update?**

The rules are rules, and even in work, there are things out there you don't want to do, but that doesn't mean you can do whatever. Make a model and controller just for some data to be able to update and delete. We need to see your capabilities to do FULL CRUD; you can adjust everything after it has been checked.

### Ideas for Backend:

- Instagram Backend
- Blog
- News Storage
- StockMarket Tracker
- Banking (Having login, account information, being able to do transactions)
- User Authentication System
- E-commerce System : Handle customers, quantity, variations, prices, images
- Government Data. Taking a dataset from a government department and building out an API based upon the data.
  -  Data USA: https://datausa.io/about/api 
  - Code.gov: https://code.gov/agencies
- Movie or Book Database with Favorites. Search through the movie or book API, then save each search to your api.



## API Resources:

- JSON Placeholder - [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)
- REQ | RES - [https://reqres.in](https://reqres.in/) 
- Mockup API - [https://www.mockaroo.com](https://www.mockaroo.com/)

### API List

- Public Apis: https://github.com/public-apis/public-apis 
- API List: [https://apilist.fun](https://apilist.fun/) 
- No Auth needed listing: [https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/) 
- Random Data API - [https://random-data-api.com](https://random-data-api.com/)

## Easy:

- Pokemon API - https://pokeapi.co/
- Meal DB  - https://www.themealdb.com/
- Cocktail DB - https://www.thecocktaildb.com/
- Countries - https://restcountries.eu/
- Fake Store API - https://fakestoreapi.com/
- OMDB - https://www.omdbapi.com/   (requires token)
- iex cloud - https://iexcloud.io/console/   (requires token)
- Open Library - https://openlibrary.org/developers/api
- Makeup Heroku - http://makeup-api.herokuapp.com/ (Warning it is on Heroku it can be asleep)
- RestAPIExample - https://dummy.restapiexample.com/ (Can get too many requests error)
- Star Wars API - https://swapi.dev/ -  Watch out for the **last slash in the url** & watch for **https** vs ~~**http**~~

## Medium:

- Marvel API - [https://developer.marvel.com](https://developer.marvel.com/) 
- Open Weather API - https://openweathermap.org/api - Takes from a couple of hours to a day for key.

## Hard:

Spotify https://developer.spotify.com/documentation/web-api/ (Can lead to confusion, but it's doable)

## Other Resources:

- **Excalidraw** - ([https://excalidraw.com](https://excalidraw.com/)) Drawing app to help with diagrams
- **Diagrams**- ([https://app.diagrams.net](https://app.diagrams.net/)) entity relationship diagram software
- **Diagram.io** - (https://dbdiagram.io/home) 
- **DB Designer** - ([https://www.dbdesigner.net](https://www.dbdesigner.net/)) 
- **Diagrams.net** - ([https://app.diagrams.net](https://app.diagrams.net/)) 
- **LucidChart** - (https://www.lucidchart.com/pages/examples/database-design-tool) 
- **Drawsql** - ([https://drawsql.app](https://drawsql.app/))
- **Github Projects** (Check your repo and go to the project tab) (https://docs.github.com/en/issues/organizing-your-work-with-project-boards)
- [**Jira**](https://www.atlassian.com/software/jira) - (https://www.atlassian.com/software/jira) Project management. A wonderful kanban board and project management tools that can be attached to GitHub and bitbucket.


## Source Credit
https://github.com/dcartist/Backend-challenge/blob/main/README.md
<<<<<<< HEAD

=======
>>>>>>> 8d90cf9bec983f4071cd9bb1cbcd6f70015e9497
