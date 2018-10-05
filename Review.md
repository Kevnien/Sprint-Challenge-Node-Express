# Review Questions

## What is Node.js?
    Node.js is the engine that developers can use to set up an API

## What is Express?
    Express can be used with Node.js to set up the server. It gives a different and easier way to do so compared to vanilla Node.js

## Mention two parts of Express that you learned about this week.
    learned to use express to set up a port to make an endpoint to connect to the data
    learned how to set up routes to separate code

## What is Middleware?
    Middleware is used to quickly add things to the code, that the developer would otherwise have to code into the codebase himself. These parts of the code would help the server CRUD operations.

## What is a Resource?
    A resource is something that can be imported to help with the API such as helmet.

## What can the API return to help clients know if a request was successful?
    status code, usually 200-something

## How can we partition our application into sub-applications?
    first by using express, then using the proper call to the other files inside the main file; e.g. server.use('/api/, routes)

## What is express.json() and why do we need it?
    json is the format of data that is a more efficient way of handling and writing out the data than it typically is without it