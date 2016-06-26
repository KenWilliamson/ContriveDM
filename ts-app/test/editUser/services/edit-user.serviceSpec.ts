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
import {EditUserService} from '../../../editUser/services/edit-user.service';
describe('EditUserService', () => {

    let testResponse =
        {
            "id": "56f6e9104a7cff801736a09f",
            "userName": "Tester",
            "firstName": "Tester",
            "lastName": "Tester"
        }



    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            EditUserService
        ];
    });


    it('should get user', inject([XHRBackend, EditUserService], (mockBackend, service) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: testResponse
                    }
                    )));
            });

        service.getUser("123").subscribe((user: User) => {
            expect(user.userName).toBe("Tester");
            expect(user.firstName).toBe("Tester");
            expect(user.lastName).toBe("Tester");
        });

    }));


    it('should get user async', injectAsync([XHRBackend, EditUserService], (mockBackend, service) => {
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
                expect(user.userName).toBe("Tester");
                expect(user.firstName).toBe("Tester");
                expect(user.lastName).toBe("Tester");
                pass();
            });
        });
    }));


    it('should update user', inject([XHRBackend, EditUserService], (mockBackend, service) => {
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
        req.password = "test";
        service.updateUser(req).subscribe((res: ServiceResponse) => {
            expect(res.success).toBe(true);
            expect(res.message).toBe("success");
        });

    }));


});


