import {
    describe,
    expect,
    it
} from 'angular2/testing';
import {AppComponent} from '../app.component';
describe('AppComponent', () => {
    it('is not undefined', () => {
        let app = new AppComponent();
        expect(app).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let app = new AppComponent();
        //expect(app).not.toEqual(undefined)
        expect(app.getTitle()).toEqual("ContriveDM");
        //expect(null).not.toEqual(undefined)
    });
});


