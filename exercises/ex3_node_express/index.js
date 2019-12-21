const app = require('./app')
const http = require('http');
const dbCon = require('./db_connection')
const port = process.env.PORT || 3000

dbCon.then(() => {
        console.log('work')
        http.createServer(app).listen(port, () => {
            console.log(`listening on port ${port}`);
        })
    })
    .catch(err => {
        console.log('fail connect to db', err.message)
    });


// const app = require('./app');
// const http = require('http');
// const port = process.env.PORT || 3000

// http.createServer(app).listen(port, () => {
//     console.log(`listening on port ${port}`);
// })