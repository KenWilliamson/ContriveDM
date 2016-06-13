import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {EditDomainComponent} from '../../editDomain/edit-domain.component';

describe('EditDomainComponent', () => {
    it('is not undefined', () => {
        let comp = new EditDomainComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new EditDomainComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Edit Domain");
        //expect(null).not.toEqual(undefined)
    });
});


