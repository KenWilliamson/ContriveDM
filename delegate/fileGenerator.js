var db = require("../db/db");

var domainFile1 = "upstream appUpstream { ";
var domainFile2 = "server ";
var domainFile3 = " } ";
var domainFile4 = " server { ";
var domainFile5 = " listen 80; ";
var domainFile6 = " server_name ";
var domainFile7 = " location / { ";
var domainFile8 = " proxy_pass http://appUpstream; ";
var domainFile9 = " proxy_redirect off; ";
var domainFile10 = " proxy_set_header Host $host; ";
var domainFile11 = " proxy_set_header X-Real-IP $remote_addr; ";
var domainFile12 = " proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; ";
var domainFile14 = " proxy_set_header X-Forwarded-Host $server_name; ";
var domainFile15 = " } ";
var domainFile16 = " } ";


exports.generateNginxFiles = function (callback) {
    var rtn = {
        success: false,
        message: ""
    };
    var fileArray = [];
    var serverNameMap = [];
    var sslMap = [];
    var Domain = db.getDomain();
    var ServerName = db.getServerName();
    ServerName.find({}, function (snErr, serverNameList) {
        if (!snErr && serverNameList) {
            for (var cnt = 0; cnt < serverNameList.length; cnt++) {
                var obj = serverNameList[cnt];
                var snArr = serverNameMap[obj.domain];
                if(snArr){
                    snArr.push(obj);
                }else{
                    serverNameMap[obj.domain] = [obj];
                }                
            }
            var Ssl = db.getSsl();
            Ssl.find({}, function (sslErr, sslList) {
                if (!sslErr && sslList) {
                    for (var cnt = 0; cnt < sslList.length; cnt++) {
                        var obj = sslList[cnt];
                        sslMap[obj.domain] = obj;
                    }
                }
                Domain.find({}, function (domErr, domainList) {
                    if (!domErr && domainList) {
                        for (var cnt = 0; cnt < domainList.length; cnt++) {
                            var obj = domainList[cnt];
                            var fileContent = domainFile1;
                            fileContent += domainFile2 + obj.upstreamServerIp + ":" + obj.listenPort + ";";
                            fileContent += domainFile3;
                            fileContent += domainFile4;
                            fileContent += domainFile5;
                            var sslObj = sslMap[obj._id];
                            if(sslObj){
                                fileContent += " listen " + sslObj.listenPort + " ssl;";                                
                            }
                            fileContent += domainFile6 ;
                            var snList = serverNameMap[obj._id];
                            for(var cnt2 = 0; cnt2 < snList.length; cnt2++){
                                if(cnt2 > 0){
                                    fileContent += " ";
                                }
                                fileContent += snList[cnt2];
                            }
                            fileContent += ";";
                            if(sslObj){                                
                                fileContent += " ssl_certificate " +  sslObj.sslCertificaten + ";";
                                fileContent += " ssl_certificate_key " +  sslObj.sslCertificateKey + ";";
                            }
                            fileContent += domainFile7;
                            fileContent += domainFile8;
                            fileContent += domainFile9;
                            fileContent += domainFile10;
                            fileContent += domainFile11;
                            fileContent += domainFile12;
                            fileContent += domainFile14;
                            fileContent += domainFile15;
                            fileContent += domainFile16;
                            fileArray.push(fileContent);                            
                        }
                        // loop and save files
                        //fs.writeFileSync(file, data[, options])
                        
                    } else {
                        rtn.message = "No domains found in database";
                        callback(rtn);
                    }
                });
            });
        } else {
            rtn.message = "No server names found in database";
            callback(rtn);
        }
    });
};

