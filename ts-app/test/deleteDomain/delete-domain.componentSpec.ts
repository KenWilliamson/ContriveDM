import {
    describe,
    expect,
    it
} from 'angular2/testing';
import {DeleteDomainComponent} from '../../deleteDomain/delete-domain.component';

describe('DeleteDomainComponent', () => {
    it('is not undefined', () => {
        let comp = new DeleteDomainComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new DeleteDomainComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Delete Domain");
        //expect(null).not.toEqual(undefined)
    });
});


