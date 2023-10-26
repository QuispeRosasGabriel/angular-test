import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedStorageService } from 'src/app/utils/SharedStorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isActive = false;
  public isLoggedIn = false;

  constructor(
    private router: Router,
    private sharedStorageService: SharedStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn =
      (this.sharedStorageService.getItem('userRegistrationValues')
        .isLoggedIn as boolean) &&
      (this.sharedStorageService.getItem('userRegistrationValues')
        .role as string) === 'admin';
  }

  public goToAccessForm(val: string): void {
    this.router.navigate(['/access-forms']);
  }

  public toggleNav() {
    this.isActive = !this.isActive;
  }
}
