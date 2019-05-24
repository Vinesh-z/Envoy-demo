var http = require('http');
const test3Id = "http://35.200.234.6";
var communications = {
    test1,
    test2
}
function test1() {

    var options = {
        host: 'localhost',
        port: 3001,
        path: '/test1',
        method: 'GET'
    };

    return new Promise((resolve, reject) => {
        var httpreq = http.request(options, function (response) {
            response.setEncoding('utf8');
            var resp;
            response.on('data', function (chunk) {
                resp = (chunk);
            });
            response.on('end', function () {
                resolve(resp);
            })
        });
        httpreq.end();
    });
}

function test2() {

    var options = {
        host: 'localhost',
        port: 3002,
        path: '/test2',
        method: 'GET'
    };

    return new Promise((resolve, reject) => {
        var httpreq = http.request(options, function (response) {
            response.setEncoding('utf8');
            var resp;
            response.on('data', function (chunk) {
                resp = (chunk);
            });
            response.on('end', function () {
                resolve(resp);
            })
        });
        httpreq.end();
    });
}

module.exports = communications;