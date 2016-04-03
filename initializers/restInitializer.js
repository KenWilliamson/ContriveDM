var domainService = require("../services/domainService");
var userService = require("../services/userService");

exports.initialize = function(app){
    app.post('/rs/domain/list', domainService.list);
    app.post('/rs/domain', domainService.create);
    app.put('/rs/domain', domainService.update);
    app.get('/rs/domain/:id', domainService.get);
    app.delete('/rs/domain/:id', domainService.delete);
    
    app.post('/rs/user/list', userService.list);
    app.post('/rs/user', userService.create);
    app.put('/rs/user', userService.update);
    app.get('/rs/user/:id', userService.get);
    app.delete('/rs/user/:id', userService.delete);
};

