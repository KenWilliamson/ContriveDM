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
import {DeleteUserService} from '../../../deleteUser/services/delete-user.service';
describe('DeleteUserService', () => {

    let testResponse =
        {
            "id": "56f6e9104a7cff801736a09f",
            "username": "Tester",
            "firstName": "Tester",
            "lastName": "Tester"
        }



    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            DeleteUserService
        ];
    });


    it('should get user', inject([XHRBackend, DeleteUserService], (mockBackend, service) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: testResponse
                    }
                    )));
            });

        service.getUser("123").subscribe((user: User) => {
            expect(user.username).toBe("Tester");
            expect(user.firstName).toBe("Tester");
        });

    }));


    it('should get user async', injectAsync([XHRBackend, DeleteUserService], (mockBackend, service) => {
        return new Promise((pass, fail) => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: testResponse
                        }
                        )));
                });

            service.getUser("123").subscribe((user: User) => {
                expect(user.username).toBe("Tester");
                expect(user.firstName).toBe("Tester");
                pass();
            });
        });
    }));


    it('should delete user', inject([XHRBackend, DeleteUserService], (mockBackend, service) => {
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


        service.deleteUser("123").subscribe((res: ServiceResponse) => {
            expect(res.success).toBe(true);
            expect(res.message).toBe("success");
        });

    }));


});


