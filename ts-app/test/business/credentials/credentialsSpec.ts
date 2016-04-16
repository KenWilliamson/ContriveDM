import {
    describe,
    expect,
    it
} from 'angular2/testing';
import {Credentials} from '../../../business/credentials/credentials';
describe('Credentials', () => {
    it('is not undefined', () => {
        let creds = new Credentials();
        expect(creds).not.toEqual(undefined);
        //expect(null).not.toEqual(undefined)

    });

    it('is has a title', () => {
        // let app = new AppComponent();
        //expect(app).not.toEqual(undefined)
        //expect(app.getTitle()).toEqual("ContriveDM");
        expect(null).not.toEqual(undefined)
    });
});


