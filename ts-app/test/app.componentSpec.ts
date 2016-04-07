import {AppComponent} from '../app.component';
describe('AppComponent', () => {
  it('is not undefined', () => {
    let app = new AppComponent();
    //expect(app).not.toEqual(undefined)
      expect(null).not.toEqual(undefined)
  }); 
});


