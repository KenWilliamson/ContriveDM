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
import {PushDomainsService} from '../../../pushDomains/services/push-domains.service';
describe('PushDomainsService', () => {

   

    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, { useClass: MockBackend }),
            PushDomainsService
        ];
    });





    it('should upsh domains', inject([XHRBackend, PushDomainsService], (mockBackend, service) => {
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
        
        
        service.pushDomains().subscribe((res: ServiceResponse) => {
            expect(res.success).toBe(true);
            expect(res.message).toBe("success");
        });

    }));


});


