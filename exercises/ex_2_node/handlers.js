const invites = require('./InvitesRepository')();
const logger = require('./logger')();

const addInvitation = (req, res) => {
    let body = "";
    req.on("data", data => {
        body += data;
    });
    req.on("end", () => {
        body = JSON.parse(body);
        const newInvite = invites.getInvitation(body, logger);
        if (newInvite) {
            res.writeHeader(200);
            res.end(JSON.stringify(newInvite));

        } else {

        }
    });
};

const getAll = (req, res) => {
    const { id } = req.urlObject.query;
    const inviteObjects = invites.getAll(id, logger);
    console.log("handler", inviteObjects);
    if (inviteObjects) {
        res.writeHeader(200);
        res.end(JSON.stringify(inviteObjects));

    } else {
        res.end(JSON.stringify("Acsess dinay"));
    }

};

const deleteAll = (req, res) => {
    const { id } = req.urlObject.query;
    const result = invites.deleteAll(id, logger);
    console.log("handler", result);
    if (result == 1) {
        res.writeHeader(200);
        res.end(JSON.stringify("delete all"));

    } else {
        res.end(JSON.stringify("Acsess dinay"));
    }

};

const deleteOne = (req, res) => {
    const { inviteID } = req.urlObject.query;
    const result = invites.deleteOne(inviteID, logger);
    console.log("handler", result);
    if (result == 1) {
        res.writeHeader(200);
        res.end(JSON.stringify("delete one"));

    } else {
        res.end(JSON.stringify("Acsess dinay"));
    }

};

const updateInvitation = (req, res) => {
    let body = "";
    const { inviteID } = req.urlObject.query;
    req.on("data", data => {
        body += data;
    });
    req.on("end", () => {
        body = JSON.parse(body);
        console.log("handler:", body);
        const updateInvite = invites.updateInvitation(body, inviteID, logger);
        console.log("res of update:", updateInvite);
        if (updateInvite != -1) {
            res.writeHeader(200);
            res.end(JSON.stringify("Update suscsses:", updateInvite));

        } else {
            res.end(JSON.stringify("Acsess dinay"));
        }
    });
};

const getLog = (req, res) => {
    const { id } = req.urlObject.query;
    const inviteObjects = invites.getLog(id, logger);
    console.log("handler", inviteObjects);
    if (inviteObjects) {
        res.writeHeader(200);
        res.end(JSON.stringify(inviteObjects));

    } else {
        res.end(JSON.stringify("Acsess dinay"));
    }

};


module.exports = {
    addInvitation,
    getAll,
    deleteAll,
    deleteOne,
    updateInvitation,
    getLog
};






// console.log("handlers:", body);
// const newInvite = invites.getInvitation(body);
// if (newInvite) {
//     res.writeHeader(200);
//     res.end(JSON.stringify(newInvite));

// } else {

// }
// const { id } = req.urlObject.query;

// if (!Number.isNaN(id)) {
//     const song = songs.getSong(body);

//     if (song) {
//         res.writeHeader(200);
//         res.end(JSON.stringify(song));
//     } else {
//         // log and return 'song not found' error
//     }
// } else {
//     // log and return 'id is isNaN' error
// }