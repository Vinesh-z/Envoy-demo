
const communication = require('./communicate');
var helloTest={
    sayHello,
    hiToTest2,
    hiToTest3
}
function sayHello(req,res){
    res.send("Hello from test1");
}

function hiToTest2(req,res){
    communication.test2().then(data=>{
        res.send(data);
    }
    );
}

function hiToTest3(req,res){
    communication.test3().then(data=>{
        res.send(data);
    }
    );
}

module.exports = helloTest;