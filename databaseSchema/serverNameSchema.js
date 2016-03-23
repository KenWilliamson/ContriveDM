//serverNameSchema
var mongoose = require('mongoose');

var serverNameSchema = new mongoose.Schema({
    domain_name: {type: String, required: true, trim: true},
    domain: {type: mongoose.Schema.ObjectId, required: true, ref: "Domain"}
});
module.exports = serverNameSchema;