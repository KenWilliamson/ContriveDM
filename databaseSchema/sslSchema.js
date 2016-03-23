//serverNameSchema
var mongoose = require('mongoose');

var ssl = new mongoose.Schema({
    listen_port: {type: Number, required: true},
    ssl_certificate: {type: String, required: true, trim: true},
    ssl_certificate_key: {type: String, required: true, trim: true},
    domain: {type: mongoose.Schema.ObjectId, required: true, ref: "Domain"}
});
module.exports = ssl;