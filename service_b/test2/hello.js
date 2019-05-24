const communication = require('./communicate');
var helloTest={
    sayHello,
    hiToTest3,
    hiToTest1
}

function sayHello(req,res){
    res.send("Hello from test2");
}

function hiToTest3(req,res){
    communication.test3().then(data=>{
        res.send(data);
    }
    );
}

function hiToTest1(req,res){
    communication.test1().then(data=>{
        res.send(data);
    }
    );
}

module.exports = helloTest;