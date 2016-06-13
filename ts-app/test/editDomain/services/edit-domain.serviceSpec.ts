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
import {EditDomainService} from '../../../editDomain/services/edit-domain.service';
describe('EditDomainService', () => {

    let testResponse =
        {
            domainName: "test one",
            listenPort: 8080
        }



    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            EditDomainService
        ];
    });


    it('should get domain', inject([XHRBackend, EditDomainService], (mockBackend, service) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: testResponse
                    }
                    )));
            });

        service.getDomain("123").subscribe((domain: Domain) => {
            expect(domain.domainName).toBe("test one");
            expect(domain.listenPort).toBe(8080);
        });

    }));


    it('should get domain async', injectAsync([XHRBackend, EditDomainService], (mockBackend, service) => {
        return new Promise((pass, fail) => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: testResponse
                        }
                        )));
                });

            service.getDomain("123").subscribe((domain: Domain) => {
                expect(domain.domainName).toBe("test one");
                expect(domain.listenPort).toBe(8080);
                pass();
            });
        });
    }));


    it('should update domain', inject([XHRBackend, EditDomainService], (mockBackend, service) => {
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
        req.domainName = "test";
        service.updateDomain(req).subscribe((res: ServiceResponse) => {
            expect(res.success).toBe(true);
            expect(res.message).toBe("success");
        });

    }));


});


