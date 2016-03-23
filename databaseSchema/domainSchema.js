//domaimSchema
var mongoose = require('mongoose');

var domainSchema = new mongoose.Schema({
    domain_name: {type: String, unique: true, required: true, trim: true},
    upstream_server_ip: {type: String, required: true, trim: true},    
    listen_port: {type: Number, required: true},
    proxy_pass: {type: String, required: true, trim: true},
    proxy_redirect: {type: Boolean, required: true, default: false},
    saved: {type: Boolean, required: true, default: false}  
});
module.exports = domainSchema;