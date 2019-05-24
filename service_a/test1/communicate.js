var http = require('http');
const testId = "http://service_a_envoy";
var communications = {
    test2,
    test3
}
function test2() {

    var options = {
        host: testId,
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

function test3() {

    var options = {
        host: testId,
        port: 3003,
        path: '/test3',
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