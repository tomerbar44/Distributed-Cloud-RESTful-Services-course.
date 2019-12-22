const app = require('./app')
const http = require('http');
const dbCon = require('./db_connection')
const port = process.env.PORT || 3000

dbCon.then(() => {
        console.log('conncect to db')
        http.createServer(app).listen(port, () => {
            console.log(`listening on port ${port}`);
        })
    })
    .catch(err => {
        console.log('fail connect to db', err.message)
    });