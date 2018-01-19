// server.js is the node program that serves up the Hamburget Helper app.
//
// Dependencies.
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var routes = require('./controllers/burgers_controller.js');


// Sets up the Express App
var app = express();
// Listen either on the port Heroku gives us, or on 8080 if we are running on localhost. 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/',routes); //use the routes provided in burgers_controller.js

app.use (express.static(process.cwd() + '/public')); //static content would be served up from the public directory
// Starts the server to begin listening

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.listen(PORT, function() {
  console.log("Hamburger Helper App listening on PORT " + PORT);
});

