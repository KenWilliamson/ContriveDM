import {
    describe,
    expect,
    beforeEach,
    it,
    inject,
    injectAsync,
    beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {MockBackend} from 'angular2/http/testing';
import {MockConnection} from 'angular2/src/http/backends/mock_backend';
import {Injector} from 'angular2/core';
import {HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions} from 'angular2/http';
import {LoginService} from '../../../login/services/login.service';

describe('LoginService', () => {

    let testResponse =
        {
            success: true,
            message: "logged in"
        };



    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            LoginService
        ];
    });


    it('should login', inject([XHRBackend, LoginService], (mockBackend, service) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: testResponse
                    }
                    )));
            });
        let req = {};
        req.username = "test";
        req.password = "test";
        service.login(req).subscribe((res: ServiceResponse) => {
            expect(res.success).toBe(true);
            expect(res.message).toBe("logged in");
        });

    }));



    it('should should login async', injectAsync([XHRBackend, LoginService], (mockBackend, service) => {
        return new Promise((pass, fail) => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: testResponse
                        }
                        )));
                });

            service.login().subscribe((res: ServiceResponse) => {
                expect(res.success).toBe(true);
                expect(res.message).toBe("logged in");
                pass();
            });
        });
    }));

});


