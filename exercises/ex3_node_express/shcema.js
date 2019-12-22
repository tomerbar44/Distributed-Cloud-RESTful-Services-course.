const { Schema, model } = require('mongoose');

const mailSchema = new Schema({
    TrackingNumber: {
        type: Number,
        index: true,
        unique: true
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
        name: { type: String, required: true },
        phone: { type: Number, required: true },
        country: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    recipient: {
        name: { type: String, required: true },
        phone: { type: Number, required: true },
        country: { type: String, required: true },
        zipcode: { type: String, required: true }

    }
});

const mailModel = model('trackingmails', mailSchema);
module.exports = mailModel;