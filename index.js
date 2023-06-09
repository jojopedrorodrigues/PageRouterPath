const fs = require('fs');
const http = require('http');
const path = require('path');
const server = http.createServer(function (req, res) {
    let fullpath;
    switch (req.url) {
        case '/':
            fullpath = path.join(__dirname, 'home.html');
            break;
        case '/contato':
            fullpath = path.join(__dirname, 'contato.html');
            break;
    }

    if (fullpath) {
        fs.readFile(fullpath, 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, function () { console.log('Online................................................................') });