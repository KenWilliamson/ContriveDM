import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {LoginComponent} from '../../login/login.component';

describe('LoginComponent', () => {
    it('is not undefined', () => {
        let loginComp = new LoginComponent();
        expect(loginComp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let loginComp = new LoginComponent();
        //expect(app).not.toEqual(undefined)
        expect(loginComp.getTitle()).toEqual("Login");
        //expect(null).not.toEqual(undefined)
    });
});


