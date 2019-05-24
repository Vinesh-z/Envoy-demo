const express = require('express');
const router = express.Router();
const helloRoute = require('./hello')
router.get('/test1', helloRoute.sayHello);
router.get('/test2',helloRoute.hiToTest2);
router.get('/test3',helloRoute.hiToTest3);
module.exports = router;