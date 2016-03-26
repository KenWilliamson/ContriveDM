//serverNameSchema
var mongoose = require('mongoose');

var proxyHeaderSchema = new mongoose.Schema({
    proxySetHeader: {type: String, required: true, trim: true},
    domain: {type: mongoose.Schema.ObjectId, required: true, ref: "Domain"}
});
module.exports = proxyHeaderSchema;