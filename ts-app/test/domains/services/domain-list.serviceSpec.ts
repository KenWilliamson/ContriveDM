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
import {DomainListService} from '../../../domains/services/domain-list.service';
describe('DomainListService', () => {

    let testResponse = [
        {
            domainName: "test one",
            listenPort: 8080
        },
        {
            domainName: "test two",
            listenPort: 8090
        }
    ];



    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            DomainListService
        ];
    });


    it('should get domains', inject([XHRBackend, DomainListService], (mockBackend, service) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: testResponse
                    }
                    )));
            });

        service.getDomainList().subscribe((domains: Domain[]) => {
            expect(domains.length).toBe(2);
            expect(domains[0].domainName).toBe("test one");
            expect(domains[1].domainName).toBe("test two");
        });

    }));



    it('should get domains async', injectAsync([XHRBackend, DomainListService], (mockBackend, service) => {
        return new Promise((pass, fail) => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: testResponse
                        }
                        )));
                });

            service.getDomainList().subscribe((domains: Domain[]) => {
                expect(domains.length).toBe(2);
                expect(domains[0].domainName).toBe("test one");
                expect(domains[1].domainName).toBe("test two");
                pass();
            });
        });
    }));

});


