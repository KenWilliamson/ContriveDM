import {
    describe,
    expect,
    it,
    inject,
    beforeEachProviders
} from '@angular/core/testing';
import {MenuService} from '../../../menu/services/menu-service';

describe('MenuService', () => {

    beforeEachProviders(() => {
        return [
            MenuService
        ];
    });



    it('should set clear menu', inject([MenuService], (ms) => {
        ms.setClearMenu();
        //expect(null).not.toEqual(undefined)
        expect(ms.isMenuClear()).toEqual(true);
        ms.removeClearMenu();
        expect(ms.isMenuClear()).toEqual(false);

    }));


});


