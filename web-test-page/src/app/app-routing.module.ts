import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    // canActivate: myEjemploGUARD,
  },
  {
    path: 'access-forms',
    loadChildren: () =>
      import('./pages/access-forms/access-forms.module').then(
        (n) => n.AccessFormsModule
      ),
  },
  {
    path: 'private-page',
    loadChildren: () =>
      import('./pages/private-page/private-page.module').then(
        (x) => x.PrivatePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
