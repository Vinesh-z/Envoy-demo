var http = require('http');
var request = require('request');
const testId = "http://service_a_envoy";
var communications = {
    test2,
    test3
}
function test2() {

    var options = {
        host: testId,
        port: 8788,
        path: '/test2',
        method: 'GET'
    };

    return new Promise((resolve, reject) => {
        request
  .get(testId+':'+options.port+options.path)
  .on('response', function(err,response,body) {
    
    console.log(response);
    
    resolve(body)
  })
  .on('error', function(err) {
    console.log(err)
    reject(err)
  })
        // var httpreq = http.request(options, function (response) {
        //     console.log(response+"  Resp of serv2");
        //     response.setEncoding('utf8');
        //     var resp;
        //     response.on('data', function (chunk) {
        //         resp = (chunk);
        //     });
        //     response.on('end', function () {
        //         resolve(resp);
        //     })
        // });
        // httpreq.end();
    });
}

function test3() {

    var options = {
        host: testId,
        port: 8791,
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