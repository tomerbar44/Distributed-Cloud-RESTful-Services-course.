const url = require('url');
const { addInvitation, getAll, deleteAll, deleteOne, updateInvitation, getLog } = require('./handlers');


module.exports = (req, res) => {
    console.log(`Request ${req.method} came from ${req.url}`);

    const urlObject = url.parse(req.url, true, false);
    req.urlObject = urlObject;

    switch (req.method) {
        case 'POST':
            if (urlObject.path.startsWith('/addInvite')) {
                addInvitation(req, res);
            }
            //need break?
        case 'GET':
            if (urlObject.path.startsWith('/getAllInvites')) {
                getAll(req, res);
            }
            if (urlObject.path.startsWith('/getLogFile')) {
                getLog(req, res);
            }

        case 'DELETE':
            if (urlObject.path.startsWith('/deleteAllInvites')) {
                deleteAll(req, res);
            }

            if (urlObject.path.startsWith('/deleteInvite')) {
                deleteOne(req, res);
            }
        case 'PUT':
            if (urlObject.path.startsWith('/updateInvite')) {
                updateInvitation(req, res);
            }

        default:
            // Log the error
    }
};