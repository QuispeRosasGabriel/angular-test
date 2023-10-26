import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedStorageService } from 'src/app/utils/SharedStorage';

@Component({
  selector: 'app-access-forms',
  templateUrl: './access-forms.component.html',
  styleUrls: ['./access-forms.component.scss'],
})
export class AccessFormsComponent<T> implements OnDestroy, OnInit {
  public form: FormGroup;
  public loginOrSignup: string;
  public localStorageData: T;
  public subscription: Subscription;

  constructor(
    private sharedStorageService: SharedStorageService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.localStorageData = null as unknown as T;
    this.subscription = this.sharedStorageService
      .watchStorage()
      .subscribe((data) => {
        this.localStorageData = data;
      });
    this.loginOrSignup = 'login';
    this.createForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((v) => console.log(v));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email = control.value;

      if (!email) {
        return null;
      }

      const regex = /(\+user|\+admin)@/;
      if (!regex.test(email)) {
        return { invalidEmail: true };
      }

      return null;
    };
  }

  private getRole(email: string) {
    const regex = /(\+(.*?)@)/;
    const match = email.match(regex);
    if (match) {
      return match[2];
    }

    return null;
  }

  public onSubmit() {
    if (this.loginOrSignup === 'login') {
      this.login();
    } else {
      this.signUp();
    }
  }

  public toggleForms(loginOrSignup: 'login' | 'signUp'): void {
    this.loginOrSignup = loginOrSignup;
  }

  private createForm() {
    this.form = this.fb.group({
      emailAddress: ['', [Validators.email, this.customEmailValidator()]],
      password: [''],
      repeatPassword: [''],
    });
  }

  private login() {
    const { email, password } = this.sharedStorageService.getItem(
      'userRegistrationValues'
    );
    if (
      email === this.form.get('emailAddress')?.value &&
      password === this.form.get('password')?.value
    ) {
      // TODO Add sweetalert to show messages
      console.log('success login');
      this.sharedStorageService?.setItem('isLoggedIn', true);
      this.router.navigate(['']);
    } else {
      // TODO Add sweetalert to show messages
      console.error('error, invalid credentials');
      return;
    }
  }

  private signUp() {
    const emailVal = this.form.get('emailAddress')?.value;
    const passwordVal = this.form.get('password')?.value;
    if (emailVal.trim() && passwordVal.trim()) {
      this.sharedStorageService?.setItem('userRegistrationValues', {
        email: emailVal,
        password: passwordVal,
        isLoggedIn: true,
        role: this.getRole(emailVal),
      });
      this.router.navigate(['']);
    }
  }
}
