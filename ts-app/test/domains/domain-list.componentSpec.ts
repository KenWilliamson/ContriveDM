import {
    describe,
    expect,
    it
} from 'angular2/testing';
import {DomainListComponent} from '../../domains/domain-list.component';

describe('DomainListComponent', () => {
    it('is not undefined', () => {
        let comp = new DomainListComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new DomainListComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Domains");
        //expect(null).not.toEqual(undefined)
    });
});


