import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have AppHeader and AppFooter components', () => {
    const headerComponent = fixture.debugElement.query(By.css('app-header'));
    const footerComponent = fixture.debugElement.query(By.css('app-footer'));
    expect(headerComponent).toBeTruthy();
    expect(footerComponent).toBeTruthy();
  });

  it('should toggle button text when calling toggleButton()', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.textContent).toContain('InitialButtonText');
    
    component.toggleButton();
    fixture.detectChanges();
    
    expect(button.nativeElement.textContent).toContain('NewButtonText');
  });

});
