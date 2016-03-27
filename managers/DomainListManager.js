var manager = require("./manager");
var db = require("../db/db");
exports.domainList = function (callback) {
     var Domain = db.getDomain();
     Domain.find({}, function (err, results) {
         if (!err && results) {
             callback(results);
         }else if(err){
             console.error("find domain error: " + err);
             callback([]);
         }else{
             callback([]);
         }
     });
};