const express = require('express');
const url = require("url");
const router = express.Router();
const mailController = require('./controller');

router.get('/getAll', (req, res) => {
    mailController.getAll(req, res);
});

router.get('/getMail', (req, res) => {
    const urlObject = url.parse(req.url, true, false);
    req.TrackingNumber = urlObject.query.TrackingNumber;
    mailController.getMail(req, res);
});

router.post('/sendNewMail', (req, res) => {
    mailController.createNewMail(req, res);
});

router.put('/ireceivedMyMail', (req, res) => {
    const urlObject = url.parse(req.url, true, false);
    req.TrackingNumber = urlObject.query.TrackingNumber;
    mailController.updateStatusMail(req, res);
});

router.delete('/deleteMail', (req, res) => {
    const urlObject = url.parse(req.url, true, false);
    req.TrackingNumber = urlObject.query.TrackingNumber;
    mailController.deleteMail(req, res);
});

router.all('*', (req, res) => {
    res.status(404).send('Wrong route!');
});
module.exports = router;