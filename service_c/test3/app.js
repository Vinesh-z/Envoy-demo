const express = require('express');
const app = express();
const routes = require('./route');
app.use('/', routes);
app.listen(8083, () =>
    console.log('Server started at port: 8083'));