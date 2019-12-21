const { Schema, model } = require('mongoose');

const mailSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        index: true
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
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    sender: {
        useridk: { type: Number, required: true },
        name: { type: String, required: true },
        phone: { type: Number, required: true },
        country: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    recipient: {
        useridk: { type: Number, required: true },
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