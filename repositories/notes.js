const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    subject:String,
    note:String
}); 


module.exports = NoteSchema;