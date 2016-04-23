import {
    describe,
    expect,
    it
} from 'angular2/testing';
import {LogoutComponent} from '../../logout/logout.component';

describe('LogoutComponent', () => {
    it('is not undefined', () => {
        let logoutComp = new LogoutComponent();
        expect(logoutComp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let logoutComp = new LogoutComponent();
        //expect(app).not.toEqual(undefined)
        expect(logoutComp.getTitle()).toEqual("Logout");
        //expect(null).not.toEqual(undefined)
    });
});


