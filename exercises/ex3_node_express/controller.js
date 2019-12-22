const dal = require('./dal')

async function getAll(req, res) {
    try {
        const data = await dal.findAllMails();
        if (data == "") {
            res.json({
                err: null,
                data: "Data base is empty"
            });
        } else {
            res.json({
                err: null,
                data: data
            })
        }
    } catch (err) {
        res.status(500).json({
            err: err.message,
            data: null
        })
    }
}

async function getMail(req, res) {
    try {
        const data = await dal.findOneMail(req.TrackingNumber);
        if (data == "") {
            res.json({
                err: null,
                data: "No mail was found for this tracking number"
            });
        } else {
            res.json({
                err: null,
                data: data
            })
        }
    } catch (err) {
        res.status(500).json({
            err: err.message,
            data: null
        })
    }
}

async function createNewMail(req, res) {
    try {
        const data = await dal.insertNewMail(req.body);
        res.json({
            err: null,
            data: data
        })

    } catch (err) {
        res.status(500).json({
            err: err.message,
            data: null
        })
    }
}

async function updateStatusMail(req, res) {
    try {
        const data = await dal.updateStatus(req.TrackingNumber);
        console.log("afte:", data);
        if (data == null) {
            res.json({
                err: null,
                data: "No mail / mail with status send, was found for this tracking number"
            });
        } else {
            res.json({
                err: null,
                data: data
            })
        }
    } catch (err) {
        res.status(500).json({
            err: err.message,
            data: null
        })
    }

}

async function deleteMail(req, res) {
    try {
        const data = await dal.deleteMailFromDb(req.TrackingNumber);
        console.log("count", data);
        if (data == null) {
            res.json({
                err: null,
                data: "No mail / mail with status received was found for this tracking number"
            });
        } else {
            res.json({
                err: null,
                data: data
            })
        }
    } catch (err) {
        res.status(500).json({
            err: err.message,
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