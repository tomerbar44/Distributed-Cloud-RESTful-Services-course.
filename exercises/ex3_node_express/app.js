const express = require('express')
const morgan = require('morgan')
const app = express()
const apiRoute = require('./router');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/israelpost', apiRoute);
module.exports = app;