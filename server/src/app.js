const express = require('express');
const app = express();
const database = require('./loaders/database');
const server = require('./loaders/server');
const env = require('./loaders/env');
const getRoutes = require('./loaders/routes');

// load environment variables.

env();

// connect to database

database();

// create server connection

server(app);

// get all api routes

getRoutes(app);

module.exports = app;
