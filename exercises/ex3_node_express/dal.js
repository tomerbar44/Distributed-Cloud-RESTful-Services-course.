const model = require('./shcema');

// create mail by sending paramters in the body request, status && datesend && TrackingNumber create by the server
async function insertNewMail(body) {
    let mailObj = new model({
        TrackingNumber: Date.now(),
        title: body.title,
        deliverycompany: body.deliverycompany,
        datesent: Date.now(),
        status: 'send',
        weight: body.weight,
        sender: {
            name: body.sender.name,
            phone: body.sender.phone,
            country: body.sender.country,
            zipcode: body.sender.zipcode
        },
        recipient: {
            name: body.recipient.name,
            phone: body.recipient.phone,
            country: body.recipient.country,
            zipcode: body.recipient.zipcode
        }
    });
    return await mailObj.save();
}

// read all mails
function findAllMails() {
    return model.find({}, function(err) {
        if (err) {
            throw err;
        }
    });
}

// read mail by id
function findOneMail(TrackingNumber) {
    return model.find({ TrackingNumber: TrackingNumber }, function(err) {
        if (err) {
            throw err;
        }
    });
}

// update by tracking number and if status=send, change status to received and create received date by date now
async function updateStatus(TrackingNumber) {
    return await model.findOneAndUpdate({ TrackingNumber: TrackingNumber, status: "send" }, { $set: { status: "received", receiveddate: Date.now() } }, { new: true });
}

// delete by tracking number and if status=received
async function deleteMailFromDb(TrackingNumber) {
    return await model.findOneAndDelete({ TrackingNumber: TrackingNumber, status: "received" });
}
module.exports = {
    findAllMails,
    findOneMail,
    insertNewMail,
    updateStatus,
    deleteMailFromDb
};