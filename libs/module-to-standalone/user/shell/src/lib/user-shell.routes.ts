import { Routes } from '@angular/router';
import { UserShellComponent } from './user-shell.component';

export const USER_SHELL_ROUTES: Routes = [
  {
    path: '',
    component: UserShellComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('@angular-challenges/module-to-standalone/user/home').then(
            (m) => m.HOME_ROUTES,
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('@angular-challenges/module-to-standalone/user/contact').then(
            (m) => m.CONTACT_FEATURES_ROUTES,
          ),
      },
    ],
  },
];
