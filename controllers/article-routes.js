// var express = require("express");
// var request = require("request");
// var cheerio = require("cheerio");
// var router = express.Router();


// router.get("/scrape", function (req, res) {
// request("https://www.npr.org/sections/europe/", function(error, response, html) {
//     var $ = cheerio.load(html);
//     var results = [];

//     $("p.title").each(function(i, element) {
//         var title = $(element).text();
//         var link = $(element).children().attr("href");
//     results.push({
//         title: title,
//         link: link
//     })
//     })
// })
// })