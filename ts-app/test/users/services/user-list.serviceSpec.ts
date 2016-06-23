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
import {UserListService} from '../../../users/services/user-list.service';
describe('UserListService', () => {

    let testResponse = [
        {
            "id": "56f6e9104a7cff801736a09f",
            "userName": "Tester",
            "firstName": "Tester",
            "lastName": "Tester"
        },
        {
            "id": "555kghdfhfhf",
            "userName": "Tester2",
            "firstName": "Tester2",
            "lastName": "Tester2"
        }
    ];



    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            UserListService
        ];
    });


    it('should get users', inject([XHRBackend, UserListService], (mockBackend, service) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: testResponse
                    }
                    )));
            });

        service.getUserList().subscribe((users: User[]) => {
            expect(users.length).toBe(2);
            expect(users[0].userName).toBe("Tester");
            expect(users[1].userName).toBe("Tester2");
        });

    }));



    it('should get users async', injectAsync([XHRBackend, UserListService], (mockBackend, service) => {
        return new Promise((pass, fail) => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: testResponse
                        }
                        )));
                });

            service.getUserList().subscribe((users: User[]) => {
                expect(users.length).toBe(2);
                expect(users[0].userName).toBe("Tester");
                expect(users[1].userName).toBe("Tester2");
                pass();
            });
        });
    }));

});


