//domaimSchema
var mongoose = require('mongoose');

var domainSchema = new mongoose.Schema({
    domainName: {type: String, unique: true, required: true, trim: true},
    upstreamServerIp: {type: String, required: true, trim: true},    
    listenPort: {type: Number, required: true},
    proxyPass: {type: String, required: true, trim: true},
    proxyRedirect: {type: Boolean, required: true, default: false},
    saved: {type: Boolean, required: true, default: false}  
});
module.exports = domainSchema;