'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require("body-parser");

const cors = require('cors');
const app = express();

app.use(cors())
const movieRoutes = require("./routes/movies");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/dist/')));

app.use("/movie", movieRoutes);

module.exports= app;