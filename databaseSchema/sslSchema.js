//serverNameSchema
var mongoose = require('mongoose');

var ssl = new mongoose.Schema({
    listenPort: {type: Number, required: true},
    sslCertificate: {type: String, required: true, trim: true},
    sslCertificateKey: {type: String, required: true, trim: true},
    domain: {type: mongoose.Schema.ObjectId, required: true, ref: "Domain"}
});
module.exports = ssl;