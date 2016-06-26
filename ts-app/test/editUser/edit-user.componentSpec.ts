import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {EditUserComponent} from '../../editUser/edit-user.component';

describe('EditUserComponent', () => {
    it('is not undefined', () => {
        let comp = new EditUserComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new EditUserComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Edit User");
        //expect(null).not.toEqual(undefined)
    });
});


