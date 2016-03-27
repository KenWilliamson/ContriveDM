//domaimSchema
var mongoose = require('mongoose');

var domainSchema = new mongoose.Schema({
    domainName: {type: String, unique: true, required: true, trim: true},
    upstreamServerIp: {type: String, required: true, trim: true},    
    listenPort: {type: Number, required: true},
    proxyPass: {type: String, required: true, trim: true},
    proxyRedirect: {type: String, required: true, trim: true},
    proxySetHeader1: {type: String, required: true, trim: true},
    proxySetHeader2: {type: String, required: true, trim: true},
    proxySetHeader3: {type: String, required: true, trim: true},
    proxySetHeader4: {type: String, required: true, trim: true},
    saved: {type: Boolean, required: true, default: false}  
});
module.exports = domainSchema;