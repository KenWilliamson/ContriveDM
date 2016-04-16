import {
    describe,
    expect,
    it
} from 'angular2/testing';
import {Cookie} from '../../utilities/cookies';
describe('Cookie', () => {
    it('is not undefined', () => {
        let cookie = new Cookie();
        expect(cookie).not.toEqual(undefined);
        //expect(null).not.toEqual(undefined)
    });

    it('can set and get a cookie', () => {
        Cookie.setCookie("specTest", "test", 2);
        var c = Cookie.getCookie("specTest");
        //console.log("cookie: " + c);        
        expect(c).not.toEqual(undefined);       
        expect(c).not.toEqual(null);
        expect(c).toEqual("test");
    });
    it('to delete a cookie', () => {
        Cookie.deleteCookie("specTest");
        var c = Cookie.getCookie("specTest");
        //console.log("cookie: " + c);
        expect(c).toEqual(null);       
    });
});


