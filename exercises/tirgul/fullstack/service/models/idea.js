const { Schema, model } = require('mongoose');

const idea = new Schema({
    id: { type: Number, index: 1 },
    idea:String,
    group:String

});


// subjectSchema.statics.getAll = async function () {
//     return this.find({}, (err) => {
//       if (err) { throw err; }
//     });
//   }

const ideaModel = model('ideas', idea);

module.exports = ideaModel;



