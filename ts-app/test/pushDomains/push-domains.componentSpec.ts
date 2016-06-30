import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {PushDomainsComponent} from '../../pushDomains/push-domains.component';

describe('PushDomainsComponent', () => {
    it('is not undefined', () => {
        let comp = new PushDomainsComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new PushDomainsComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Push Domains");
        //expect(null).not.toEqual(undefined)
    });
});


