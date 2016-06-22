import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {AddDomainComponent} from '../../addDomain/add-domain.component';

describe('AddDomainComponent', () => {
    it('is not undefined', () => {
        let comp = new AddDomainComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new AddDomainComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Add Domain");
        //expect(null).not.toEqual(undefined)
    });
});


