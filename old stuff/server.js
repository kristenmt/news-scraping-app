// Dependencies
var express = require("express");
var exphbs  = require('express-handlebars');
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Initialize Express
var port = process.env.PORT || 3000;
var app = express();

// routing controllers
var htmlRouter = require("./controllers/html-routes.js");
var articleRouter = require("./controllers/article-routes.js");

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// use middleware
 app.use(bodyParser.urlencoded({ extended: true}));
 app.use(express.static("public"));

 // handlbars
 app.engine("handlebars", exphbs({ defaultLayout: "main"}));
 app.set("veiw engine", "handlebars");

 // routing
app.use("/", htmlRouter);
app.use("/", articleRouter);

// Mongo database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Mongoose promise
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);



// Listen on port 3000
app.listen(port, function() {
    console.log("App running on port 3000!");
  });
