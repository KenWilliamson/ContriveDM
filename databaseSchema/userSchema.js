//userSchema
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true, trim: true},
    password: {type: String, required: true},    
    firstName: {type: String, required: true, trim: true},
    lastName: {type: String, required: true, trim: true}    
});
module.exports = userSchema;

