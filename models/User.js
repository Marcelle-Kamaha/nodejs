const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const passportLocalMongoose = require ('passport-local-mongoose')

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(passportLocalMongoose, {usernameField : 'email'});
module.exports = mongoose.model('User', userSchema);