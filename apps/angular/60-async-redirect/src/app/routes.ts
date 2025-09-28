import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { map } from 'rxjs';
import { AdminPage } from './admin-page';
import { isAdminActivate } from './admin-page.guard';
import { App } from './app';
import { Dashboard } from './dashboard';
import { ProfilePage } from './profile-page';
import { UserPage } from './user-page';
import { UserProfileService } from './user-profile.service';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: '', pathMatch: 'full', component: Dashboard },
      { path: 'profile', component: ProfilePage },
      // I don't understand the goal, we should use canMatch and a guard on the Admin route that redirect to another route,
      // why use redirectTo ?
      {
        path: 'userPage',
        redirectTo: () => {
          return inject(UserProfileService)
            .getProfile()
            .pipe(map((role) => (role === 'admin' ? 'admin' : 'user')));
        },
      },
      { path: 'admin', canActivate: [isAdminActivate], component: AdminPage },
      { path: 'user', component: UserPage },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
