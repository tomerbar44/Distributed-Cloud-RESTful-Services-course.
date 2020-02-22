const mongoose = require('mongoose');
const consts = require('./consts');

const { DB_HOST, DB_USER, DB_PASS } = consts;
const url = DB_HOST;
const options = {
 useNewUrlParser: true, // For deprecation warnings
 useCreateIndex: true, // For deprecation warnings
 user: DB_USER,
 pass: DB_PASS,
 autoReconnect: true,
};

mongoose
 .connect(url, options)
 .then(() => console.log('connected'))
 .catch(err => console.log(`connection error: ${err}`))