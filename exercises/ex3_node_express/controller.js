const dal = require('./dal')

async function getAll(req, res) {
    try {
        const data = await dal.findAllMails();
        if (data == "") {
            res.status(200).json({
                err: null,
                action: "Read",
                data: "Data base is empty"
            });
        } else {
            res.status(200).json({
                err: null,
                action: "Read",
                data: data
            })
        }
    } catch (err) {
        res.status(500).json({
            err: err.message,
            action: "Read",
            data: null
        })
    }
}

async function getMail(req, res) {
    try {
        const data = await dal.findOneMail(req.TrackingNumber);
        if (data == "") {
            res.status(200).json({
                err: null,
                action: "Read",
                data: "No mail was found for this tracking number"
            });
        } else {
            res.status(200).json({
                err: null,
                action: "Read",
                data: data
            })
        }
    } catch (err) {
        res.status(500).json({
            err: err.message,
            action: "Read",
            data: null
        })
    }
}

async function createNewMail(req, res) {
    try {
        const data = await dal.insertNewMail(req.body);
        res.status(201).json({
            err: null,
            action: "Create",
            data: data
        })

    } catch (err) {
        res.status(500).json({
            err: err.message,
            action: "Create",
            data: null
        })
    }
}

async function updateStatusMail(req, res) {
    try {
        const data = await dal.updateStatus(req.TrackingNumber);
        if (data == null) {
            res.status(200).json({
                err: null,
                action: "Update",
                data: "No mail / mail with status send, was found for this tracking number"
            });
        } else {
            res.status(200).json({
                err: null,
                action: "Update",
                data: data
            })
        }
    } catch (err) {
        res.status(500).json({
            err: err.message,
            action: "Update",
            data: null
        })
    }
}

async function deleteMail(req, res) {
    try {
        const data = await dal.deleteMailFromDb(req.TrackingNumber);
        if (data == null) {
            res.status(200).json({
                err: null,
                action: "Delete",
                data: "No mail / mail with status received was found for this tracking number"
            });
        } else {
            res.status(200).json({
                err: null,
                action: "Delete",
                data: data
            })
        }
    } catch (err) {
        res.status(500).json({
            err: err.message,
            action: "Delete",
            data: null
        })
    }
}
module.exports = {
    getAll,
    getMail,
    createNewMail,
    updateStatusMail,
    deleteMail
};