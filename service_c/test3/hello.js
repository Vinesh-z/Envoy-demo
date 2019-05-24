const communication = require('./communicate');
var helloTest = {
    sayHello,
    hiToTest1,
    hiToTest2
    
}
function sayHello(req, res) {
    console.log("yo");
    res.send("Hello from test3");
}
function hiToTest1(req, res) {
    communication.test1().then(data => {
        res.send(data);
    }
    );
}

function hiToTest2(req, res) {
    communication.test2().then(data => {
        res.send(data);
    }
    );
}
module.exports = helloTest;