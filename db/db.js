//mongoDB files
var conf = require('../configuration');
var mongoose = require('mongoose');
//var mongoConnectString = "mongodb://localhost/ulboracms";
var mongoConnectString = "mongodb://";//localhost/ulboracms";
//this is specific to RedHat's OpenShift 
if (process.env.DOCKER_MONGODB_NAME && process.env.DOCKER_MONGODB_USERNAME) {
    mongoConnectString += (process.env.DOCKER_MONGODB_USERNAME + ":" +
            process.env.DOCKER_MONGODB_PASSWORD + "@" +
            process.env.DOCKER_MONGODB_HOST + ':' +
            process.env.DOCKER_MONGODB_PORT + '/' +
            process.env.DOCKER_MONGODB_NAME);
    //this is specific to a Docker self contained containers
} else if (process.env.MONGO_PORT_27017_TCP_ADDR) {
    //this is the default database
    mongoConnectString += (process.env.MONGO_PORT_27017_TCP_ADDR + "/" + process.env.DOCKER_DATABASE_NAME);
} else {
    //this is the default database
    mongoConnectString += (conf.HOST + "/" + conf.DATABASE_NAME);
}

//mongoose.connect('mongodb://localhost/blogpost');
mongoose.connect(mongoConnectString);

var manager = require('../managers/manager');

var nginxSchema = require('../databaseSchema/nginxSchema');
var domainSchema = require('../databaseSchema/domainSchema');
//var proxyHeaderSchema = require('../databaseSchema/proxyHeaderSchema');
var serverNameSchema = require('../databaseSchema/serverNameSchema');
var sslSchema = require('../databaseSchema/sslSchema');
var userSchema = require('../databaseSchema/userSchema');

var Nginx = mongoose.model('Nginx', nginxSchema);
var Domain = mongoose.model('Domain', domainSchema);
//var ProxyHeader = mongoose.model('ProxyHeader', proxyHeaderSchema);
var ServerName = mongoose.model('ServerName', serverNameSchema);
var Ssl = mongoose.model('Ssl', sslSchema);
var User = mongoose.model('User', userSchema);

exports.getNginx = function () {
    return Nginx;
};
exports.getDomain = function () {
    return Domain;
};
//exports.getProxyHeader = function () {
   // return ProxyHeader;
//};
exports.getServerName = function () {
    return ServerName;
};
exports.getSsl = function () {
    return Ssl;
};
exports.getUser = function () {
    return User;
};

//initialize the mongoDB database with needed records required for startup
exports.initializeMongoDb = function () {    
    initializeDefaultUsers();
};



initializeDefaultUsers = function () {
    User.find({}, function (err, results) {
        if (err) {
            console.log("user Error:" + err);
        } else {
            console.log("user:" + JSON.stringify(results));
            if (results.length === 0) {
                var hashedPw = manager.hashPasswordSync("admin", "admin");
                var adminUserRecord = {
                    username: "admin",
                    password: hashedPw,
                    firstName: "super",
                    lastName: "administrator"
                };
                var u = new User(adminUserRecord);
                u.save(function (err) {
                    if (err) {
                        console.log("super admin user save error: " + err);
                    } 
                });
            }
        }
    });
};
