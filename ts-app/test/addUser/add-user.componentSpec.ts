import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {AddUserComponent} from '../../addUser/add-user.component';

describe('AddUserComponent', () => {
    it('is not undefined', () => {
        let comp = new AddUserComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new AddUserComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Add User");
        //expect(null).not.toEqual(undefined)
    });
});


