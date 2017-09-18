var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var f = __dirname + "/data/wikilinks.json";
var hyWiki = "https://hy.wikipedia.org";
var url = "https://hy.wikipedia.org/wiki/Կատեգորիա:Ծրագրավորում";


if (fs.existsSync(f) && fs.statSync(f).size > 10) {
    var wikiLinks = require("./data/wikilinks.json");
} else {
    fs.appendFile(f, "[]");
    var wikiLinks = [];
}

request.get(url, function(error, response, page) {

    var $ = cheerio.load(page);
    var list = $("#mw-pages a");
    var link;

    for (var i = 0; i < list.length; i++) {
        var fullUrl = hyWiki + $(list[i]).attr("href");
        if (wikiLinks.indexOf(fullUrl) < 0) {
            wikiLinks.push(fullUrl);
        }

    }

    fs.writeFile(f, JSON.stringify(wikiLinks));
    console.log(wikiLinks.length + " հատ հղում կա");
});



//process.exit();