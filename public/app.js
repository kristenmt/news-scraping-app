// Dependencies
var express = require("express");
var exphbs  = require('express-handlebars');
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");

// Initialize Express
var app = express();


// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Mongo database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Mongoose promise
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

request("https://www.npr.org/sections/europe/", function(error, response, html) {
    var $ = cheerio.load(html);
    var results = [];

    $("p.title").each(function(i, element) {
        var title = $(element).text();
        var link = $(element).children().attr("href");
    results.push({
        title: title,
        link: link
    })
    })
})

// Listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
  });
