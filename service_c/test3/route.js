const express = require('express');
const router = express.Router();
const helloRoute = require('./hello')
router.get('/test3', helloRoute.sayHello);
router.get('/test1',helloRoute.hiToTest1);
router.get('/test2',helloRoute.hiToTest2);
module.exports = router;