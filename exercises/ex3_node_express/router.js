const express = require('express');
const url = require("url");
const router = express.Router();
const mc = require('./controller');

router.get('/getAll', (req, res) => {
    mc.getAll(req, res);
});


router.get('/getMail', (req, res) => {
    const urlObject = url.parse(req.url, true, false);
    req.mailId = urlObject.query.mailId;
    mc.getMail(req, res);
});

router.post('/sendNewMail', (req, res) => {
    mc.createNewMail(req, res);
});

router.put('/changeStatus', (req, res) => {
    const urlObject = url.parse(req.url, true, false);
    req.mailId = urlObject.query.mailId;
    req.recipientId = urlObject.query.recipientId;
    mc.updateStatusMail(req, res);
});



// router.get('/movie/read/:id',(req,res)=>{
//     mc.read(req,res);
// });

// router.get('/movies/read',(req,res)=>{
//     mc.readAll(req,res);
// });
module.exports = router;