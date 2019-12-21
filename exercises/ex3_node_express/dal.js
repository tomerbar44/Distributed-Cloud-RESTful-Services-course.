const model = require('./shcema');

// read
function findAllMails() {
    return model.find({}, function(err, data) {
        if (err) {
            throw err;
        }
        return data;
    });
    // const query = model.find({});
    // const data = await query.exec();
    // console.log('data', data);
    // return data
}

function findOneMail(mailId) {
    return model.find({ id: mailId }, function(err, data) {
        if (err) {
            throw err;
        }
        return data;
    });
    // const query = model.find({ id: mailId });
    // const data = await query.exec();
    // console.log('data', data);
    // return data
}

// create 
function insertNewMail(body) {
    console.log("id", body.id);
    if (body.id == undefined) {
        body.id = Date.now();
    }
    console.log("send:", body.datesent);
    console.log("id", body.id);
    return model.create(body, function(err, data) {
        if (err) {
            throw err;
        }
        return data;
    });
    // const query = model.save(body);
    // const data = await query.exec();
    // console.log('data', data);
    // return data
}

// update

// async function updateStatus(body) {
//     const query = model.save(body);
//     const data = await query.exec();
//     console.log('data', data);
//     return data
// }

// // delete

// receiveddate
// status: "received"
// model.updateStatus({ id: 20 }, {
//         status: 'received'
//     },
//     (err, result) => {
//         if (err)
//             throw err;

//         console.log(`Saved document: ${JSON.stringify(result)}`);
//     });

module.exports = {
    findAllMails,
    findOneMail,
    insertNewMail
    // updateStatus
};