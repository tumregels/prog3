var fs = require("fs");

fs.appendFile("testfile.html", "Hello content!",
    function (err) {
        if (err) throw err;
        console.log("Saved!");
    });

