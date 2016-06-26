import {
    describe,
    expect,
    beforeEach,
    it,
    inject,
    injectAsync,
    beforeEachProviders
} from '@angular/core/testing';
import {provide} from '@angular/core';
import {MockBackend} from '@angular/http/testing';
import {MockConnection} from '@angular/http/testing';
import {Injector} from '@angular/core';
import {HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions} from '@angular/http';
import {AddUserService} from '../../../addUser/services/add-user.service';
describe('AddUserService', () => {

    
    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            AddUserService
        ];
    });



    it('should add user', inject([XHRBackend, AddUserService], (mockBackend, service) => {
        let testRes =
            {
                success: true,
                message: "success"
            };

        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: testRes
                    }
                    )));
            });
        let req = {};
        req.username = "test";
        service.addUser(req).subscribe((res: ServiceResponse) => {
            expect(res.success).toBe(true);
            expect(res.message).toBe("success");
        });

    }));


});


