const express = require('express');
const router = express.Router();
const helloRoute = require('./hello')
router.get('/test2', helloRoute.sayHello);
router.get('/test3',helloRoute.hiToTest3);
router.get('/test1',helloRoute.hiToTest1);

module.exports = router;