import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedStorageService } from 'src/app/utils/SharedStorage';

import { AccessFormsComponent } from './access-forms.component';

describe('AccessFormsComponent', () => {
  let component: AccessFormsComponent;
  let fixture: ComponentFixture<AccessFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessFormsComponent]
    });
    fixture = TestBed.createComponent(AccessFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    const form = component.form;
    expect(form.get('emailAddress').value).toBe('');
    expect(form.get('password').value).toBe('');
    expect(form.get('repeatPassword').value).toBe('');
  });
  

  it('should require email address and password', () => {
    const form = component.form;
    form.setValue({ emailAddress: '', password: '' });
    expect(form.valid).toBeFalsy();
    expect(form.get('emailAddress').hasError('required')).toBeTruthy();
    expect(form.get('password').hasError('required')).toBeTruthy();
  });
  
  it('should validate email address format', () => {
    const form = component.form;
    form.setValue({ emailAddress: 'invalid-email', password: 'password' });
    expect(form.valid).toBeFalsy();
    expect(form.get('emailAddress').hasError('email')).toBeTruthy();
  });
  
  it('should require repeatPassword to match password', () => {
    const form = component.form;
    form.setValue({ emailAddress: 'example@example.com', password: 'password', repeatPassword: 'different' });
    expect(form.valid).toBeFalsy();
    expect(form.get('repeatPassword').hasError('mustMatch')).toBeTruthy();
  });

  it('should toggle between login and signUp', () => {
    expect(component.loginOrSignup).toEqual('login');
    component.toggleForms('signUp');
    expect(component.loginOrSignup).toEqual('signUp');
    component.toggleForms('login');
    expect(component.loginOrSignup).toEqual('login');
  });

  it('should login with correct credentials', () => {
    const sharedStorageService = TestBed.inject(SharedStorageService);
    spyOn(sharedStorageService, 'getItem').and.returnValue({ email: 'example@example.com', password: 'password' });
    component.form.setValue({ emailAddress: 'example@example.com', password: 'password' });
    spyOn(console, 'log'); // Spy on console.log
    component.login();
    expect(console.log).toHaveBeenCalledWith('login', { email: 'example@example.com', password: 'password' });
  });
  
  it('should handle incorrect login credentials', () => {
    const sharedStorageService = TestBed.inject(SharedStorageService);
    spyOn(sharedStorageService, 'getItem').and.returnValue({ email: 'example@example.com', password: 'password' });
    component.form.setValue({ emailAddress: 'invalid@example.com', password: 'incorrect' });
    spyOn(console, 'log');
    component.login();
    expect(console.log).toHaveBeenCalledWith('error de credenciales');
  });
  
  it('should sign up and set userRegistrationValues', () => {
    const sharedStorageService = TestBed.inject(SharedStorageService);
    spyOn(sharedStorageService, 'setItem');
    component.form.setValue({ emailAddress: 'new@example.com', password: 'newpassword' });
    component.signUp();
    expect(sharedStorageService.setItem).toHaveBeenCalledWith('userRegistrationValues', {
      email: 'new@example.com',
      password: 'newpassword',
    });
  });
  
  
});


