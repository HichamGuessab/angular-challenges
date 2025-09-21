import { IsAuthorizedGuard } from '@angular-challenges/module-to-standalone/admin/shared';
import { provideToken } from '@angular-challenges/module-to-standalone/core/providers';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('@angular-challenges/module-to-standalone/home').then(
        (m) => m.HOME_ROUTES,
      ),
  },
  {
    path: 'admin',
    canMatch: [IsAuthorizedGuard],
    loadChildren: () =>
      import('@angular-challenges/module-to-standalone/admin/feature').then(
        (m) => m.ADMIN_ROUTES,
      ),
  },
  {
    path: 'user',
    providers: [provideToken('user-token')],
    loadChildren: () =>
      import('@angular-challenges/module-to-standalone/user/shell').then(
        (m) => m.USER_SHELL_ROUTES,
      ),
  },
  {
    path: 'forbidden',
    loadChildren: () =>
      import('@angular-challenges/module-to-standalone/forbidden').then(
        (m) => m.FORBIDDEN_ROUTES,
      ),
  },
];
