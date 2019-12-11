const url = require('url');
const { addInvitation, getAll, deleteAll, deleteOne, updateInvitation, getLog, sendtoLog } = require('./handlers');

module.exports = (req, res) => {
    console.log(`Request ${req.method} came from ${req.url}`);
    const urlObject = url.parse(req.url, true, false);
    req.urlObject = urlObject;
    switch (req.method) {
        case 'POST':
            if (urlObject.path == '/addInvite') {
                addInvitation(req, res);
            } else {
                sendtoLog(req, res);
            }
            break;
        case 'GET':
            if (urlObject.path.startsWith('/getAllInvites')) {
                getAll(req, res);
            } else if (urlObject.path.startsWith('/getLogFile')) {
                getLog(req, res);
            } else {
                sendtoLog(req, res);
            }
            break;
        case 'DELETE':
            if (urlObject.path.startsWith('/deleteAllInvites')) {
                deleteAll(req, res);
            } else if (urlObject.path.startsWith('/deleteInvite')) {
                deleteOne(req, res);
            } else {
                sendtoLog(req, res);
            }
            break;
        case 'PUT':
            if (urlObject.path.startsWith('/updateInvite')) {
                updateInvitation(req, res);
            } else {
                sendtoLog(req, res);
            }
            break;
        default:
            sendtoLog(req, res);
    }
};