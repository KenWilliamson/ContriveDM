import {
    describe,
    expect,
    it,
    inject,
    beforeEachProviders
} from 'angular2/testing';
import {MenuComponent} from '../../menu/menu.component';
import {Credentials} from '../../business/credentials/credentials';

describe('MenuComponent', () => {

    beforeEachProviders(() => {
        return [
            Credentials
        ];
    });

    it('is not undefined', () => {
        let comp = new MenuComponent();
        expect(comp).not.toEqual(undefined);

        //expect(null).not.toEqual(undefined);

    });

    it('is has a title', () => {
        let comp = new MenuComponent();
        //expect(app).not.toEqual(undefined)
        expect(comp.getTitle()).toEqual("Menu");
        //expect(null).not.toEqual(undefined)
    });

    it('should not set show', () => {
        let comp = new MenuComponent();
        comp.setShow(true);
        //expect(app).not.toEqual(undefined)
        expect(comp.getShow()).toEqual(true);
        //expect(null).not.toEqual(undefined)
    });

    it('should set show', inject([Credentials], (creds) => {
        let comp = new MenuComponent(creds);
        creds.setCreds("test", "test");
        comp.ngAfterContentChecked();
        //expect(app).not.toEqual(undefined)
        expect(comp.getShow()).toEqual(true);
        creds.deleteCreds();

    }));

});


