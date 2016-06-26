import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {DeleteUserComponent} from '../../deleteUser/delete-user.component';

describe('DeleteUserComponent', () => {
    it('is not undefined', () => {
        let comp = new DeleteUserComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new DeleteUserComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Delete User");
        //expect(null).not.toEqual(undefined)
    });
});


