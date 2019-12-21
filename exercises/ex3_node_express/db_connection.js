// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const { DB_USER, DB_PASS, DB_HOST } = require('./constants');

// const url = DB_HOST;
// const options = {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// };

// mongoose.connect(url, options);



const mongoose = require('mongoose');
const { DB_USER, DB_PASS, DB_HOST } = require('./constants');
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
module.exports = mongoose.connect(url, options);
// mongoose
//     .connect(url, options)
//     .then(db => console.log(`conncted to: ${db.connection.name}`))
//     .catch(err => console.log('connection error:', err));