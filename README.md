# pirple-nodejs-assignment1

First assignment for the NodeJS masterclass from Pirple

## Description

Simple API built using only node.js. Server listening to port 3000, it returns a welcome message when receiving a request on the /hello route.

## The Assignment

Create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice.
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want.

## Usage
This project was made with VS 2017 you can open the solution and run under app.js file

or:
 
In the terminal, cd to the project's folder and run the following command

```
// defaut environment
node app.js

// or choose environment
NODE_ENV=production node app.js
```

The next message will appear : ‘The server is listening on port 3000’

To send a request, use ports 3000, and 3001.

When receiving an HTTP request \(e.g. via Postman\), you should see the following message displayed on your terminal : **Returning this response: 200 {“message” : “hello World”}**

