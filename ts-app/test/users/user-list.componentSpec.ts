import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {UserListComponent} from '../../users/user-list.component';

describe('UserListComponent', () => {
    it('is not undefined', () => {
        let comp = new UserListComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new UserListComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Users");
        //expect(null).not.toEqual(undefined)
    });
});


