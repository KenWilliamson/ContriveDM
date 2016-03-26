//domaimSchema
var mongoose = require('mongoose');

var nginxSchema = new mongoose.Schema({
   needsRestart: {type: Boolean, required: true, default: false}  
});
module.exports = nginxSchema;