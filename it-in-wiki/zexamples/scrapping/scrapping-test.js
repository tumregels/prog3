var request = require('request');
var cheerio = require('cheerio');

var url = encodeURI("https://hy.wikipedia.org/wiki/Կատեգորիա:Ծրագրավորում");

request(url, function(error, response, page) {
   if (!error) {
       var $ = cheerio.load(page);
       var list = $("#mw-pages a");
       for (var i = 0; i < list.length; i++) {
           console.log($(list[i]).text());
           console.log($(list[i]).attr("href"));
       }
   }
});