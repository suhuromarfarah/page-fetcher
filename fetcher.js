const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (err, response, body) => {
    fs.writeFile(args[1], body, err => {
        if (err) {
            return console.log(err);
    }
    fs.stat(args[1], function (err, stats) {
        console.log('Downloaded and saved ', stats.size, ' bytes to ', args[1]);
    });
});
});