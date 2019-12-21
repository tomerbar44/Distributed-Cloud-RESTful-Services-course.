const express = require('express')
const morgan = require('morgan')
const app = express()
const apiRoute = require('./router');
// require('./db_connection');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/israelpost', apiRoute);
module.exports = app;

// app.get('/mail', mailCtrl.getAll)
//     // app.get('/post/:id', mailCtrl.getPost)
//     // app.put('/post/:id', mailCtrl.editPost)
//     // app.post('/post', mailCtrl.addPost)
//     // app.delete('/remove', mailCtrl.removePost)

// const mailCtrl = require('./controller');