var domainService = require("../services/domainService");
var userService = require("../services/userService");

exports.initialize = function(app){
    app.post('/rs/domain/list', domainService.list);
    app.post('/rs/domain', domainService.create);
    app.put('/rs/domain', domainService.update);
    app.get('/rs/domain/:id', domainService.get);
    app.delete('/rs/domain/:id', domainService.delete);
};

