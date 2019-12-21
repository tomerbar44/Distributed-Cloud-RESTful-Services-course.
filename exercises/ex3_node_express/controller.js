const dal = require('./dal')

async function getAll(req, res) {
    const data = await dal.findAllMails();
    res.json({
            err: null,
            data: data
        })
        // res.jso({err: bug:, data: null})
}

async function getMail(req, res) {
    const data = await dal.findOneMail(req.mailId);
    res.json({
            err: null,
            data: data
        })
        // res.jso({err: bug:, data: null})
}

async function createNewMail(req, res) {
    const data = await dal.insertNewMail(req.body);
    res.json({
            err: null,
            data: data
        })
        // res.json({ err: data, data: null })
}

async function updateStatusMail(req, res) {
    const data = await dal.updateStatus(req.mailId, req.recipientId, req.body);
    res.json({
            err: null,
            data: data
        })
        // res.jso({err: bug:, data: null})
}
module.exports = {
    getAll,
    getMail,
    createNewMail,
    updateStatusMail
};
// module.exports = {
//     getAll(req, res, next) {
//         // mongoose
//         //     .connect(url, options)
//         //     .then(async() => {
//         //         // Query goes here
//         //         const result = await Post.find({})

//         //         if (result) res.json(result)
//         //         else res.status(404).send('not found')
//         //     })
//         //     .catch(err => {
//         //         console.error('some error occurred', err)
//         //         res.status(500).send(err.message)
//         //     })
//     },
//     getPost(req, res, next) {
//         mongoose
//             .connect(url, options)
//             .then(async() => {
//                 const { id = null } = req.params
//                     // Query goes here
//                 const result = await Post.findOne({ id })

//                 if (result) res.json(result)
//                 else res.status(404).send('not found')
//             })
//             .catch(err => {
//                 console.error('some error occurred', err)
//                 res.status(500).send(err.message)
//             })
//     },
//     editPost(req, res, next) {
//         mongoose
//             .connect(url, options)
//             .then(async() => {
//                 const { id = null } = req.params
//                 const { title = null, body = null } = req.body
//                     // Query goes here
//                 const result = await Post.updateOne({ id }, { body, title })

//                 if (result) res.json(result)
//                 else res.status(404).send('not found')
//             })
//             .catch(err => {
//                 console.error('some error occurred', err)
//                 res.status(500).send(err.message)
//             })
//     },
//     addPost(req, res, next) {
//         mongoose
//             .connect(url, options)
//             .then(async() => {
//                 const {
//                     id = null,
//                         userId = null,
//                         title = null,
//                         body = null
//                 } = req.body
//                     // Query goes here

//                 const post = new Post({ id, userId, title, body })
//                 const result = await post.save()

//                 if (result) res.json(result)
//                 else res.status(404).send('not found')
//             })
//             .catch(err => {
//                 console.error('some error occurred', err)
//                 res.status(500).send(err.message)
//             })
//     },
//     removePost(req, res, next) {
//         mongoose
//             .connect(url, options)
//             .then(async() => {
//                 const { id = null } = req.body
//                     // Query goes here
//                 const result = await Post.deleteOne({ id })

//                 if (result) res.json(result)
//                 else res.status(404).send('not found')
//             })
//             .catch(err => {
//                 console.error('some error occurred', err)
//                 res.status(500).send(err.message)
//             })
//     }
// }