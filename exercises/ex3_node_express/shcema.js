const { Schema, model } = require('mongoose');

const mailSchema = new Schema({
    mailID: {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    deliverycompany: {
        type: String,
        required: true
    },
    datesent: {
        type: Date
    },
    receiveddate: {
        type: Date
    },
    status: {
        type: String
    },
    weight: {
        type: Number,
        required: true
    },
    sender: {
        userid: { type: Number, required: true },
        name: { type: String, required: true },
        phone: { type: Number, required: true },
        country: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    recipient: {
        userid: { type: Number, required: true },
        name: { type: String, required: true },
        phone: { type: Number, required: true },
        country: { type: String, required: true },
        zipcode: { type: String, required: true }

    }
});

// const exampla = new Schema({
//     name: String,
//     id: String,
//     date: String

// });
const mailModel = model('mailposts', mailSchema);
// const examplap = model('mailposts', exampla);
module.exports = mailModel;