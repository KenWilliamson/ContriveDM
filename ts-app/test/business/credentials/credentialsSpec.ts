import {
    describe,
    expect,
    it
} from '@angular/core/testing';
import {Credentials} from '../../../business/credentials/credentials';
describe('Credentials', () => {
    let creds = new Credentials();
    
    it('is not undefined', () => {        
        expect(creds).not.toEqual(undefined);
        //expect(null).not.toEqual(undefined)

    });

    it('creds should initially not be set', () => {
        var loggedIn =  creds.checkCreds();        
        expect(loggedIn).not.toEqual(true);
    });
    
    it('should be able to set creds', () => {
        creds.setCreds("test", "test");
        var loggedIn =  creds.checkCreds();        
        expect(loggedIn).toEqual(true);
    });
    
    it('should be able to get token', () => {        
        var token =  creds.getToken();        
        expect(token).not.toEqual(null);
    });
    it('should be able to get username', () => {        
        var un =  creds.getUsername();        
        expect(un).toEqual("test");
    });
    it('should be able to delete creds', () => {
        creds.deleteCreds();
        var loggedIn =  creds.checkCreds();        
        expect(loggedIn).toEqual(false);
    });
});


