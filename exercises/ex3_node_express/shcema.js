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
        // useridk: { type: Number, required: true },
        name: { type: String, required: true },
        phone: { type: Number, required: true },
        country: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    recipient: {
        // useridk: { type: Number, required: true },
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

// module.exports = examplap;
// const Coacher = model('coacher', coacherSchema, 'coachers');
// module.exports = Coacher;


// const { Schema, model } = require('mongoose')

// const coacherSchema = new Schema({
//     id: {
//         type: Number,
//         required: true
//     },
//     coachName: {
//         type: String,
//         required: true
//     },
//     teamName: {
//         type: String,
//         required: true
//     },
//     won: {
//         type: Number,
//         required: true
//     },
//     lost: {
//         type: Number,
//         required: true
//     }
// });

// coacherSchema.statics.isExist = async function(id) {
//     return this.find({ id: id }, (err, arr) => {
//         if (err) { throw err; }
//     });
// }
// coacherSchema.statics.getAll = async function() {
//     return this.find({}, (err) => {
//         if (err) { throw err; }
//     });
// }



// const Coacher = model('coacher', coacherSchema, 'coachers');
// module.exports = Coacher;