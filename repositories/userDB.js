const mongoose = require('mongoose');
const notesSchema = require('./notes');

//mongoDB storage
const UserSchema = new mongoose.Schema ({
  name: String,
  email: String,
  password: String,
  id: String,
  notes: [notesSchema]
});


module.exports = mongoose.model('user', UserSchema);




