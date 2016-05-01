import {
    describe,
    expect,
    it,
    inject,
    beforeEachProviders
} from 'angular2/testing';
import {MenuComponent} from '../../menu/menu.component';
import {MenuService} from '../../menu/services/menu-service';
import {Credentials} from '../../business/credentials/credentials';

describe('MenuComponent', () => {

    beforeEachProviders(() => {
        return [
            Credentials,
            MenuService
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
    
    it('should set show', inject([Credentials, MenuService], (creds, ms) => {
        let comp = new MenuComponent(creds, ms);
        creds.setCreds("test", "test");
        comp.ngAfterContentChecked();
        //expect(app).not.toEqual(undefined)
        expect(comp.getShow()).toEqual(true);
        creds.deleteCreds();

    }));
    
    /*
    it('should clear selected menu', () => {
        let comp = new MenuComponent();
        comp.setDomainActive();        
        expect(comp.getDomainActive()).toEqual("color: white;");
        comp.clearSelected();
        //expect(app).not.toEqual(undefined)
        expect(comp.getDomainActive()).toEqual("");
        //expect(null).not.toEqual(undefined)
    });
    */
});


