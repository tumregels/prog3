var request = require('request'); 
var cheerio = require('cheerio');

var url = encodeURI("https://hy.wikipedia.org/wiki/Հովհաննես_Թումանյան");

request(url, function(error, response, html){
       if(!error){
           var $ = cheerio.load(html);
           $("#firstHeading").each(function(){
               var data = $(this);
               console.log(data.text());
           });

           $(".mw-headline").each(function(){
               var data = $(this);
               console.log(data.text());
           });
       }
});