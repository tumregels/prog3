var fs = require("fs");
var request = require('request');

var url = encodeURI("https://hy.wikipedia.org/wiki/Հովհաննես_Թումանյան");

request(url, function(error, response, html) {
    if (!error) {
        console.log(html)
    }
});
