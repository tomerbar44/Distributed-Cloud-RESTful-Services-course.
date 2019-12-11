var israeliIdValidator = require("israeli-id-validator")
const invites = require('./InvitesRepository')();
const logger = require('./logger')();
const addInvitation = (req, res) => {
    let body = "";
    req.on("data", data => {
        body += data;
    });
    req.on("end", () => {
        body = JSON.parse(body);
        // Validate the body
        if (israeliIdValidator(body.id) && body.cards > 0 && body.name != "") {
            const resultOfAction = invites.getInvitation(body, logger);
            if (resultOfAction) {
                res.writeHeader(201);
                res.end("Success");
            } else {
                res.writeHeader(409);
                res.end(JSON.stringify("Failed"));
            }
        } else {
            logger.write("Invalid data entry for add invitation");
            res.writeHeader(409);
            res.end("Failed");
        }
    });
};
const getAll = (req, res) => {
    const { id } = req.urlObject.query;
    // Validate the query
    if (israeliIdValidator(id)) {
        const resultOfAction = invites.getAll(id, logger);
        console.log(resultOfAction);
        if (resultOfAction) {
            res.writeHeader(200);
            res.end(JSON.stringify(resultOfAction));
        } else {
            res.writeHeader(404);
            res.end("Failed");
        }
    } else {
        logger.write("Invalid data entry for get all invitations");
        res.writeHeader(400);
        res.end("Failed");
    }
};
const deleteAll = (req, res) => {
    const { id } = req.urlObject.query;
    if (israeliIdValidator(id)) {
        const resultOfAction = invites.deleteAll(id, logger);
        if (resultOfAction) {
            res.writeHeader(200);
            res.end("Success");
        } else {
            res.writeHeader(405);
            res.end("Failed");
        }
    } else {
        logger.write("Invalid data entry for delete all invitations");
        res.writeHeader(404);
        res.end("Failed");
    }
};
const deleteOne = (req, res) => {
    const { inviteID } = req.urlObject.query;
    if (!Number.isNaN(inviteID)) {
        const resultOfAction = invites.deleteOne(inviteID, logger);
        if (resultOfAction) {
            res.writeHeader(200);
            res.end("Success");
        } else {
            res.writeHeader(405);
            res.end("Failed");
        }
    } else {
        logger.write("Invalid data entry for delete one invitation");
        res.writeHeader(404);
        res.end("Failed");
    }
};
const updateInvitation = (req, res) => {
    let body = "";
    const { inviteID } = req.urlObject.query;
    if (!Number.isNaN(inviteID)) {
        req.on("data", data => {
            body += data;
        });
        req.on("end", () => {
            body = JSON.parse(body);
            if (israeliIdValidator(body.id) && body.cards > 0 && body.name != "") {
                const resultOfAction = invites.updateInvitation(body, inviteID, logger);
                if (resultOfAction) {
                    res.writeHeader(200);
                    res.end("Success");
                } else {
                    res.writeHeader(404);
                    res.end("Failed");
                }
            } else {
                logger.write("Invalid body data entry for update invitation");
                res.writeHeader(404);
                res.end("Failed");
            }
        });
    } else {
        logger.write("Invalid URI data entry for update invitation");
        res.writeHeader(404);
        res.end("Failed");
    }
};
const getLog = (req, res) => {
    const { id } = req.urlObject.query;
    if (israeliIdValidator(id)) {
        const loggerFile = invites.getLog(id, logger);
        if (loggerFile) {
            res.writeHeader(200);
            res.end(loggerFile);
        } else {
            res.writeHeader(404);
            res.end("Failed");
        }
    } else {
        logger.write("Invalid data entry for get log action");
        res.writeHeader(400);
        res.end("Failed");
    }
};
const sendtoLog = (req, res) => {
    logger.write("Invalid request !");
    res.writeHeader(400);
    res.end("Failed");
};
module.exports = {
    addInvitation,
    getAll,
    deleteAll,
    deleteOne,
    updateInvitation,
    getLog,
    sendtoLog
};