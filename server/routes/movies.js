/* This file contains different routes related to your APIs used in your application*/

const express = require('Express');
var router = express.Router();
var url = require('../config/apiURL');
const axios = require('axios');
const https = require('https');

router.get("/",(req, res, next) => {
    axios({
        method:'GET',
        url:url.url,
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
})
module.exports=router;